import React from "react";
import { Search, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-16 pb-12 px-4 sm:px-6 flex flex-col items-center text-center">
      {/* 1. Tag / Badge */}
      <div className="mb-6">
        <span className="inline-flex items-center justify-center bg-[#FFEEE5] text-[#F97316] font-bold text-[11px] tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-[#FED7AA] select-none shadow-[0_1px_2px_0_rgba(249,115,22,0.08)]">
          INTELLIGENT LEARNING
        </span>
      </div>

      {/* 2. Headline */}
      <h1 className="type-display-1 text-4xl sm:text-5xl lg:text-[56px] text-[#0F172A] max-w-3xl leading-[1.12] mb-5 font-bold tracking-tight">
        Search your learning
        <br />
        in plain English.
      </h1>

      {/* 3. Subtitle */}
      <p className="text-[16px] sm:text-[17px] text-[#64748B] max-w-xl mx-auto leading-relaxed mb-8 font-normal">
        Vertex understands what you want to learn and finds the exact lessons
        across all your courses.
      </p>

      {/* 4. Primary CTA Button */}
      <div className="mb-10">
        <a
          href="/courses"
          className="inline-flex items-center justify-center gap-2.5 h-[48px] px-6 text-[15px] font-semibold text-white bg-[#F97316] hover:bg-[#EA580C] active:bg-[#C2410C] rounded-[12px] shadow-[0_4px_14px_0_rgba(249,115,22,0.35)] transition-all cursor-pointer select-none"
        >
          <span>Explore Courses</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </a>
      </div>

      {/* 5. Prominent Search Bar */}
      <div className="w-full max-w-[680px] mx-auto">
        <div className="relative flex items-center w-full bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] focus-within:border-[#FB923C] focus-within:ring-4 focus-within:ring-[#FED7AA]/40 rounded-[16px] shadow-[0_4px_20px_-2px_rgba(15,23,42,0.06)] transition-all">
          <div className="pl-4 sm:pl-5 pr-2 flex items-center pointer-events-none text-[#64748B]">
            <Search className="w-5 h-5 text-[#64748B] stroke-[2]" />
          </div>

          <input
            type="text"
            placeholder="Ask anything about your learning..."
            className="w-full h-[54px] bg-transparent text-[#0F172A] placeholder:text-[#94A3B8] text-[15px] outline-none pr-16"
          />

          <div className="absolute right-3.5 flex items-center pointer-events-none">
            <kbd className="inline-flex items-center justify-center px-2 py-1 text-[11px] font-medium text-[#64748B] bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] font-mono shadow-[0_1px_1px_rgba(0,0,0,0.04)]">
              ⌘ K
            </kbd>
          </div>
        </div>
      </div>
    </section>
  );
}
