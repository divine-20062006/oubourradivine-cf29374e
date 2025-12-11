
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
          {/* Mobile Menu Button - Left */}
          <div className="relative lg:hidden">
            <button
              className="p-2 text-slate-200 hover:text-cyan-400 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Mobile Dropdown Menu - Left aligned */}
            {mobileMenuOpen && (
              <div className="absolute left-0 top-full mt-2 w-56 bg-slate-900 border border-slate-700 rounded-lg shadow-xl animate-slide-in-left z-50">
                <div className="flex flex-col py-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`flex items-center gap-3 py-3 px-4 text-sm ${
                        location.pathname === link.to 
                          ? "bg-cyan-500/20 text-cyan-400 font-semibold" 
                          : "text-slate-200 hover:bg-slate-800 hover:text-cyan-300"
                      } transition-all`}
                    >
                      <link.icon className="w-4 h-4" />
                      {link.label}
                    </Link>
                  ))}
                  <div className="border-t border-slate-700 mt-2 pt-2 px-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full rounded-full bg-transparent text-cyan-300 border-cyan-500/50 hover:bg-cyan-500/20 hover:text-cyan-200 hover:border-cyan-400 transition-all"
                      onClick={handleDownloadCV}
                    >
                      <FileDown className="mr-2 h-4 w-4" /> Télécharger CV
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Logo - Center on mobile, left on desktop */}
          <div className="flex items-center lg:order-first">
            <span className="text-cyan-400 font-bold text-lg">D.O</span>
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

          {/* Empty space for mobile layout balance */}
          <div className="w-10 lg:hidden"></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
