// nexus — app/pricing/page.tsx

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { PricingSection } from '@/components/landing/PricingSection';
import { FAQ } from '@/components/pricing/FAQ';
import { CTASection } from '@/components/landing/CTASection';

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PricingSection />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}