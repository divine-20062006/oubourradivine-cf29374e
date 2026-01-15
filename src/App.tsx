import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import cybersecurityBackground from "@/assets/cybersecurity-background.jpg";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
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
            <Home />
          </div>
          <Footer />
        </div>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
