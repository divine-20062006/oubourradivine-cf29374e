
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FileDown, Home, Code, FolderGit2, Briefcase, GraduationCap, Mail, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { downloadExternalFile } from "../utils/downloadUtils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleDownloadCV = () => {
    const cvUrl = "https://cvdesignr.com/p/672a0d01c4e53";
    const fileName = 'CV_OUBOURRA_Divine.pdf';
    downloadExternalFile(cvUrl, fileName);
  };

  const activeLinkClass = "text-cyan-400 font-semibold";
  const normalLinkClass = "text-slate-200 hover:text-cyan-300 transition-colors";

  const navLinks = [
    { to: "/", icon: Home, label: "Accueil" },
    { to: "/competences", icon: Code, label: "Compétences" },
    { to: "/projets", icon: FolderGit2, label: "Projets" },
    { to: "/experiences", icon: Briefcase, label: "Expériences" },
    { to: "/formation", icon: GraduationCap, label: "Formation" },
    { to: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-700/50" : "bg-slate-900/80 backdrop-blur-sm"}`}>
      <div className="container mx-auto py-3 px-4">
        <nav className="flex items-center justify-between">
          {/* Logo ou espace vide */}
          <div className="flex items-center">
            <span className="text-cyan-400 font-bold text-lg hidden sm:block">D.O</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center gap-2 text-sm ${location.pathname === link.to ? activeLinkClass : normalLinkClass}`}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              ))}
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className="rounded-full bg-transparent text-cyan-300 border-cyan-500/50 hover:bg-cyan-500/20 hover:text-cyan-200 hover:border-cyan-400 transition-all"
              onClick={handleDownloadCV}
            >
              <FileDown className="mr-2 h-4 w-4" /> Télécharger CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-200 hover:text-cyan-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-700/50 pt-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center gap-3 py-2 px-3 rounded-lg text-sm ${
                    location.pathname === link.to 
                      ? "bg-cyan-500/20 text-cyan-400 font-semibold" 
                      : "text-slate-200 hover:bg-slate-800 hover:text-cyan-300"
                  } transition-all`}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              ))}
              <Button 
                variant="outline" 
                size="sm"
                className="mt-2 rounded-full bg-transparent text-cyan-300 border-cyan-500/50 hover:bg-cyan-500/20 hover:text-cyan-200 hover:border-cyan-400 transition-all"
                onClick={handleDownloadCV}
              >
                <FileDown className="mr-2 h-4 w-4" /> Télécharger CV
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
