import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  { name: "Match Score", path: "/features/match-score" },
  { name: "ROI Calculator", path: "/features/roi-calculator" },
  { name: "Visa Risk Score", path: "/features/visa-risk" },
  { name: "Document Tracking", path: "/features/document-tracking" },
  { name: "University Comparison", path: "/features/university-comparison" },
  { name: "Rankings", path: "/features/rankings" },
  { name: "University Data", path: "/features/university-data" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">U</span>
            </div>
            <span className="text-lg font-bold text-foreground">
              Uniwise<span className="text-primary">.ai</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setFeaturesOpen(true)}
              onMouseLeave={() => setFeaturesOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg">
                Features <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {featuresOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-56 bg-card rounded-xl shadow-lg border border-border p-2"
                  >
                    {features.map((f) => (
                      <Link
                        key={f.path}
                        to={f.path}
                        className={`block px-3 py-2 text-sm rounded-lg transition-colors ${location.pathname === f.path
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          }`}
                      >
                        {f.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link to="/how-it-works" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg">
              How It Works
            </Link>
            <Link to="/why-honest" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg">
              Why Uniwise?
            </Link>
            <Link to="/about" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg">
              About
            </Link>
            <Link to="/community" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg">
              Community
            </Link>
            <Link to="/contact" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg">
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button size="sm" className="bg-primary hover:bg-primary/90 transition-all text-primary-foreground rounded-lg px-5 shadow-sm hover:shadow-md">
              Get Started
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">Features</p>
              {features.map((f) => (
                <Link
                  key={f.path}
                  to={f.path}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg"
                >
                  {f.name}
                </Link>
              ))}
              <hr className="my-3 border-border" />
              <Link to="/how-it-works" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium">How It Works</Link>
              <Link to="/why-honest" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium">Why Uniwise?</Link>
              <Link to="/about" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium">About</Link>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium">Contact</Link>
              <div className="pt-3">
                <Link to="/community" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium">Community</Link>
                <Button className="w-full bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
