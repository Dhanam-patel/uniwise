import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Uniwise showed me universities I hadn't even considered. The ROI calculator saved me from a ₹15L mistake.",
    name: "Priya S.",
    role: "MS CS — Georgia Tech",
  },
  {
    quote: "No consultant ever showed me break-even analysis. Uniwise did it in 30 seconds.",
    name: "Rahul M.",
    role: "MBA — Schulich",
  },
  {
    quote: "The visa risk score gave me confidence to apply to Germany. I got my visa on the first attempt.",
    name: "Ananya K.",
    role: "MS Data Science — TU Munich",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Testimonials"
          title="Trusted by Students Worldwide."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-5 italic">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
