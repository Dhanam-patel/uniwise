import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { AlertTriangle, DollarSign, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Commission Bias",
    description: "Most platforms recommend universities that pay them — not what's best for you.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: DollarSign,
    title: "Hidden Costs",
    description: "Students spend ₹40–60L without clear ROI projections or financial clarity.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: TrendingDown,
    title: "Sales-Driven Advice",
    description: "Consultants push 'safe' colleges instead of optimal ones for your career.",
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="The Problem"
          title="The Study Abroad Industry Has a Trust Problem."
          description="Billions of dollars flow through a system designed to benefit everyone except the student."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-background border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className={`w-12 h-12 ${problem.bg} rounded-xl flex items-center justify-center mb-4`}>
                <problem.icon className={`w-6 h-6 ${problem.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}