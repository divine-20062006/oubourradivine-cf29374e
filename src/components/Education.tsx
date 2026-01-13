import { GraduationCap, Award, CheckCircle } from "lucide-react";

const Education = () => {
  const skills = [
    "Administration des systèmes et réseaux",
    "Cybersécurité et protection des données",
    "Virtualisation et solutions cloud",
    "Support et maintenance informatique",
    "Gestion de projet IT"
  ];

  const certifications = [
    { name: "MOOC ANSSI", icon: Award },
    { name: "MOOC RGPD", icon: Award },
    { name: "PIX", icon: Award },
    { name: "Cisco NetAcad - Analyste Junior Cybersécurité", icon: Award }
  ];

  return (
    <section id="formation">
      <div className="section-container">
        <span className="title-badge animate-fade-up">Formation</span>
        
        <div className="max-w-4xl mx-auto">
          {/* Main Education Card */}
          <div className="glass-card p-8 rounded-xl shadow-md animate-fade-up" style={{ animationDelay: "100ms" }}>
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-[#0AFFFF]/10 border border-[#0AFFFF]/30 animate-fade-up" style={{ animationDelay: "200ms" }}>
                <GraduationCap className="w-8 h-8 text-[#0AFFFF]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white animate-fade-up" style={{ animationDelay: "250ms" }}>
                  BTS SIO option SISR
                </h3>
                <p className="text-[#0AFFFF] font-medium animate-fade-up" style={{ animationDelay: "300ms" }}>
                  2024 - 2026
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-8">
              <h4 className="font-medium mb-4 text-slate-200 text-lg animate-fade-up" style={{ animationDelay: "350ms" }}>
                Compétences acquises
              </h4>
              <ul className="space-y-3">
                {skills.map((skill, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-3 text-slate-300 animate-fade-up"
                    style={{ animationDelay: `${400 + index * 50}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#00FF41] flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications Section */}
            <div>
              <h4 className="font-medium mb-4 text-slate-200 text-lg animate-fade-up" style={{ animationDelay: "650ms" }}>
                Certifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 px-4 py-3 bg-slate-700/30 rounded-lg border border-slate-600/30 hover:border-[#00FF41]/50 hover:bg-slate-700/50 transition-all duration-300 animate-fade-up"
                    style={{ animationDelay: `${700 + index * 75}ms` }}
                  >
                    <cert.icon className="w-5 h-5 text-[#00FF41] flex-shrink-0" />
                    <span className="text-white text-sm">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
