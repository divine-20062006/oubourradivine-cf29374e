
import ContactForm from "./contact/ContactForm";

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-container">
        <span className="title-badge">Contact</span>
        <h2 className="section-title text-[#0AFFFF] text-center">Me Contacter</h2>
        
        <div className="max-w-xl mx-auto">
          <p className="text-white text-center mb-8">
            Besoin d'informations supplémentaires ou d'une collaboration ? 
            N'hésitez pas à me contacter via ce formulaire. 
            Je vous répondrai dans les plus brefs délais.
          </p>
          
          <div className="bg-[#1A1F2C]/90 border border-[#0AFFFF]/30 rounded-lg p-6 mb-8">
            <h3 className="text-[#0AFFFF] font-semibold mb-4 text-center">Mes coordonnées</h3>
            <div className="space-y-3 text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="text-[#00FF41]">📞</span>
                <span className="text-white">0780842417</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-[#0AFFFF]">💼</span>
                <span className="text-white">LinkedIn: Divine Oubourra</span>
              </div>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
