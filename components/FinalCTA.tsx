"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import AnimateIn from "./AnimateIn";
import Button from "./Button";
import Link from "next/link";

function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // POST to /api/waitlist (placeholder  wire to actual API endpoint)
    trackEvent("early_access_submit");
    setSubmitted(true);
  };

  return (
    <section className="bg-Background py-16 sm:py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-2xl mx-auto text-center space-y-6 sm:space-y-8">
        <AnimateIn>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-Surface-Hover tracking-tight font-semibold">
            Your first automation is minutes away.
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <p className="text-base sm:text-lg text-Tertiary">
            Start your 7-day free trial. No credit card. Cancel anytime.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-xl bg-Card border border-Bento-Border text-Surface text-sm focus:outline-none focus:border-Accent-Cyan transition-colors"
              />
              <Button type="submit" variant="primary" className="px-6 py-3 whitespace-nowrap">
                Start Free Trial
              </Button>
            </form>
          ) : (
            <div className="bg-Card border border-Accent-Green/30 rounded-xl p-5 sm:p-6">
              <p className="text-Surface font-medium text-sm sm:text-base">
                You&apos;re in. Check your inbox &mdash; we&apos;ll send your access link shortly.
              </p>
            </div>
          )}
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <p className="text-xs text-Tertiary/60">No credit card &middot; 7-day free trial &middot; Cancel anytime</p>
        </AnimateIn>

        <AnimateIn delay={0.35}>
          <Link
            href="https://ai.mythcipher.in?utm_source=landing&utm_medium=final_cta&utm_campaign=final_skip"
            className="text-sm text-Accent-Cyan hover:text-Accent-Cyan/80 transition-colors"
          >
            Skip the waitlist &mdash; go straight to the app &rarr;
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}

export default FinalCTA;
