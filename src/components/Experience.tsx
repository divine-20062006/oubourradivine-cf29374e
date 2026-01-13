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
    <section id="experiences">
      <div className="section-container">
        <span className="title-badge">Expériences</span>
        
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#00FF41]/10 border border-[#00FF41]/30">
                  <Briefcase className="w-6 h-6 text-[#00FF41]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1 text-white">
                    {experience.title}
                  </h3>
                  <p className="text-[#00FF41] text-sm font-medium">{experience.company}</p>
                  <p className="text-[#0AFFFF] text-sm font-medium mb-4">{experience.period} • {experience.duration}</p>
                  <ul className="space-y-2">
                    {experience.tasks.map((task, taskIndex) => (
                      <li
                        key={taskIndex}
                        className="flex items-start gap-3 text-white/90"
                      >
                        <span className="text-[#00FF41] mt-1">•</span>
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
