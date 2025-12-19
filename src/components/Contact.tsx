import ContactForm from "./contact/ContactForm";
import { Phone, Linkedin, Mail } from "lucide-react";
import contactBackground from "@/assets/contact-background.jpeg";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen relative bg-slate-900"
      style={{
        backgroundImage: `url(${contactBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay pour lisibilité */}
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            Contact
          </h1>
          <div className="w-16 h-0.5 bg-cyan-500 mx-auto mb-6" />
          <p className="text-slate-400 text-lg max-w-lg mx-auto font-light">
            Disponible pour discuter de vos projets et opportunités
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info - Left side */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-medium text-white mb-6">
                Coordonnées
              </h2>
              
              <div className="space-y-5">
                <a 
                  href="tel:0780842417"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <Phone className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">Téléphone</p>
                    <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">07 80 84 24 17</p>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/divine-oubourra-b871a4338/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">LinkedIn</p>
                    <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">Divine Oubourra</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-slate-300 font-medium">Via le formulaire</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability indicator */}
            <div className="pt-6 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-slate-400 text-sm">Disponible pour un stage</span>
              </div>
            </div>
          </div>

          {/* Contact Form - Right side */}
          <div className="lg:col-span-3">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-xl font-medium text-white mb-6">
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
