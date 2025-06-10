
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
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Contenu principal */}
          <div className="space-y-8">
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00FF41]/20 text-[#00FF41] text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-[#00FF41] rounded-full animate-pulse"></div>
                Étudiante BTS SIO - SISR
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white">
                Divine <span className="text-[#0AFFFF]">Oubourra</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Spécialisée en <span className="text-[#00FF41]">cybersécurité</span> et <span className="text-[#0AFFFF]">infrastructure réseau</span>. 
                Je transforme les défis techniques en solutions innovantes.
              </p>
            </div>

            {/* Stats modernes */}
            <div className={`grid grid-cols-3 gap-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="glass-card p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-[#0AFFFF]">2+</div>
                <div className="text-sm text-white/70">Années d'étude</div>
              </div>
              <div className="glass-card p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-[#00FF41]">10+</div>
                <div className="text-sm text-white/70">Projets réalisés</div>
              </div>
              <div className="glass-card p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-[#D946EF]">100%</div>
                <div className="text-sm text-white/70">Motivation</div>
              </div>
            </div>

            {/* Tags de compétences */}
            <div className={`flex flex-wrap gap-3 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {['Cybersécurité', 'Réseaux', 'Windows Server', 'Linux', 'Cloud'].map((skill, index) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-[#0AFFFF]/20 text-[#0AFFFF] rounded-full border border-[#0AFFFF]/50 text-sm hover:bg-[#0AFFFF]/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            {/* Boutons d'action */}
            <div className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Button 
                variant="outline" 
                className="rounded-full hover:bg-primary/10 hover:text-primary hover:shadow-lg hover:-translate-y-1 transition-all text-white border-white hover:border-[#0AFFFF]"
                onClick={handleDownloadCV}
              >
                <FileDown className="mr-2" /> Télécharger mon CV
              </Button>
              
              <Link to="/contact">
                <Button 
                  className="rounded-full hover:shadow-lg hover:-translate-y-1 transition-all bg-[#0AFFFF] text-black hover:bg-[#0AFFFF]/90"
                >
                  Me contacter
                </Button>
              </Link>
            </div>
          </div>

          {/* Photo de profil moderne */}
          <div className={`flex justify-center lg:justify-end transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl border-4 border-[#0AFFFF]/30 shadow-2xl shadow-[#0AFFFF]/20 overflow-hidden bg-gradient-to-br from-[#0AFFFF]/10 to-[#00FF41]/10 backdrop-blur-sm">
                <img 
                  src="/lovable-uploads/d6e3318f-f5d5-4e24-b86e-8fb4dbb57750.png" 
                  alt="Divine Oubourra" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Éléments décoratifs flottants */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#00FF41] rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#D946EF] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
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
