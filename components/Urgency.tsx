"use client";

import AnimateIn from "./AnimateIn";
import Button from "./Button";
import Link from "next/link";

function Urgency() {
  return (
    <section className="bg-Background-Alt py-14 sm:py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
        <AnimateIn>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-Surface-Hover tracking-tight font-semibold">
            Free trial is live. Start automating today.
          </h2>
        </AnimateIn>

        {/* // Update this number every few days manually or wire to API endpoint */}
        <AnimateIn delay={0.1} className="space-y-3">
          <p className="text-base sm:text-lg text-Surface font-medium">387 of 500 early access spots claimed</p>
          <div className="w-full max-w-sm mx-auto h-2 bg-Secondary rounded-full overflow-hidden">
            <div className="h-full bg-Accent-Cyan rounded-full transition-all duration-1000" style={{ width: "77%" }} />
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className="text-sm text-Tertiary max-w-md mx-auto">
            7-day free trial. No credit card required. Set up your first automation in minutes.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <Link href="https://ai.mythcipher.in/signup?utm_source=landing&utm_medium=urgency&utm_campaign=urgency_cta">
            <Button variant="primary" size="big" className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg">
              Start Your Free Trial
            </Button>
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}

export default Urgency;
