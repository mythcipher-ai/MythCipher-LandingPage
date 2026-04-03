"use client";

import { useState, useEffect } from "react";
import { useInView } from "@/lib/hooks";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import Button from "./Button";
import Link from "next/link";
import { Check } from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://mythcipher-automation-backend.onrender.com";

const STATIC_PLANS = [
  {
    name: "Free",
    priceMonthly: 0,
    priceAnnual: 0,
    features: [
      "3 active automations",
      "500 runs/month",
      "Community templates only",
      "Email support",
    ],
    cta: "Start Free \u2192",
    campaign: "free_plan",
    featured: false,
    badge: null,
    risk: null,
  },
  {
    name: "Pro",
    priceMonthly: 999,
    priceAnnual: 799,
    features: [
      "Unlimited active automations",
      "10,000 runs/month",
      "All 300+ templates",
      "Plain-English error alerts",
      "IST scheduling",
      "Full run history + audit log",
      "Priority support (avg response: 4 hours)",
    ],
    cta: "Start 14-Day Free Trial \u2192",
    campaign: "pro_plan",
    featured: true,
    badge: "Most Popular",
    risk: "No credit card for trial \u00B7 Cancel anytime \u00B7 Full refund if not happy in 14 days",
  },
  {
    name: "Team",
    priceMonthly: 2499,
    priceAnnual: 1999,
    features: [
      "Everything in Pro",
      "5 team seats",
      "Shared automation library",
      "Custom automation requests (48hr turnaround)",
      "Dedicated onboarding call",
    ],
    cta: "Book a Free Demo \u2192",
    campaign: "team_plan",
    featured: false,
    badge: null,
    risk: null,
  },
];

interface PlanData {
  name: string;
  priceMonthly: number;
  priceAnnual: number;
  features: string[];
  cta: string;
  campaign: string;
  featured: boolean;
  badge: string | null;
  risk: string | null;
}

function Pricing() {
  const [annual, setAnnual] = useState(true);
  const { ref, inView } = useInView();
  const [plans, setPlans] = useState<PlanData[]>(STATIC_PLANS);

  useEffect(() => {
    fetch(`${API_BASE}/api/plans`)
      .then((res) => res.json())
      .then((data: any[]) => {
        if (data.length > 0) {
          setPlans(
            data.map((p) => ({
              name: p.name,
              priceMonthly: p.priceMonthly,
              priceAnnual: p.priceAnnual,
              features: p.features,
              cta: p.cta,
              campaign: p.campaign,
              featured: p.featured,
              badge: p.badge,
              risk: p.risk,
            }))
          );
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section
      id="pricing"
      ref={ref}
      className="bg-Background py-20 md:py-32 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        <div
          className={cn(
            "space-y-3 text-center fade-in-up",
            inView && "visible"
          )}
        >
          <p className="text-sm font-medium text-Accent-Cyan tracking-wide">
            Pricing
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-Surface-Hover tracking-tight">
            Start free. Upgrade when you&apos;re hooked.
          </h2>
        </div>

        <p
          className={cn(
            "text-center text-Tertiary text-base max-w-2xl mx-auto fade-in-up",
            inView && "visible"
          )}
          style={{ transitionDelay: "0.1s" }}
        >
          The average MythCipher user saves 6+ hours a week on manual tasks.
          At &#8377;500/hr, that&apos;s &#8377;12,000/month in recovered
          time. The Pro plan costs &#8377;999.
        </p>

        {/* Toggle */}
        <div
          className={cn(
            "flex justify-center items-center gap-3 fade-in-up",
            inView && "visible"
          )}
          style={{ transitionDelay: "0.15s" }}
        >
          <span
            className={cn(
              "text-sm",
              !annual ? "text-Surface" : "text-Tertiary"
            )}
          >
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={cn(
              "relative w-12 h-6 rounded-full transition-colors duration-200 cursor-pointer",
              annual ? "bg-Accent-Cyan" : "bg-Secondary"
            )}
          >
            <div
              className={cn(
                "absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200",
                annual ? "translate-x-6" : "translate-x-0.5"
              )}
            />
          </button>
          <span
            className={cn(
              "text-sm",
              annual ? "text-Surface" : "text-Tertiary"
            )}
          >
            Annual{" "}
            <span className="text-Accent-Green text-xs font-medium ml-1">
              Save 20%
            </span>
          </span>
        </div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={cn(
                "rounded-2xl p-6 space-y-6 relative fade-in-up",
                plan.featured
                  ? "bg-Card border-2 border-Accent-Cyan/50"
                  : "bg-Card border border-Bento-Border",
                inView && "visible"
              )}
              style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-Accent-Cyan text-Background text-xs font-semibold px-3 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}
              <div>
                <h3 className="text-lg font-semibold text-Surface-Hover">
                  {plan.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-serif text-Surface-Hover">
                    &#8377;
                    {annual ? plan.priceAnnual : plan.priceMonthly}
                  </span>
                  <span className="text-sm text-Tertiary">/month</span>
                </div>
                {annual &&
                  plan.priceAnnual !== plan.priceMonthly && (
                    <p className="text-xs text-Tertiary mt-1">
                      billed annually
                    </p>
                  )}
              </div>

              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-Tertiary"
                  >
                    <Check
                      size={16}
                      className="text-Accent-Green shrink-0 mt-0.5"
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={`https://ai.mythcipher.in/signup?utm_source=landing&utm_medium=pricing&utm_campaign=${plan.campaign}`}
                className="block"
              >
                <Button
                  variant={plan.featured ? "primary" : "secondary"}
                  className="w-full"
                  onClick={() =>
                    trackEvent("pricing_cta_click", {
                      plan: plan.name.toLowerCase(),
                    })
                  }
                >
                  {plan.cta}
                </Button>
              </Link>

              {plan.risk && (
                <p className="text-xs text-Tertiary/70 text-center">
                  {plan.risk}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
