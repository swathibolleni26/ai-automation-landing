"use client";

export default function HeroSection() {
  return (
    <section className="border-b border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center">
        {/* Left: Text */}
        <div className="max-w-xl space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-[11px] text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live data flows ·{" "}
            <span className="font-medium">AI-guided scheduling
</span>
          </p>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
           Keep every data job in sync
<span className="block text-sky-400">
  from one AI-powered command center.
</span>
          </h1>

          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            Our engine listens to your databases, streams and APIs in real time,
then builds optimized workflows on top. Your team spends time on
features instead of chasing broken cron jobs.
            
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button className="rounded-full bg-sky-500 px-5 py-2 text-xs font-medium text-slate-950 transition-colors duration-150 ease-out hover:bg-sky-400">
              Start a 14‑day trial
            </button>
            <button className="rounded-full border border-slate-600 px-5 py-2 text-xs font-medium text-slate-200 transition-colors duration-150 ease-out hover:border-slate-400 hover:text-white">
              Watch product walkthrough
            </button>
            <p className="text-[11px] text-slate-400">
              No credit card · SOC2‑ready controls · Global regions
            </p>
          </div>
        </div>

        {/* Right: Visual mock */}
        <div className="flex flex-1 items-center justify-center">
          <div className="relative w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/70 p-4 shadow-[0_0_40px_rgba(56,189,248,0.25)]">
            <div className="mb-3 flex items-center justify-between text-[11px] text-slate-400">
              <span>Realtime automation graph</span>
              <span>~120 ms orchestration latency</span>
            </div>

            <div className="grid grid-cols-3 gap-3 text-[11px]">
              <div className="rounded-2xl bg-slate-800/70 p-3">
                <p className="text-slate-300">Sources</p>
                <p className="mt-1 text-sky-300">Postgres, Kafka, S3</p>
              </div>
              <div className="rounded-2xl bg-slate-800/70 p-3">
                <p className="text-slate-300">AI routing</p>
                <p className="mt-1 text-emerald-300">Policy‑aware DAGs</p>
              </div>
              <div className="rounded-2xl bg-slate-800/70 p-3">
                <p className="text-slate-300">Destinations</p>
                <p className="mt-1 text-purple-300">Warehouse &amp; apps</p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-slate-800/60 p-3 text-[11px] text-slate-300">
              <p className="mb-1 text-sky-300">Live metric stream</p>
              <p>Throughput: 2.3M events / min · Error budget: 0.02%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}