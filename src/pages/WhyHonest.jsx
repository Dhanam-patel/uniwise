import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Shield, CheckCircle2, XCircle, Eye, Lock, Code, Heart, DollarSign, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyHonestPage = () => (
  <div>
    <section className="py-16 pt-28">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeader
          badge="Our Promise"
          title="Why Uniwise is 100% Honest."
          description="Understanding the incentive problem in study abroad — and how we fix it."
        />

        {/* How consultancies earn */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-card border border-border rounded-2xl p-8 mb-8">
          <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-rose-500" /> How Traditional Consultancies Earn
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Most study abroad platforms earn 15–30% commission from universities for every student they enroll. This means their financial incentive is to recommend the university that pays them the most — not the one that's best for you.
          </p>
          <div className="bg-rose-50 border border-rose-500/10 rounded-2xl p-6">
            <h4 className="font-semibold text-sm mb-3 text-rose-500">The Conflict of Interest</h4>
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
              <div className="text-center p-3 rounded-xl bg-card border border-border flex-1 w-full">
                <Users className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                <p className="font-medium text-foreground">University</p>
                <p className="text-xs text-muted-foreground">Pays commission</p>
              </div>
              <ArrowRight className="w-5 h-5 text-rose-500 rotate-90 md:rotate-0" />
              <div className="text-center p-3 rounded-xl bg-card border border-border flex-1 w-full">
                <DollarSign className="w-6 h-6 text-rose-500 mx-auto mb-2" />
                <p className="font-medium text-foreground">Consultant</p>
                <p className="text-xs text-muted-foreground">Earns from university</p>
              </div>
              <ArrowRight className="w-5 h-5 text-rose-500 rotate-90 md:rotate-0" />
              <div className="text-center p-3 rounded-xl bg-card border border-border flex-1 w-full">
                <Heart className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                <p className="font-medium text-foreground">Student</p>
                <p className="text-xs text-muted-foreground">Gets biased advice</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* How Uniwise works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-emerald-500/20 rounded-2xl p-8 mb-8"
        >
          <h3 className="font-semibold text-xl mb-4 flex items-center gap-2 text-foreground">
            <Shield className="w-6 h-6 text-emerald-500" /> How Uniwise Makes Money
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Uniwise operates on a transparent subscription model. Students pay for premium features directly — ensuring our only incentive is to help you make the best decision possible.
          </p>
          <div className="bg-emerald-50 border border-emerald-500/10 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
              <div className="text-center p-3 rounded-xl bg-card border border-border flex-1 w-full">
                <Heart className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
                <p className="font-medium text-foreground">Student</p>
                <p className="text-xs text-muted-foreground">Pays for value</p>
              </div>
              <ArrowRight className="w-5 h-5 text-emerald-500 rotate-90 md:rotate-0" />
              <div className="text-center p-3 rounded-xl bg-card border border-border flex-1 w-full">
                <Shield className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
                <p className="font-medium text-foreground">Uniwise</p>
                <p className="text-xs text-muted-foreground">Aligned incentives</p>
              </div>
              <ArrowRight className="w-5 h-5 text-emerald-500 rotate-90 md:rotate-0" />
              <div className="text-center p-3 rounded-xl bg-card border border-border flex-1 w-full">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
                <p className="font-medium text-foreground">Best Decision</p>
                <p className="text-xs text-muted-foreground">Unbiased results</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What we don't do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 mb-8"
        >
          <h3 className="font-semibold text-xl mb-4 text-foreground">What We Do NOT Do</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Accept commissions from universities",
              "Run paid university promotions",
              "Offer sponsored rankings or placements",
              "Enter revenue-sharing partnerships",
              "Accept advertising from institutions",
              "Provide preferential treatment for any university",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Transparency measures */}
        <SectionHeader badge="How We Ensure It" title="Transparency Measures." />
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Code, title: "Explainable Algorithms", desc: "Every recommendation shows exactly which factors contributed and their weights." },
            { icon: Eye, title: "Visible Scoring Logic", desc: "Our scoring methodology is published and available for anyone to review." },
            { icon: Lock, title: "No Black-Box Decisions", desc: "We never make recommendations we can't fully explain to you." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:bg-muted/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Our Promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden p-12 text-center bg-gradient-to-br from-primary to-accent"
        >
          <Shield className="w-12 h-12 text-white mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Our Promise</h3>
          <p className="text-white/90 max-w-lg mx-auto leading-relaxed mb-6">
            We will never accept money from a university. We will never promote a program we wouldn't recommend to our own family. Every decision on Uniwise is backed by data, not dollars.
          </p>
          <Button size="lg" className="bg-card text-foreground hover:bg-card/90 font-semibold rounded-full px-8">
            Get Started Free <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  </div>
);

export default WhyHonestPage;
