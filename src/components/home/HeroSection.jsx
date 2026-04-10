import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import DashboardMockup from "./DashboardMockup";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-40 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Commission-Free Platform
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              Make ₹50L Study Abroad Decisions With{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Data — Not Consultants.
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              AI-powered university matching, ROI forecasting, and transparent rankings. No commissions. No bias. Just clarity.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link to="/features/match-score" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 hover:shadow-xl hover:scale-[1.02] transition-all text-white rounded-full px-8 shadow-lg shadow-primary/25 h-12"
                >
                  Analyze My Profile <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-12 w-full sm:w-auto hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-all">
                  See How It Works
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              {["0% Commission", "Data-Driven Rankings", "Transparent Methodology"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <DashboardMockup />
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          {[
            { value: "25+", label: "Universities" },
            { value: "100%", label: "Transparent" },
            { value: "0%", label: "Commission" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-card border border-border rounded-2xl px-8 py-4 text-center min-w-[160px] shadow-sm"
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}