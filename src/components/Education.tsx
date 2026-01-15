import { GraduationCap, Award, CheckCircle, BookOpen } from "lucide-react";

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
    <section id="formation" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            Formation
          </h2>
          <div className="w-16 h-0.5 bg-cyan-500 mx-auto mb-6" />
          <p className="text-slate-400 text-lg max-w-lg mx-auto font-light">
            Parcours académique et certifications obtenues
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {/* BTS SIO Card */}
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
          </div>

          {/* Baccalauréat Card */}
          <div className="glass-card p-8 rounded-xl shadow-md animate-fade-up" style={{ animationDelay: "650ms" }}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#00FF41]/10 border border-[#00FF41]/30 animate-fade-up" style={{ animationDelay: "700ms" }}>
                <BookOpen className="w-8 h-8 text-[#00FF41]" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white animate-fade-up" style={{ animationDelay: "750ms" }}>
                  Baccalauréat Technique
                </h3>
                <p className="text-[#00FF41] font-medium animate-fade-up" style={{ animationDelay: "800ms" }}>
                  Octobre 2023 - Juin 2024
                </p>
                <div className="mt-3 space-y-2">
                  <p className="text-slate-300 animate-fade-up" style={{ animationDelay: "850ms" }}>
                    <span className="text-[#0AFFFF] font-medium">Option H2</span> - Service Informatique de Gestion
                  </p>
                  <p className="text-slate-400 animate-fade-up" style={{ animationDelay: "900ms" }}>
                    Lycée Technique Commercial de l'OCH, Pointe Noire, République du Congo
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="glass-card p-8 rounded-xl shadow-md animate-fade-up" style={{ animationDelay: "950ms" }}>
            <h4 className="font-medium mb-4 text-slate-200 text-lg animate-fade-up" style={{ animationDelay: "1000ms" }}>
              Certifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 px-4 py-3 bg-slate-700/30 rounded-lg border border-slate-600/30 hover:border-[#00FF41]/50 hover:bg-slate-700/50 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${1050 + index * 75}ms` }}
                >
                  <cert.icon className="w-5 h-5 text-[#00FF41] flex-shrink-0" />
                  <span className="text-white text-sm">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
