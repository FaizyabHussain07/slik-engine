import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import FeaturesSection from '../components/home/FeaturesSection';
import TechStackSection from '../components/home/TechStackSection';
import WhySlikSection from '../components/home/WhySlikSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import PreviewSection from '../components/home/PreviewSection';
import CTASection from '../components/home/CTASection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] selection:bg-emerald-500/30">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <PreviewSection />
        <FeaturesSection />
        <TechStackSection />
        <WhySlikSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
