import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, UserPlus, Brain, Calculator, Shield, GitCompare } from "lucide-react";
import SectionHeader from "../SectionHeader";

const steps = [
  {
    num: "01",
    title: "Build your profile",
    desc: "Add academic scores, budget, preferences, and goals to start your personalized match.",
    path: "/features/match-score",
    icon: UserPlus,
    label: "Match Score",
  },
  {
    num: "02",
    title: "See your match score",
    desc: "AI ranks universities across academics, fit, and career potential.",
    path: "/features/match-score",
    icon: Brain,
    label: "Match Score",
  },
  {
    num: "03",
    title: "Analyze ROI",
    desc: "Forecast return on investment using tuition, earnings, and cost projections.",
    path: "/features/roi-calculator",
    icon: Calculator,
    label: "ROI Calculator",
  },
  {
    num: "04",
    title: "Check visa risk",
    desc: "Estimate approval chances before you submit your application.",
    path: "/features/visa-risk",
    icon: Shield,
    label: "Visa Risk",
  },
  {
    num: "05",
    title: "Compare and decide",
    desc: "Weigh universities side-by-side across fit, cost, and outcomes.",
    path: "/features/university-comparison",
    icon: GitCompare,
    label: "University Comparison",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="How It Works"
          title="Turn your profile into the right university choice."
          description="Every step is connected to a feature that helps you make a smarter application decision."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
              >
                <Link
                  to={step.path}
                  className="group block h-full rounded-[1.75rem] border border-border bg-card p-6 shadow-sm transition hover:shadow-lg hover:border-primary/30"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                      Step {step.num}
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="text-sm font-semibold text-primary">{step.label}</div>
                    <h3 className="mt-3 text-2xl font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">{step.desc}</p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                    <span className="transition duration-200 group-hover:translate-x-1">Go to {step.label}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/features/match-score"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:opacity-95"
          >
            Start your profile assessment
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/features/university-comparison"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/30"
          >
            Compare universities
          </Link>
        </div>
      </div>
    </section>
  );
}