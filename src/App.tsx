import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import ContactPage from "./pages/ContactPage";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import cybersecurityBackground from "@/assets/cybersecurity-background.jpg";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div 
          className="min-h-screen relative flex"
          style={{
            backgroundImage: `url(${cybersecurityBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Overlay global */}
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm pointer-events-none" />
          
          <Sidebar />
          <div className="flex-1 ml-16 md:ml-56 flex flex-col min-h-screen transition-all duration-300 relative z-10">
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/competences" element={<SkillsPage />} />
                <Route path="/projets" element={<ProjectsPage />} />
                <Route path="/experiences" element={<ExperiencePage />} />
                <Route path="/formation" element={<EducationPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
