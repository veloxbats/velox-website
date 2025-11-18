import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-black/10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-black">Velox</h3>
              <p className="text-sm text-black/60 leading-relaxed max-w-xs">
                Performance-engineered cricket bats for players who demand excellence.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-black text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <nav className="space-y-2 flex flex-col">
              <Link to="/" className="text-black/70 hover:text-black transition-colors text-sm">
                Home
              </Link>
              <Link to="/category/leather-ball" className="text-black/70 hover:text-black transition-colors text-sm">
                Products
              </Link>
              <Link to="/" className="text-black/70 hover:text-black transition-colors text-sm">
                About
              </Link>
              <Link to="/" className="text-black/70 hover:text-black transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-black text-sm uppercase tracking-wider">
              Support
            </h4>
            <nav className="space-y-2 flex flex-col">
              <Link to="/" className="text-black/70 hover:text-black transition-colors text-sm">
                Shipping Info
              </Link>
              <Link to="/" className="text-black/70 hover:text-black transition-colors text-sm">
                Returns
              </Link>
              <Link to="/" className="text-black/70 hover:text-black transition-colors text-sm">
                Warranty
              </Link>
              <Link to="/" className="text-black/70 hover:text-black transition-colors text-sm">
                FAQs
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-black text-sm uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-black/5 rounded-lg hover:bg-black/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} className="text-black" />
              </a>
              <a
                href="#"
                className="p-2 bg-black/5 rounded-lg hover:bg-black/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-black" />
              </a>
              <a
                href="#"
                className="p-2 bg-black/5 rounded-lg hover:bg-black/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} className="text-black" />
              </a>
              <a
                href="mailto:info@velox.com"
                className="p-2 bg-black/5 rounded-lg hover:bg-black/10 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} className="text-black" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-black/10 pt-8">
          {/* Bottom footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-black/60">
            <p>&copy; {currentYear} Velox. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/" className="hover:text-black transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="hover:text-black transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
