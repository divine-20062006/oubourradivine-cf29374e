import Projects from "../components/Projects";
import cybersecurityBackground from "@/assets/cybersecurity-background.jpg";

const ProjectsPage = () => {
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
        <Projects />
      </main>
    </div>
  );
};

export default ProjectsPage;
