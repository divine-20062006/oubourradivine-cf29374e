
import { Server, Shield, Network, Database, Cloud, Terminal } from "lucide-react";

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
    icon: Cloud,
    title: "Cloud Computing",
    description: "Azure, AWS, Solutions Cloud, Virtualisation",
  },
  {
    icon: Terminal,
    title: "Scripting",
    description: "PowerShell, Bash, Python, Automatisation",
  },
];

const Skills = () => {
  return (
    <section id="competences">
      <div className="section-container">
        <span className="title-badge">Expertise</span>
        <h2 className="section-title">Compétences Techniques</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <skill.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
