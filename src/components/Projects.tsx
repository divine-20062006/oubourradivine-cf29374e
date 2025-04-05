
const projects = [
  {
    title: "SALAC - Résidence Coulomb",
    tags: ["Infrastructure", "Réseau", "Sécurité"],
    image: "/lovable-uploads/56506efd-d74a-4e7e-b1ae-27fd9053503d.png"
  },
  {
    title: "SALAC - Système de location",
    tags: ["Gestion locative", "Web", "Base de données"],
    image: "/lovable-uploads/2aaf47bc-72f5-4c0b-99e5-a5b163901b15.png"
  }
];

const Projects = () => {
  return (
    <section id="projets">
      <div className="section-container">
        <span className="title-badge">Réalisations</span>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
