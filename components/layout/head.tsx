"use client";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500">
            <span className="text-sm font-semibold text-slate-950">AI</span>
          </div>
          <span className="text-sm font-semibold tracking-tight">
            FluxBridge Automation
          </span>
        </div>

        <nav className="hidden items-center gap-6 text-xs text-slate-300 md:flex">
          <a
            href="#hero"
            className="transition-colors duration-150 ease-out hover:text-white"
          >
            Overview
          </a>
          <a
            href="#features"
            className="transition-colors duration-150 ease-out hover:text-white"
          >
            Capabilities
          </a>
          <a
            href="#pricing"
            className="transition-colors duration-150 ease-out hover:text-white"
          >
            Pricing
          </a>
          <a
            href="#cta"
            className="transition-colors duration-150 ease-out hover:text-white"
          >
            Docs
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full px-3 py-1 text-xs text-slate-300 transition-colors duration-150 ease-out hover:text-white md:inline-flex">
            Sign in
          </button>
          <button className="rounded-full bg-sky-500 px-3 py-1.5 text-xs font-medium text-slate-950 transition-colors duration-150 ease-out hover:bg-sky-400">
            Launch console
          </button>
        </div>
      </div>
    </header>
  );
}