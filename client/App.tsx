import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Footer } from "./components/Footer";

const queryClient = new QueryClient();

const Header = () => (
  <header className="w-full bg-white border-b border-black/10 sticky top-0 z-50 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
      <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <span className="text-2xl font-bold text-black">Velox</span>
      </Link>
      <nav className="hidden md:flex items-center gap-8">
        <Link to="/" className="text-black/70 hover:text-black transition-colors font-medium">
          Home
        </Link>
        <Link to="/category/leather-ball" className="text-black/70 hover:text-black transition-colors font-medium">
          Products
        </Link>
        <Link to="/" className="text-black/70 hover:text-black transition-colors font-medium">
          About
        </Link>
        <Link to="/" className="text-black/70 hover:text-black transition-colors font-medium">
          Contact
        </Link>
      </nav>
    </div>
  </header>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <div className="min-h-screen flex flex-col">
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
