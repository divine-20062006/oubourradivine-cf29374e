
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Paperclip, X, FileText } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [formData, setFormData] = useState({
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Vérifier la taille totale des fichiers (limite à 5MB)
      const totalSize = [...attachments, ...Array.from(files)].reduce(
        (total, file) => total + file.size, 0
      );
      
      if (totalSize > 5 * 1024 * 1024) {
        toast({
          title: "Fichiers trop volumineux",
          description: "La taille totale des pièces jointes ne doit pas dépasser 5MB",
          variant: "destructive"
        });
        return;
      }
      
      // Limiter à 3 fichiers maximum
      if (attachments.length + files.length > 3) {
        toast({
          title: "Trop de fichiers",
          description: "Vous ne pouvez pas attacher plus de 3 fichiers",
          variant: "destructive"
        });
        return;
      }
      
      setAttachments(prev => [...prev, ...Array.from(files)]);
    }
    
    // Réinitialiser l'input pour permettre de sélectionner le même fichier plusieurs fois
    e.target.value = '';
  };

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (sizeInBytes: number): string => {
    if (sizeInBytes < 1024) {
      return `${sizeInBytes} B`;
    } else if (sizeInBytes < 1024 * 1024) {
      return `${(sizeInBytes / 1024).toFixed(1)} KB`;
    } else {
      return `${(sizeInBytes / (1024 * 1024)).toFixed(1)} MB`;
    }
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
      formDataToSend.append("_subject", `Nouveau message de ${formData.name} via Portfolio`);
      formDataToSend.append("_replyto", formData.email);
      formDataToSend.append("_autoresponse", "Merci pour votre message. Je vous répondrai dès que possible.");
      
      // Ajouter les pièces jointes
      attachments.forEach((file, index) => {
        formDataToSend.append(`attachment${index + 1}`, file);
      });
      
      // Utiliser FormSubmit pour envoyer l'email avec pièces jointes
      const response = await fetch("https://formsubmit.co/oubourra-d@saint-louis29.net", {
        method: "POST",
        body: formDataToSend,
      });
      
      if (response.ok) {
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
        throw new Error("Échec de l'envoi du formulaire");
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

  return (
    <section id="contact">
      <div className="section-container">
        <span className="title-badge">Contact</span>
        <h2 className="section-title text-[#0AFFFF]">Me Contacter</h2>
        
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#0AFFFF]">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#0AFFFF]/50 bg-[#1A1F2C]/80 text-white focus:outline-none focus:ring-2 focus:ring-[#0AFFFF]/50 focus:border-[#0AFFFF] transition-colors"
                placeholder="Votre nom"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#0AFFFF]">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#0AFFFF]/50 bg-[#1A1F2C]/80 text-white focus:outline-none focus:ring-2 focus:ring-[#0AFFFF]/50 focus:border-[#0AFFFF] transition-colors"
                placeholder="votre@email.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#0AFFFF]">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#0AFFFF]/50 bg-[#1A1F2C]/80 text-white focus:outline-none focus:ring-2 focus:ring-[#0AFFFF]/50 focus:border-[#0AFFFF] transition-colors"
                placeholder="Votre message..."
                required
              />
            </div>
            
            {/* Section pièces jointes */}
            <div>
              <label htmlFor="attachments" className="block text-sm font-medium mb-2 text-[#0AFFFF]">
                Pièces jointes (3 max, 5MB total)
              </label>
              <div className="flex items-center gap-2">
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex items-center gap-2 px-4 py-2 border border-[#0AFFFF]/50 bg-[#1A1F2C]/80 rounded-lg hover:bg-[#0AFFFF]/10 transition-colors"
                >
                  <Paperclip className="h-4 w-4 text-[#0AFFFF]" />
                  <span className="text-sm text-white">Ajouter un fichier</span>
                </label>
                <input
                  type="file"
                  id="file-upload"
                  onChange={handleFileChange}
                  className="hidden"
                  multiple
                />
              </div>
              
              {/* Liste des fichiers attachés avec meilleure présentation */}
              {attachments.length > 0 && (
                <div className="mt-3 space-y-2">
                  {attachments.map((file, index) => (
                    <div key={index} className="flex items-center justify-between px-3 py-2 bg-[#1A1F2C] rounded-lg border border-[#0AFFFF]/30">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-[#0AFFFF]" />
                        <span className="text-sm text-white truncate max-w-[200px]">{file.name}</span>
                        <span className="text-xs text-gray-400">({formatFileSize(file.size)})</span>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeAttachment(index)}
                        className="h-6 w-6 p-0 text-gray-400 hover:text-white hover:bg-transparent"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#00FF41] text-[#1A1F2C] font-bold px-8 py-3 rounded-lg hover:bg-[#00FF41]/90 transition-colors shadow-md hover:shadow-[#00FF41]/20 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
