import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import cybersecurityBackground from "@/assets/cybersecurity-background.jpg";
import { SidebarProvider, useSidebarState } from "./contexts/SidebarContext";

const queryClient = new QueryClient();

const MainContent = () => {
  const { collapsed } = useSidebarState();
  
  return (
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
      <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 relative z-10 ${
        collapsed ? "lg:ml-16" : "lg:ml-56"
      } ml-0`}>
        <div className="flex-grow">
          <Home />
        </div>
        <Footer />
      </div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SidebarProvider>
        <Toaster />
        <Sonner />
        <MainContent />
      </SidebarProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
