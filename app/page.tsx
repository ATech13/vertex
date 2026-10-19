import React from "react";
import { Navbar } from "@/components/home/navbar";
import { HeroSection } from "@/components/home/hero-section";
import { AllCoursesSection } from "@/components/home/all-courses-section";
import { BottomGraphic } from "@/components/home/bottom-graphic";

export const metadata = {
  title: "Vertex — Search your learning in plain English",
  description:
    "Vertex understands what you want to learn and finds the exact lessons across all your courses.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] text-[#0F172A] flex flex-col justify-between selection:bg-[#FED7AA] selection:text-[#0F172A]">
      <div className="w-full">
        {/* Navigation Header */}
        <Navbar />

        {/* Main Content */}
        <main>
          {/* Intelligent Search Hero Section */}
          <HeroSection />

          {/* Featured Courses Section */}
          <AllCoursesSection />
        </main>
      </div>

      {/* Atmospheric Bottom Equalizer Graphic */}
      <BottomGraphic />
    </div>
  );
}
