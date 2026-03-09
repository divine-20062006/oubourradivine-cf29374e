import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FileText, ExternalLink, Tag, ChevronRight } from "lucide-react";
import openvpnImage from "@/assets/openvpn-project.png";
import monitoringImage from "@/assets/monitoring-project.jpg";
import wifiImage from "@/assets/wifi-project.jpg";

const projects = [
  {
    id: "salac",
    title: "Projet SALAC",
    subtitle: "Application web immobilière sécurisée",
    tags: ["PHP", "MySQL", "Sécurité Web"],
    image: "/lovable-uploads/56506efd-d74a-4e7e-b1ae-27fd9053503d.png",
    hasDocumentation: true,
    documentation: {
      description: "Le projet SALAC consiste en la création d'un site web pour une agence immobilière fictive spécialisée dans la location d'appartements. L'objectif était de développer une application web permettant la gestion et l'affichage des annonces immobilières, tout en assurant la sécurité des données et des accès.",
      context: "Projet réalisé dans le cadre de ma formation en BTS SIO option SISR",
      objectives: [
        "Concevoir une plateforme web dynamique",
        "Mettre en place un système d'authentification sécurisé",
        "Gérer les données via une base de données SQL",
        "Appliquer les bonnes pratiques de sécurité web"
      ],
      technologies: ["PHP", "SQL / MySQL", "Gestion des sessions utilisateurs", "Requêtes préparées pour sécuriser les formulaires"],
      features: [
        "Affichage des biens immobiliers disponibles",
        "Ajout, modification et suppression des annonces",
        "Authentification sécurisée des agents immobiliers",
        "Gestion des utilisateurs et des annonces en base de données"
      ],
      skills: [
        "Sécurisation des accès et des données",
        "Organisation et gestion d'une base de données",
        "Respect des bonnes pratiques de développement web"
      ],
      result: "Une application web fonctionnelle, sécurisée et adaptée aux besoins d'une agence immobilière fictive, démontrant mes compétences techniques acquises en BTS SIO option SISR.",
      pdfUrl: "/documents/SALAC_portfolio.pdf"
    }
  },
  {
    id: "openvpn",
    title: "Serveur VPN sur Debian 13",
    subtitle: "VPN sécurisé avec authentification LDAP",
    tags: ["OpenVPN", "Debian", "LDAP", "Sécurité"],
    image: openvpnImage,
    hasDocumentation: true,
    documentation: {
      description: "Mise en place d'un VPN sécurisé pour permettre aux utilisateurs distants d'accéder au réseau interne de l'entreprise avec authentification LDAP.",
      context: "Projet réalisé dans le cadre de ma formation en BTS SIO option SISR - Deuxième Année",
      objectives: [
        "Mettre en place un VPN sécurisé avec OpenVPN",
        "Configurer l'authentification centralisée via LDAP/Active Directory",
        "Assurer la haute disponibilité avec double IP publique",
        "Sécuriser le trafic avec chiffrement fort AES-256-GCM"
      ],
      technologies: ["Debian 13 (Trixie)", "OpenVPN (Full Tunnel)", "Proxmox VE", "LDAP/Active Directory (RFC 2307)", "PKI / SSL/TLS", "AES-256-GCM + SHA256"],
      features: [
        "Serveur VPN avec support IPv4/IPv6",
        "Authentification centralisée LDAP avec gestion des groupes vpnAccess",
        "Routage IP et NAT pour accès Internet",
        "Haute disponibilité avec failover automatique",
        "Génération automatisée de profils clients .ovpn"
      ],
      skills: [
        "Linux / Debian",
        "Réseaux : VPN, NAT, routage",
        "Sécurité : PKI, SSL/TLS, LDAP, chiffrement AES-256",
        "Virtualisation : Proxmox VE",
        "Documentation technique"
      ],
      result: "VPN complet et sécurisé avec authentification centralisée Active Directory, chiffrement fort, haute disponibilité et accès distant fiable pour tous les utilisateurs.",
      pdfUrl: "/documents/mission1_portfolio.pdf"
    }
  },
  {
    id: "monitoring",
    title: "Script de monitoring Python",
    subtitle: "Surveillance temps réel de l'infrastructure",
    tags: ["Python", "Monitoring", "Automatisation"],
    image: monitoringImage,
    hasDocumentation: true,
    documentation: {
      description: "Développement d'un script Python permettant de surveiller en temps réel l'état des serveurs et des services critiques de l'infrastructure, avec génération d'alertes automatiques.",
      context: "Projet réalisé lors de mon stage chez SHOP Application - Deuxième Année BTS SIO option SISR",
      objectives: [
        "Automatiser la surveillance des serveurs et services",
        "Détecter les anomalies et pannes en temps réel",
        "Générer des rapports et alertes automatiques",
        "Optimiser la réactivité de l'équipe IT"
      ],
      technologies: ["Python 3", "Bibliothèques : psutil, requests, smtplib", "API REST", "Cron / Planification de tâches", "SMTP pour notifications email"],
      features: [
        "Surveillance CPU, RAM, disque et réseau",
        "Vérification de la disponibilité des services (HTTP, SSH, DNS)",
        "Envoi d'alertes email en cas d'anomalie",
        "Journalisation des événements",
        "Dashboard simple pour visualisation"
      ],
      skills: [
        "Programmation Python",
        "Administration système Linux",
        "Scripting et automatisation",
        "Monitoring et supervision",
        "Gestion des alertes et notifications"
      ],
      result: "Script de monitoring fonctionnel permettant une surveillance proactive de l'infrastructure, réduisant le temps de détection des incidents et améliorant la réactivité de l'équipe."
    }
  },
  {
    id: "glpi",
    title: "Gestion de parc GLPI",
    subtitle: "IT Asset Management scolaire",
    tags: ["GLPI", "Gestion de parc", "ITSM"],
    image: "/lovable-uploads/glpi-project-professional.jpg",
    hasDocumentation: false
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
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
    <section id="projets" className="py-16 sm:py-20 lg:py-24">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-cyan-400/70 font-medium mb-3">
            Réalisations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            Projets
          </h2>
          <div className="section-divider mb-5" />
          <p className="text-slate-400 text-base sm:text-lg max-w-lg mx-auto font-light">
            Projets techniques et réalisations professionnelles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`reveal group rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 backdrop-blur-sm
                         hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-500
                         ${project.hasDocumentation ? 'cursor-pointer' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => project.hasDocumentation && setSelectedProject(project)}
            >
              {/* Image */}
              {project.image && (
                <div className="aspect-video w-full overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                  {project.hasDocumentation && (
                    <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="flex items-center gap-2 text-white font-medium bg-cyan-500/20 border border-cyan-400/40 rounded-full px-5 py-2.5 backdrop-blur-sm text-sm">
                        <FileText className="w-4 h-4 text-cyan-400" />
                        Voir la documentation
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-3">{project.subtitle}</p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>

                {project.hasDocumentation && (
                  <div className="mt-4 flex items-center gap-1 text-cyan-400/60 text-xs group-hover:text-cyan-400 transition-colors">
                    <span>Consulter le projet</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="w-[95vw] max-w-3xl max-h-[88vh] overflow-y-auto bg-slate-900/95 border-slate-700/50 text-white mx-2 sm:mx-auto backdrop-blur-md">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl font-bold text-cyan-400 flex items-center gap-2.5 pr-8">
              <div className="p-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20">
                <FileText className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
              </div>
              <span className="line-clamp-2">{selectedProject?.title}</span>
            </DialogTitle>
          </DialogHeader>

          {selectedProject?.documentation && (
            <div className="space-y-5 mt-2">
              <div className="bg-slate-800/50 rounded-xl p-4 border border-emerald-400/20">
                <h4 className="text-sm font-semibold text-emerald-400 mb-1.5 uppercase tracking-wider">Contexte</h4>
                <p className="text-slate-300 text-sm">{selectedProject.documentation.context}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">Description</h4>
                <p className="text-slate-300 leading-relaxed text-sm">{selectedProject.documentation.description}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-cyan-400 mb-2.5 uppercase tracking-wider">Objectifs</h4>
                <ul className="space-y-1.5">
                  {selectedProject.documentation.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-cyan-400 mb-2.5 uppercase tracking-wider">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.documentation.technologies.map((tech, i) => (
                    <span key={i} className="tag-pill">{tech}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-cyan-400 mb-2.5 uppercase tracking-wider">Fonctionnalités</h4>
                <ul className="space-y-1.5">
                  {selectedProject.documentation.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-cyan-400 mb-2.5 uppercase tracking-wider">Compétences développées</h4>
                <ul className="space-y-1.5">
                  {selectedProject.documentation.skills.map((skill, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 border border-emerald-400/20">
                <h4 className="text-sm font-semibold text-emerald-400 mb-1.5 uppercase tracking-wider">Résultat</h4>
                <p className="text-slate-300 text-sm">{selectedProject.documentation.result}</p>
              </div>

              {selectedProject.documentation.pdfUrl && (
                <a
                  href={selectedProject.documentation.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-400
                             rounded-xl border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Télécharger la documentation PDF
                </a>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
