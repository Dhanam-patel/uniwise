import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Layout from './components/Layout';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';
import WhyHonest from './pages/WhyHonest';
import Contact from './pages/Contact';
import MatchScore from './pages/features/MatchScore';
import ROICalculator from './pages/features/ROICalculator';
import VisaRisk from './pages/features/VisaRisk';
import DocumentTracking from './pages/features/DocumentTracking';
import UniversityComparison from './pages/features/UniversityComparison';
import Rankings from './pages/features/Rankings';
import Community from './pages/Community';
import UniversityData from './pages/features/UniversityData';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/why-honest" element={<WhyHonest />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/features/match-score" element={<MatchScore />} />
            <Route path="/features/roi-calculator" element={<ROICalculator />} />
            <Route path="/features/visa-risk" element={<VisaRisk />} />
            <Route path="/features/document-tracking" element={<DocumentTracking />} />
            <Route path="/features/university-comparison" element={<UniversityComparison />} />
            <Route path="/features/rankings" element={<Rankings />} />
            <Route path="/features/university-data" element={<UniversityData />} />
            <Route path="/community" element={<Community />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App