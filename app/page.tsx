import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { ScanDemo } from "@/components/ScanDemo";
import { AppShowcase } from "@/components/AppShowcase";
import { Comparison } from "@/components/Comparison";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <ScanDemo />
      <AppShowcase />
      <Comparison />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
