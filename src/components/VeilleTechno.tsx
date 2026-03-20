import { useEffect, useRef } from "react";
import { Rss, ExternalLink, Calendar, Shield, BookOpen, TrendingUp, AlertTriangle, Globe } from "lucide-react";

const sujetVeille = {
  titre: "L'Intelligence Artificielle au service de la Cybersécurité",
  description:
    "L'IA transforme la cybersécurité en permettant la détection proactive de menaces, l'analyse comportementale en temps réel et l'automatisation des réponses aux incidents. Cette veille explore comment les modèles de machine learning renforcent la défense des systèmes d'information face à des cyberattaques de plus en plus sophistiquées.",
  points: [
    "Détection d'anomalies réseau par apprentissage automatique",
    "Automatisation de la réponse aux incidents (SOAR)",
    "Analyse comportementale des utilisateurs (UEBA)",
    "Génération de menaces par IA adversariale (deepfakes, phishing IA)",
    "Outils de threat intelligence augmentés par l'IA",
  ],
  enjeux: [
    {
      icon: Shield,
      titre: "Détection proactive",
      desc: "Les algorithmes de ML identifient des patterns d'attaque invisibles aux méthodes traditionnelles.",
    },
    {
      icon: AlertTriangle,
      titre: "Menaces IA",
      desc: "Les attaquants utilisent aussi l'IA pour créer des attaques plus sophistiquées et ciblées.",
    },
    {
      icon: TrendingUp,
      titre: "Évolution constante",
      desc: "Les modèles doivent être continuellement entraînés pour s'adapter aux nouvelles menaces.",
    },
  ],
};

const articles = [
  {
    titre: "Comment l'IA révolutionne la détection des cybermenaces",
    source: "Le Monde Informatique",
    date: "Février 2026",
    url: "https://www.lemondeinformatique.fr",
    categorie: "Analyse",
  },
  {
    titre: "ANSSI : rapport annuel sur les menaces cyber en France",
    source: "ANSSI",
    date: "Janvier 2026",
    url: "https://www.ssi.gouv.fr",
    categorie: "Rapport",
  },
  {
    titre: "Machine Learning for Intrusion Detection Systems",
    source: "IEEE Xplore",
    date: "Mars 2026",
    url: "https://ieeexplore.ieee.org",
    categorie: "Recherche",
  },
  {
    titre: "Les deepfakes, nouvelle arme des cybercriminels",
    source: "Zataz",
    date: "Décembre 2025",
    url: "https://www.zataz.com",
    categorie: "Actualité",
  },
  {
    titre: "SOAR : automatiser la réponse aux incidents avec l'IA",
    source: "IT-Connect",
    date: "Novembre 2025",
    url: "https://www.it-connect.fr",
    categorie: "Tutoriel",
  },
  {
    titre: "Panorama de la cybermenace 2025 – Bilan et perspectives",
    source: "CERT-FR",
    date: "Janvier 2026",
    url: "https://www.cert.ssi.gouv.fr",
    categorie: "Rapport",
  },
];

const sources = [
  { nom: "ANSSI", url: "https://www.ssi.gouv.fr", type: "Institutionnel" },
  { nom: "CERT-FR", url: "https://www.cert.ssi.gouv.fr", type: "Institutionnel" },
  { nom: "The Hacker News", url: "https://thehackernews.com", type: "Actualité" },
  { nom: "Zataz", url: "https://www.zataz.com", type: "Actualité" },
  { nom: "IT-Connect", url: "https://www.it-connect.fr", type: "Blog tech" },
  { nom: "Krebs on Security", url: "https://krebsonsecurity.com", type: "Blog expert" },
];

const categorieColors: Record<string, string> = {
  Analyse: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  Rapport: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Recherche: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  Actualité: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  Tutoriel: "bg-rose-500/15 text-rose-400 border-rose-500/30",
};

const VeilleTechno = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    cardsRef.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="veille" className="py-16 sm:py-20 lg:py-24">
      <div className="section-container">
        {/* Header */}
        <div
          ref={(el) => { cardsRef.current[0] = el; }}
          className="reveal text-center mb-10 sm:mb-14"
        >
          <span className="title-badge">
            <Rss className="inline w-3.5 h-3.5 mr-1.5 -mt-0.5" />
            Veille Technologique
          </span>
          <h2 className="section-title">
            Ma veille <span className="gradient-text">technologique</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Une veille régulière sur les enjeux de la cybersécurité et les technologies émergentes.
          </p>
        </div>

        {/* Sujet principal */}
        <div
          ref={(el) => { cardsRef.current[1] = el; }}
          className="reveal glass-card rounded-2xl p-5 sm:p-8 mb-8 sm:mb-10"
          style={{ transitionDelay: "100ms" }}
        >
          <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
            <div className="p-2.5 sm:p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex-shrink-0">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                {sujetVeille.titre}
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {sujetVeille.description}
              </p>
            </div>
          </div>

          {/* Enjeux */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-5 sm:mb-6">
            {sujetVeille.enjeux.map((enjeu) => (
              <div
                key={enjeu.titre}
                className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-400/20 transition-all duration-300"
              >
                <enjeu.icon className="w-4 h-4 text-cyan-400 mb-2" />
                <h4 className="text-white text-sm font-semibold mb-1">{enjeu.titre}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{enjeu.desc}</p>
              </div>
            ))}
          </div>

          {/* Points clés */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3">Points clés de la veille</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {sujetVeille.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-slate-300 text-xs sm:text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Articles */}
        <div
          ref={(el) => { cardsRef.current[2] = el; }}
          className="reveal mb-8 sm:mb-10"
          style={{ transitionDelay: "200ms" }}
        >
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-5 flex items-center gap-2">
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            Articles & Ressources
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {articles.map((article, i) => (
              <a
                key={i}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover rounded-xl p-4 sm:p-5 group block"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span
                    className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full border ${
                      categorieColors[article.categorie] ?? "bg-white/5 text-slate-400 border-white/10"
                    }`}
                  >
                    {article.categorie}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                </div>
                <h4 className="text-white text-sm font-medium mb-2 leading-snug group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {article.titre}
                </h4>
                <div className="flex items-center gap-3 text-slate-500 text-xs">
                  <span>{article.source}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Sources */}
        <div
          ref={(el) => { cardsRef.current[3] = el; }}
          className="reveal"
          style={{ transitionDelay: "300ms" }}
        >
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-5 flex items-center gap-2">
            <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            Sources suivies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {sources.map((source) => (
              <a
                key={source.nom}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-400/20 hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <Rss className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-white text-sm font-medium truncate group-hover:text-cyan-300 transition-colors">
                    {source.nom}
                  </p>
                  <p className="text-slate-600 text-xs">{source.type}</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-700 group-hover:text-cyan-400/50 transition-colors flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VeilleTechno;
