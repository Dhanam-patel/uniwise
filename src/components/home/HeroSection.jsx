import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ChatBubble from "./ChatBubble";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32 bg-gradient-to-b from-sky-50 via-white to-background">
      {/* Cloud SVG decorative elements */}
      <div className="absolute top-10 right-20 w-64 h-64 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="hsl(206 100% 50%)">
          <path d="M 50 100 Q 50 75, 75 75 Q 85 55, 110 55 Q 140 55, 150 75 Q 170 80, 170 105 Q 170 130, 150 135 L 70 135 Q 50 130, 50 100 Z" />
        </svg>
      </div>

      <div className="absolute bottom-0 -left-32 w-96 h-96 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="hsl(188 100% 50%)">
          <path d="M 40 110 Q 40 80, 70 75 Q 85 50, 115 50 Q 150 50, 160 75 Q 180 85, 180 115 Q 180 145, 160 150 L 60 150 Q 40 145, 40 110 Z" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading and intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            AI Study Abroad Assistant
          </button>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.2] mb-6 max-w-4xl mx-auto">
            Your All-Access Pass to Global Education
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            From first search to final visa — we&apos;ve got everything you need to succeed. Data-driven decisions, zero bias, unlimited possibilities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/features/match-score" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 transition-all text-primary-foreground rounded-lg px-8 shadow-md hover:shadow-lg h-12 font-semibold"
              >
                Start Your Journey <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <button className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors flex items-center gap-1">
              Talk to Uniwise Bot
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Chat bubble and info */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
          {/* Chat bubble on left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ChatBubble />
          </motion.div>

          {/* Right side stats/info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-primary">25+</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Universities Covered</h3>
                  <p className="text-muted-foreground text-sm">Across 10+ countries worldwide</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-accent">0%</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Commission Fees</h3>
                  <p className="text-muted-foreground text-sm">Completely transparent pricing</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-primary">100%</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Data-Driven</h3>
                  <p className="text-muted-foreground text-sm">No bias, pure facts and insights</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
