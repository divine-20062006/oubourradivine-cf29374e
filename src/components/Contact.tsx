
import ContactForm from "./contact/ContactForm";
import { Phone, Linkedin, Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-[#0F1419] via-[#1A1F2C] to-[#0F1419]">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="title-badge">Contact</span>
          <h2 className="section-title text-[#0AFFFF] text-center mb-6">Me Contacter</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Prêt à collaborer sur votre prochain projet ? Contactez-moi et donnons vie à vos idées ensemble.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-[#0AFFFF]/20">
                  <MessageSquare className="w-6 h-6 text-[#0AFFFF]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Restons en Contact</h3>
              </div>
              
              <p className="text-white/70 mb-8 leading-relaxed">
                Je suis toujours ouvert aux nouvelles opportunités et collaborations. 
                N'hésitez pas à me contacter pour discuter de vos projets.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group hover:bg-[#0AFFFF]/10 p-4 rounded-lg transition-colors">
                  <div className="p-3 rounded-full bg-[#00FF41]/20 group-hover:bg-[#00FF41]/30 transition-colors">
                    <Phone className="w-5 h-5 text-[#00FF41]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Téléphone</p>
                    <p className="text-white font-medium">0780842417</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group hover:bg-[#0AFFFF]/10 p-4 rounded-lg transition-colors">
                  <div className="p-3 rounded-full bg-[#0AFFFF]/20 group-hover:bg-[#0AFFFF]/30 transition-colors">
                    <Linkedin className="w-5 h-5 text-[#0AFFFF]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">LinkedIn</p>
                    <p className="text-white font-medium">Divine Oubourra</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group hover:bg-[#0AFFFF]/10 p-4 rounded-lg transition-colors">
                  <div className="p-3 rounded-full bg-[#FF003C]/20 group-hover:bg-[#FF003C]/30 transition-colors">
                    <Mail className="w-5 h-5 text-[#FF003C]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <p className="text-white font-medium">Via le formulaire ci-contre</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-6">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00FF41]/20 text-[#00FF41] text-sm font-medium mb-2">
                  <div className="w-2 h-2 bg-[#00FF41] rounded-full animate-pulse"></div>
                  Disponible pour de nouveaux projets
                </div>
                <p className="text-white/60 text-sm">Temps de réponse moyen : 24h</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Envoyez-moi un message</h3>
              <p className="text-white/60">Remplissez le formulaire et je vous répondrai rapidement.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
