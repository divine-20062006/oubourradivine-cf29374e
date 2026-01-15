import ContactForm from "./contact/ContactForm";
import { Phone, Linkedin, Mail, Github } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen relative py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-3 sm:mb-4 tracking-tight">
            Contact
          </h1>
          <div className="w-12 sm:w-16 h-0.5 bg-cyan-500 mx-auto mb-4 sm:mb-6" />
          <p className="text-slate-400 text-base sm:text-lg max-w-lg mx-auto font-light px-4">
            Disponible pour discuter de vos projets et opportunités
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Contact Info - Left side */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-lg sm:text-xl font-medium text-white mb-4 sm:mb-6">
                Coordonnées
              </h2>
              
              <div className="space-y-4 sm:space-y-5">
                <a 
                  href="tel:0780842417"
                  className="flex items-center gap-3 sm:gap-4 group"
                >
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors flex-shrink-0">
                    <Phone className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">Téléphone</p>
                    <p className="text-white font-medium text-sm sm:text-base group-hover:text-cyan-400 transition-colors">07 80 84 24 17</p>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/divine-oubourra-b871a4338/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 group"
                >
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors flex-shrink-0">
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">LinkedIn</p>
                    <p className="text-white font-medium text-sm sm:text-base group-hover:text-cyan-400 transition-colors">Divine Oubourra</p>
                  </div>
                </a>

                <a 
                  href="https://github.com/divine-20062006" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 group"
                >
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors flex-shrink-0">
                    <Github className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">GitHub</p>
                    <p className="text-white font-medium text-sm sm:text-base group-hover:text-cyan-400 transition-colors">divine-20062006</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-slate-300 font-medium text-sm sm:text-base">Via le formulaire</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability indicator */}
            <div className="pt-4 sm:pt-6 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-slate-400 text-xs sm:text-sm">Disponible pour une alternance</span>
              </div>
            </div>
          </div>

          {/* Contact Form - Right side */}
          <div className="lg:col-span-3">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-medium text-white mb-4 sm:mb-6">
                Envoyer un message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
