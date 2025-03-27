
import { useEffect, useState } from "react";

const BackgroundElement = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Main background image */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${isVisible ? 'opacity-70' : 'opacity-0'}`}
        style={{ backgroundImage: "url('/lovable-uploads/72638fe7-2fcb-4793-89cb-b220faf818fe.png')" }}
      ></div>
      
      {/* Dark overlay to ensure text is readable */}
      <div className="absolute inset-0 bg-[#1A1F2C] opacity-70"></div>
      
      {/* Matrix-like code rain effect (reduced opacity) */}
      <div className={`absolute inset-0 opacity-10 transition-opacity duration-1000 ${isVisible ? 'opacity-10' : 'opacity-0'}`}>
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
      
      {/* Subtle glowing accent elements */}
      <div className={`absolute top-10 right-10 w-96 h-96 rounded-full bg-[#0AFFFF]/10 blur-3xl transition-all duration-1000 ${isVisible ? 'opacity-30' : 'opacity-0'}`}></div>
      <div className={`absolute bottom-10 left-20 w-80 h-80 rounded-full bg-[#00FF41]/10 blur-3xl transition-all duration-1000 ${isVisible ? 'opacity-20' : 'opacity-0'}`}></div>
    </div>
  );
};

export default BackgroundElement;
