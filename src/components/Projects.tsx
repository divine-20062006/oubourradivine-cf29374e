import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FileText, ExternalLink, X } from "lucide-react";

const projects = [
  {
    id: "salac",
    title: "Projet SALAC",
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
      technologies: [
        "PHP",
        "SQL / MySQL",
        "Gestion des sessions utilisateurs",
        "Requêtes préparées pour sécuriser les formulaires"
      ],
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
    id: "glpi",
    title: "Projet scolaire – Gestion d'un parc informatique GLPI",
    tags: ["GLPI", "Gestion de parc", "IT Asset Management"],
    image: "/lovable-uploads/glpi-project-professional.jpg",
    hasDocumentation: false
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projets">
      <div className="section-container">
        <span className="title-badge">Réalisations</span>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group glass-card rounded-xl overflow-hidden hover:shadow-lg transition-shadow animate-fade-up ${project.hasDocumentation ? 'cursor-pointer' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => project.hasDocumentation && setSelectedProject(project)}
            >
              {project.image && (
                <div className="aspect-video w-full overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  {project.hasDocumentation && (
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white flex items-center gap-2 text-lg font-medium">
                        <FileText className="w-5 h-5" />
                        Voir la documentation
                      </span>
                    </div>
                  )}
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#0AFFFF] transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Documentation */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-700 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#0AFFFF] flex items-center gap-3">
              <FileText className="w-6 h-6" />
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedProject?.documentation && (
            <div className="space-y-6 mt-4">
              {/* Contexte */}
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <h4 className="text-lg font-semibold text-[#00FF41] mb-2">Contexte</h4>
                <p className="text-slate-300">{selectedProject.documentation.context}</p>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-lg font-semibold text-[#0AFFFF] mb-2">Description</h4>
                <p className="text-slate-300 leading-relaxed">{selectedProject.documentation.description}</p>
              </div>

              {/* Objectifs */}
              <div>
                <h4 className="text-lg font-semibold text-[#0AFFFF] mb-2">Objectifs du projet</h4>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  {selectedProject.documentation.objectives.map((obj, i) => (
                    <li key={i}>{obj}</li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-[#0AFFFF] mb-2">Technologies utilisées</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.documentation.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-700/50 text-white rounded-full text-sm border border-slate-600/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Fonctionnalités */}
              <div>
                <h4 className="text-lg font-semibold text-[#0AFFFF] mb-2">Fonctionnalités principales</h4>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  {selectedProject.documentation.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </div>

              {/* Compétences */}
              <div>
                <h4 className="text-lg font-semibold text-[#0AFFFF] mb-2">Compétences développées</h4>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  {selectedProject.documentation.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>

              {/* Résultat */}
              <div className="bg-slate-800/50 rounded-lg p-4 border border-[#00FF41]/30">
                <h4 className="text-lg font-semibold text-[#00FF41] mb-2">Résultat</h4>
                <p className="text-slate-300">{selectedProject.documentation.result}</p>
              </div>

              {/* Bouton PDF */}
              <a 
                href={selectedProject.documentation.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0AFFFF]/20 hover:bg-[#0AFFFF]/30 text-[#0AFFFF] rounded-lg border border-[#0AFFFF]/50 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                Télécharger la documentation PDF
              </a>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
