
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { formatFileSize } from "./AttachmentInput";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const useContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);
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
    
    // Afficher les détails des pièces jointes dans la console
    if (attachments.length > 0) {
      console.log("Pièces jointes à envoyer:", attachments.map(file => ({
        nom: file.name,
        taille: formatFileSize(file.size),
        type: file.type
      })));
    }
    
    try {
      // Préparer les données pour l'envoi
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);
      
      // Ajouter des champs spécifiques à FormSubmit pour une meilleure configuration
      formDataToSend.append("_subject", `Nouveau message de ${formData.name} via Portfolio`);
      formDataToSend.append("_replyto", formData.email);
      formDataToSend.append("_captcha", "false"); // Désactiver le captcha pour les tests
      formDataToSend.append("_template", "table"); // Utiliser le template table pour un meilleur formatage
      formDataToSend.append("_autoresponse", "Merci pour votre message. Je vous répondrai dès que possible.");
      
      // Ajouter les pièces jointes
      attachments.forEach((file, index) => {
        formDataToSend.append(`attachment${index + 1}`, file);
      });
      
      // Utilisez l'URL correcte de FormSubmit
      // Remplacez l'email par votre email réel (celui que vous avez activé sur FormSubmit)
      const response = await fetch("https://formsubmit.co/ajax/oubourra-d@saint-louis29.net", {
        method: "POST",
        body: formDataToSend,
      });
      
      const data = await response.json();
      
      if (response.ok && data.success === true) {
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
        setAttachments([]);
      } else {
        throw new Error(data.message || "Échec de l'envoi du formulaire");
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive"
      });
      console.error("Erreur d'envoi du formulaire:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    attachments,
    isSubmitting,
    handleChange,
    handleSubmit,
    setAttachments
  };
};
