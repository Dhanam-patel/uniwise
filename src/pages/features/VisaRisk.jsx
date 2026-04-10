import { motion } from "framer-motion";
import { Shield, CheckCircle, AlertTriangle, XCircle, TrendingUp } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { Progress } from "@/components/ui/progress";
import FeaturePageLayout from "../../components/features/FeaturePageLayout";

const overallScore = 78;

const riskFactors = [
  { name: "Financial Docs", score: 92, status: "strong" },
  { name: "Academic Profile", score: 88, status: "strong" },
  { name: "SOP Quality", score: 75, status: "moderate" },
  { name: "Interview Prep", score: 65, status: "needs_work" },
  { name: "Gap Analysis", score: 85, status: "strong" },
];

const countryData = [
  { country: "USA", rate: 82 },
  { country: "Canada", rate: 88 },
  { country: "Germany", rate: 91 },
  { country: "UK", rate: 85 },
  { country: "Australia", rate: 87 },
];

const gaugeData = [
  { name: "Score", value: overallScore },
  { name: "Remaining", value: 100 - overallScore },
];

const GAUGE_COLORS = ["hsl(186,100%,42%)", "hsl(var(--border))"];

export default function VisaRisk() {
  return (
    <FeaturePageLayout
      badge="Feature"
      title="Visa Risk Assessment"
      description="Understand your visa approval probability before you invest time and money. Get actionable insights to improve your chances."
      icon={Shield}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Gauge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-6 text-center"
        >
          <h3 className="font-semibold text-foreground mb-2">Approval Probability</h3>
          <p className="text-sm text-muted-foreground mb-4">Based on your profile</p>
          
          <div className="h-48 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={gaugeData}
                  cx="50%"
                  cy="50%"
                  startAngle={180}
                  endAngle={0}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {gaugeData.map((_, i) => (
                    <Cell key={i} fill={GAUGE_COLORS[i]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center -mt-6">
              <div>
                <div className="text-4xl font-bold text-foreground">{overallScore}%</div>
                <div className="text-xs text-muted-foreground">Approval Rate</div>
              </div>
            </div>
          </div>

          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium">
            <TrendingUp className="w-4 h-4" />
            Good Chances
          </div>
        </motion.div>

        {/* Risk Factors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-2xl p-6"
        >
          <h3 className="font-semibold text-foreground mb-5">Risk Factors</h3>
          <div className="space-y-5">
            {riskFactors.map((factor) => {
              const StatusIcon = factor.status === "strong" ? CheckCircle 
                : factor.status === "moderate" ? AlertTriangle : XCircle;
              const statusColor = factor.status === "strong" ? "text-emerald-500" 
                : factor.status === "moderate" ? "text-amber-500" : "text-rose-500";

              return (
                <div key={factor.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <StatusIcon className={`w-4 h-4 ${statusColor}`} />
                      <span className="text-sm font-medium text-foreground">{factor.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-foreground">{factor.score}%</span>
                  </div>
                  <Progress value={factor.score} className="h-1.5" />
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Country Rates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-2xl p-6"
        >
          <h3 className="font-semibold text-foreground mb-1">Approval by Country</h3>
          <p className="text-sm text-muted-foreground mb-5">Average visa approval rates</p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={countryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="country" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                <YAxis domain={[70, 100]} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                <Tooltip
                  contentStyle={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "12px",
                    fontSize: 13,
                  }}
                  formatter={(val) => [`${val}%`, "Approval Rate"]}
                />
                <Bar dataKey="rate" fill="hsl(186,100%,42%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-6"
      >
        <h3 className="font-semibold text-foreground mb-4">Recommendations to Improve</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Strengthen your SOP with specific career goals",
            "Prepare for common visa interview questions",
            "Ensure bank statements cover 6+ months",
          ].map((tip, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-foreground">{tip}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </FeaturePageLayout>
  );
}