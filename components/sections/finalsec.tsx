"use client";

export default function FinalCTASection() {
  return (
    <section
      id="cta"
      className="border-t border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900 py-16"
    >
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">
          Stop babysitting pipelines. Start shipping products.
        </h2>
        <p className="mt-4 text-sm text-slate-300">
          Connect a source, describe your target state in plain language, and
          let the automation plane compose, schedule and heal the graph for you.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button className="rounded-full bg-sky-500 px-6 py-2 text-xs font-medium text-slate-950 transition-colors duration-150 ease-out hover:bg-sky-400">
            Get started in 5 minutes
          </button>
          <button className="rounded-full border border-slate-600 px-6 py-2 text-xs font-medium text-slate-200 transition-colors duration-150 ease-out hover:border-slate-400 hover:text-white">
            Talk to an architect
          </button>
        </div>
        <p className="mt-4 text-[11px] text-slate-400">
          Free sandbox · No billing details · Safe to run alongside your stack
        </p>
      </div>
    </section>
  );
}