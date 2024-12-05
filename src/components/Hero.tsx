const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center pt-16">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <span className="title-badge">Bienvenue sur mon Portfolio</span>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Solutions d'Infrastructure, Systèmes et Réseaux
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Étudiante passionnée en BTS SISR, je développe des solutions innovantes 
            pour répondre aux défis technologiques d'aujourd'hui.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;