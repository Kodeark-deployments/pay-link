"use client";

import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Hero setShowPopupScreen={(show: boolean) => {}} />
      </div>
      
      <Features />
      
      <CTASection />
    </div>
  );
}
