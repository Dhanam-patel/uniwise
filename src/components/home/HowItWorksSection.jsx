import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const steps = [
  { num: "01", title: "Enter Your Profile", desc: "Academic scores, budget, preferences, and career goals." },
  { num: "02", title: "Get Match Score", desc: "AI analyzes 50+ factors to rank universities for you." },
  { num: "03", title: "Analyze ROI", desc: "See 5-year earnings, break-even, and total cost projections." },
  { num: "04", title: "Check Visa Risk", desc: "Understand approval probability before you invest time." },
  { num: "05", title: "Compare & Decide", desc: "Side-by-side comparison on metrics that actually matter." },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge="How It Works"
          title="From Profile to Perfect University."
          description="Five steps to a data-backed decision."
        />

        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-5 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-sm font-bold text-white">{step.num}</span>
              </div>
              <div className="pt-1">
                <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}