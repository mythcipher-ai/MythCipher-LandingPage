import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Urgency from "@/components/Urgency";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-Background font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Suspense>
          <BeforeAfter />
          <HowItWorks />
          <Features />
          <Testimonials />
          <Urgency />
          {/* <FinalCTA /> */}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
