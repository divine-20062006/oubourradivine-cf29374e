
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const useContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs du formulaire.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Préparer les données pour l'envoi
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);
      
      // Ajouter des détails explicites d'expéditeur pour une meilleure identification
      const senderInfo = `Nouveau message de ${formData.name} (${formData.email}) via Portfolio`;
      formDataToSend.append("_subject", senderInfo);
      formDataToSend.append("_replyto", formData.email);
      
      // Configuration FormSubmit
      formDataToSend.append("_captcha", "false"); 
      formDataToSend.append("_template", "table");
      formDataToSend.append("_autoresponse", "Merci pour votre message. Je vous répondrai dès que possible.");
      
      // Ajouter le contenu du message avec des informations claires
      const enhancedMessage = `
Expéditeur: ${formData.name}
Email: ${formData.email}
---
${formData.message}
`;
      formDataToSend.append("message", enhancedMessage);
      
      // Utilisez l'URL de FormSubmit avec le mode ajax pour obtenir une réponse JSON
      const response = await fetch("https://formsubmit.co/ajax/oubourra-d@saint-louis29.net", {
        method: "POST",
        body: formDataToSend,
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Si la réponse est OK, c'est un succès même si le message contient "The form was submitted successfully"
        toast({
          title: "Message envoyé !",
          description: "Votre message a été envoyé avec succès. Je vous répondrai dès que possible.",
        });
        
        // Réinitialiser le formulaire
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        throw new Error(data.message || "Échec de l'envoi du formulaire");
      }
    } catch (error) {
      // Ne pas traiter comme une erreur si le message indique que le formulaire a été soumis avec succès
      if (error instanceof Error && error.message.includes("The form was submitted successfully")) {
        toast({
          title: "Message envoyé !",
          description: "Votre message a été envoyé avec succès. Je vous répondrai dès que possible.",
        });
        
        // Réinitialiser le formulaire
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        toast({
          title: "Erreur",
          description: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",
          variant: "destructive"
        });
        console.error("Erreur d'envoi du formulaire:", error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    handleChange,
    handleSubmit
  };
};
