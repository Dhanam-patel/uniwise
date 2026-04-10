import { useState } from "react";
import { motion } from "framer-motion";
import { Target, Brain, GraduationCap, Briefcase, DollarSign, MapPin } from "lucide-react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";
import { Progress } from "@/components/ui/progress";
import FeaturePageLayout from "../../components/features/FeaturePageLayout";

const matchFactors = [
  { factor: "Academic Fit", score: 92, fullMark: 100 },
  { factor: "Career Alignment", score: 85, fullMark: 100 },
  { factor: "Budget Match", score: 78, fullMark: 100 },
  { factor: "Location Pref", score: 88, fullMark: 100 },
  { factor: "Research Fit", score: 95, fullMark: 100 },
  { factor: "Culture Fit", score: 82, fullMark: 100 },
];

const breakdownItems = [
  { icon: Brain, label: "Academic Profile", score: 92, desc: "GPA, test scores, and course relevance" },
  { icon: Briefcase, label: "Career Alignment", score: 85, desc: "Industry placement rates and career outcomes" },
  { icon: DollarSign, label: "Financial Fit", score: 78, desc: "Tuition costs vs. your budget and scholarship potential" },
  { icon: MapPin, label: "Location Match", score: 88, desc: "Country preference, climate, and lifestyle" },
  { icon: GraduationCap, label: "Research Fit", score: 95, desc: "Faculty research areas and lab opportunities" },
];

const universities = [
  { name: "Georgia Tech", score: 92, badge: "Top Match" },
  { name: "TU Munich", score: 87, badge: "High Match" },
  { name: "University of Toronto", score: 84, badge: "High Match" },
  { name: "NUS Singapore", score: 81, badge: "Good Match" },
  { name: "ETH Zurich", score: 79, badge: "Good Match" },
];

export default function MatchScore() {
  const [selectedUni, setSelectedUni] = useState(0);

  return (
    <FeaturePageLayout
      badge="Feature"
      title="AI-Powered Match Score"
      description="See exactly why a university matches your profile — with a full breakdown of every scoring factor across 50+ dimensions."
      icon={Target}
    >
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left — Radar Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-foreground">Match Analysis</h3>
              <p className="text-sm text-muted-foreground">{universities[selectedUni].name}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-foreground">{universities[selectedUni].score}</div>
              <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                {universities[selectedUni].badge}
              </span>
            </div>
          </div>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={matchFactors}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="factor" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
                <Radar
                  name="Score"
                  dataKey="score"
                  stroke="hsl(186,100%,42%)"
                  fill="hsl(186,100%,42%)"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Right — University List + Breakdown */}
        <div className="space-y-6">
          {/* University selector */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-5"
          >
            <h3 className="font-semibold text-foreground mb-4">Top Matches</h3>
            <div className="space-y-2">
              {universities.map((uni, i) => (
                <button
                  key={uni.name}
                  onClick={() => setSelectedUni(i)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-sm transition-all ${
                    selectedUni === i
                      ? "bg-primary/10 border border-primary/20"
                      : "hover:bg-muted border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-muted flex items-center justify-center text-xs font-semibold text-muted-foreground">
                      {i + 1}
                    </span>
                    <span className="font-medium text-foreground">{uni.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{uni.score}</span>
                    <span className="text-xs text-emerald-600">/100</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Score Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-5"
          >
            <h3 className="font-semibold text-foreground mb-4">Score Breakdown</h3>
            <div className="space-y-4">
              {breakdownItems.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">{item.label}</span>
                      <span className="text-sm font-semibold text-foreground">{item.score}%</span>
                    </div>
                    <Progress value={item.score} className="h-1.5 mb-1" />
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </FeaturePageLayout>
  );
}