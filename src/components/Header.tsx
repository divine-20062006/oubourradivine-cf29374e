
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FileDown, Home, Code, FolderGit2, GraduationCap, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
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

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#1A1F2C]/80 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto py-4 px-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar className="w-12 h-12 border-2 border-[#00FF41]/30 mr-4">
              <AvatarImage 
                src="/lovable-uploads/d6e3318f-f5d5-4e24-b86e-8fb4dbb57750.png" 
                alt="Divine Oubourra" 
                className="object-cover object-top"
              />
              <AvatarFallback className="bg-primary/10 text-primary font-bold text-xl">DO</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex gap-8">
              <Link 
                to="/" 
                className={`hover:text-[#00FF41] transition-colors text-white flex items-center gap-2 ${location.pathname === '/' ? 'text-[#00FF41]' : ''}`}
              >
                <Home className="w-4 h-4" />
                Accueil
              </Link>
              <Link 
                to="/competences" 
                className={`hover:text-[#00FF41] transition-colors text-white flex items-center gap-2 ${location.pathname === '/competences' ? 'text-[#00FF41]' : ''}`}
              >
                <Code className="w-4 h-4" />
                Compétences
              </Link>
              <Link 
                to="/projets" 
                className={`hover:text-[#00FF41] transition-colors text-white flex items-center gap-2 ${location.pathname === '/projets' ? 'text-[#00FF41]' : ''}`}
              >
                <FolderGit2 className="w-4 h-4" />
                Projets
              </Link>
              <Link 
                to="/formation" 
                className={`hover:text-[#00FF41] transition-colors text-white flex items-center gap-2 ${location.pathname === '/formation' ? 'text-[#00FF41]' : ''}`}
              >
                <GraduationCap className="w-4 h-4" />
                Formation
              </Link>
              <Link 
                to="/contact" 
                className={`hover:text-[#00FF41] transition-colors text-white flex items-center gap-2 ${location.pathname === '/contact' ? 'text-[#00FF41]' : ''}`}
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
