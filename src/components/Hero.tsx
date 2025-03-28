
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FileDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Déclenchement de l'animation après le chargement du composant
    setIsVisible(true);
  }, []);

  const handleDownloadCV = () => {
    // Création d'un lien temporaire pour télécharger le CV
    const link = document.createElement('a');
    link.href = '/cv_oubourra_divine.pdf'; // Assurez-vous que ce fichier existe dans votre dossier public
    link.download = 'CV_OUBOURRA_Divine.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="section-container relative">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className={`title-badge transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            Bienvenue sur mon Portfolio
          </span>
          <h1 className={`text-5xl sm:text-6xl font-bold mb-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} text-[#0AFFFF]`}>
            OUBOURRA Divine
          </h1>
          <p className={`text-xl mb-8 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} text-white font-medium`}>
            Étudiante passionnée en BTS SISR, je développe des solutions innovantes 
            pour répondre aux défis technologiques d'aujourd'hui.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button 
              variant="outline" 
              className="rounded-full hover:bg-primary/10 hover:text-primary hover:shadow-lg hover:-translate-y-1 transition-all text-white border-white hover:border-[#0AFFFF]"
              onClick={handleDownloadCV}
            >
              <FileDown className="mr-2" /> Télécharger mon CV
            </Button>
            
            <Link to="/contact">
              <Button 
                className="rounded-full hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                Me contacter
              </Button>
            </Link>
          </div>
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
