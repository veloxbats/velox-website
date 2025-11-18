import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { SupportModal } from "./SupportModal";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openModal, setOpenModal] = useState<string | null>(null);

  const supportContent: Record<string, React.ReactNode> = {
    shipping: (
      <div className="space-y-4">
        <p>
          We offer fast and reliable shipping to get your Velox bats to you
          quickly.
        </p>
        <h3 className="font-bold text-lg">Shipping Options</h3>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <strong>Standard Shipping:</strong> 5-7 business days ($9.99)
          </li>
          <li>
            <strong>Expedited Shipping:</strong> 2-3 business days ($24.99)
          </li>
          <li>
            <strong>Overnight Shipping:</strong> Next business day ($49.99)
          </li>
        </ul>
        <h3 className="font-bold text-lg pt-4">Tracking</h3>
        <p>
          All orders include tracking information. You'll receive a tracking
          number via email once your order ships.
        </p>
        <h3 className="font-bold text-lg pt-4">Free Shipping</h3>
        <p>Free standard shipping on orders over $150!</p>
      </div>
    ),
    returns: (
      <div className="space-y-4">
        <p>
          We want you to be completely satisfied with your Velox bat. If you
          need to return an item, here's how:
        </p>
        <h3 className="font-bold text-lg">Return Policy</h3>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <strong>30-Day Returns:</strong> Unused items can be returned within
            30 days for a full refund
          </li>
          <li>
            <strong>Defective Items:</strong> Manufacturing defects are covered
            under our warranty
          </li>
          <li>
            <strong>Shipping:</strong> Return shipping is free for defective
            items; standard returns have a $9.99 fee
          </li>
        </ul>
        <h3 className="font-bold text-lg pt-4">How to Return</h3>
        <ol className="space-y-2 list-decimal list-inside">
          <li>Contact our support team at returns@velox.com</li>
          <li>Receive a return shipping label</li>
          <li>Ship the item back to us</li>
          <li>Receive your refund within 5-7 business days</li>
        </ol>
      </div>
    ),
    warranty: (
      <div className="space-y-4">
        <p>Velox stands behind the quality of every bat we make.</p>
        <h3 className="font-bold text-lg">Limited 1-Year Warranty</h3>
        <p>
          All Velox cricket bats come with a 1-year limited manufacturer's
          warranty covering defects in materials and workmanship.
        </p>
        <h3 className="font-bold text-lg pt-4">What's Covered</h3>
        <ul className="space-y-2 list-disc list-inside">
          <li>Manufacturing defects in the willow or handle</li>
          <li>Cracks or splits due to material failure</li>
          <li>Hardware failures (binding, toe, etc.)</li>
        </ul>
        <h3 className="font-bold text-lg pt-4">What's Not Covered</h3>
        <ul className="space-y-2 list-disc list-inside">
          <li>Normal wear and tear from use</li>
          <li>Damage from misuse or negligence</li>
          <li>Environmental damage (extreme weather, moisture)</li>
          <li>Cosmetic damage only</li>
        </ul>
        <h3 className="font-bold text-lg pt-4">How to Claim</h3>
        <p>
          Contact us with your purchase proof and photos of the defect. We'll
          evaluate and provide a replacement or refund.
        </p>
      </div>
    ),
    faqs: (
      <div className="space-y-4">
        <div>
          <h3 className="font-bold text-lg mb-2">
            Which series is best for me?
          </h3>
          <p>
            <strong>Beginners:</strong> Strike Series offers great value and
            easy handling.
            <br />
            <strong>Intermediate:</strong> Impact Series provides better
            performance and durability.
            <br />
            <strong>Advanced:</strong> Velocity Series delivers
            professional-grade performance.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">
            Leather vs. Tennis Ball Bats
          </h3>
          <p>
            Leather ball bats are designed for traditional cricket with heavier
            balls. Tennis ball bats have a scoop design optimized for lighter,
            softer balls.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">How do I care for my bat?</h3>
          <p>
            Store in a dry place, avoid extreme temperatures, and use a bat
            cover when traveling. Apply linseed oil occasionally to maintain the
            willow.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">
            What's the break-in period?
          </h3>
          <p>
            New bats typically need 5-10 hours of use to perform optimally.
            Start with softer bowling and gradually increase intensity.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Do you offer bulk orders?</h3>
          <p>
            Yes! For team purchases and bulk orders, contact our sales team at
            sales@velox.com for special pricing.
          </p>
        </div>
      </div>
    ),
  };

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
                Performance-engineered cricket bats for players who demand
                excellence.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-black text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <nav className="space-y-2 flex flex-col">
              <Link
                to="/"
                className="text-black/70 hover:text-black transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                to="/category/leather-ball"
                className="text-black/70 hover:text-black transition-colors text-sm"
              >
                Products
              </Link>
              <Link
                to="/"
                className="text-black/70 hover:text-black transition-colors text-sm"
              >
                About
              </Link>
              <Link
                to="/"
                className="text-black/70 hover:text-black transition-colors text-sm"
              >
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
              <button
                onClick={() => setOpenModal("shipping")}
                className="text-black/70 hover:text-black transition-colors text-sm text-left"
              >
                Shipping Info
              </button>
              <button
                onClick={() => setOpenModal("returns")}
                className="text-black/70 hover:text-black transition-colors text-sm text-left"
              >
                Returns
              </button>
              <button
                onClick={() => setOpenModal("warranty")}
                className="text-black/70 hover:text-black transition-colors text-sm text-left"
              >
                Warranty
              </button>
              <button
                onClick={() => setOpenModal("faqs")}
                className="text-black/70 hover:text-black transition-colors text-sm text-left"
              >
                FAQs
              </button>
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

      {/* Support Modals */}
      <SupportModal
        isOpen={openModal === "shipping"}
        onClose={() => setOpenModal(null)}
        title="Shipping Information"
        content={supportContent.shipping}
      />
      <SupportModal
        isOpen={openModal === "returns"}
        onClose={() => setOpenModal(null)}
        title="Returns Policy"
        content={supportContent.returns}
      />
      <SupportModal
        isOpen={openModal === "warranty"}
        onClose={() => setOpenModal(null)}
        title="Warranty Information"
        content={supportContent.warranty}
      />
      <SupportModal
        isOpen={openModal === "faqs"}
        onClose={() => setOpenModal(null)}
        title="Frequently Asked Questions"
        content={supportContent.faqs}
      />
    </footer>
  );
};
