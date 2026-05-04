import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { Target, Calculator, ShieldCheck, Heart } from "lucide-react";

const solutions = [
  {
    icon: Target,
    title: "Transparent Match Score",
    description: "See exactly why a university matches your profile — with a full breakdown of every scoring factor.",
  },
  {
    icon: Calculator,
    title: "ROI Calculator",
    description: "Calculate total cost, break-even years, and 5-year earnings projection for every university.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Admit Data",
    description: "See real profiles — admits and rejects — from students with backgrounds like yours.",
  },
  {
    icon: Heart,
    title: "Commission-Free Model",
    description: "We don't get paid by universities. Our incentives are aligned with yours. Period.",
  },
];

export default function SolutionSection() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-background via-sky-50/30 to-background overflow-hidden">
      {/* Decorative clouds */}
      <div className="absolute bottom-0 -left-20 w-96 h-96 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="hsl(183 100% 50%)">
          <path d="M 40 110 Q 40 85, 65 80 Q 75 55, 100 55 Q 130 55, 140 80 Q 160 85, 160 110 Q 160 135, 140 140 L 60 140 Q 40 135, 40 110 Z" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          badge="The Solution"
          title="Built for Students. Not Universities."
          description="Every feature we build starts with one question: Does this help the student make a better decision?"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      </section>
  );
}
