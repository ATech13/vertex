"use client";

import React, { useState } from "react";
import { VertexLogo } from "@/components/ui/vertex-logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Pagination } from "@/components/ui/pagination";
import { CourseCard } from "@/components/cards/course-card";
import { LessonVideoCard } from "@/components/cards/lesson-video-card";
import { LessonTopicCard } from "@/components/cards/lesson-topic-card";
import { ResourceCard } from "@/components/cards/resource-card";
import {
  Bell,
  Search,
  Play,
  FileText,
  Bookmark,
  BarChart2,
  Clock,
  User,
  ChevronRight,
  ArrowUpRight,
  Eye,
  LayoutGrid,
  Target,
  Accessibility,
} from "lucide-react";

export default function DesignSystemPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [progressVal, setProgressVal] = useState(35);
  const [activeTab, setActiveTab] = useState("courses");

  return (
    <main className="min-h-screen bg-[#FAFAFC] text-[#0F172A] py-12 px-4 sm:px-6 lg:px-12 max-w-[1340px] mx-auto">
      {/* HEADER & BRAND HERO */}
      <header className="mb-14 pb-10 border-b border-[#E2E8F0]">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div className="max-w-xl">
            <VertexLogo size="lg" className="mb-6" />
            <h1 className="type-display-1 text-[#0F172A] mb-4">
              Design System
            </h1>
            <p className="text-[16px] text-[#64748B] leading-relaxed mb-6 font-normal">
              A unified design language for Vertex learning platform. Clean, modern
              and focused on clarity, consistency and intuitive learning experiences.
            </p>
            <div className="text-[12px] font-semibold text-[#94A3B8] tracking-widest uppercase">
              VERSION 1.0 · MAY 2025
            </div>
          </div>

          {/* 01 COLORS */}
          <div className="w-full lg:max-w-xl bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-[0_1px_2px_0_rgba(15,23,42,0.05)]">
            <div className="text-[11px] font-bold text-[#94A3B8] tracking-wider uppercase mb-4">
              01 &nbsp; COLORS
            </div>

            {/* Primary Palette */}
            <div className="mb-5">
              <span className="text-[13px] font-semibold text-[#0F172A] block mb-2">
                Primary
              </span>
              <div className="grid grid-cols-5 gap-2">
                {[
                  { name: "Primary 500", hex: "#F97316", bg: "bg-[#F97316]", text: "text-white" },
                  { name: "Primary 400", hex: "#FB923C", bg: "bg-[#FB923C]", text: "text-white" },
                  { name: "Primary 300", hex: "#FDBA74", bg: "bg-[#FDBA74]", text: "text-[#0F172A]" },
                  { name: "Primary 200", hex: "#FED7AA", bg: "bg-[#FED7AA]", text: "text-[#0F172A]" },
                  { name: "Primary 100", hex: "#FFEEE5", bg: "bg-[#FFEEE5]", text: "text-[#0F172A]" },
                ].map((color) => (
                  <div key={color.name} className="flex flex-col">
                    <div
                      className={`h-14 rounded-[8px] ${color.bg} shadow-sm border border-black/5 mb-1.5`}
                    />
                    <span className="text-[11px] font-medium text-[#0F172A] truncate">
                      {color.name}
                    </span>
                    <span className="text-[10px] text-[#94A3B8] uppercase font-mono">
                      {color.hex}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Neutral Palette */}
            <div>
              <span className="text-[13px] font-semibold text-[#0F172A] block mb-2">
                Neutral
              </span>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {[
                  { name: "Neutral 900", hex: "#0F172A", bg: "bg-[#0F172A]" },
                  { name: "Neutral 700", hex: "#334155", bg: "bg-[#334155]" },
                  { name: "Neutral 500", hex: "#64748B", bg: "bg-[#64748B]" },
                  { name: "Neutral 300", hex: "#CBD5E1", bg: "bg-[#CBD5E1]" },
                  { name: "Neutral 200", hex: "#E2E8F0", bg: "bg-[#E2E8F0]" },
                  { name: "Neutral 100", hex: "#F1F5F9", bg: "bg-[#F1F5F9]" },
                  { name: "Neutral 50", hex: "#FAFAFC", bg: "bg-[#FAFAFC]" },
                  { name: "White", hex: "#FFFFFF", bg: "bg-white" },
                ].map((color) => (
                  <div key={color.name} className="flex flex-col">
                    <div
                      className={`h-11 rounded-[8px] ${color.bg} border border-[#E2E8F0] shadow-sm mb-1.5`}
                    />
                    <span className="text-[10px] font-medium text-[#0F172A] truncate">
                      {color.name}
                    </span>
                    <span className="text-[9px] text-[#94A3B8] uppercase font-mono">
                      {color.hex}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 02 & 03: TYPOGRAPHY & TYPE SCALE */}
      <section className="mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Typography Overview */}
          <div className="lg:col-span-4 bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-[0_1px_2px_0_rgba(15,23,42,0.05)]">
            <div className="text-[11px] font-bold text-[#94A3B8] tracking-wider uppercase mb-6">
              02 &nbsp; TYPOGRAPHY
            </div>

            <div className="mb-8">
              <div
                className="text-5xl font-bold text-[#0F172A] mb-2"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Ag
              </div>
              <h3 className="text-[18px] font-bold text-[#0F172A]">
                Playfair Display
              </h3>
              <p className="text-[13px] text-[#64748B]">
                Elegant · Readable · Timeless
              </p>
            </div>

            <div>
              <div
                className="text-5xl font-bold text-[#0F172A] mb-2"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Ag
              </div>
              <h3 className="text-[18px] font-bold text-[#0F172A]">Inter</h3>
              <p className="text-[13px] text-[#64748B]">
                Clean · Modern · Highly legible
              </p>
            </div>
          </div>

          {/* Type Scale Table */}
          <div className="lg:col-span-8 bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-[0_1px_2px_0_rgba(15,23,42,0.05)] overflow-x-auto">
            <div className="text-[11px] font-bold text-[#94A3B8] tracking-wider uppercase mb-4">
              03 &nbsp; TYPE SCALE
            </div>

            <table className="w-full text-left text-[14px]">
              <thead>
                <tr className="border-b border-[#E2E8F0] text-[12px] text-[#94A3B8] uppercase font-semibold">
                  <th className="pb-3">Style</th>
                  <th className="pb-3">Font</th>
                  <th className="pb-3">Size / Line Height</th>
                  <th className="pb-3">Weight</th>
                  <th className="pb-3">Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9] text-[#0F172A]">
                <tr>
                  <td className="py-3 font-semibold">Display 1</td>
                  <td className="py-3 text-[#64748B]">Playfair Display</td>
                  <td className="py-3 font-mono text-[13px]">48 / 56</td>
                  <td className="py-3 font-medium">Bold</td>
                  <td className="py-3 text-[#64748B]">Page titles</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">Display 2</td>
                  <td className="py-3 text-[#64748B]">Playfair Display</td>
                  <td className="py-3 font-mono text-[13px]">36 / 44</td>
                  <td className="py-3 font-medium">Bold</td>
                  <td className="py-3 text-[#64748B]">Section titles</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">Heading 1</td>
                  <td className="py-3 text-[#64748B]">Inter</td>
                  <td className="py-3 font-mono text-[13px]">28 / 36</td>
                  <td className="py-3 font-medium">Semi Bold</td>
                  <td className="py-3 text-[#64748B]">Card titles</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">Heading 2</td>
                  <td className="py-3 text-[#64748B]">Inter</td>
                  <td className="py-3 font-mono text-[13px]">22 / 30</td>
                  <td className="py-3 font-medium">Semi Bold</td>
                  <td className="py-3 text-[#64748B]">Sub section</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">Heading 3</td>
                  <td className="py-3 text-[#64748B]">Inter</td>
                  <td className="py-3 font-mono text-[13px]">18 / 26</td>
                  <td className="py-3 font-medium">Medium</td>
                  <td className="py-3 text-[#64748B]">Small titles</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">Body Large</td>
                  <td className="py-3 text-[#64748B]">Inter</td>
                  <td className="py-3 font-mono text-[13px]">16 / 24</td>
                  <td className="py-3 font-medium">Regular</td>
                  <td className="py-3 text-[#64748B]">Body copy</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">Body</td>
                  <td className="py-3 text-[#64748B]">Inter</td>
                  <td className="py-3 font-mono text-[13px]">14 / 20</td>
                  <td className="py-3 font-medium">Regular</td>
                  <td className="py-3 text-[#64748B]">Supporting text</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">Small</td>
                  <td className="py-3 text-[#64748B]">Inter</td>
                  <td className="py-3 font-mono text-[13px]">12 / 16</td>
                  <td className="py-3 font-medium">Regular</td>
                  <td className="py-3 text-[#64748B]">Captions, meta</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 04 & 05: SPACING, RADIUS & SHADOWS */}
      <section className="mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 04 Spacing System */}
          <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-[0_1px_2px_0_rgba(15,23,42,0.05)]">
            <div className="text-[11px] font-bold text-[#94A3B8] tracking-wider uppercase mb-1">
              04 &nbsp; SPACING SYSTEM
            </div>
            <p className="text-[13px] text-[#64748B] mb-6">Base unit: 4px</p>

            <div className="flex flex-wrap items-end gap-3 sm:gap-4">
              {[
                { size: 4, rem: "0.25rem", height: "h-2" },
                { size: 8, rem: "0.5rem", height: "h-4" },
                { size: 12, rem: "0.75rem", height: "h-6" },
                { size: 16, rem: "1rem", height: "h-8" },
                { size: 24, rem: "1.5rem", height: "h-11" },
                { size: 32, rem: "2rem", height: "h-14" },
                { size: 40, rem: "2.5rem", height: "h-16" },
                { size: 48, rem: "3rem", height: "h-20" },
                { size: 64, rem: "4rem", height: "h-24" },
              ].map((sp) => (
                <div key={sp.size} className="flex flex-col items-center">
                  <div
                    className={`w-9 sm:w-11 ${sp.height} bg-[#FED7AA] border border-[#FDBA74] rounded-[4px] mb-2`}
                  />
                  <span className="text-[12px] font-semibold text-[#0F172A]">
                    {sp.size}
                  </span>
                  <span className="text-[10px] text-[#94A3B8]">({sp.rem})</span>
                </div>
              ))}
            </div>
          </div>

          {/* 05 Radius & Shadows */}
          <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-[0_1px_2px_0_rgba(15,23,42,0.05)]">
            <div className="text-[11px] font-bold text-[#94A3B8] tracking-wider uppercase mb-4">
              05 &nbsp; RADIUS & SHADOWS
            </div>

            {/* Radius */}
            <div className="mb-6">
              <span className="text-[13px] font-semibold text-[#0F172A] block mb-3">
                Radius
              </span>
              <div className="flex flex-wrap items-center gap-4">
                {[
                  { label: "4px (xs)", radius: "rounded-[4px]" },
                  { label: "8px (sm)", radius: "rounded-[8px]" },
                  { label: "12px (md)", radius: "rounded-[12px]" },
                  { label: "16px (lg)", radius: "rounded-[16px]" },
                  { label: "24px (xl)", radius: "rounded-[24px]" },
                  { label: "Full (circle)", radius: "rounded-full" },
                ].map((r) => (
                  <div key={r.label} className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 bg-white border border-[#CBD5E1] ${r.radius} mb-1.5`}
                    />
                    <span className="text-[11px] text-[#64748B]">{r.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Shadows */}
            <div>
              <span className="text-[13px] font-semibold text-[#0F172A] block mb-3">
                Shadows
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  {
                    name: "Sm",
                    css: "0 1px 2px 0 rgba(15, 23, 42, 0.05)",
                    shadowClass: "shadow-[0_1px_2px_0_rgba(15,23,42,0.05)]",
                  },
                  {
                    name: "Md",
                    css: "0 4px 12px -2px rgba(15, 23, 42, 0.08)",
                    shadowClass: "shadow-[0_4px_12px_-2px_rgba(15,23,42,0.08)]",
                  },
                  {
                    name: "Lg",
                    css: "0 12px 24px -4px rgba(15, 23, 42, 0.10)",
                    shadowClass: "shadow-[0_12px_24px_-4px_rgba(15,23,42,0.10)]",
                  },
                  {
                    name: "Xl",
                    css: "0 20px 40px -8px rgba(15, 23, 42, 0.12)",
                    shadowClass: "shadow-[0_20px_40px_-8px_rgba(15,23,42,0.12)]",
                  },
                ].map((sh) => (
                  <div
                    key={sh.name}
                    className={`bg-white border border-[#E2E8F0] rounded-[12px] p-3 text-center ${sh.shadowClass}`}
                  >
                    <span className="text-[13px] font-bold text-[#0F172A] block mb-1">
                      {sh.name}
                    </span>
                    <span className="text-[9px] text-[#94A3B8] font-mono leading-tight block">
                      {sh.css}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06: ICONS */}
      <section className="mb-14">
        <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-[0_1px_2px_0_rgba(15,23,42,0.05)]">
          <div className="text-[11px] font-bold text-[#94A3B8] tracking-wider uppercase mb-4">
            06 &nbsp; ICONS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <span className="text-[13px] font-semibold text-[#64748B] block mb-3">
                Outline Style
              </span>
              <div className="flex items-center gap-5 text-[#0F172A]">
                <Bell className="w-5 h-5 stroke-[2]" />
                <Search className="w-5 h-5 stroke-[2]" />
                <Play className="w-5 h-5 stroke-[2]" />
                <FileText className="w-5 h-5 stroke-[2]" />
                <Bookmark className="w-5 h-5 stroke-[2]" />
                <BarChart2 className="w-5 h-5 stroke-[2]" />
                <Clock className="w-5 h-5 stroke-[2]" />
                <User className="w-5 h-5 stroke-[2]" />
                <ChevronRight className="w-5 h-5 stroke-[2]" />
              </div>
            </div>

            <div>
              <span className="text-[13px] font-semibold text-[#64748B] block mb-3">
                Filled Style
              </span>
              <div className="flex items-center gap-5 text-[#0F172A]">
                <Bell className="w-5 h-5 fill-current" />
                <Search className="w-5 h-5 stroke-[2.5]" />
                <Play className="w-5 h-5 fill-current" />
                <FileText className="w-5 h-5 fill-current" />
                <Bookmark className="w-5 h-5 fill-current" />
                <BarChart2 className="w-5 h-5 stroke-[2.5]" />
                <Clock className="w-5 h-5 fill-current" />
                <User className="w-5 h-5 fill-current" />
                <ChevronRight className="w-5 h-5 stroke-[3]" />
              </div>
            </div>
          </div>

          <div className="border-t border-[#F1F5F9] pt-4">
            <span className="text-[12px] font-semibold text-[#0F172A] block mb-2">
              Icon Specs
            </span>
            <ul className="text-[13px] text-[#64748B] list-disc list-inside space-y-1">
              <li>24x24px grid</li>
              <li>2px stroke width (outline)</li>
              <li>Rounded line caps</li>
              <li>Consistent optical balance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 07 & 08: BUTTONS & INPUTS */}
      <section className="mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 07 BUTTONS */}
          <div className="lg:col-span-7 bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-[0_1px_2px_0_rgba(15,23,42,0.05)]">
            <div className="text-[11px] font-bold text-[#94A3B8] tracking-wider uppercase mb-4">
              07 &nbsp; BUTTONS
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#E2E8F0] text-[12px] text-[#94A3B8] uppercase font-semibold">
                    <th className="pb-3">State</th>
                    <th className="pb-3">Primary</th>
                    <th className="pb-3">Secondary</th>
                    <th className="pb-3">Tertiary</th>
                    <th className="pb-3">Text</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F1F5F9]">
                  <tr>
                    <td className="py-3 text-[13px] font-medium text-[#64748B]">
                      Default
                    </td>
                    <td className="py-3">
                      <Button variant="primary">Get Started</Button>
                    </td>
                    <td className="py-3">
                      <Button variant="secondary">Explore Courses</Button>
                    </td>
                    <td className="py-3">
                      <Button
                        variant="tertiary"
                        icon={<ArrowUpRight className="w-4 h-4" />}
                      >
                        View Lesson
                      </Button>
                    </td>
                    <td className="py-3">
                      <Button
                        variant="text"
                        icon={<Play className="w-3.5 h-3.5 fill-current ml-1" />}
                      >
                        Watch Video
                      </Button>
                    </td>
                  </tr>

                  {/* Hover visual example */}
                  <tr>
                    <td className="py-3 text-[13px] font-medium text-[#64748B]">
                      Hover
                    </td>
                    <td className="py-3">
                      <button className="h-[44px] px-4 text-[15px] rounded-[12px] bg-[#EA580C] text-white font-medium shadow-sm">
                        Get Started
                      </button>
                    </td>
                    <td className="py-3">
                      <button className="h-[44px] px-4 text-[15px] rounded-[12px] bg-[#FFF7ED] border border-[#FDBA74] text-[#F97316] font-medium shadow-sm">
                        Explore Courses
                      </button>
                    </td>
                    <td className="py-3">
                      <button className="h-[44px] px-4 text-[15px] rounded-[12px] bg-[#F8FAFC] border border-[#CBD5E1] text-[#0F172A] font-medium shadow-sm inline-flex items-center gap-2">
                        View Lesson <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </td>
                    <td className="py-3">
                      <button className="text-[#EA580C] font-medium inline-flex items-center gap-1.5">
                        Watch Video <Play className="w-3.5 h-3.5 fill-current ml-1" />
                      </button>
                    </td>
                  </tr>

                  {/* Disabled */}
                  <tr>
                    <td className="py-3 text-[13px] font-medium text-[#64748B]">
                      Disabled
                    </td>
                    <td className="py-3">
                      <Button variant="primary" disabled>
                        Get Started
                      </Button>
                    </td>
                    <td className="py-3">
                      <Button variant="secondary" disabled>
                        Explore Courses
                      </Button>
                    </td>
                    <td className="py-3">
                      <Button
                        variant="tertiary"
                        disabled
                        icon={<ArrowUpRight className="w-4 h-4" />}
                      >
                        View Lesson
                      </Button>
                    </td>
                    <td className="py-3">
                      <Button
                        variant="text"
                        disabled
                        icon={<Play className="w-3.5 h-3.5 fill-current ml-1" />}
                      >
                        Watch Video
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="border-t border-[#F1F5F9] pt-4">
              <span className="text-[12px] font-semibold text-[#0F172A] block mb-2">
                Button Specs
              </span>
              <ul className="text-[13px] text-[#64748B] list-disc list-inside space-y-1">
                <li>Height: 44px (default)</li>
                <li>Padding: 0 16px (lg), 0 12px (md)</li>
                <li>Radius: 12px</li>
                <li>Font: Inter Medium (14–16px)</li>
              </ul>
            </div>
          </div>

          {/* 08 INPUTS */}
          <div className="lg:col-span-5 bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-[0_1px_2px_0_rgba(15,23,42,0.05)]">
            <div className="text-[11px] font-bold text-[#94A3B8] tracking-wider uppercase mb-4">
              08 &nbsp; INPUTS
            </div>

            <div className="space-y-5 mb-6">
              <div>
                <label className="text-[13px] font-semibold text-[#64748B] block mb-2">
                  Search / Text Input
                </label>
                <Input isSearch shortcut="⌘ K" placeholder="Search anything..." />
              </div>

              <div>
                <label className="text-[13px] font-semibold text-[#64748B] block mb-2">
                  Select
                </label>
                <Select
                  options={[
                    { label: "Most Relevant", value: "relevant" },
                    { label: "Newest First", value: "newest" },
                    { label: "Popular", value: "popular" },
                  ]}
                />
              </div>
            </div>

            <div className="border-t border-[#F1F5F9] pt-4">
              <span className="text-[12px] font-semibold text-[#0F172A] block mb-2">
                Field Specs
              </span>
              <ul className="text-[13px] text-[#64748B] list-disc list-inside space-y-1">
                <li>Height: 44px</li>
                <li>Radius: 12px</li>
                <li>Border: 1px solid #E2E8F0</li>
                <li>Padding: 0 16px</li>
                <li>Focus: Border color #FB923C</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 09, 10 & 11: BADGES, STATUS & PROGRESS */}
      <section className="mb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 09 BADGES / TAGS */}
          <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-[0_1px_2px_0_rgba(15,23,42,0.05)]">
            <div className="text-[11px] font-bold text-[#94A3B8] tracking-wider uppercase mb-4">
              09 &nbsp; BADGES / TAGS
            </div>

            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <span className="text-[11px] text-[#64748B]">Video</span>
                <Badge variant="video">VIDEO</Badge>
              </div>

              <div className="flex flex-col items-center gap-2">
                <span className="text-[11px] text-[#64748B]">Lesson</span>
                <Badge variant="lesson">LESSON</Badge>
              </div>

              <div className="flex flex-col items-center gap-2">
                <span className="text-[11px] text-[#64748B]">Popular</span>
                <Badge variant="popular">POPULAR</Badge>
              </div>
            </div>
          </div>

          {/* 10 STATUS / INDICATORS */}
          <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-[0_1px_2px_0_rgba(15,23,42,0.05)]">
            <div className="text-[11px] font-bold text-[#94A3B8] tracking-wider uppercase mb-4">
              10 &nbsp; STATUS / INDICATORS
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <StatusIndicator status="in-progress" />
              <StatusIndicator status="completed" />
              <StatusIndicator status="now-playing" />
              <StatusIndicator status="locked" />
            </div>
          </div>

          {/* 11 PROGRESS BAR */}
          <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-[0_1px_2px_0_rgba(15,23,42,0.05)]">
            <div className="text-[11px] font-bold text-[#94A3B8] tracking-wider uppercase mb-4">
              11 &nbsp; PROGRESS BAR
            </div>

            <div className="pt-2">
              <ProgressBar value={progressVal} />
              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => setProgressVal((v) => Math.max(0, v - 10))}
                  className="text-[11px] text-[#64748B] hover:text-[#0F172A] underline"
                >
                  -10%
                </button>
                <span className="text-[11px] text-[#94A3B8]">
                  Interactive preview
                </span>
                <button
                  onClick={() => setProgressVal((v) => Math.min(100, v + 10))}
                  className="text-[11px] text-[#64748B] hover:text-[#0F172A] underline"
                >
                  +10%
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: CARDS */}
      <section className="mb-14">
        <div className="text-[11px] font-bold text-[#94A3B8] tracking-wider uppercase mb-4">
          12 &nbsp; CARDS
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Course Card */}
          <CourseCard
            title="Next.js for Production"
            description="Build scalable, high-performance web applications with Next.js."
            level="Intermediate"
            duration="18h 24m"
            modulesCount="12 modules"
          />

          {/* Lesson Card (Video) */}
          <LessonVideoCard
            title="Data Fetching in Server Components"
            description="Learn how to fetch data on the server using async/await and Next.js best practices."
            lessonLabel="Lesson 5.1"
            timestamp="12:45"
          />

          {/* Lesson Card (Lesson) */}
          <LessonTopicCard
            title="Data Fetching & Caching"
            description="Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance."
            moduleLabel="Module 5"
          />

          {/* Resource Card */}
          <ResourceCard
            title="Caching and Revalidation Guide"
            description="Deep dive into Next.js caching strategies."
            type="PDF"
            fileSize="1.2 MB"
          />
        </div>
      </section>

      {/* SECTION 13: NAVIGATION */}
      <section className="mb-14">
        <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-[0_1px_2px_0_rgba(15,23,42,0.05)]">
          <div className="text-[11px] font-bold text-[#94A3B8] tracking-wider uppercase mb-6">
            13 &nbsp; NAVIGATION
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#F1F5F9]">
            {/* Nav Header */}
            <div className="flex items-center gap-8">
              <VertexLogo size="md" />

              <nav className="flex items-center gap-6">
                <button
                  onClick={() => setActiveTab("courses")}
                  className={`text-[15px] font-semibold transition-colors cursor-pointer ${
                    activeTab === "courses"
                      ? "text-[#F97316]"
                      : "text-[#64748B] hover:text-[#0F172A]"
                  }`}
                >
                  Courses
                </button>
                <button
                  onClick={() => setActiveTab("learning")}
                  className={`text-[15px] font-semibold transition-colors cursor-pointer ${
                    activeTab === "learning"
                      ? "text-[#F97316]"
                      : "text-[#64748B] hover:text-[#0F172A]"
                  }`}
                >
                  My Learning
                </button>
              </nav>
            </div>

            {/* Breadcrumbs */}
            <div className="flex-1 lg:max-w-md">
              <span className="text-[11px] font-semibold text-[#94A3B8] uppercase block mb-1">
                Breadcrumbs
              </span>
              <Breadcrumbs
                items={[
                  { label: "All Courses", href: "#" },
                  { label: "Next.js for Production", href: "#" },
                  { label: "Data Fetching & Caching" },
                ]}
              />
            </div>

            {/* Pagination */}
            <div>
              <span className="text-[11px] font-semibold text-[#94A3B8] uppercase block mb-1">
                Pagination
              </span>
              <Pagination
                currentPage={currentPage}
                totalPages={8}
                onPageChange={(p) => setCurrentPage(p)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: PRINCIPLES */}
      <section className="mb-14">
        <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-[0_1px_2px_0_rgba(15,23,42,0.05)]">
          <div className="text-[11px] font-bold text-[#94A3B8] tracking-wider uppercase mb-6">
            14 &nbsp; PRINCIPLES
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-[10px] bg-[#FFEEE5] text-[#F97316] flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[15px] font-semibold text-[#0F172A] mb-1">
                  Clarity First
                </h4>
                <p className="text-[13px] text-[#64748B] leading-relaxed">
                  Every element should communicate clearly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-[10px] bg-[#FFEEE5] text-[#F97316] flex items-center justify-center flex-shrink-0">
                <LayoutGrid className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[15px] font-semibold text-[#0F172A] mb-1">
                  Consistency
                </h4>
                <p className="text-[13px] text-[#64748B] leading-relaxed">
                  Use components and patterns consistently across the platform.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-[10px] bg-[#FFEEE5] text-[#F97316] flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[15px] font-semibold text-[#0F172A] mb-1">
                  Focus & Calm
                </h4>
                <p className="text-[13px] text-[#64748B] leading-relaxed">
                  Remove noise and help learners focus on what matters.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-[10px] bg-[#FFEEE5] text-[#F97316] flex items-center justify-center flex-shrink-0">
                <Accessibility className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[15px] font-semibold text-[#0F172A] mb-1">
                  Accessible
                </h4>
                <p className="text-[13px] text-[#64748B] leading-relaxed">
                  Design with accessibility and inclusivity in mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
