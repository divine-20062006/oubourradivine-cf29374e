const Education = () => {
  return (
    <section id="formation" className="bg-secondary">
      <div className="section-container">
        <span className="title-badge">Parcours</span>
        <h2 className="section-title">Formation</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-sm animate-fade-up">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2">BTS SIO option SISR</h3>
              <p className="text-gray-600">2024 - 2026</p>
              <div className="mt-4">
                <h4 className="font-medium mb-2">Compétences acquises :</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Administration des systèmes et réseaux</li>
                  <li>Cybersécurité et protection des données</li>
                  <li>Virtualisation et solutions cloud</li>
                  <li>Support et maintenance informatique</li>
                  <li>Gestion de projet IT</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Certifications en cours :</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">
                  CISCO CCNA
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">
                  Microsoft Azure
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">
                  CompTIA Security+
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;