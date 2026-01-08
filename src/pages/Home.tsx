import Hero from "../components/Hero";
import { useEffect } from "react";
import contactBackground from "@/assets/contact-background.jpeg";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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
      <main className="relative z-10 animate-fade-in">
        <Hero />
      </main>
    </div>
  );
};

export default Home;
