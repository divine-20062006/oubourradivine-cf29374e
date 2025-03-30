
import { useEffect, useState } from "react";

const BackgroundElement = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Image d'arrière-plan principale */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          backgroundImage: "url('/lovable-uploads/ca242fb0-3091-4e71-8b8d-4896fb618601.png')",
          backgroundSize: "cover"
        }}
      >
        {/* Overlay pour assurer la lisibilité du texte - plus léger pour mieux voir l'image */}
        <div className="absolute inset-0 bg-[#0d0e17]/50"></div>
      </div>
      
      {/* Éléments lumineux qui rappellent l'image - réduits pour mettre en valeur l'image principale */}
      <div className={`absolute top-20 right-10 w-64 h-64 rounded-full bg-[#0AFFFF]/5 blur-3xl animate-pulse transition-all duration-1000 ${isVisible ? 'opacity-20' : 'opacity-0'}`}></div>
      <div className={`absolute bottom-10 left-20 w-80 h-80 rounded-full bg-[#FF00FF]/5 blur-3xl animate-pulse transition-all duration-1000 delay-700 ${isVisible ? 'opacity-10' : 'opacity-0'}`}></div>
      <div className={`absolute top-40 left-40 w-60 h-60 rounded-full bg-[#FFFF00]/5 blur-3xl animate-pulse transition-all duration-1000 delay-300 ${isVisible ? 'opacity-10' : 'opacity-0'}`}></div>
    </div>
  );
};

export default BackgroundElement;
