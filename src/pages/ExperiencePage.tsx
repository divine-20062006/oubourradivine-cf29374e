import Experience from "../components/Experience";
import cybersecurityBackground from "@/assets/cybersecurity-background.jpg";

const ExperiencePage = () => {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${cybersecurityBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />
      <main className="relative z-10 pt-20">
        <Experience />
      </main>
    </div>
  );
};

export default ExperiencePage;
