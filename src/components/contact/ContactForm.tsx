
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
    <form onSubmit={handleSubmit} className="space-y-5 animate-fade-up">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-semibold text-gray-200">
          Nom complet <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600/50 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
          placeholder="Jean Dupont"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-200">
          Adresse email <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600/50 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
          placeholder="jean.dupont@exemple.fr"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-semibold text-gray-200">
          Votre message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600/50 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none"
          placeholder="Écrivez votre message ici..."
          required
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Envoi en cours...
          </span>
        ) : (
          "Envoyer le message"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
