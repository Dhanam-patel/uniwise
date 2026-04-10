import { motion } from "framer-motion";
import { GitCompare, Check, X } from "lucide-react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from "recharts";
import FeaturePageLayout from "../../components/features/FeaturePageLayout";

const comparisonData = [
  { metric: "Academics", uniA: 92, uniB: 88, uniC: 85 },
  { metric: "ROI", uniA: 85, uniB: 90, uniC: 78 },
  { metric: "Career", uniA: 88, uniB: 82, uniC: 90 },
  { metric: "Location", uniA: 80, uniB: 85, uniC: 92 },
  { metric: "Cost", uniA: 70, uniB: 88, uniC: 75 },
  { metric: "Research", uniA: 95, uniB: 78, uniC: 82 },
];

const universities = [
  {
    name: "Georgia Tech",
    location: "Atlanta, USA",
    tuition: "₹35L/yr",
    ranking: "#44 Global",
    acceptance: "17%",
    avgSalary: "₹1.2Cr/yr",
    matchScore: 92,
    hasScholarships: true,
    hasOPT: true,
    hasCoop: false,
  },
  {
    name: "TU Munich",
    location: "Munich, Germany",
    tuition: "₹2L/yr",
    ranking: "#49 Global",
    acceptance: "8%",
    avgSalary: "₹85L/yr",
    matchScore: 87,
    hasScholarships: true,
    hasOPT: false,
    hasCoop: true,
  },
  {
    name: "NUS Singapore",
    location: "Singapore",
    tuition: "₹25L/yr",
    ranking: "#11 Global",
    acceptance: "12%",
    avgSalary: "₹95L/yr",
    matchScore: 84,
    hasScholarships: true,
    hasOPT: false,
    hasCoop: true,
  },
];

const comparisonFields = [
  { key: "location", label: "Location" },
  { key: "tuition", label: "Tuition" },
  { key: "ranking", label: "Global Ranking" },
  { key: "acceptance", label: "Acceptance Rate" },
  { key: "avgSalary", label: "Avg. Post-Grad Salary" },
];

const booleanFields = [
  { key: "hasScholarships", label: "Scholarships Available" },
  { key: "hasOPT", label: "Work Visa (OPT/PSW)" },
  { key: "hasCoop", label: "Co-op Programs" },
];

export default function UniversityComparison() {
  return (
    <FeaturePageLayout
      badge="Feature"
      title="University Comparison"
      description="Compare universities side by side on the metrics that actually matter for your career and finances."
      icon={GitCompare}
    >
      {/* Radar Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card border border-border rounded-2xl p-6 mb-8"
      >
        <h3 className="font-semibold text-foreground mb-1">Multi-Dimensional Comparison</h3>
        <p className="text-sm text-muted-foreground mb-4">How each university scores across key dimensions</p>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={comparisonData}>
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis dataKey="metric" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
              <Radar name="Georgia Tech" dataKey="uniA" stroke="hsl(186,100%,42%)" fill="hsl(186,100%,42%)" fillOpacity={0.15} strokeWidth={2} />
              <Radar name="TU Munich" dataKey="uniB" stroke="hsl(262,83%,58%)" fill="hsl(262,83%,58%)" fillOpacity={0.1} strokeWidth={2} />
              <Radar name="NUS Singapore" dataKey="uniC" stroke="hsl(142,71%,45%)" fill="hsl(142,71%,45%)" fillOpacity={0.1} strokeWidth={2} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card border border-border rounded-2xl overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-sm font-medium text-muted-foreground p-4 min-w-[160px]">Metric</th>
                {universities.map((uni) => (
                  <th key={uni.name} className="text-center p-4 min-w-[160px]">
                    <div className="font-semibold text-foreground">{uni.name}</div>
                    <div className="text-xs text-muted-foreground">{uni.location}</div>
                    <div className="mt-1 inline-flex items-center gap-1 px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      Score: {uni.matchScore}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonFields.map((field) => (
                <tr key={field.key} className="border-b border-border/50">
                  <td className="text-sm text-muted-foreground p-4">{field.label}</td>
                  {universities.map((uni) => (
                    <td key={uni.name} className="text-center text-sm font-medium text-foreground p-4">
                      {uni[field.key]}
                    </td>
                  ))}
                </tr>
              ))}
              {booleanFields.map((field) => (
                <tr key={field.key} className="border-b border-border/50">
                  <td className="text-sm text-muted-foreground p-4">{field.label}</td>
                  {universities.map((uni) => (
                    <td key={uni.name} className="text-center p-4">
                      {uni[field.key] ? (
                        <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </FeaturePageLayout>
  );
}