
import { useEffect, useState } from "react";

const BackgroundElement = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Image d'arrière-plan principale */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          backgroundImage: `url('/lovable-uploads/d5d0437a-920f-4028-b042-b0d631a552fc.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Overlay très léger pour assurer la lisibilité du texte */}
        <div className="absolute inset-0 bg-[#0d0e17]/20"></div>
      </div>
      
      {/* Éléments lumineux subtils */}
      <div className={`absolute top-20 right-10 w-64 h-64 rounded-full bg-[#0AFFFF]/5 blur-3xl animate-pulse transition-all duration-1000 ${isVisible ? 'opacity-10' : 'opacity-0'}`}></div>
      <div className={`absolute bottom-10 left-20 w-80 h-80 rounded-full bg-[#FF00FF]/5 blur-3xl animate-pulse transition-all duration-1000 delay-700 ${isVisible ? 'opacity-5' : 'opacity-0'}`}></div>
    </div>
  );
};

export default BackgroundElement;
