"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12" data-aos="fade-up" data-aos-delay="100">
        <Hero setShowPopupScreen={(show: boolean) => {}} />
      </div>
      
      <div data-aos="fade-up" data-aos-delay="200">
        <Features />
      </div>
      
      <div data-aos="fade-up" data-aos-delay="300">
        <CTASection />
      </div>
    </div>
  );
}
