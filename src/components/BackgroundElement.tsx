
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
      {/* Image d'arrière-plan principale - sans overlay pour une visibilité maximale */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          backgroundImage: `url('/lovable-uploads/d5d0437a-920f-4028-b042-b0d631a552fc.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Overlay extrêmement léger uniquement pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-[#0d0e17]/5"></div>
      </div>
    </div>
  );
};

export default BackgroundElement;
