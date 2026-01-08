import Education from "../components/Education";
import contactBackground from "@/assets/contact-background.jpeg";

const EducationPage = () => {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${contactBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />
      <main className="relative z-10 pt-20">
        <Education />
      </main>
    </div>
  );
};

export default EducationPage;
