
import ContactForm from "./contact/ContactForm";

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-container">
        <span className="title-badge">Contact</span>
        <h2 className="section-title text-[#0AFFFF]">Me Contacter</h2>
        
        <div className="max-w-xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
