import { useEffect, useRef } from "react";
import { GraduationCap, Award, CheckCircle, BookOpen, MapPin } from "lucide-react";

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
    { name: "Cisco NetAcad – Analyste Junior Cybersécurité", icon: Award }
  ];

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
    <section id="formation" className="py-16 sm:py-20 lg:py-24">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-cyan-400/70 font-medium mb-3">
            Parcours académique
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            Formation
          </h2>
          <div className="section-divider mb-5" />
          <p className="text-slate-400 text-base sm:text-lg max-w-lg mx-auto font-light">
            Diplômes et certifications professionnelles
          </p>
        </div>

        <div className="space-y-5 sm:space-y-6">
          {/* BTS SIO Card */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="reveal glass-card-hover rounded-2xl p-5 sm:p-6 lg:p-8 group"
            style={{ transitionDelay: "0ms" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/30 self-start">
                <GraduationCap className="w-7 h-7 text-cyan-400" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-cyan-100 transition-colors">
                    BTS SIO option SISR
                  </h3>
                  <span className="text-cyan-400 text-sm font-semibold bg-cyan-400/10 border border-cyan-400/20 rounded-full px-3 py-1 self-start sm:self-auto">
                    2024 – 2026
                  </span>
                </div>
                <p className="text-slate-400 text-sm mt-1">Services Informatiques aux Organisations – Solutions d'Infrastructure, Systèmes et Réseaux</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-slate-200 text-sm uppercase tracking-wider">Compétences acquises</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-2.5 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Baccalauréat */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="reveal glass-card-hover rounded-2xl p-5 sm:p-6 lg:p-8 group"
            style={{ transitionDelay: "120ms" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-400/10 border border-emerald-400/30 self-start">
                <BookOpen className="w-7 h-7 text-emerald-400" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-emerald-100 transition-colors">
                    Baccalauréat Technique
                  </h3>
                  <span className="text-emerald-400 text-sm font-semibold bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3 py-1 self-start sm:self-auto">
                    Oct. 2023 – Juin 2024
                  </span>
                </div>
                <p className="text-slate-300 text-sm mt-1">
                  <span className="text-cyan-400 font-medium">Option H2</span> – Service Informatique de Gestion
                </p>
                <p className="text-slate-400 text-xs mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 flex-shrink-0" />
                  Lycée Technique Commercial de l'OCH, Pointe Noire, République du Congo
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="reveal glass-card-hover rounded-2xl p-5 sm:p-6 lg:p-8"
            style={{ transitionDelay: "240ms" }}
          >
            <h4 className="font-medium mb-4 text-slate-200 text-sm uppercase tracking-wider">Certifications</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-4 py-3 bg-slate-800/50 rounded-xl border border-slate-700/40
                             hover:border-emerald-400/40 hover:bg-slate-800/80 transition-all duration-300"
                >
                  <div className="p-1.5 rounded-lg bg-emerald-400/10">
                    <cert.icon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-white text-sm font-medium">{cert.name}</span>
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
