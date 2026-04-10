import { motion } from "framer-motion";
import CTASection from "../CTASection";

export default function FeaturePageLayout({ badge, title, description, icon: Icon, children }) {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-16 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-20 right-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {Icon && (
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Icon className="w-8 h-8 text-primary" />
              </div>
            )}
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
              {badge}
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </section>

      <CTASection />
    </div>
  );
}