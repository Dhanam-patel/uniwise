import { motion } from "framer-motion";
import { UserPlus, Brain, Calculator, Shield, GitCompare, CheckCircle2, ArrowDown } from "lucide-react";
import CTASection from "../components/CTASection";

const steps = [
  {
    num: "01",
    icon: UserPlus,
    color: "from-violet-500 to-purple-600",
    glow: "shadow-purple-200",
    badge: "bg-purple-50 text-purple-700 border-purple-100",
    title: "Enter Your Profile",
    description: "Share your academic scores, test results, budget, country preferences, and career goals. The richer your profile, the smarter your match.",
    tags: ["GPA & Test Scores", "Budget Range", "Career Goals", "Country Preferences"],
  },
  {
    num: "02",
    icon: Brain,
    color: "from-rose-500 to-pink-600",
    glow: "shadow-rose-200",
    badge: "bg-rose-50 text-rose-700 border-rose-100",
    title: "Get Match Score",
    description: "Our AI processes 50+ weighted factors to compute a compatibility score between you and each university — no guesswork, pure data.",
    tags: ["Academic Fit", "Research Alignment", "Culture Match", "Admit Probability"],
  },
  {
    num: "03",
    icon: Calculator,
    color: "from-amber-500 to-orange-500",
    glow: "shadow-amber-200",
    badge: "bg-amber-50 text-amber-700 border-amber-100",
    title: "Analyze ROI",
    description: "Get 5-year earnings projections, break-even timelines, and full cost-of-attendance breakdowns so you invest — not gamble.",
    tags: ["5-Year Earnings", "Break-Even Point", "Scholarship Finder", "Total Cost"],
  },
  {
    num: "04",
    icon: Shield,
    color: "from-emerald-500 to-teal-600",
    glow: "shadow-emerald-200",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
    title: "Check Visa Risk",
    description: "Understand your visa approval probability per country, based on your profile, financials, and historical acceptance patterns.",
    tags: ["Country-Specific Risk", "Document Readiness", "Historical Rates", "Risk Mitigation"],
  },
  {
    num: "05",
    icon: GitCompare,
    color: "from-blue-500 to-indigo-600",
    glow: "shadow-blue-200",
    badge: "bg-blue-50 text-blue-700 border-blue-100",
    title: "Compare Universities",
    description: "Evaluate shortlisted universities side-by-side on every metric — ranking, cost, outcomes, research, and more — in one clean view.",
    tags: ["Side-by-Side View", "Weighted Scoring", "Peer Admit Profiles", "Program Deep-Dive"],
  },
  {
    num: "06",
    icon: CheckCircle2,
    color: "from-primary to-accent",
    glow: "shadow-primary/20",
    badge: "bg-primary/10 text-primary border-primary/20",
    title: "Make Your Decision",
    description: "With full data clarity, apply with confidence. No commission bias, no hidden agendas — just the right university for your future.",
    tags: ["Decision Summary", "Application Checklist", "Document Tracker", "Offer Comparison"],
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-6">
              How It Works
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-5 leading-[1.1] tracking-tight">
              From Profile to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Perfect University
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Six data-driven steps to find your ideal university. No guesswork. No bias. No commissions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 px-4 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-accent/20 to-transparent hidden sm:block" />

            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <div className="group flex gap-5 sm:gap-7">
                    {/* Icon */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg ${step.glow} group-hover:scale-105 transition-transform duration-300`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      {i < steps.length - 1 && (
                        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 sm:hidden">
                          <ArrowDown className="w-4 h-4 text-muted-foreground/40" />
                        </div>
                      )}
                    </div>

                    {/* Card */}
                    <div className="flex-1 bg-white border border-border rounded-2xl p-5 shadow-sm group-hover:shadow-md group-hover:-translate-y-0.5 transition-all duration-300">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <span className="text-[11px] font-bold tracking-widest text-muted-foreground uppercase">Step {step.num}</span>
                          <h3 className="text-lg font-bold text-foreground mt-0.5">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.tags.map((tag) => (
                          <span key={tag} className={`text-xs font-medium px-2.5 py-1 rounded-full border ${step.badge}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}