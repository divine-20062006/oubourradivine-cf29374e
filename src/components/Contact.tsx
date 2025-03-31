
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      const response = await fetch("https://formsubmit.co/oubourra-d@saint-louis29.net", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json"
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nouveau message de ${formData.name} - Portfolio`
        })
      });
      
      if (response.ok) {
        toast({
          title: "Message envoyé !",
          description: "Votre message a été envoyé avec succès. Merci de m'avoir contacté.",
        });
        
        // Réinitialiser le formulaire
        setFormData({
          name: "",
          email: "",
          message: ""
        });
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
              />
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
