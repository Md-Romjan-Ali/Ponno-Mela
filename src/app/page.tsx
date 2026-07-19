// Ponno-Mel landing page
import { AboutUs } from "@/components/landing/AboutUs";
import { FAQ } from "@/components/landing/FAQ";
import { FeaturedProducts } from "@/components/landing/FeaturedProducts";
import { Footer } from "@/components/landing/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { Navbar } from "@/components/landing/Navbar";
import { Testimonials } from "@/components/landing/Testimonials";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <FeaturedProducts />
        <Testimonials />
        <AboutUs />
        <WhyChooseUs />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
