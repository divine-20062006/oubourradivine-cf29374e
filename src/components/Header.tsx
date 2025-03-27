
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FileDown } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadCV = () => {
    // Création d'un lien temporaire pour télécharger le CV
    const link = document.createElement('a');
    link.href = '/cv_oubourra_divine.pdf'; // Assurez-vous que ce fichier existe dans votre dossier public
    link.download = 'CV_OUBOURRA_Divine.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#1A1F2C]/80 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="section-container py-4">
        <nav className="flex items-center justify-between">
          <span className="text-xl font-semibold text-white">Portfolio</span>
          <div className="flex items-center gap-8">
            <div className="flex gap-8">
              <Link 
                to="/" 
                className={`hover:text-[#00FF41] transition-colors text-white ${location.pathname === '/' ? 'text-[#00FF41]' : ''}`}
              >
                Accueil
              </Link>
              <Link 
                to="/competences" 
                className={`hover:text-[#00FF41] transition-colors text-white ${location.pathname === '/competences' ? 'text-[#00FF41]' : ''}`}
              >
                Compétences
              </Link>
              <Link 
                to="/projets" 
                className={`hover:text-[#00FF41] transition-colors text-white ${location.pathname === '/projets' ? 'text-[#00FF41]' : ''}`}
              >
                Projets
              </Link>
              <Link 
                to="/formation" 
                className={`hover:text-[#00FF41] transition-colors text-white ${location.pathname === '/formation' ? 'text-[#00FF41]' : ''}`}
              >
                Formation
              </Link>
              <Link 
                to="/contact" 
                className={`hover:text-[#00FF41] transition-colors text-white ${location.pathname === '/contact' ? 'text-[#00FF41]' : ''}`}
              >
                Contact
              </Link>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className="rounded-full bg-transparent text-white border-[#00FF41]/50 hover:bg-[#00FF41]/10 hover:text-[#00FF41] hover:shadow-lg transition-all hover:border-[#00FF41]"
              onClick={handleDownloadCV}
            >
              <FileDown className="mr-2 h-4 w-4" /> Télécharger mon CV
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
