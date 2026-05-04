import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeader from "../SectionHeader";
import { Target, Calculator, Shield, FileText, GitCompare, Trophy, Database, ArrowRight } from "lucide-react";

const features = [
  { icon: Target, title: "Match Score", desc: "AI-powered university matching based on your profile", path: "/features/match-score", color: "bg-primary/10 text-primary" },
  { icon: Calculator, title: "ROI Calculator", desc: "Calculate true return on your education investment", path: "/features/roi-calculator", color: "bg-primary/10 text-primary" },
  { icon: Shield, title: "Visa Risk Score", desc: "Assess visa approval probability before applying", path: "/features/visa-risk", color: "bg-primary/10 text-primary" },
  { icon: FileText, title: "Document Tracking", desc: "Track every document across all applications", path: "/features/document-tracking", color: "bg-primary/10 text-primary" },
  { icon: GitCompare, title: "University Comparison", desc: "Compare universities side by side on what matters", path: "/features/university-comparison", color: "bg-primary/10 text-primary" },
  { icon: Trophy, title: "Unbiased Rankings", desc: "Rankings built on data, not university payments", path: "/features/rankings", color: "bg-primary/10 text-primary" },
  { icon: Database, title: "University Data", desc: "Clean, standardized data for every university", path: "/features/university-data", color: "bg-primary/10 text-primary" },
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Features"
          title="Everything You Need to Decide With Confidence."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.path}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <Link
                to={f.path}
                className="group block bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/50 transition-all h-full"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${f.color.split(" ")[0]}`}>
                  <f.icon className={`w-5 h-5 ${f.color.split(" ")[1]}`} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{f.desc}</p>
                <span className="text-sm font-medium text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
