
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FileDown, Home, Code, FolderGit2, GraduationCap, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { downloadExternalFile } from "../utils/downloadUtils";

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
    // URL du CV partagé
    const cvUrl = "https://cvdesignr.com/p/672a0d01c4e53";
    const fileName = 'CV_OUBOURRA_Divine.pdf';
    
    // Utilisez la nouvelle fonction pour télécharger le CV externe
    downloadExternalFile(cvUrl, fileName);
  };

  const activeLinkClass = "text-[#00FF41] font-bold";
  const normalLinkClass = "hover:text-[#00FF41] transition-colors text-white";

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#1A1F2C]/80 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto py-4 px-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Espace pour le logo ou autre élément - vide maintenant */}
          </div>
          <div className="flex items-center gap-8">
            <div className="flex gap-8">
              <Link 
                to="/" 
                className={`flex items-center gap-2 ${location.pathname === '/' ? activeLinkClass : normalLinkClass}`}
              >
                <Home className="w-4 h-4" />
                Accueil
              </Link>
              <Link 
                to="/competences" 
                className={`flex items-center gap-2 ${location.pathname === '/competences' ? activeLinkClass : normalLinkClass}`}
              >
                <Code className="w-4 h-4" />
                Compétences
              </Link>
              <Link 
                to="/projets" 
                className={`flex items-center gap-2 ${location.pathname === '/projets' ? activeLinkClass : normalLinkClass}`}
              >
                <FolderGit2 className="w-4 h-4" />
                Projets
              </Link>
              <Link 
                to="/formation" 
                className={`flex items-center gap-2 ${location.pathname === '/formation' ? activeLinkClass : normalLinkClass}`}
              >
                <GraduationCap className="w-4 h-4" />
                Formation
              </Link>
              <Link 
                to="/contact" 
                className={`flex items-center gap-2 ${location.pathname === '/contact' ? activeLinkClass : normalLinkClass}`}
              >
                <Mail className="w-4 h-4" />
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
