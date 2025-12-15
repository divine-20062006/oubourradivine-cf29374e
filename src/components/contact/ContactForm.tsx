import { Send } from "lucide-react";

const ContactForm = () => {
  return (
    <form 
      action="https://formsubmit.co/oubourradivine27@gmail.com" 
      method="POST"
      className="space-y-6"
    >
      {/* Configuration FormSubmit */}
      <input type="hidden" name="_subject" value="Nouveau message via Portfolio" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="https://17601b8d-f9a6-43f2-a024-4b075e84d2eb.lovableproject.com/contact?success=true" />
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm text-slate-400 font-medium">
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            name="name"
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
            name="email"
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
          name="message"
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600/50 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
          placeholder="Votre message..."
          required
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-medium px-6 py-3.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;
