
const projects = [
  {
    title: "SALAC - Résidence Coulomb",
    description: "Conception et déploiement d'une infrastructure réseau pour une résidence étudiante, incluant la configuration du système de sécurité et d'accès internet.",
    tags: ["Infrastructure", "Réseau", "Sécurité"],
    image: "/lovable-uploads/56506efd-d74a-4e7e-b1ae-27fd9053503d.png"
  },
  {
    title: "Sécurisation Système",
    description: "Audit et renforcement de la sécurité d'un parc informatique, mise en place de solutions de protection et de surveillance.",
    tags: ["Cybersécurité", "Monitoring", "Firewall"],
  },
  {
    title: "Cloud Migration",
    description: "Migration des services d'entreprise vers le cloud, optimisation des ressources et mise en place de la redondance.",
    tags: ["Azure", "AWS", "Cloud Computing"],
  },
];

const Projects = () => {
  return (
    <section id="projets">
      <div className="section-container">
        <span className="title-badge">Réalisations</span>
        <h2 className="section-title">Projets Significatifs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {project.image && (
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
