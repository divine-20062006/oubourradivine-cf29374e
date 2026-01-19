import { useState, useEffect } from "react";
import { FileDown, Home, Code, FolderGit2, Briefcase, GraduationCap, Mail, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { downloadExternalFile } from "../utils/downloadUtils";
import { useSidebarState } from "../contexts/SidebarContext";

const Sidebar = () => {
  const { collapsed, setCollapsed } = useSidebarState();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  const handleDownloadCV = () => {
    const cvUrl = "https://cvdesignr.com/p/6932bf7989186";
    const fileName = 'CV_OUBOURRA_Divine.pdf';
    downloadExternalFile(cvUrl, fileName);
  };

  const navLinks = [
    { to: "#accueil", icon: Home, label: "Accueil", id: "accueil" },
    { to: "#competences", icon: Code, label: "Compétences", id: "competences" },
    { to: "#projets", icon: FolderGit2, label: "Projets", id: "projets" },
    { to: "#experiences", icon: Briefcase, label: "Expériences", id: "experiences" },
    { to: "#formation", icon: GraduationCap, label: "Formation", id: "formation" },
    { to: "#contact", icon: Mail, label: "Contact", id: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    const element = document.querySelector(to);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', to);
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-50 lg:hidden p-3 rounded-lg bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 text-cyan-400 hover:bg-slate-700 transition-all"
        aria-label="Ouvrir le menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed left-0 top-0 h-full z-50 border-r border-slate-700/30 transition-all duration-300 flex flex-col bg-slate-900/95 backdrop-blur-md
          ${collapsed ? "lg:w-16" : "lg:w-56"}
          ${mobileOpen ? "translate-x-0 w-64" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Header avec photo */}
        <div className={`p-4 border-b border-slate-700/50 flex items-center ${collapsed && !mobileOpen ? "justify-center" : "justify-between"}`}>
          <div className={`rounded-full border-2 border-cyan-400/50 overflow-hidden bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex-shrink-0 transition-all duration-300 ${
            collapsed && !mobileOpen ? "w-10 h-10" : "w-20 h-20 lg:w-24 lg:h-24"
          }`}>
            <img 
              src="/lovable-uploads/d6e3318f-f5d5-4e24-b86e-8fb4dbb57750.png" 
              alt="Divine Oubourra" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Close button mobile */}
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1.5 text-slate-400 hover:text-cyan-400 transition-colors rounded-md hover:bg-slate-800 flex-shrink-0 lg:hidden"
            aria-label="Fermer le menu"
          >
            <X className="w-5 h-5" />
          </button>
          
          {/* Collapse button desktop */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={`p-1.5 text-slate-400 hover:text-cyan-400 transition-colors rounded-md hover:bg-slate-800 flex-shrink-0 hidden lg:block ${collapsed ? "hidden" : ""}`}
            aria-label="Réduire le menu"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
        
        {/* Expand button when collapsed on desktop */}
        {collapsed && (
          <button
            onClick={() => setCollapsed(false)}
            className="p-2 mx-auto mt-2 text-slate-400 hover:text-cyan-400 transition-colors rounded-md hover:bg-slate-800 hidden lg:block"
            aria-label="Ouvrir le menu"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* CV Download Button - moved higher */}
        <div className="p-3 border-b border-slate-700/50">
          <Button
            variant="outline"
            size="sm"
            className={`w-full rounded-lg bg-transparent text-cyan-300 border-cyan-500/50 hover:bg-cyan-500/20 hover:text-cyan-200 hover:border-cyan-400 transition-all ${
              collapsed && !mobileOpen ? "px-2" : ""
            }`}
            onClick={handleDownloadCV}
            title={collapsed && !mobileOpen ? "Télécharger CV" : undefined}
          >
            <FileDown className={`h-4 w-4 ${collapsed && !mobileOpen ? "" : "mr-2"}`} />
            <span className={`transition-opacity whitespace-nowrap ${mobileOpen || !collapsed ? "block" : "hidden"}`}>
              Télécharger CV
            </span>
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 overflow-y-auto">
          <ul className="space-y-1 px-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const showText = mobileOpen || !collapsed;
              return (
                <li key={link.to}>
                  <a
                    href={link.to}
                    onClick={(e) => handleNavClick(e, link.to)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                      isActive
                        ? "bg-cyan-500/20 text-cyan-400 font-semibold"
                        : "text-slate-300 hover:bg-slate-800 hover:text-cyan-300"
                    }`}
                    title={!showText ? link.label : undefined}
                  >
                    <link.icon className="w-5 h-5 flex-shrink-0" />
                    <span className={`transition-opacity whitespace-nowrap ${showText ? "opacity-100" : "opacity-0 w-0 overflow-hidden lg:opacity-0"}`}>
                      {link.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
