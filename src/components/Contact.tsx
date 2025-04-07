
import ContactForm from "./contact/ContactForm";

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-container">
        <span className="title-badge">Contact</span>
        <h2 className="section-title text-[#0AFFFF] text-center">Me Contacter</h2>
        
        <div className="max-w-xl mx-auto">
          <p className="text-white/80 text-center mb-8">
            Besoin d'informations supplémentaires ou d'une collaboration ? 
            N'hésitez pas à me contacter via ce formulaire. 
            Je vous répondrai dans les plus brefs délais.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
