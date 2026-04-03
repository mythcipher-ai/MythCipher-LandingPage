"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://mythcipher-automation-backend.onrender.com";

const STATIC_PLANS = [
  {
    name: "Free Trial",
    price: "0",
    period: "for 7 days",
    features: [
      "1 Complete Automation System (choose 1)",
      "Runs for 7 days",
      "See real results before paying",
      "No credit card required",
    ],
    cta: "Start Free Trial \u2192",
    campaign: "free_trial",
    featured: false,
    badge: null as string | null,
    note: null as string | null,
  },
  {
    name: "Monthly",
    price: "999",
    period: "/month",
    features: [
      "Unlimited automations",
      "LinkedIn, YouTube, Email, Instagram",
      "Pre-built systems",
      "Customer support",
      "Tool Hub access",
    ],
    cta: "Get Started \u2192",
    campaign: "monthly_plan",
    featured: true,
    badge: "Most Popular",
    note: "Cancel anytime \u00B7 No lock-in",
  },
  {
    name: "Yearly",
    price: "10,999",
    period: "/year",
    features: [
      "Everything in Core",
      "Get 1 monthly Free (save 8%)",
      "Priority support",
      "Early access to new features",
      "Access to exclusive community of power users",
    ],
    cta: "Get Yearly Plan \u2192",
    campaign: "yearly_plan",
    featured: false,
    badge: "Best Value",
    note: "That's just \u20B9999/month",
  },
];

const FAQS = [
  {
    q: "What can I automate with MythCipher?",
    a: "LinkedIn posting, YouTube scheduling, email campaigns, AI content generation, and more. Instagram automation is coming soon. We're adding new templates every week.",
  },
  {
    q: "How does the free trial work?",
    a: "You get full access to every feature for 7 days. No credit card required. At the end, choose a plan or your account pauses \u2014 nothing gets deleted.",
  },
  {
    q: "Do I need to know any code or APIs?",
    a: "No. Connect your accounts with one click. We handle OAuth, credentials, and all the technical setup. You just pick what to automate and answer a few plain questions.",
  },
  {
    q: "What happens when an automation breaks?",
    a: "You get a notification in plain English: what broke, why, and how to fix it. One click to resolve. No cryptic error codes.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Monthly plans can be cancelled at any time \u2014 no lock-in contracts. Yearly plans include a 14-day money-back guarantee.",
  },
  {
    q: "What platforms do you support?",
    a: "LinkedIn, YouTube, Gmail, and email platforms are fully supported. Instagram automation is coming soon. We also support Slack, Google Sheets, Notion, and more for integrations.",
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [plans, setPlans] = useState(STATIC_PLANS);

  useEffect(() => {
    fetch(`${API_BASE}/api/plans`)
      .then((res) => res.json())
      .then((data: any[]) => {
        if (data.length > 0) {
          setPlans(
            data.map((p: any) => ({
              name: p.name,
              price: p.priceMonthly.toLocaleString("en-IN"),
              period: p.priceMonthly === 0 ? `for ${p.trialDays} days` : "/month",
              features: p.features,
              cta: p.cta,
              campaign: p.campaign,
              featured: p.featured,
              badge: p.badge,
              note: p.risk,
            }))
          );
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="bg-Background font-sans overflow-x-hidden min-h-screen">
      <Header />
      <main>
        {/* Pricing */}
        <section className="py-16 sm:py-20 md:py-28 px-5 md:px-8">
          <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12">
            <AnimateIn className="space-y-3 text-center">
              <p className="text-sm font-medium text-Accent-Cyan tracking-wide">Pricing</p>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl text-Surface-Hover tracking-tight font-semibold">
                Simple pricing. No surprises.
              </h1>
              <p className="text-Tertiary text-sm sm:text-base max-w-xl mx-auto mt-4">
                Start with a 7-day free trial. Upgrade when you&apos;re ready.
              </p>
            </AnimateIn>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {plans.map((plan, i) => (
                <AnimateIn key={plan.name} delay={0.1 + i * 0.1}>
                  <div className={cn(
                    "rounded-2xl p-5 sm:p-6 space-y-5 relative h-full flex flex-col",
                    plan.featured ? "bg-Card border-2 border-Accent-Cyan/50" : "bg-Card border border-Bento-Border"
                  )}>
                    {plan.badge && (
                      <span className={cn(
                        "absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full",
                        plan.badge === "Best Value" ? "bg-Accent-Green text-Background" : "bg-Accent-Cyan text-Background"
                      )}>
                        {plan.badge}
                      </span>
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-Surface-Hover">{plan.name}</h3>
                      <div className="mt-2 flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-semibold text-Surface-Hover">
                          &#8377;{plan.price}
                        </span>
                        <span className="text-sm text-Tertiary">{plan.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2.5 flex-1">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-Tertiary">
                          <Check size={16} className="text-Accent-Green shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href={`https://ai.mythcipher.in/signup?utm_source=landing&utm_medium=pricing&utm_campaign=${plan.campaign}`} className="block">
                      <Button
                        variant={plan.featured ? "primary" : "secondary"}
                        className="w-full"
                        onClick={() => trackEvent("pricing_cta_click", { plan: plan.name.toLowerCase() })}
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                    {plan.note && <p className="text-xs text-Tertiary/70 text-center">{plan.note}</p>}
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20 md:py-28 px-5 md:px-8 bg-Background-Alt">
          <div className="max-w-3xl mx-auto space-y-10">
            <AnimateIn className="text-center">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-Surface-Hover tracking-tight font-semibold">
                Frequently asked questions
              </h2>
            </AnimateIn>

            <div className="space-y-2">
              {FAQS.map((faq, i) => (
                <AnimateIn key={i} delay={0.05 + i * 0.04}>
                  <div className="border border-Bento-Border rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left cursor-pointer"
                    >
                      <span className="text-sm font-medium text-Surface pr-4">{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={cn("text-Tertiary shrink-0 transition-transform duration-200", openFaq === i && "rotate-180")}
                      />
                    </button>
                    <div className={cn("overflow-hidden transition-all duration-300 ease-out", openFaq === i ? "max-h-96" : "max-h-0")}>
                      <p className="px-5 sm:px-6 pb-4 text-sm text-Tertiary leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
