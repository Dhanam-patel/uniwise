import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-background via-sky-50/30 to-background overflow-hidden">
      {/* Decorative clouds */}
      <div className="absolute top-20 right-10 w-80 h-80 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="hsl(203 89% 53%)">
          <path d="M 50 100 Q 50 75, 75 75 Q 85 55, 110 55 Q 140 55, 150 75 Q 170 80, 170 105 Q 170 130, 150 135 L 70 135 Q 50 130, 50 100 Z" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative max-w-4xl mx-auto text-center bg-card border border-border rounded-lg p-12 sm:p-16 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      >
        {/* Subtle gradient accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Make a Smarter Decision?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Join thousands of students who chose their university with data, not sales pitches.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 transition-all text-primary-foreground rounded-lg px-8 shadow-md hover:shadow-lg"
            >
              Get Started Free <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="rounded-lg px-8 border-border hover:bg-muted">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
