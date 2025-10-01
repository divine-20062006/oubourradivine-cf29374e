import { useEffect, useState } from "react";
import networkBackground from "@/assets/network-background.jpg";

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
          backgroundImage: `url(${networkBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Overlay très léger pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </div>
  );
};

export default BackgroundElement;
