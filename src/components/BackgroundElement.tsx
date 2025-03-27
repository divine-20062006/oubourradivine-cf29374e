
import { useEffect, useState } from "react";

const BackgroundElement = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Circuit board pattern elements */}
      <div className={`absolute inset-0 opacity-5 transition-opacity duration-1000 ${isVisible ? 'opacity-5' : 'opacity-0'}`}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="circuitPattern" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="#0A84FF" strokeWidth="1"/>
            <circle cx="10" cy="10" r="3" fill="#0A84FF"/>
            <circle cx="90" cy="10" r="3" fill="#0A84FF"/>
            <circle cx="90" cy="90" r="3" fill="#0A84FF"/>
            <circle cx="10" cy="90" r="3" fill="#0A84FF"/>
            <path d="M10,50 L40,50 M60,50 L90,50 M50,10 L50,40 M50,60 L50,90" stroke="#0A84FF" strokeWidth="1"/>
            <circle cx="50" cy="50" r="5" fill="#0A84FF"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuitPattern)"/>
        </svg>
      </div>
      
      {/* Abstract code elements */}
      <div className={`absolute inset-0 opacity-3 transition-opacity duration-1000 ${isVisible ? 'opacity-3' : 'opacity-0'}`}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="binaryPattern" width="200" height="200" patternUnits="userSpaceOnUse">
            <text x="10" y="20" fill="#0A84FF" fontSize="10">01001010</text>
            <text x="120" y="40" fill="#0A84FF" fontSize="10">10110011</text>
            <text x="50" y="60" fill="#0A84FF" fontSize="10">01110101</text>
            <text x="150" y="80" fill="#0A84FF" fontSize="10">10001101</text>
            <text x="30" y="100" fill="#0A84FF" fontSize="10">11010010</text>
            <text x="100" y="120" fill="#0A84FF" fontSize="10">00111001</text>
            <text x="70" y="140" fill="#0A84FF" fontSize="10">10100111</text>
            <text x="170" y="160" fill="#0A84FF" fontSize="10">01001010</text>
            <text x="20" y="180" fill="#0A84FF" fontSize="10">11110000</text>
          </pattern>
          <rect width="100%" height="100%" fill="url(#binaryPattern)"/>
        </svg>
      </div>
      
      {/* Decorative elements */}
      <div className={`absolute top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl transition-all duration-1000 ${isVisible ? 'opacity-30' : 'opacity-0'}`}></div>
      <div className={`absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl transition-all duration-1000 ${isVisible ? 'opacity-30' : 'opacity-0'}`}></div>
    </div>
  );
};

export default BackgroundElement;
