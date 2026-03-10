import { Send, ShieldCheck } from "lucide-react";
import { useContactForm } from "./useContactForm";

const ContactForm = () => {
  const { 
    formData, 
    isSubmitting,
    captchaQuestion,
    handleChange, 
    handleSubmit
  } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm text-slate-400 font-medium">
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600/50 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
            placeholder="Jean Dupont"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm text-slate-400 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600/50 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
            placeholder="jean@exemple.fr"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm text-slate-400 font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600/50 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
          placeholder="Votre message..."
          required
        />
      </div>

      {/* CAPTCHA */}
      <div className="space-y-2">
        <label htmlFor="captcha" className="flex items-center gap-2 text-sm text-slate-400 font-medium">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          Vérification anti-spam : {captchaQuestion}
        </label>
        <input
          type="text"
          id="captcha"
          value={formData.captcha}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600/50 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
          placeholder="Votre réponse"
          required
          autoComplete="off"
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-medium px-6 py-3.5 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Envoi en cours...
          </span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Envoyer
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
