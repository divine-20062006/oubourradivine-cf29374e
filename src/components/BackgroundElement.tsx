
import { useEffect, useState } from "react";

const BackgroundElement = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Dark background overlay */}
      <div className="absolute inset-0 bg-[#1A1F2C] opacity-95"></div>
      
      {/* Matrix-like code rain effect */}
      <div className={`absolute inset-0 opacity-20 transition-opacity duration-1000 ${isVisible ? 'opacity-20' : 'opacity-0'}`}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="matrixPattern" width="300" height="300" patternUnits="userSpaceOnUse">
            <text x="10" y="20" fill="#00FF41" fontSize="12">01001010</text>
            <text x="120" y="40" fill="#00FF41" fontSize="12">10110011</text>
            <text x="50" y="60" fill="#00FF41" fontSize="12">01110101</text>
            <text x="150" y="80" fill="#00FF41" fontSize="12">10001101</text>
            <text x="30" y="100" fill="#00FF41" fontSize="12">11010010</text>
            <text x="100" y="120" fill="#00FF41" fontSize="12">00111001</text>
            <text x="70" y="140" fill="#00FF41" fontSize="12">10100111</text>
            <text x="170" y="160" fill="#00FF41" fontSize="12">01001010</text>
            <text x="20" y="180" fill="#00FF41" fontSize="12">11110000</text>
            <text x="30" y="200" fill="#00FF41" fontSize="12">echo $USER</text>
            <text x="90" y="220" fill="#00FF41" fontSize="12">ssh root@</text>
            <text x="150" y="240" fill="#00FF41" fontSize="12">chmod 755</text>
            <text x="40" y="260" fill="#00FF41" fontSize="12">./exploit</text>
            <text x="120" y="280" fill="#00FF41" fontSize="12">sudo -l</text>
          </pattern>
          <rect width="100%" height="100%" fill="url(#matrixPattern)"/>
        </svg>
      </div>
      
      {/* Network/circuit grid pattern */}
      <div className={`absolute inset-0 opacity-15 transition-opacity duration-1000 ${isVisible ? 'opacity-15' : 'opacity-0'}`}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="circuitPattern" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M10,10 L110,10 L110,110 L10,110 Z" fill="none" stroke="#0AFFFF" strokeWidth="0.5"/>
            <circle cx="10" cy="10" r="3" fill="#0AFFFF" opacity="0.7"/>
            <circle cx="110" cy="10" r="3" fill="#0AFFFF" opacity="0.7"/>
            <circle cx="110" cy="110" r="3" fill="#0AFFFF" opacity="0.7"/>
            <circle cx="10" cy="110" r="3" fill="#0AFFFF" opacity="0.7"/>
            <path d="M10,60 L50,60 M70,60 L110,60 M60,10 L60,50 M60,70 L60,110" stroke="#0AFFFF" strokeWidth="0.5" opacity="0.5"/>
            <circle cx="60" cy="60" r="5" fill="#0AFFFF" opacity="0.8"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuitPattern)"/>
        </svg>
      </div>
      
      {/* Security element graphics */}
      <div className={`absolute opacity-5 transition-opacity duration-1000 ${isVisible ? 'opacity-5' : 'opacity-0'}`}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="securityPattern" width="400" height="400" patternUnits="userSpaceOnUse">
            <path d="M200,50 L225,100 L275,100 L300,50 L275,0 L225,0 Z" fill="none" stroke="#FF003C" strokeWidth="1.5" opacity="0.6"/>
            <circle cx="250" cy="50" r="20" fill="none" stroke="#FF003C" strokeWidth="1.5" opacity="0.6"/>
            <path d="M240,50 L260,50 M250,40 L250,60" stroke="#FF003C" strokeWidth="1.5" opacity="0.6"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#securityPattern)"/>
        </svg>
      </div>
      
      {/* Glowing accent elements */}
      <div className={`absolute top-10 right-10 w-96 h-96 rounded-full bg-[#0AFFFF]/5 blur-3xl transition-all duration-1000 ${isVisible ? 'opacity-30' : 'opacity-0'}`}></div>
      <div className={`absolute bottom-10 left-20 w-80 h-80 rounded-full bg-[#FF003C]/5 blur-3xl transition-all duration-1000 ${isVisible ? 'opacity-20' : 'opacity-0'}`}></div>
    </div>
  );
};

export default BackgroundElement;
