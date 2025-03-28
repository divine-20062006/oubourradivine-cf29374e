
const Contact = () => {
  return (
    <section id="contact">
      <div className="section-container">
        <span className="title-badge">Contact</span>
        <h2 className="section-title text-[#0AFFFF]">Me Contacter</h2>
        
        <div className="max-w-xl mx-auto">
          <form className="space-y-6 animate-fade-up">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#0AFFFF]">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-[#0AFFFF]/50 bg-[#1A1F2C]/80 text-white focus:outline-none focus:ring-2 focus:ring-[#0AFFFF]/50 focus:border-[#0AFFFF] transition-colors"
                placeholder="Votre nom"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#0AFFFF]">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-[#0AFFFF]/50 bg-[#1A1F2C]/80 text-white focus:outline-none focus:ring-2 focus:ring-[#0AFFFF]/50 focus:border-[#0AFFFF] transition-colors"
                placeholder="votre@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#0AFFFF]">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-[#0AFFFF]/50 bg-[#1A1F2C]/80 text-white focus:outline-none focus:ring-2 focus:ring-[#0AFFFF]/50 focus:border-[#0AFFFF] transition-colors"
                placeholder="Votre message..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#00FF41] text-[#1A1F2C] font-bold px-8 py-3 rounded-lg hover:bg-[#00FF41]/90 transition-colors shadow-md hover:shadow-[#00FF41]/20 hover:shadow-lg"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
