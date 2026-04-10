import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, DollarSign, Clock } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Slider } from "@/components/ui/slider";
import FeaturePageLayout from "../../components/features/FeaturePageLayout";

const earningsData = [
  { year: "Year 1", india: 8, abroad: -15 },
  { year: "Year 2", india: 16, abroad: -5 },
  { year: "Year 3", india: 25, abroad: 12 },
  { year: "Year 4", india: 34, abroad: 30 },
  { year: "Year 5", india: 44, abroad: 55 },
  { year: "Year 6", india: 55, abroad: 78 },
  { year: "Year 7", india: 66, abroad: 105 },
];

const costBreakdown = [
  { name: "Tuition", value: 28 },
  { name: "Living", value: 12 },
  { name: "Travel", value: 3 },
  { name: "Insurance", value: 2 },
  { name: "Misc", value: 5 },
];

export default function ROICalculator() {
  const [tuition, setTuition] = useState([30]);
  const [years, setYears] = useState([2]);

  const totalCost = tuition[0] + 12;
  const fiveYearROI = Math.round(totalCost * 1.8);
  const breakEven = (totalCost / (fiveYearROI / 5)).toFixed(1);

  return (
    <FeaturePageLayout
      badge="Feature"
      title="ROI Calculator"
      description="Calculate total cost, break-even years, and 5-year earnings projection for every university. Make decisions backed by real financial data."
      icon={Calculator}
    >
      {/* Key Metrics */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {[
          { icon: DollarSign, label: "Total Investment", value: `₹${totalCost}L`, color: "text-rose-500" },
          { icon: TrendingUp, label: "5-Year ROI", value: `₹${fiveYearROI}L`, color: "text-emerald-500" },
          { icon: Clock, label: "Break-Even", value: `${breakEven} yrs`, color: "text-primary" },
        ].map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl p-5"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <metric.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">{metric.label}</span>
            </div>
            <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-6"
        >
          <h3 className="font-semibold text-foreground mb-6">Adjust Parameters</h3>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-3">
                <span className="text-sm text-muted-foreground">Tuition (₹ Lakhs)</span>
                <span className="text-sm font-semibold text-foreground">₹{tuition[0]}L</span>
              </div>
              <Slider
                value={tuition}
                onValueChange={setTuition}
                min={10}
                max={60}
                step={1}
                className="w-full"
              />
            </div>

            <div>
              <div className="flex justify-between mb-3">
                <span className="text-sm text-muted-foreground">Program Duration</span>
                <span className="text-sm font-semibold text-foreground">{years[0]} years</span>
              </div>
              <Slider
                value={years}
                onValueChange={setYears}
                min={1}
                max={4}
                step={1}
                className="w-full"
              />
            </div>

            <div className="border-t border-border pt-6">
              <h4 className="text-sm font-medium text-foreground mb-4">Cost Breakdown</h4>
              <div className="space-y-3">
                {costBreakdown.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{item.name}</span>
                    <span className="text-sm font-medium text-foreground">₹{item.value}L</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Charts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Earnings Comparison */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-semibold text-foreground mb-1">Earnings Comparison</h3>
            <p className="text-sm text-muted-foreground mb-6">Study abroad vs. staying in India (₹ Lakhs cumulative)</p>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={earningsData}>
                  <defs>
                    <linearGradient id="roiAbroad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(186,100%,42%)" stopOpacity={0.2} />
                      <stop offset="100%" stopColor="hsl(186,100%,42%)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="roiIndia" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--muted-foreground))" stopOpacity={0.1} />
                      <stop offset="100%" stopColor="hsl(var(--muted-foreground))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "12px",
                      fontSize: 13,
                    }}
                  />
                  <Area type="monotone" dataKey="india" stroke="hsl(var(--muted-foreground))" fill="url(#roiIndia)" strokeWidth={2} name="India" />
                  <Area type="monotone" dataKey="abroad" stroke="hsl(186,100%,42%)" fill="url(#roiAbroad)" strokeWidth={2} name="Study Abroad" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Cost Breakdown Chart */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-semibold text-foreground mb-1">Cost Distribution</h3>
            <p className="text-sm text-muted-foreground mb-6">Where your investment goes</p>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={costBreakdown} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis type="category" dataKey="name" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} width={70} />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "12px",
                      fontSize: 13,
                    }}
                    formatter={(val) => [`₹${val}L`, "Cost"]}
                  />
                  <Bar dataKey="value" fill="hsl(186,100%,42%)" radius={[0, 6, 6, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </div>
    </FeaturePageLayout>
  );
}