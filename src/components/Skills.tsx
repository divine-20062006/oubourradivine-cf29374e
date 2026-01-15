
import { Server, Shield, Network, Database, Terminal } from "lucide-react";

const skills = [
  {
    icon: Server,
    title: "Administration Système",
    description: "Windows Server, Linux, Active Directory, Services réseau",
  },
  {
    icon: Network,
    title: "Réseaux",
    description: "TCP/IP, VLAN, Routage, Switching, VPN",
  },
  {
    icon: Shield,
    title: "Sécurité",
    description: "Firewall, Antivirus, Cryptographie, Sécurité réseau",
  },
  {
    icon: Database,
    title: "Base de données",
    description: "SQL Server, MySQL, Administration et maintenance",
  },
  {
    icon: Shield,
    title: "Cybersécurité",
    description: "ANSSI, RGPD, CNIL, PIA",
  },
  {
    icon: Terminal,
    title: "Scripting",
    description: "PowerShell, Bash, Python, Automatisation",
  },
];

const Skills = () => {
  return (
    <section id="competences" className="py-12 sm:py-16 lg:py-20">
      <div className="section-container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-3 sm:mb-4 tracking-tight">
            Compétences
          </h2>
          <div className="w-12 sm:w-16 h-0.5 bg-cyan-500 mx-auto mb-4 sm:mb-6" />
          <p className="text-slate-400 text-base sm:text-lg max-w-lg mx-auto font-light px-4">
            Expertise technique en systèmes, réseaux et sécurité
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1A1F2C] p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-fade-up border border-[#0AFFFF]/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <skill.icon className="w-8 sm:w-10 h-8 sm:h-10 text-[#0AFFFF] mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{skill.title}</h3>
              <p className="text-white/80 text-sm sm:text-base">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
