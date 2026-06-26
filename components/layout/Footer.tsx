"use client";

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-[11px] text-slate-400 md:flex-row">
        <p>© {new Date().getFullYear()} FluxBridge Automation. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#hero" className="hover:text-slate-200 transition-colors duration-150 ease-out">
            Overview
          </a>
          <a href="#pricing" className="hover:text-slate-200 transition-colors duration-150 ease-out">
            Pricing
          </a>
          <a href="#cta" className="hover:text-slate-200 transition-colors duration-150 ease-out">
            Status
          </a>
        </div>
      </div>
    </footer>
  );
}