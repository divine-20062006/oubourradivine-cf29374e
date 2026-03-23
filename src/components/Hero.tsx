import { useEffect, useState } from "react";
import { FileDown, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { downloadExternalFile } from "../utils/downloadUtils";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = "Spécialisée en administration systèmes, réseaux et cybersécurité, à la recherche de nouveaux défis techniques.";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
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
    }, 28);
    return () => clearInterval(typeInterval);
  }, [isVisible]);

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor(prev => !prev), 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const handleDownloadCV = () => {
    downloadExternalFile("https://cvdesignr.com/p/6932bf7989186", 'CV_OUBOURRA_Divine.pdf');
  };

  const handleScrollDown = () => {
    document.querySelector('#competences')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="accueil"
      className="min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 overflow-x-hidden relative"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] rounded-full bg-cyan-500/5 blur-[100px] transition-opacity duration-2000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute bottom-1/4 right-1/4 w-[30vw] h-[30vh] rounded-full bg-blue-600/5 blur-[80px] transition-opacity duration-2000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      <div className="w-full max-w-3xl mx-auto text-center flex-1 flex flex-col items-center justify-center py-16 sm:py-20">

        {/* Status badge */}
        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 sm:mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
          style={{ transitionDelay: '100ms' }}
        >
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse flex-shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
          <span className="text-[11px] sm:text-xs text-slate-300 tracking-widest uppercase font-medium whitespace-nowrap">
            Disponible pour une alternance
          </span>
        </div>

        {/* Name */}
        <div
          className={`mb-4 sm:mb-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <h1 className="text-[clamp(2rem,8vw,5rem)] font-bold tracking-tight leading-none">
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #0AFFFF 0%, #38bdf8 50%, #6366f1 100%)' }}>
              OUBOURRA Divine
            </span>
          </h1>
          {/* Decorative underline */}
          <div
            className={`mx-auto mt-3 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent transition-all duration-1000 ${isVisible ? 'w-2/3 sm:w-1/2' : 'w-0'}`}
            style={{ transitionDelay: '600ms' }}
          />
        </div>

        {/* Title */}
        <p
          className={`text-[clamp(0.7rem,2.5vw,1.1rem)] text-cyan-400 font-medium tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-6 sm:mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '350ms' }}
        >
          Technicienne Systèmes, Réseaux &amp; Cybersécurité
        </p>

        {/* Typewriter */}
        <p
          className={`text-sm sm:text-base md:text-lg text-slate-300/90 leading-relaxed max-w-xl mx-auto mb-8 sm:mb-10 px-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '450ms', minHeight: '3.5rem' }}
        >
          {displayedText}
          <span className={`inline-block w-0.5 h-4 bg-cyan-400 ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
        </p>

        {/* Skill tags */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-10 sm:mb-12 px-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '550ms' }}
        >
          {['Cybersécurité', 'Réseaux', 'Windows Server', 'Linux', 'Script'].map((skill) => (
            <span key={skill} className="tag-pill text-xs sm:text-sm">{skill}</span>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '650ms' }}
        >
          <Button
            onClick={handleDownloadCV}
            className="group px-6 py-2.5 rounded-xl text-sm font-medium border border-cyan-400/40 bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-300 hover:text-white hover:border-cyan-400/70 transition-all duration-300 shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/20"
          >
            <FileDown className="w-4 h-4 mr-2 group-hover:-translate-y-0.5 transition-transform" />
            Télécharger mon CV
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 hover:text-cyan-400 transition-all duration-500 hidden md:flex ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1200ms' }}
        aria-label="Défiler vers le bas"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Explorer</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
