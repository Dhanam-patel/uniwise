import { motion } from "framer-motion";
import { Eye, Heart, Shield, Award } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import CTASection from "../components/CTASection";

const values = [
  { icon: Eye, title: "Transparency", desc: "Every score, ranking, and recommendation is fully explainable. No black boxes." },
  { icon: Heart, title: "Student-First", desc: "We don't get paid by universities. Our only client is the student." },
  { icon: Shield, title: "Data Integrity", desc: "We use verified, publicly available data. No self-reported or sponsored metrics." },
  { icon: Award, title: "Merit-Based", desc: "Rankings and matches are purely merit-based. No pay-to-play. Ever." },
];

const stats = [
  { value: "25+", label: "Universities Analyzed" },
  { value: "50+", label: "Matching Factors" },
  { value: "0%", label: "Commission Charged" },
  { value: "100%", label: "Transparent" },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-16 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
              About Us
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
              Building the Future of Study Abroad Decisions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe every student deserves unbiased, data-driven guidance for one of the biggest financial decisions of their life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Our Mission</span>
              <h2 className="text-3xl font-bold text-foreground mt-2 mb-4">
                Democratize Study Abroad Decision-Making
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The study abroad industry is worth billions, yet students — who spend ₹40-60L on average — have the least access to quality data and unbiased advice. Consultants earn commissions from universities, creating an inherent conflict of interest.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Uniwise was built to change that. We use AI and publicly available data to give every student the tools they need to make informed, data-backed decisions — without any commission bias.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border rounded-2xl p-5 text-center"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Values */}
          <SectionHeader
            badge="Our Values"
            title="What Drives Us"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-5 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                  <val.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{val.title}</h3>
                <p className="text-sm text-muted-foreground">{val.desc}</p>
              </motion.div>
            ))}
          </div>
          {/* Founder Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 pt-16 border-t border-border/50 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-primary/20">
              D
            </div>
            <h3 className="font-semibold text-xl mb-1 text-foreground">Dhanam Patel</h3>
            <p className="text-sm text-primary mb-4 font-medium uppercase tracking-wider">Founder & CEO</p>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg italic">
              "Every student deserves access to the same quality of decision-making tools that billion-dollar companies use. That's what Uniwise is building."
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}