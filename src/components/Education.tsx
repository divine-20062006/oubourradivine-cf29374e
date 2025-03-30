
const Education = () => {
  return (
    <section id="formation" className="bg-secondary">
      <div className="section-container">
        <span className="title-badge">Parcours</span>
        <h2 className="section-title text-[#0AFFFF]">Formation</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 rounded-xl shadow-md animate-fade-up">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2 text-[#0AFFFF]">BTS SIO option SISR</h3>
              <p className="text-[#D946EF]">2024 - 2026</p>
              <div className="mt-4">
                <h4 className="font-medium mb-2 text-[#F97316]">Compétences acquises :</h4>
                <ul className="list-disc list-inside text-foreground space-y-2">
                  <li>Administration des systèmes et réseaux</li>
                  <li>Cybersécurité et protection des données</li>
                  <li>Virtualisation et solutions cloud</li>
                  <li>Support et maintenance informatique</li>
                  <li>Gestion de projet IT</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2 text-[#F97316]">Certifications en cours :</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#0AFFFF]/20 text-[#0AFFFF] rounded-full border border-[#0AFFFF]/50">
                  CISCO CCNA
                </span>
                <span className="px-4 py-2 bg-[#D946EF]/20 text-[#D946EF] rounded-full border border-[#D946EF]/50">
                  Microsoft Azure
                </span>
                <span className="px-4 py-2 bg-[#F97316]/20 text-[#F97316] rounded-full border border-[#F97316]/50">
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
