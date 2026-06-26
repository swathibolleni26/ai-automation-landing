"use client";

import { useState } from "react";
import {
  BillingCycle,
  CurrencyCode,
  tiers
} from "@/lib/pricingConfig";
import { computePrice, formatPrice } from "@/lib/pricingMath";

export default function PricingSection() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");
  const [currency, setCurrency] = useState<CurrencyCode>("INR");

  return (
    <section
      id="pricing"
      className="border-t border-slate-900 bg-slate-950 py-16"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Plans for every data team
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Start small, then scale to global workloads without changing how
            you build or monitor pipelines.
          </p>
        </header>

        {/* Controls */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
          {/* Billing toggle */}
          <div className="inline-flex items-center rounded-full bg-slate-900 px-1 py-1 text-xs">
            {(["monthly", "annual"] as BillingCycle[]).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setBilling(option)}
                className={`rounded-full px-4 py-1 transition-colors duration-150 ease-out ${
                  billing === option
                    ? "bg-sky-500 text-slate-950"
                    : "text-slate-300"
                }`}
              >
                {option === "monthly" ? "Monthly" : "Annual · save 20%"}
              </button>
            ))}
          </div>

          {/* Currency dropdown */}
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
            className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option value="INR">INR ₹</option>
            <option value="USD">USD $</option>
            <option value="EUR">EUR €</option>
          </select>
        </div>

        {/* Tier cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => {
            const price = computePrice({
              baseMonthly: tier.baseMonthly,
              billing,
              currency
            });

            return (
              <article
                key={tier.id}
                className={`flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-sm transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg ${
                  tier.highlight ? "ring-2 ring-sky-500" : ""
                }`}
              >
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <p className="mt-2 text-sm text-slate-300">
                  {tier.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-3xl font-semibold">
                    {formatPrice(price, currency)}
                  </span>
                  <span className="text-xs text-slate-400">
                    /{billing === "monthly" ? "month" : "year"}
                  </span>
                </div>

                <ul className="mt-6 space-y-2 text-sm text-slate-300">
                  {tier.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="mt-8 w-full rounded-full bg-sky-500 px-4 py-2 text-xs font-medium text-slate-950 transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:bg-sky-400"
                >
                  Start with {tier.name}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}