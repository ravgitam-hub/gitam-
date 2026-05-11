import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/gokart", label: "Go-Kart" },
  { path: "/robotics", label: "Robotics" },
  { path: "/achievements", label: "Achievements" },
  { path: "/sponsorship", label: "Sponsorship" },
  { path: "/gallery", label: "Gallery" },
  { path: "/events", label: "Events" },
  { path: "/contact", label: "Contact" },
];

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/src/imports/WhatsApp_Image_2026-05-09_at_16.30.32-3.jpeg"
              alt="RAV Logo"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-primary">RAV</div>
              <div className="text-xs text-muted-foreground">Robotics & Automation</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm transition-all ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/10 neon-glow"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-card border-t border-primary/20"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-md transition-all ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10 neon-glow"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
