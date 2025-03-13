
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

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

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="section-container py-4">
        <nav className="flex items-center justify-between">
          <span className="text-xl font-semibold">Portfolio</span>
          <div className="flex gap-8">
            <Link 
              to="/" 
              className={`hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary' : ''}`}
            >
              Accueil
            </Link>
            <Link 
              to="/competences" 
              className={`hover:text-primary transition-colors ${location.pathname === '/competences' ? 'text-primary' : ''}`}
            >
              Compétences
            </Link>
            <Link 
              to="/projets" 
              className={`hover:text-primary transition-colors ${location.pathname === '/projets' ? 'text-primary' : ''}`}
            >
              Projets
            </Link>
            <Link 
              to="/formation" 
              className={`hover:text-primary transition-colors ${location.pathname === '/formation' ? 'text-primary' : ''}`}
            >
              Formation
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-primary transition-colors ${location.pathname === '/contact' ? 'text-primary' : ''}`}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
