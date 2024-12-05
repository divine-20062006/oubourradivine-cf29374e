import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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
            <a href="#accueil" className="hover:text-primary transition-colors">Accueil</a>
            <a href="#competences" className="hover:text-primary transition-colors">Compétences</a>
            <a href="#projets" className="hover:text-primary transition-colors">Projets</a>
            <a href="#formation" className="hover:text-primary transition-colors">Formation</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;