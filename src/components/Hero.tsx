
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Déclenchement de l'animation après le chargement du composant
    setIsVisible(true);
  }, []);

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="section-container relative">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className={`title-badge transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            Bienvenue sur mon Portfolio
          </span>
          <h1 className={`text-5xl sm:text-6xl font-bold mb-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Solutions d'Infrastructure, Systèmes et Réseaux
          </h1>
          <p className={`text-xl text-gray-600 mb-8 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Étudiante passionnée en BTS SISR, je développe des solutions innovantes 
            pour répondre aux défis technologiques d'aujourd'hui.
          </p>
          <Link
            to="/contact"
            className={`inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all duration-700 delay-900 hover:shadow-lg hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Me contacter
          </Link>
        </div>
        
        {/* Éléments de décoration animés */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className={`absolute top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
          <div className={`absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-primary/10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
