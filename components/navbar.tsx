"use client";

import Image from "next/image";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Text */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative">
              <Image
                src="/@publicnail.png"
                alt="Nailart AI Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-white font-semibold text-lg" style={{ fontFamily: "var(--font-open-sans)" }}>
              Nailart AI
            </span>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-slate-300 hover:text-white transition text-sm"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-slate-300 hover:text-white transition text-sm"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-slate-300 hover:text-white transition text-sm"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              Contact
            </a>
          </div>

          {/* Get Started Button */}
          <a
            href="#get-started"
            className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300 transition shadow-lg shadow-cyan-500/20"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
