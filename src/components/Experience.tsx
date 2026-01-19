import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Stagiaire en administration réseau et cybersécurité",
    company: "SHOP Application",
    period: "JANVIER 2026 - FÉVRIER 2026",
    duration: "6 semaines",
    tasks: [
      "Mise en place d'un serveur VPN sur Debian",
      "Création d'un script de monitoring sur Python",
      "Installation d'un wifi invité"
    ]
  },
  {
    title: "Stagiaire en administration réseau et cybersécurité",
    company: "SC MICRO",
    period: "MAI 2025 - JUIN 2025",
    duration: "4 semaines",
    tasks: [
      "Mise en place et configuration de VLAN sur équipements Cisco",
      "Configuration et paramétrage d'un pare-feu WatchGuard",
      "Installation et ajout de disques durs sur un serveur NAS",
      "Mise à jour de postes de travail avec une nouvelle version de Windows",
      "Installation d'une baie informatique et organisation du câblage"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experiences" className="py-10 sm:py-14 lg:py-16">
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-3 sm:mb-4 tracking-tight">
            Expériences
          </h2>
          <div className="w-12 sm:w-16 h-0.5 bg-cyan-500 mx-auto mb-4 sm:mb-6" />
          <p className="text-slate-400 text-base sm:text-lg max-w-lg mx-auto font-light px-4">
            Parcours professionnel et stages réalisés
          </p>
        </div>
        
        <div className="space-y-4 sm:space-y-6">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-lg bg-[#00FF41]/10 border border-[#00FF41]/30 self-start">
                  <Briefcase className="w-5 sm:w-6 h-5 sm:h-6 text-[#00FF41]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 text-white">
                    {experience.title}
                  </h3>
                  <p className="text-[#00FF41] text-xs sm:text-sm font-medium">{experience.company}</p>
                  <p className="text-[#0AFFFF] text-xs sm:text-sm font-medium mb-3 sm:mb-4">{experience.period} • {experience.duration}</p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {experience.tasks.map((task, taskIndex) => (
                      <li
                        key={taskIndex}
                        className="flex items-start gap-2 sm:gap-3 text-white/90 text-sm sm:text-base"
                      >
                        <span className="text-[#00FF41] mt-0.5 sm:mt-1">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
