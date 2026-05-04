import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { X, Check } from "lucide-react";

const traditional = [
  "Earns commission from universities",
  "Recommends partner institutions",
  "Hidden financial incentives",
  "Opaque recommendation logic",
  "Sales-driven approach",
  "No ROI analysis provided",
];

const uniwise = [
  "0% commission — ever",
  "Ranks ALL universities equally",
  "Transparent scoring logic",
  "Explainable AI algorithms",
  "Student-first incentives",
  "Full ROI & break-even analysis",
];

export default function ComparisonSection() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          badge="Trust & Transparency"
          title="Consultancy vs Uniwise."
          description="See the difference when incentives are aligned with yours."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-card border border-border rounded-lg p-6"
          >
            <h3 className="text-lg font-semibold text-foreground mb-5">Traditional Consultancy</h3>
            <ul className="space-y-3">
              {traditional.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <X className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Uniwise */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-card border border-primary/20 rounded-lg p-6"
          >
            <h3 className="text-lg font-semibold text-foreground mb-5">Uniwise AI</h3>
            <ul className="space-y-3">
              {uniwise.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
