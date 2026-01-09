
const Education = () => {
  return (
    <section id="formation">
      <div className="section-container">
        <h2 className="section-title text-white text-center font-semibold">Formation</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 rounded-xl shadow-md animate-fade-up">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2 text-white">BTS SIO option SISR</h3>
              <p className="text-slate-300">2024 - 2026</p>
              <div className="mt-4">
                <h4 className="font-medium mb-2 text-slate-200">Compétences acquises :</h4>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Administration des systèmes et réseaux</li>
                  <li>Cybersécurité et protection des données</li>
                  <li>Virtualisation et solutions cloud</li>
                  <li>Support et maintenance informatique</li>
                  <li>Gestion de projet IT</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="font-medium mb-2 text-slate-200">Certifications :</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-slate-700/50 text-white rounded-full border border-slate-500/50">
                  MOOC ANSSI
                </span>
                <span className="px-4 py-2 bg-slate-700/50 text-white rounded-full border border-slate-500/50">
                  MOOC RGPD
                </span>
                <span className="px-4 py-2 bg-slate-700/50 text-white rounded-full border border-slate-500/50">
                  PIX
                </span>
                <span className="px-4 py-2 bg-slate-700/50 text-white rounded-full border border-slate-500/50">
                  Cisco NetAcad - Analyste Junior Cybersécurité
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
