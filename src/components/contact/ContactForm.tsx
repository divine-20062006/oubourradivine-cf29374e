
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useContactForm } from "./useContactForm";

const ContactForm = () => {
  const { 
    formData, 
    isSubmitting, 
    handleChange, 
    handleSubmit
  } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#0AFFFF]">
          Nom complet <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-[#0AFFFF]/50 bg-[#1A1F2C]/80 text-white focus:outline-none focus:ring-2 focus:ring-[#0AFFFF]/50 focus:border-[#0AFFFF] transition-colors"
          placeholder="Votre nom"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#0AFFFF]">
          Email <span className="text-red-400">*</span>
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
          Message <span className="text-red-400">*</span>
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
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#00FF41] text-[#1A1F2C] font-bold px-8 py-3 rounded-lg hover:bg-[#00FF41]/90 transition-colors shadow-md hover:shadow-[#00FF41]/20 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer"}
      </button>

      {/* Note informative pour FormSubmit */}
      <p className="text-xs text-white/60 text-center mt-4">
        Utilisant FormSubmit pour la gestion des emails. Lors de votre premier envoi,
        confirmez l'activation du service via l'email qu'ils vous enverront.
      </p>
    </form>
  );
};

export default ContactForm;
