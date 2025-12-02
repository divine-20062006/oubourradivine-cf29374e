
import ContactForm from "./contact/ContactForm";
import { Phone, Linkedin, Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-[#0F1419] via-[#1A1F2C] to-[#0F1419]">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-white text-center mb-4">Me Contacter</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            N'hésitez pas à me contacter pour discuter de vos projets ou pour toute opportunité professionnelle.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-card rounded-xl p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Coordonnées</h3>
                <p className="text-gray-300 leading-relaxed">
                  Disponible pour échanger sur vos projets et opportunités professionnelles.
                </p>
              </div>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-3 rounded-full bg-blue-500/20">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Téléphone</p>
                    <p className="text-white font-semibold text-lg">07 80 84 24 17</p>
                  </div>
                </div>
                
                <a 
                  href="https://www.linkedin.com/in/divine-oubourra-b871a4338/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
                >
                  <div className="p-3 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">LinkedIn</p>
                    <p className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors">Divine Oubourra</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5">
                  <div className="p-3 rounded-full bg-blue-500/20">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Email</p>
                    <p className="text-white font-semibold">Utilisez le formulaire →</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card rounded-xl p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Envoyez un message</h3>
              <p className="text-gray-300">Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
