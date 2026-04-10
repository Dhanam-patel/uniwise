import { useState } from "react";
import { motion } from "framer-motion";
import { Database, Search, MapPin, Users, GraduationCap, DollarSign, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import FeaturePageLayout from "../../components/features/FeaturePageLayout";

const allUniversities = [
  { name: "Massachusetts Institute of Technology", country: "USA", city: "Cambridge, MA", type: "Private", students: "11,500", tuition: "₹45L/yr", acceptance: "3.4%", programs: 56, fields: ["CS", "Engineering", "AI"] },
  { name: "Stanford University", country: "USA", city: "Stanford, CA", type: "Private", students: "17,500", tuition: "₹47L/yr", acceptance: "3.7%", programs: 65, fields: ["CS", "Business", "Engineering"] },
  { name: "ETH Zurich", country: "Switzerland", city: "Zurich", type: "Public", students: "23,400", tuition: "₹1.5L/yr", acceptance: "27%", programs: 42, fields: ["Engineering", "Science", "Math"] },
  { name: "University of Cambridge", country: "UK", city: "Cambridge", type: "Public", students: "24,500", tuition: "₹32L/yr", acceptance: "17%", programs: 38, fields: ["Science", "Humanities", "Engineering"] },
  { name: "National University of Singapore", country: "Singapore", city: "Singapore", type: "Public", students: "42,000", tuition: "₹22L/yr", acceptance: "10%", programs: 50, fields: ["Business", "CS", "Engineering"] },
  { name: "TU Munich", country: "Germany", city: "Munich", type: "Public", students: "50,000", tuition: "₹0.5L/yr", acceptance: "8%", programs: 48, fields: ["Engineering", "CS", "Science"] },
  { name: "University of Toronto", country: "Canada", city: "Toronto", type: "Public", students: "97,000", tuition: "₹30L/yr", acceptance: "43%", programs: 72, fields: ["Medicine", "CS", "Engineering"] },
  { name: "Georgia Institute of Technology", country: "USA", city: "Atlanta, GA", type: "Public", students: "44,000", tuition: "₹28L/yr", acceptance: "17%", programs: 55, fields: ["CS", "Engineering", "Business"] },
  { name: "Australian National University", country: "Australia", city: "Canberra", type: "Public", students: "25,000", tuition: "₹26L/yr", acceptance: "35%", programs: 34, fields: ["Science", "Policy", "Engineering"] },
];

const countries = ["All", "USA", "UK", "Germany", "Canada", "Singapore", "Switzerland", "Australia"];

export default function UniversityData() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("All");

  const filtered = allUniversities.filter((u) => {
    const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.city.toLowerCase().includes(search.toLowerCase());
    const matchesCountry = country === "All" || u.country === country;
    return matchesSearch && matchesCountry;
  });

  return (
    <FeaturePageLayout
      badge="Feature"
      title="University Data Explorer"
      description="Clean, standardized data for every university. Compare tuition, acceptance rates, programs, and more."
      icon={Database}
    >
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search universities or cities..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={country} onValueChange={setCountry}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((c) => (
              <SelectItem key={c} value={c}>{c}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground mb-4">{filtered.length} universities found</p>

      {/* University Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((uni, i) => (
          <motion.div
            key={uni.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-card border border-border rounded-2xl p-5 hover:shadow-lg hover:border-primary/30 transition-all group"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-foreground text-sm leading-tight">{uni.name}</h3>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <MapPin className="w-3 h-3" />
                  {uni.city}, {uni.country}
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="flex items-center gap-2">
                <DollarSign className="w-3.5 h-3.5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Tuition</p>
                  <p className="text-sm font-medium text-foreground">{uni.tuition}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Students</p>
                  <p className="text-sm font-medium text-foreground">{uni.students}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Programs</p>
                  <p className="text-sm font-medium text-foreground">{uni.programs}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Acceptance</p>
                <p className="text-sm font-medium text-foreground">{uni.acceptance}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {uni.fields.map((field) => (
                <Badge key={field} variant="secondary" className="text-xs font-normal">
                  {field}
                </Badge>
              ))}
              <Badge variant="outline" className="text-xs font-normal">
                {uni.type}
              </Badge>
            </div>
          </motion.div>
        ))}
      </div>
    </FeaturePageLayout>
  );
}