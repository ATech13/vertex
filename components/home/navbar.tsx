import React from "react";
import Link from "next/link";
import Image from "next/image";
import { VertexLogo } from "@/components/ui/vertex-logo";
import { Bell } from "lucide-react";

export function Navbar() {
  return (
    <header className="w-full bg-[#FAFAFC]/90 backdrop-blur-sm sticky top-0 z-40 border-b border-[#F1F5F9]">
      <div className="max-w-[1240px] mx-auto px-6 h-18 flex items-center justify-between">
        {/* Left: Logo & Nav Links */}
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center">
            <VertexLogo size="md" />
          </Link>

          <nav className="hidden sm:flex items-center gap-7">
            <Link
              href="/courses"
              className="text-[15px] font-medium text-[#0F172A] hover:text-[#F97316] transition-colors"
            >
              Courses
            </Link>
            <Link
              href="/my-learning"
              className="text-[15px] font-medium text-[#64748B] hover:text-[#0F172A] transition-colors"
            >
              My Learning
            </Link>
          </nav>
        </div>

        {/* Right: Notifications & Profile Avatar */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            aria-label="Notifications"
            className="w-10 h-10 flex items-center justify-center rounded-full text-[#0F172A] hover:text-[#F97316] hover:bg-white transition-colors cursor-pointer"
          >
            <Bell className="w-5 h-5 stroke-[1.8]" />
          </button>

          {/* User profile avatar */}
          <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-[#E2E8F0] select-none flex-shrink-0 cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
              alt="Learner avatar"
              width={36}
              height={36}
              unoptimized
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
