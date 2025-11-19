import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import Explore from "./pages/Explore";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Category from "./pages/Category";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Footer } from "./components/Footer";

const queryClient = new QueryClient();

const Header = () => (
  <header className="w-full bg-white border-b border-black/10 sticky top-0 z-50 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
      <Link
        to="/"
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <span className="text-2xl font-bold text-black">Velox</span>
      </Link>
      <nav className="hidden md:flex items-center gap-8">
        <Link
          to="/"
          className="text-black/70 hover:text-black transition-colors font-medium"
        >
          Home
        </Link>
        <Link
          to="/shop"
          className="text-black/70 hover:text-black transition-colors font-medium"
        >
          Products
        </Link>
        <Link
          to="/about"
          className="text-black/70 hover:text-black transition-colors font-medium"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-black/70 hover:text-black transition-colors font-medium"
        >
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
      <BrowserRouter basename={import.meta.env.PROD ? "/velox-website" : "/"}>
        <Header />
        <div className="min-h-screen flex flex-col">
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/category/:category" element={<Category />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
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
