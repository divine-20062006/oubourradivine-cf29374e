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
      className={`fixed left-3 sm:left-4 lg:left-72 bottom-4 sm:bottom-6 z-40 flex flex-row sm:flex-col gap-2 sm:gap-3 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      <Button
        variant="outline"
        size="sm"
        className="group rounded-full px-3 sm:px-4 py-4 sm:py-5 bg-slate-900/90 backdrop-blur-sm border-slate-600 text-white hover:bg-slate-800 hover:border-cyan-400 shadow-lg shadow-black/20 transition-all duration-300"
        onClick={handleDownloadCV}
      >
        <FileDown className="h-4 w-4 sm:mr-2 group-hover:text-cyan-400 transition-colors" />
        <span className="hidden sm:inline text-sm">Télécharger CV</span>
      </Button>
      
      <Button
        size="sm"
        className="rounded-full px-3 sm:px-4 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
        onClick={handleContactClick}
      >
        <Mail className="h-4 w-4 sm:mr-2" />
        <span className="hidden sm:inline text-sm">Me contacter</span>
      </Button>
    </div>
  );
};

export default FloatingActions;
