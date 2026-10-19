import React from "react";
import Link from "next/link";
import { BarChart2, Clock, FileText, ArrowRight, Star } from "lucide-react";

export function AllCoursesSection() {
  const courses = [
    {
      id: "nextjs-for-production",
      title: "Next.js for Production",
      description: "Build scalable, high-performance web applications with Next.js.",
      level: "Intermediate",
      duration: "18h 24m",
      modules: "12 modules",
      icon: (
        <div className="w-12 h-12 rounded-[12px] bg-black text-white flex items-center justify-center font-bold text-xl select-none shadow-sm">
          N
        </div>
      ),
    },
    {
      id: "docker-essentials",
      title: "Docker Essentials",
      description:
        "Containerize applications and streamline your development workflow.",
      level: "Beginner",
      duration: "10h 12m",
      modules: "8 modules",
      icon: (
        <div className="w-12 h-12 rounded-[12px] bg-[#E0F2FE] flex items-center justify-center select-none shadow-sm">
          {/* Docker Whale Icon SVG */}
          <svg
            className="w-8 h-8"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 16H14V20H10V16ZM16 16H20V20H16V16ZM22 16H26V20H22V16ZM16 10H20V14H16V10ZM22 10H26V14H22V10ZM28 10H32V14H28V10ZM28 16H32V20H28V16ZM34 16H38V20H34V16ZM39 21C38.2 21 37.4 21.2 36.7 21.6C35.8 20.6 34.4 20 33 20H8C6.3 20 5 21.3 5 23C5 28.5 9 33 16 33C24.5 33 29.5 28 32 24.5C34.5 25.5 37.5 25 39 23.5C39.8 24.5 41.5 25 43 24C44 23.3 44 21 42 21C40.5 21 39.7 21 39 21Z"
              fill="#0284C7"
            />
            <circle cx="12" cy="25" r="1.5" fill="white" />
          </svg>
        </div>
      ),
    },
    {
      id: "typescript-deep-dive",
      title: "TypeScript Deep Dive",
      description: "Go beyond the basics and write safer, more expressive code.",
      level: "Intermediate",
      duration: "14h 36m",
      modules: "10 modules",
      icon: (
        <div className="w-12 h-12 rounded-[12px] bg-[#3178C6] text-white flex items-center justify-center font-bold text-lg select-none shadow-sm">
          TS
        </div>
      ),
    },
  ];

  return (
    <section className="max-w-[1140px] mx-auto px-4 sm:px-6 pt-10 pb-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="type-display-2 text-[26px] sm:text-[32px] text-[#0F172A] font-bold tracking-tight">
          All Courses
        </h2>

        <Link
          href="/courses"
          className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#F97316] hover:text-[#EA580C] transition-colors"
        >
          <span>View all courses</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </Link>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {courses.map((course) => (
          <div
            key={course.id}
            className="group bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-[16px] p-6 sm:p-7 shadow-[0_1px_2px_0_rgba(15,23,42,0.05)] hover:shadow-[0_8px_20px_-4px_rgba(15,23,42,0.08)] transition-all flex flex-col justify-between cursor-pointer"
          >
            <div>
              {/* Logo / Badge */}
              <div className="mb-5">{course.icon}</div>

              {/* Title */}
              <h3 className="text-[19px] font-bold text-[#0F172A] group-hover:text-[#F97316] transition-colors mb-2.5 leading-snug">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-[#64748B] leading-relaxed line-clamp-3 mb-8">
                {course.description}
              </p>
            </div>

            {/* Footer Metadata */}
            <div className="flex items-center justify-between text-[12px] sm:text-[13px] text-[#64748B] pt-4 border-t border-[#F1F5F9]">
              <div className="flex items-center gap-1.5">
                <BarChart2 className="w-3.5 h-3.5 text-[#94A3B8]" />
                <span>{course.level}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#94A3B8]" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#94A3B8]" />
                <span>{course.modules}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Announcement Divider */}
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-[#E2E8F0]" />
        </div>
        <div className="relative bg-[#FAFAFC] px-4 flex items-center gap-2.5 text-[14px] text-[#64748B]">
          <Star className="w-4 h-4 text-[#F97316] stroke-[2]" />
          <span>New courses and lessons added every week.</span>
        </div>
      </div>
    </section>
  );
}
