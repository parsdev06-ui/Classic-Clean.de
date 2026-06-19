/**
 * Home – Classic-Clean V2
 * Design: Berliner Klarheit – Premium B2B Landing Page
 * All sections assembled in correct order
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import WhySection from "@/components/WhySection";
import ProcessTimeline from "@/components/ProcessTimeline";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FinalCTABanner from "@/components/FinalCTABanner";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#F8FAFC" }}>
      {/* 1. Navbar */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Trust/USP Bar */}
        <TrustBar />

        {/* 4. Services Section */}
        <ServicesSection />

        {/* 5. Why Classic-Clean */}
        <WhySection />

        {/* 6. Process Timeline */}
        <ProcessTimeline />

        {/* 7. Service Areas */}
        <ServiceAreasSection />

        {/* 8. FAQ */}
        <FAQSection />

        {/* 9. Final CTA Banner */}
        <FinalCTABanner />

        {/* 10. Contact Section */}
        <ContactSection />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. Mobile Sticky CTA */}
      <MobileStickyCTA />
    </div>
  );
}
