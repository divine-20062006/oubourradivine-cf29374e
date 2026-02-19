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
    downloadExternalFile("https://cvdesignr.com/p/6932bf7989186", 'CV_OUBOURRA_Divine.pdf');
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
      const scrollPosition = window.scrollY + 120;
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/50 text-cyan-400 hover:bg-slate-800 hover:border-cyan-400/40 transition-all shadow-lg"
        aria-label="Ouvrir le menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full z-50 flex flex-col
          border-r border-white/5 bg-slate-900/80 backdrop-blur-xl
          transition-all duration-300
          ${collapsed ? "lg:w-16" : "lg:w-56"}
          ${mobileOpen ? "translate-x-0 w-64 shadow-2xl shadow-black/50" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Profile header */}
        <div className={`p-4 border-b border-white/5 flex items-center gap-3 ${collapsed && !mobileOpen ? "justify-center px-2" : "justify-between"}`}>
          <div className={`rounded-full border-2 border-cyan-400/40 overflow-hidden flex-shrink-0 transition-all duration-300 ring-4 ring-cyan-400/5 ${
            collapsed && !mobileOpen ? "w-9 h-9" : "w-16 h-16 sm:w-20 sm:h-20"
          }`}>
            <img
              src="/lovable-uploads/d6e3318f-f5d5-4e24-b86e-8fb4dbb57750.png"
              alt="Divine Oubourra"
              className="w-full h-full object-cover"
            />
          </div>

          {(!collapsed || mobileOpen) && (
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold truncate">Divine O.</p>
              <p className="text-cyan-400/70 text-xs truncate">BTS SIO · SISR</p>
            </div>
          )}

          {/* Mobile close */}
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-all lg:hidden flex-shrink-0"
            aria-label="Fermer le menu"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Desktop collapse */}
          {!collapsed && (
            <button
              onClick={() => setCollapsed(true)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-all hidden lg:block flex-shrink-0"
              aria-label="Réduire le menu"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Expand button (collapsed state) */}
        {collapsed && !mobileOpen && (
          <button
            onClick={() => setCollapsed(false)}
            className="p-2 mx-auto mt-3 text-slate-400 hover:text-cyan-400 rounded-lg hover:bg-white/5 transition-all hidden lg:block"
            aria-label="Ouvrir le menu"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}

        {/* CV Download */}
        <div className={`border-b border-white/5 ${collapsed && !mobileOpen ? "p-2" : "p-3"}`}>
          <Button
            variant="outline"
            size="sm"
            className={`w-full rounded-xl bg-transparent text-cyan-300 border-cyan-500/30
                        hover:bg-cyan-500/15 hover:text-cyan-200 hover:border-cyan-400/50 transition-all duration-300 ${
              collapsed && !mobileOpen ? "px-2 justify-center" : ""
            }`}
            onClick={handleDownloadCV}
            title={collapsed && !mobileOpen ? "Télécharger CV" : undefined}
          >
            <FileDown className={`h-4 w-4 flex-shrink-0 ${collapsed && !mobileOpen ? "" : "mr-2"}`} />
            <span className={`whitespace-nowrap text-xs transition-all ${mobileOpen || !collapsed ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"}`}>
              Télécharger CV
            </span>
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-3 overflow-y-auto">
          <ul className="space-y-0.5 px-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const showText = mobileOpen || !collapsed;
              return (
                <li key={link.to}>
                  <a
                    href={link.to}
                    onClick={(e) => handleNavClick(e, link.to)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group
                      ${isActive
                        ? "bg-cyan-400/10 text-cyan-400 border-l-2 border-cyan-400 pl-[10px]"
                        : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                      } ${collapsed && !mobileOpen ? "justify-center px-2" : ""}`}
                    title={!showText ? link.label : undefined}
                  >
                    <link.icon className={`w-4 h-4 flex-shrink-0 transition-colors ${isActive ? "text-cyan-400" : "group-hover:text-slate-200"}`} />
                    <span className={`text-sm font-medium whitespace-nowrap transition-all ${showText ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"}`}>
                      {link.label}
                    </span>
                    {isActive && showText && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        {(!collapsed || mobileOpen) && (
          <div className="px-4 py-3 border-t border-white/5">
            <p className="text-slate-600 text-[10px] text-center">Portfolio © 2026</p>
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
