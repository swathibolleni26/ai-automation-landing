"use client";

export default function SocialProofSection() {
  return (
    <section
      id="social-proof"
      className="border-t border-slate-900 bg-slate-950 py-12"
    >
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
          Trusted by data-led teams
        </p>

        <div className="mt-6 grid gap-6 text-sm text-slate-300 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-[11px] text-sky-300">Ops Lead · SaaS</p>
            <p className="mt-2">
              “We ripped out six brittle cron services and moved everything into
              a single, observable automation graph.”
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-[11px] text-emerald-300">Data Eng · Fintech</p>
            <p className="mt-2">
              “Alert noise dropped by 80% and pipeline failures now come with
              full lineage out of the box.”
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-[11px] text-purple-300">Platform · Marketplace</p>
            <p className="mt-2">
              “New product experiments ship in days instead of weeks because
              data wiring is no longer the bottleneck.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}