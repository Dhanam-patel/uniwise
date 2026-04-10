import { motion } from "framer-motion";
import { FileText, CheckCircle, Clock, AlertCircle, Upload } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import FeaturePageLayout from "../../components/features/FeaturePageLayout";

const universities = [
  {
    name: "Georgia Tech",
    progress: 85,
    documents: [
      { name: "Transcripts", status: "done" },
      { name: "SOP", status: "done" },
      { name: "LOR 1", status: "done" },
      { name: "LOR 2", status: "done" },
      { name: "Resume", status: "done" },
      { name: "Financial Docs", status: "pending" },
      { name: "Passport Copy", status: "not_started" },
    ],
  },
  {
    name: "TU Munich",
    progress: 60,
    documents: [
      { name: "Transcripts", status: "done" },
      { name: "Motivation Letter", status: "done" },
      { name: "APS Certificate", status: "pending" },
      { name: "Language Cert", status: "done" },
      { name: "CV", status: "not_started" },
    ],
  },
  {
    name: "University of Toronto",
    progress: 40,
    documents: [
      { name: "Transcripts", status: "done" },
      { name: "SOP", status: "pending" },
      { name: "LOR 1", status: "not_started" },
      { name: "LOR 2", status: "not_started" },
      { name: "GRE Score", status: "done" },
    ],
  },
];

const statusConfig = {
  done: { icon: CheckCircle, color: "text-emerald-500", bg: "bg-emerald-50", label: "Submitted" },
  pending: { icon: Clock, color: "text-amber-500", bg: "bg-amber-50", label: "In Progress" },
  not_started: { icon: AlertCircle, color: "text-muted-foreground", bg: "bg-muted", label: "Not Started" },
};

export default function DocumentTracking() {
  return (
    <FeaturePageLayout
      badge="Feature"
      title="Document Tracking"
      description="Track every document across all your university applications in one place. Never miss a deadline again."
      icon={FileText}
    >
      {/* Overview cards */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {[
          { label: "Total Documents", value: "17", sub: "Across 3 universities" },
          { label: "Submitted", value: "10", sub: "59% complete" },
          { label: "Pending Action", value: "4", sub: "2 urgent deadlines" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl p-5"
          >
            <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* University cards */}
      <div className="space-y-6">
        {universities.map((uni, uIdx) => (
          <motion.div
            key={uni.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: uIdx * 0.1 }}
            className="bg-card border border-border rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-foreground">{uni.name}</h3>
                <p className="text-sm text-muted-foreground">{uni.documents.filter(d => d.status === "done").length} of {uni.documents.length} documents submitted</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-foreground">{uni.progress}%</span>
              </div>
            </div>
            <Progress value={uni.progress} className="h-2 mb-5" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {uni.documents.map((doc) => {
                const config = statusConfig[doc.status];
                return (
                  <div
                    key={doc.name}
                    className={`flex items-center gap-3 p-3 rounded-xl border border-border ${config.bg}/30`}
                  >
                    <config.icon className={`w-4 h-4 ${config.color} flex-shrink-0`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{doc.name}</p>
                      <p className={`text-xs ${config.color}`}>{config.label}</p>
                    </div>
                    {doc.status === "not_started" && (
                      <Upload className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </FeaturePageLayout>
  );
}