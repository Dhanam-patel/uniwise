import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center bg-gradient-to-br from-foreground to-foreground/90 rounded-3xl p-12 sm:p-16 relative overflow-hidden"
      >
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Make a Smarter Decision?
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Join thousands of students who chose their university with data, not sales pitches.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 hover:shadow-xl hover:-translate-y-1 transition-all text-white rounded-full px-8 shadow-lg shadow-primary/25"
            >
              Get Started Free <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 rounded-full px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}