import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FileDown, Home, Code, FolderGit2, Briefcase, GraduationCap, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { downloadExternalFile } from "../utils/downloadUtils";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const handleDownloadCV = () => {
    const cvUrl = "https://cvdesignr.com/p/672a0d01c4e53";
    const fileName = 'CV_OUBOURRA_Divine.pdf';
    downloadExternalFile(cvUrl, fileName);
  };

  const navLinks = [
    { to: "/", icon: Home, label: "Accueil" },
    { to: "/competences", icon: Code, label: "Compétences" },
    { to: "/projets", icon: FolderGit2, label: "Projets" },
    { to: "/experiences", icon: Briefcase, label: "Expériences" },
    { to: "/formation", icon: GraduationCap, label: "Formation" },
    { to: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <aside 
      className={`fixed left-0 top-0 h-full z-50 border-r border-slate-700/30 transition-all duration-300 flex flex-col bg-transparent ${
        collapsed ? "w-16" : "w-56"
      }`}
    >
      {/* Photo de profil */}
      <div className={`p-4 border-b border-slate-700/50 flex items-center ${collapsed ? "justify-center" : "justify-between"}`}>
        <div className="w-28 h-28 rounded-full border-2 border-cyan-400/50 overflow-hidden bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex-shrink-0">
          <img 
            src="/lovable-uploads/d6e3318f-f5d5-4e24-b86e-8fb4dbb57750.png" 
            alt="Divine Oubourra" 
            className="w-full h-full object-cover"
          />
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`p-1.5 text-slate-400 hover:text-cyan-400 transition-colors rounded-md hover:bg-slate-800 flex-shrink-0 ${collapsed ? "hidden" : ""}`}
          aria-label="Fermer le menu"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>
      {collapsed && (
        <button
          onClick={() => setCollapsed(false)}
          className="p-2 mx-auto mt-2 text-slate-400 hover:text-cyan-400 transition-colors rounded-md hover:bg-slate-800"
          aria-label="Ouvrir le menu"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
      {collapsed && (
        <button
          onClick={() => setCollapsed(false)}
          className="p-2 mx-auto mt-2 text-slate-400 hover:text-cyan-400 transition-colors rounded-md hover:bg-slate-800"
          aria-label="Ouvrir le menu"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      {/* Navigation */}
      <nav className="flex-1 py-4 overflow-y-auto">
        <ul className="space-y-1 px-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-400 font-semibold"
                      : "text-slate-300 hover:bg-slate-800 hover:text-cyan-300"
                  }`}
                  title={collapsed ? link.label : undefined}
                >
                  <link.icon className="w-5 h-5 flex-shrink-0" />
                  <span className={`transition-opacity whitespace-nowrap ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"}`}>
                    {link.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* CV Download Button */}
      <div className="p-3 border-t border-slate-700/50">
        <Button
          variant="outline"
          size="sm"
          className={`w-full rounded-lg bg-transparent text-cyan-300 border-cyan-500/50 hover:bg-cyan-500/20 hover:text-cyan-200 hover:border-cyan-400 transition-all ${
            collapsed ? "px-2" : ""
          }`}
          onClick={handleDownloadCV}
          title={collapsed ? "Télécharger CV" : undefined}
        >
          <FileDown className={`h-4 w-4 ${collapsed ? "" : "mr-2"}`} />
          <span className={`transition-opacity whitespace-nowrap ${collapsed ? "hidden" : "block"}`}>
            Télécharger CV
          </span>
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
