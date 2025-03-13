
import Hero from "../components/Hero";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Réinitialiser le scroll en haut de la page lors du chargement
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main className="animate-fade-in">
      <Hero />
    </main>
  );
};

export default Home;
