import { useEffect, useRef } from "react";
import { Briefcase, Calendar, Clock } from "lucide-react";

const experiences = [
  {
    title: "Stagiaire en administration réseau et cybersécurité",
    company: "SHOP Application",
    period: "Janvier 2026 – Février 2026",
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
    period: "Mai 2025 – Juin 2025",
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
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    cardsRef.current.forEach((c) => c && observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experiences" className="py-16 sm:py-20 lg:py-24">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-cyan-400/70 font-medium mb-3">
            Parcours professionnel
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            Expériences
          </h2>
          <div className="section-divider mb-5" />
          <p className="text-slate-400 text-base sm:text-lg max-w-lg mx-auto font-light">
            Stages réalisés et missions accomplies
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-cyan-400/20 to-transparent hidden sm:block" />

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="reveal"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  {/* Timeline dot */}
                  <div className="hidden sm:flex flex-shrink-0 w-16 justify-center pt-5">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 border-2 border-slate-900 ring-2 ring-cyan-400/30 shadow-[0_0_12px_rgba(10,255,255,0.4)]" />
                  </div>

                  {/* Card */}
                  <div className="flex-1 glass-card-hover rounded-2xl p-5 sm:p-6 group">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-cyan-100 transition-colors leading-snug mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-emerald-400 text-sm font-semibold tracking-wide">{exp.company}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end sm:gap-1">
                        <span className="inline-flex items-center gap-1.5 text-xs text-cyan-400/80 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-2.5 py-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 border border-white/10 rounded-full px-2.5 py-1">
                          <Clock className="w-3 h-3" />
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    {/* Tasks */}
                    <ul className="space-y-2">
                      {exp.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-slate-300 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                          <span className="leading-relaxed">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
