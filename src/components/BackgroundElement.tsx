
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
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: "url('/lovable-uploads/72638fe7-2fcb-4793-89cb-b220faf818fe.png')" }}
      ></div>
      
      {/* Dark overlay to ensure text is readable */}
      <div className="absolute inset-0 bg-[#1A1F2C] opacity-80"></div>
      
      {/* Subtle glowing accent elements */}
      <div className={`absolute top-10 right-10 w-96 h-96 rounded-full bg-[#0AFFFF]/10 blur-3xl transition-all duration-1000 ${isVisible ? 'opacity-30' : 'opacity-0'}`}></div>
      <div className={`absolute bottom-10 left-20 w-80 h-80 rounded-full bg-[#00FF41]/10 blur-3xl transition-all duration-1000 ${isVisible ? 'opacity-20' : 'opacity-0'}`}></div>
    </div>
  );
};

export default BackgroundElement;
