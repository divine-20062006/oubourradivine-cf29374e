
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import BackgroundElement from "../components/BackgroundElement";

const Index = () => {
  return (
    <div className="min-h-screen">
      <BackgroundElement />
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
