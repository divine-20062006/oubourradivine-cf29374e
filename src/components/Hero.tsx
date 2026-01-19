import { useEffect, useState } from "react";
import { FileDown } from "lucide-react";
import { Button } from "./ui/button";
import { downloadExternalFile } from "../utils/downloadUtils";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = "Spécialisée en administration systèmes, réseaux et cybersécurité, à la recherche de nouveaux défis techniques.";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [isVisible]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const handleDownloadCV = () => {
    const cvUrl = "https://cvdesignr.com/p/6932bf7989186";
    const fileName = 'CV_OUBOURRA_Divine.pdf';
    downloadExternalFile(cvUrl, fileName);
  };

  return (
    <section id="accueil" className="min-h-[85vh] flex items-start justify-center pt-16 sm:pt-20 lg:pt-24 overflow-hidden">
      <div className="section-container relative flex items-center justify-center px-4 sm:px-6">

        <div className={`max-w-3xl text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Badge professionnel */}
          <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 sm:mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm text-slate-300 tracking-wide">Disponible pour une alternance</span>
          </div>

          {/* Nom avec ligne décorative */}
          <div className={`relative inline-block mb-4 sm:mb-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Divine OUBOURRA</span>
            </h1>
            <div className={`absolute -bottom-2 sm:-bottom-3 left-1/2 -translate-x-1/2 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent transition-all duration-1000 delay-500 ${isVisible ? 'w-20 sm:w-32' : 'w-0'}`} />
          </div>

          {/* Titre professionnel */}
          <p className={`text-base sm:text-lg md:text-xl text-cyan-400 font-medium tracking-wider sm:tracking-widest uppercase mb-6 sm:mb-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Technicienne Systèmes & Réseaux
          </p>
          
          {/* Description avec effet machine à écrire */}
          <p className={`text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto min-h-[80px] sm:min-h-[60px] px-2 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {displayedText}
            <span className={`inline-block w-0.5 h-4 sm:h-5 bg-cyan-400 ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
          </p>

          {/* Tags de compétences minimalistes */}
          <div className={`flex flex-wrap justify-center gap-2 mt-8 sm:mt-10 px-2 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {['Cybersécurité', 'Réseaux', 'Windows Server', 'Linux', 'Cloud'].map((skill, index) => (
              <span 
                key={skill}
                className="px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm text-slate-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
          
          {/* Indicateur scroll discret - hidden on small mobile */}
          <div className={`mt-12 sm:mt-16 hidden sm:block transition-all duration-700 delay-1200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col items-center gap-2 text-slate-500">
              <span className="text-xs uppercase tracking-widest">Explorer</span>
              <div className="w-5 h-8 border border-slate-600 rounded-full flex justify-center p-1">
                <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Éléments décoratifs subtils */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className={`absolute top-1/4 right-1/4 w-32 sm:w-64 h-32 sm:h-64 rounded-full bg-cyan-500/5 blur-3xl transition-all duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
          <div className={`absolute bottom-1/4 left-1/4 w-40 sm:w-72 h-40 sm:h-72 rounded-full bg-blue-500/5 blur-3xl transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
