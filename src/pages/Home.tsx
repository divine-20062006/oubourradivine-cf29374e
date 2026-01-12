import Hero from "../components/Hero";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main className="min-h-screen animate-fade-in">
      <Hero />
    </main>
  );
};

export default Home;