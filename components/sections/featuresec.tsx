"use client";

import { useState } from "react";
import { useIsMobile } from "@/lib/useIsMobile";

const FEATURES = [
  {
    title: "Schema-aware ingestion",
    summary:
      "Connect warehouses, OLTP stores, queues and files. Our AI maps schemas, types and constraints automatically.",
    metric: "Up to 10M rows / run"
  },
  {
    title: "Deterministic pipelines",
    summary:
      "Model your workflows as DAGs with idempotent steps, retries and full lineage for every event.",
    metric: "99.99% pipeline success"
  },
  {
    title: "Governed access",
    summary:
      "Enforce fine-grained roles, approvals, and audit trails across teams and environments.",
    metric: "SOC2-ready policies"
  },
  {
    title: "Realtime sync",
    summary:
      "Stream deltas into warehouses, lakes and apps with smart backpressure and replay.",
    metric: "< 60s median latency"
  }
];

export default function FeaturesSection() {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);

  if (isMobile) {
    // Accordion view
    return (
      <section
        id="features"
        className="border-t border-slate-900 bg-slate-950 py-16"
      >
        <div className="mx-auto max-w-4xl px-4">
          <header className="mb-8 text-center">
            <h2 className="text-3xl font-semibold tracking-tight">
              Built for noisy, real-world data
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              On mobile, features collapse into a tap-first view while keeping
              your current focus.
            </p>
          </header>

          <div className="space-y-3">
            {FEATURES.map((f, i) => {
              const open = i === activeIndex;
              return (
                <article
                  key={f.title}
                  className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-[transform,box-shadow] duration-200 ease-out"
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className="flex w-full items-center justify-between px-4 py-3"
                  >
                    <div className="text-left">
                      <h3 className="text-sm font-medium text-slate-100">
                        {f.title}
                      </h3>
                      <p className="text-[11px] text-slate-400">{f.metric}</p>
                    </div>
                    <span className="text-xs text-slate-400">
                      {open ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`grid transition-[max-height,opacity] duration-300 ease-in-out ${
                      open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-4 pb-4 text-sm text-slate-300">
                      {f.summary}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Desktop bento view
  return (
    <section
      id="features"
      className="border-t border-slate-900 bg-slate-950 py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              A bento of AI-native building blocks
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-300">
              Hover any tile to inspect its behavior. Resize your window to
              mobile and you keep the same feature in focus.
            </p>
          </div>
          <p className="text-xs text-slate-400">
            Micro-interactions run in 150–200ms; layout shifts within 300–400ms,
            driven purely by CSS transitions.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {FEATURES.map((f, i) => {
            const active = i === activeIndex;
            return (
              <article
                key={f.title}
                onMouseEnter={() => setActiveIndex(i)}
                className={`flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900 p-5 transition-transform duration-200 ease-out ${
                  active
                    ? "translate-y-0 shadow-xl ring-2 ring-sky-500"
                    : "translate-y-1 hover:-translate-y-0.5 hover:shadow-lg"
                }`}
              >
                <div>
                  <h3 className="text-lg font-medium text-slate-100">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">{f.summary}</p>
                </div>
                <p className="mt-4 text-xs font-medium text-sky-300">
                  {f.metric}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}