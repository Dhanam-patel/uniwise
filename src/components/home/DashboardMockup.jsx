import { motion } from "framer-motion";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const roiData = [
  { y: 10 }, { y: 20 }, { y: 35 }, { y: 45 }, { y: 60 }, { y: 72 }, { y: 85 },
];

export default function DashboardMockup() {
  return (
    <div className="bg-card border border-border rounded-2xl shadow-2xl shadow-primary/10 overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-rose-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-emerald-400" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-xs text-muted-foreground">uniwise.ai/dashboard</span>
        </div>
      </div>

      <div className="p-5 space-y-4">
        {/* Match Score */}
        <div className="bg-muted/30 rounded-xl p-4 border border-border/50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Match Score</span>
            <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-2.5 py-0.5 rounded-full">High Match</span>
          </div>
          <div className="flex items-baseline gap-1 mb-3">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-4xl font-bold text-foreground"
            >
              87
            </motion.span>
            <span className="text-muted-foreground text-sm">/100</span>
          </div>
          <div className="w-full h-2 bg-border rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "87%" }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            />
          </div>
        </div>

        {/* ROI + Break-even row */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-muted/30 rounded-xl p-4 border border-border/50">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">5-Year ROI</span>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-2xl font-bold text-emerald-500 mt-1"
            >
              ₹42L
            </motion.div>
          </div>
          <div className="bg-muted/30 rounded-xl p-4 border border-border/50">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Break-Even</span>
            <div className="flex items-baseline gap-1 mt-1">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-2xl font-bold text-foreground"
              >
                2.1
              </motion.span>
              <span className="text-sm text-muted-foreground">yrs</span>
            </div>
          </div>
        </div>

        {/* Mini chart */}
        <div className="bg-muted/30 rounded-xl p-4 border border-border/50">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">ROI Projection</span>
          <div className="h-16">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={roiData}>
                <defs>
                  <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(186,100%,42%)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="hsl(186,100%,42%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="y"
                  stroke="hsl(186,100%,42%)"
                  strokeWidth={2}
                  fill="url(#heroGrad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}