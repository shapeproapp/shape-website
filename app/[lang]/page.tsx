
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
import { getDictionary } from "@/lib/dictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "fr" | "en" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen">
      <Navbar dict={dict.navbar} />
      <Hero dict={dict.hero} />
      <Stats dict={dict.stats} />
      <Features dict={dict.features} />
      <HowItWorks dict={dict.howItWorks} />
      <ScanDemo dict={dict.scanDemo} />
      <AppShowcase dict={dict.appShowcase} />
      <Comparison dict={dict.comparison} />
      <Pricing dict={dict.pricing} />
      <FAQ dict={dict.faq} />
      <Footer dict={dict.footer} />
    </div>
  );
}
