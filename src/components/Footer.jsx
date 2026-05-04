import { Link } from "react-router-dom";

const footerLinks = {
  Features: [
    { name: "Match Score", path: "/features/match-score" },
    { name: "ROI Calculator", path: "/features/roi-calculator" },
    { name: "Visa Risk Score", path: "/features/visa-risk" },
    { name: "Document Tracking", path: "/features/document-tracking" },
  ],
  Resources: [
    { name: "University Comparison", path: "/features/university-comparison" },
    { name: "Rankings", path: "/features/rankings" },
    { name: "University Data", path: "/features/university-data" },
    { name: "How It Works", path: "/how-it-works" },
  ],
  Company: [
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border text-muted-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">U</span>
              </div>
              <span className="text-lg font-bold text-foreground">
                Uniwise<span className="text-primary">.ai</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Data-driven study abroad decisions. No commissions. No bias. Just clarity.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground/60">© 2026 Uniwise.ai. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground/60 hover:text-muted-foreground cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-sm text-muted-foreground/60 hover:text-muted-foreground cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
