import React from "react";

export function BottomGraphic() {
  // Equalizer bar heights in pixels matching the visual contour in vertex-home.png
  const bars = [
    { height: "h-24 sm:h-36" },
    { height: "h-36 sm:h-56" },
    { height: "h-52 sm:h-80" },
    { height: "h-64 sm:h-96" },
    { height: "h-48 sm:h-72" },
    { height: "h-40 sm:h-60" },
    { height: "h-28 sm:h-44" },
    { height: "h-20 sm:h-32" },
    { height: "h-24 sm:h-40" },
    { height: "h-44 sm:h-64" },
    { height: "h-60 sm:h-88" },
    { height: "h-64 sm:h-96" },
    { height: "h-56 sm:h-84" },
    { height: "h-44 sm:h-68" },
    { height: "h-32 sm:h-52" },
  ];

  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden pointer-events-none select-none mt-4 h-64 sm:h-96 flex items-end justify-center"
    >
      {/* Background ambient radial glow */}
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#F97316]/20 via-[#FED7AA]/15 to-transparent blur-2xl" />

      {/* Grid of equalizer gradient bars */}
      <div className="relative w-full max-w-[1400px] px-2 sm:px-6 grid grid-cols-15 gap-2 sm:gap-4 items-end justify-items-center h-full">
        {bars.map((bar, index) => (
          <div
            key={index}
            className={`w-full max-w-[70px] ${bar.height} rounded-t-[10px] sm:rounded-t-[14px] bg-gradient-to-t from-[#F97316]/50 via-[#FB923C]/30 to-[#FED7AA]/10 opacity-80 transition-all`}
          />
        ))}
      </div>

      {/* Bottom fade out overlay */}
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#FAFAFC] to-transparent" />
    </div>
  );
}
