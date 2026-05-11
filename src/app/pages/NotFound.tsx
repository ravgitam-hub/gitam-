import { motion } from "motion/react";
import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-9xl md:text-[200px] font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            404
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">Page Not Found</h1>

          <p className="text-xl text-muted-foreground mb-12">
            Looks like this page took a wrong turn. Let's get you back on track!
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/">
              <button className="px-8 py-4 rounded-lg gradient-primary text-background font-semibold hover:scale-105 transition-transform flex items-center gap-2">
                <Home size={20} />
                Go Home
              </button>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="px-8 py-4 rounded-lg glass-card border-2 border-primary text-primary font-semibold hover:scale-105 transition-transform flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>

          <div className="mt-16 glass-card rounded-2xl p-8 border border-primary/30">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { to: "/about", label: "About" },
                { to: "/gokart", label: "Go-Kart" },
                { to: "/robotics", label: "Robotics" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.to} to={link.to}>
                  <div className="px-4 py-3 rounded-lg glass-card border border-primary/20 hover:border-primary/50 transition-all text-primary hover:scale-105">
                    {link.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
