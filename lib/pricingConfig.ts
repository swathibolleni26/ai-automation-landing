export type BillingCycle = "monthly" | "annual";
export type CurrencyCode = "INR" | "USD" | "EUR";

export interface TierConfig {
  id: string;
  name: string;
  description: string;
  baseMonthly: number; // base price unit
  highlight?: boolean;
  features: string[];
}

export const tiers: TierConfig[] = [
  {
    id: "starter",
    name: "Starter",
    description: "For teams automating their first production workflows.",
    baseMonthly: 49,
    features: [
      "Up to 5 active pipelines",
      "Single data region",
      "Email support"
    ]
  },
  {
    id: "growth",
    name: "Growth",
    description: "For squads orchestrating cross-team data products.",
    baseMonthly: 149,
    highlight: true,
    features: [
      "Unlimited pipelines",
      "Multi‑region routing",
      "Priority support"
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For compliance-heavy, globally distributed orgs.",
    baseMonthly: 399,
    features: [
      "Custom SLAs",
      "Dedicated architect",
      "Private networking options"
    ]
  }
];

export const currencyFactors: Record<CurrencyCode, number> = {
  INR: 1,
  USD: 0.012,
  EUR: 0.011
};

export const ANNUAL_DISCOUNT = 0.8; // 20% off