import { useEffect, useRef } from "react";
import { Server, Shield, Network, Database, Terminal, Lock } from "lucide-react";

const skills = [
  {
    icon: Server,
    title: "Administration Système",
    description: "Windows Server, Linux, Active Directory, Services réseau",
    color: "from-blue-500/20 to-blue-600/10",
    border: "border-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    icon: Network,
    title: "Réseaux",
    description: "TCP/IP, VLAN, Routage, Switching, VPN",
    color: "from-cyan-500/20 to-cyan-600/10",
    border: "border-cyan-500/30",
    iconColor: "text-cyan-400",
  },
  {
    icon: Shield,
    title: "Sécurité Réseau",
    description: "Firewall, Antivirus, Cryptographie, Sécurité réseau",
    color: "from-emerald-500/20 to-emerald-600/10",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
  {
    icon: Database,
    title: "Base de données",
    description: "SQL Server, MySQL, Administration et maintenance",
    color: "from-purple-500/20 to-purple-600/10",
    border: "border-purple-500/30",
    iconColor: "text-purple-400",
  },
  {
    icon: Lock,
    title: "Cybersécurité",
    description: "ANSSI, RGPD, CNIL, PIA",
    color: "from-red-500/20 to-red-600/10",
    border: "border-red-500/30",
    iconColor: "text-red-400",
  },
  {
    icon: Terminal,
    title: "Scripting",
    description: "PowerShell, Bash, Python, Automatisation",
    color: "from-yellow-500/20 to-yellow-600/10",
    border: "border-yellow-500/30",
    iconColor: "text-yellow-400",
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="competences" ref={sectionRef} className="py-16 sm:py-20 lg:py-24">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-cyan-400/70 font-medium mb-3">
            Expertise technique
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            Compétences
          </h2>
          <div className="section-divider mb-5" />
          <p className="text-slate-400 text-base sm:text-lg max-w-lg mx-auto font-light">
            Maîtrise des systèmes, réseaux et sécurité informatique
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`reveal group relative rounded-2xl p-5 sm:p-6 border bg-gradient-to-br ${skill.color} ${skill.border}
                         backdrop-blur-sm hover:scale-[1.02] hover:shadow-lg transition-all duration-400 cursor-default`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   style={{ background: 'radial-gradient(circle at 50% 0%, rgba(10,255,255,0.06), transparent 70%)' }} />
              
              <div className={`inline-flex p-2.5 rounded-xl bg-slate-900/50 mb-4 border ${skill.border}`}>
                <skill.icon className={`w-6 h-6 ${skill.iconColor}`} />
              </div>

              <h3 className="text-base sm:text-lg font-semibold mb-2 text-white group-hover:text-cyan-100 transition-colors">
                {skill.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
