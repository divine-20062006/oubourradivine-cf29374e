
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
          backgroundImage: `url('https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/6/7/0/670875a00d_50183450_reseau-informatique-connexion.jpg')`,
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
