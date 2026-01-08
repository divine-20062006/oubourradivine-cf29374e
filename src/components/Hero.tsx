
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FileDown } from "lucide-react";
import { Button } from "./ui/button";
import { downloadExternalFile } from "../utils/downloadUtils";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Déclenchement de l'animation après le chargement du composant
    setIsVisible(true);
  }, []);

  const handleDownloadCV = () => {
    // URL du CV partagé
    const cvUrl = "https://cvdesignr.com/p/672a0d01c4e53";
    const fileName = 'CV_OUBOURRA_Divine.pdf';
    
    // Utilisez la nouvelle fonction pour télécharger le CV externe
    downloadExternalFile(cvUrl, fileName);
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="section-container relative">

        <div className={`max-w-4xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Contenu principal */}
          <div className="space-y-8">
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white">
                Divine Oubourra
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Étudiante en BTS SIO SISR, passionnée par l'administration des systèmes et réseaux et la cybersécurité, à la recherche de nouvelles expériences pratiques.
              </p>
            </div>

            {/* Tags de compétences */}
            <div className={`flex flex-wrap gap-3 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {['Cybersécurité', 'Réseaux', 'Windows Server', 'Linux', 'Cloud'].map((skill, index) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full border border-blue-400/50 text-sm hover:bg-blue-500/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            {/* Boutons d'action */}
            <div className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Button 
                variant="outline" 
                className="rounded-full hover:bg-blue-500/10 hover:text-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all text-white border-gray-300 hover:border-blue-400"
                onClick={handleDownloadCV}
              >
                <FileDown className="mr-2" /> Télécharger mon CV
              </Button>
              
              <Link to="/contact">
                <Button 
                  className="rounded-full hover:shadow-lg hover:-translate-y-1 transition-all bg-blue-500 text-white hover:bg-blue-600"
                >
                  Me contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Éléments de décoration animés */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className={`absolute top-20 right-20 w-32 h-32 rounded-full bg-[#0AFFFF]/5 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
          <div className={`absolute bottom-20 left-20 w-40 h-40 rounded-full bg-[#00FF41]/5 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
          <div className={`absolute top-1/2 left-1/4 w-2 h-2 bg-[#D946EF] rounded-full animate-ping transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
