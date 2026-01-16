import { useState, useEffect } from "react";
import { FileDown, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { downloadExternalFile } from "../utils/downloadUtils";

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating buttons after scrolling past hero section
      const heroSection = document.getElementById('accueil');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight * 0.6;
        setIsVisible(window.scrollY > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    const cvUrl = "https://cvdesignr.com/p/6932bf7989186";
    const fileName = 'CV_OUBOURRA_Divine.pdf';
    downloadExternalFile(cvUrl, fileName);
  };

  const handleContactClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className={`fixed right-4 bottom-20 z-40 flex flex-col gap-2 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
      }`}
    >
      <Button
        variant="ghost"
        size="icon"
        className="group h-10 w-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 text-white/70 hover:text-white hover:bg-slate-700 hover:border-cyan-400/50 shadow-md transition-all duration-300"
        onClick={handleDownloadCV}
        title="Télécharger CV"
      >
        <FileDown className="h-4 w-4 group-hover:text-cyan-400 transition-colors" />
      </Button>
      
      <Button
        size="icon"
        className="h-10 w-10 rounded-full bg-cyan-600/90 backdrop-blur-sm text-white hover:bg-cyan-500 shadow-md shadow-cyan-500/20 transition-all duration-300"
        onClick={handleContactClick}
        title="Me contacter"
      >
        <Mail className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default FloatingActions;
