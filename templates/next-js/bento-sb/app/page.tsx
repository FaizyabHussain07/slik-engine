// nexus — app/page.tsx

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import { Hero } from '@/components/landing/Hero';
import { BentoFeatures } from '@/components/landing/BentoFeatures';
import { SocialProof } from '@/components/landing/SocialProof';
import { PricingSection } from '@/components/landing/PricingSection';
import { CTASection } from '@/components/landing/CTASection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BentoFeatures />
        <SocialProof />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
