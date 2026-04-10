import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, ArrowUpDown, ChevronUp, ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import FeaturePageLayout from "../../components/features/FeaturePageLayout";

const rankingsData = [
  { rank: 1, name: "MIT", country: "USA", overall: 98, research: 99, employability: 97, roi: 95, trend: "up" },
  { rank: 2, name: "Stanford", country: "USA", overall: 97, research: 98, employability: 98, roi: 94, trend: "same" },
  { rank: 3, name: "ETH Zurich", country: "Switzerland", overall: 95, research: 96, employability: 92, roi: 90, trend: "up" },
  { rank: 4, name: "Cambridge", country: "UK", overall: 94, research: 97, employability: 91, roi: 88, trend: "down" },
  { rank: 5, name: "NUS", country: "Singapore", overall: 93, research: 90, employability: 95, roi: 92, trend: "up" },
  { rank: 6, name: "TU Munich", country: "Germany", overall: 91, research: 93, employability: 89, roi: 96, trend: "up" },
  { rank: 7, name: "University of Toronto", country: "Canada", overall: 90, research: 91, employability: 88, roi: 89, trend: "same" },
  { rank: 8, name: "Georgia Tech", country: "USA", overall: 89, research: 88, employability: 93, roi: 91, trend: "up" },
  { rank: 9, name: "Imperial College", country: "UK", overall: 88, research: 92, employability: 87, roi: 85, trend: "down" },
  { rank: 10, name: "ANU", country: "Australia", overall: 87, research: 86, employability: 85, roi: 88, trend: "same" },
];

const chartData = rankingsData.slice(0, 6).map(u => ({
  name: u.name.length > 12 ? u.name.substring(0, 12) + "..." : u.name,
  Research: u.research,
  Employability: u.employability,
  ROI: u.roi,
}));

export default function Rankings() {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("overall");
  const [sortDir, setSortDir] = useState("desc");

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  };

  const filtered = rankingsData
    .filter((u) => u.name.toLowerCase().includes(search.toLowerCase()) || u.country.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => sortDir === "desc" ? b[sortKey] - a[sortKey] : a[sortKey] - b[sortKey]);

  return (
    <FeaturePageLayout
      badge="Feature"
      title="Unbiased University Rankings"
      description="Rankings built on data, not university payments. Transparent methodology. Updated in real-time."
      icon={Trophy}
    >
      {/* Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card border border-border rounded-2xl p-6 mb-8"
      >
        <h3 className="font-semibold text-foreground mb-1">Score Breakdown — Top 6</h3>
        <p className="text-sm text-muted-foreground mb-6">Comparing research, employability, and ROI scores</p>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} barGap={2}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
              <YAxis domain={[60, 100]} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
              <Tooltip
                contentStyle={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "12px",
                  fontSize: 13,
                }}
              />
              <Bar dataKey="Research" fill="hsl(186,100%,42%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Employability" fill="hsl(262,83%,58%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="ROI" fill="hsl(142,71%,45%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Search + Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card border border-border rounded-2xl overflow-hidden"
      >
        <div className="p-4 border-b border-border">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search universities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left text-xs font-medium text-muted-foreground p-3 w-12">#</th>
                <th className="text-left text-xs font-medium text-muted-foreground p-3 min-w-[180px]">University</th>
                <th className="text-left text-xs font-medium text-muted-foreground p-3">Country</th>
                {["overall", "research", "employability", "roi"].map((key) => (
                  <th key={key} className="p-3 min-w-[100px]">
                    <button
                      onClick={() => handleSort(key)}
                      className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                      {sortKey === key ? (
                        sortDir === "desc" ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />
                      ) : (
                        <ArrowUpDown className="w-3 h-3 opacity-30" />
                      )}
                    </button>
                  </th>
                ))}
                <th className="text-center text-xs font-medium text-muted-foreground p-3">Trend</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((uni, i) => (
                <tr key={uni.name} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="p-3 text-sm font-semibold text-muted-foreground">{i + 1}</td>
                  <td className="p-3 text-sm font-medium text-foreground">{uni.name}</td>
                  <td className="p-3 text-sm text-muted-foreground">{uni.country}</td>
                  <td className="p-3 text-sm font-semibold text-foreground">{uni.overall}</td>
                  <td className="p-3 text-sm text-foreground">{uni.research}</td>
                  <td className="p-3 text-sm text-foreground">{uni.employability}</td>
                  <td className="p-3 text-sm text-foreground">{uni.roi}</td>
                  <td className="p-3 text-center">
                    {uni.trend === "up" && <ChevronUp className="w-4 h-4 text-emerald-500 mx-auto" />}
                    {uni.trend === "down" && <ChevronDown className="w-4 h-4 text-rose-500 mx-auto" />}
                    {uni.trend === "same" && <span className="text-muted-foreground text-xs">—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Methodology note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 bg-muted/50 border border-border rounded-2xl p-6"
      >
        <h3 className="font-semibold text-foreground mb-2">Our Methodology</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Rankings are calculated using a weighted composite of research output, employer reputation, graduate employability rates, 
          return on investment analysis, and student satisfaction scores. We use publicly available data from QS, THE, Shanghai, 
          and government employment databases. No university pays to be ranked.
        </p>
      </motion.div>
    </FeaturePageLayout>
  );
}