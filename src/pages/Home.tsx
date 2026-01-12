import Hero from "../components/Hero";
import { useEffect } from "react";
import cybersecurityBackground from "@/assets/cybersecurity-background.jpg";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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
      <main className="relative z-10 animate-fade-in">
        <Hero />
      </main>
    </div>
  );
};

export default Home;
