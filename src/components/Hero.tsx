
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
        <div className={`flex flex-col items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Photo de profil - centrée et plus grande */}
          <div className="w-full flex justify-center mb-8">
            <div className="w-64 h-64 rounded-full border-4 border-[#0AFFFF]/30 shadow-lg shadow-[#0AFFFF]/20 overflow-hidden">
              <img 
                src="/lovable-uploads/d6e3318f-f5d5-4e24-b86e-8fb4dbb57750.png" 
                alt="Divine Oubourra" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Contenu textuel - en dessous de la photo */}
          <div className="w-full text-center space-y-5">
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <span className="title-badge inline-block mb-2">
                Bienvenue sur mon portfolio !
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-[#0AFFFF]">
                Bienvenue sur portfolio !
              </h1>
              <p className="text-lg mb-4 text-white font-medium">
                Les défis ? Je les transforme en opportunités.<br />
                Les problèmes ? Je les résous avec méthode et ambition.
              </p>
            </div>

            <div className={`space-y-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div>
                <h2 className="text-xl font-bold text-[#0AFFFF]">Qui suis-je ?</h2>
                <p className="text-white">
                  Je m'appelle Divine Oubourra, étudiante en BTS SIO – option SISR. Passionnée par les systèmes, 
                  les réseaux et la cybersécurité, je m'épanouis dans la résolution de problèmes complexes 
                  et la construction d'infrastructures solides et sécurisées.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-[#0AFFFF]">Ma vision de l'informatique ?</h2>
                <p className="text-white">
                  Un domaine en perpétuelle évolution où seuls ceux qui osent, apprennent et innovent laissent leur empreinte. 
                  Chaque ligne de commande, chaque architecture réseau et chaque protocole de sécurité sont des opportunités d'exceller.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-[#0AFFFF]">Mon engagement ?</h2>
                <p className="text-white">
                  Ne jamais me contenter du minimum. Chercher, expérimenter, optimiser. 
                  Parce qu'en informatique, la vraie différence se fait dans les détails.
                </p>
              </div>
            </div>
            
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
