import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Handle smooth scroll for anchor links
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Initial check for hash on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  return (
    <main className="min-h-screen animate-fade-in">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
};

export default Home;
