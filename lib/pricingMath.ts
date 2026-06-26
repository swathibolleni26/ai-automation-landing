import {
  ANNUAL_DISCOUNT,
  BillingCycle,
  CurrencyCode,
  currencyFactors
} from "./pricingConfig";

interface ComputeArgs {
  baseMonthly: number;
  billing: BillingCycle;
  currency: CurrencyCode;
}

// pure pricing math: base -> monthly/annual -> currency
export function computePrice({ baseMonthly, billing, currency }: ComputeArgs) {
  const monthlyInCurrency = baseMonthly * currencyFactors[currency];

  const billed =
    billing === "annual"
      ? monthlyInCurrency * ANNUAL_DISCOUNT * 12
      : monthlyInCurrency;

  return Math.round(billed);
}

export function formatPrice(amount: number, currency: CurrencyCode) {
  const symbols: Record<CurrencyCode, string> = {
    INR: "₹",
    USD: "$",
    EUR: "€"
  };

  return `${symbols[currency]}${amount.toLocaleString()}`;
}