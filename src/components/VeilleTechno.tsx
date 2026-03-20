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
  Analyse: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  Rapport: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  Recherche: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  Actualité: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  Tutoriel: "text-rose-400 bg-rose-500/10 border-rose-500/20",
};

const VeilleTechno = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    cardsRef.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="veille" className="py-16 sm:py-20 lg:py-24">
      <div className="section-container">
        {/* Header — same pattern as other sections */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-cyan-400/70 font-medium mb-3">
            Veille technologique
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            Veille Technologique
          </h2>
          <div className="section-divider mb-5" />
          <p className="text-slate-400 text-base sm:text-lg max-w-lg mx-auto font-light">
            Une veille régulière sur la cybersécurité et les technologies émergentes
          </p>
        </div>

        <div className="space-y-5 sm:space-y-6">
          {/* Sujet principal — styled like Education BTS card */}
          <div
            ref={(el) => { cardsRef.current[0] = el; }}
            className="reveal glass-card-hover rounded-2xl p-5 sm:p-6 lg:p-8 group"
            style={{ transitionDelay: "0ms" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/30 self-start">
                <BookOpen className="w-7 h-7 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-cyan-100 transition-colors">
                  {sujetVeille.titre}
                </h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  {sujetVeille.description}
                </p>
              </div>
            </div>

            {/* Enjeux — grid like certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6">
              {sujetVeille.enjeux.map((enjeu) => (
                <div
                  key={enjeu.titre}
                  className="flex items-start gap-3 px-4 py-3 bg-slate-800/50 rounded-xl border border-slate-700/40
                             hover:border-cyan-400/40 hover:bg-slate-800/80 transition-all duration-300"
                >
                  <div className="p-1.5 rounded-lg bg-cyan-400/10 mt-0.5">
                    <enjeu.icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">{enjeu.titre}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed mt-0.5">{enjeu.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Points clés — like skills list in Education */}
            <div>
              <h4 className="font-medium mb-3 text-slate-200 text-sm uppercase tracking-wider">Points clés de la veille</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {sujetVeille.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-slate-300 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Articles — card grid like Skills */}
          <div
            ref={(el) => { cardsRef.current[1] = el; }}
            className="reveal glass-card-hover rounded-2xl p-5 sm:p-6 lg:p-8"
            style={{ transitionDelay: "120ms" }}
          >
            <h4 className="font-medium mb-4 text-slate-200 text-sm uppercase tracking-wider">Articles & Ressources</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {articles.map((article, i) => (
                <a
                  key={i}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-2.5 px-4 py-3 bg-slate-800/50 rounded-xl border border-slate-700/40
                             hover:border-cyan-400/40 hover:bg-slate-800/80 transition-all duration-300 group/article"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full border ${categorieColors[article.categorie] ?? "text-slate-400 bg-slate-800/50 border-slate-700/40"}`}>
                      {article.categorie}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover/article:text-cyan-400 transition-colors flex-shrink-0" />
                  </div>
                  <h5 className="text-white text-sm font-medium leading-snug group-hover/article:text-cyan-100 transition-colors line-clamp-2">
                    {article.titre}
                  </h5>
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

          {/* Sources — like certifications grid */}
          <div
            ref={(el) => { cardsRef.current[2] = el; }}
            className="reveal glass-card-hover rounded-2xl p-5 sm:p-6 lg:p-8"
            style={{ transitionDelay: "240ms" }}
          >
            <h4 className="font-medium mb-4 text-slate-200 text-sm uppercase tracking-wider">Sources suivies</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {sources.map((source) => (
                <a
                  key={source.nom}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-slate-800/50 rounded-xl border border-slate-700/40
                             hover:border-emerald-400/40 hover:bg-slate-800/80 transition-all duration-300 group/source"
                >
                  <div className="p-1.5 rounded-lg bg-emerald-400/10">
                    <Globe className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white text-sm font-medium truncate group-hover/source:text-emerald-100 transition-colors">
                      {source.nom}
                    </p>
                    <p className="text-slate-500 text-xs">{source.type}</p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-700 group-hover/source:text-emerald-400/50 transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VeilleTechno;
