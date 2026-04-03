"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useInView } from "@/lib/hooks";
import { trackEvent } from "@/lib/analytics";
import AnimateIn from "./AnimateIn";

const BEFORE_ITEMS = [
  "Manually posting on LinkedIn every day",
  "Writing email sequences from scratch",
  "Scheduling YouTube videos one by one",
  "Forgetting to post consistently",
  "Spending hours on content creation",
  "Giving up after a week",
];

const AFTER_ITEMS = [
  "Choose your automation (LinkedIn, YouTube, Email)",
  "Connect your account in 1 click",
  "Start automation \u2014 AI handles the content",
  "Done. It runs forever.",
];

function BeforeAfter() {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) trackEvent("before_after_view");
  }, [inView]);

  return (
    <section ref={ref} className="bg-Background py-16 sm:py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        <AnimateIn className="space-y-3 text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-Accent-Yellow tracking-wide">Sound familiar?</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-Surface-Hover tracking-tight font-semibold">
            This is how it used to feel. Not anymore.
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {/* Before */}
          <AnimateIn delay={0.1}>
            <div className="rounded-2xl border border-Accent-Red/30 bg-Card p-6 sm:p-8 space-y-4 h-full">
              <h3 className="text-base sm:text-lg font-semibold text-Accent-Red">Without MythCipher</h3>
              <ul className="space-y-2.5">
                {BEFORE_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-Tertiary text-sm">
                    <span className="text-Accent-Red mt-0.5 shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-2 rounded-xl overflow-hidden border border-Bento-Border">
                <Image src="/images/issuetracking.png" alt="Manual social media workflow" width={500} height={280} className="w-full h-auto opacity-60" />
              </div>
            </div>
          </AnimateIn>

          {/* After */}
          <AnimateIn delay={0.2}>
            <div className="rounded-2xl border border-Accent-Green/30 bg-Background-Alt p-6 sm:p-8 space-y-4 h-full">
              <h3 className="text-base sm:text-lg font-semibold text-Accent-Green">With MythCipher</h3>
              <ul className="space-y-2.5">
                {AFTER_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-Surface text-sm">
                    <span className="text-Accent-Green mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-2 rounded-xl overflow-hidden border border-Accent-Green/20">
                <Image src="/images/linearinsights.png" alt="MythCipher automated dashboard" width={500} height={280} className="w-full h-auto" />
              </div>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.3} className="text-center space-y-2">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-Surface-Hover">No chaos. Just results.</p>
          <p className="text-sm text-Tertiary">Pick an automation. Connect your account. Let AI do the rest.</p>
        </AnimateIn>
      </div>
    </section>
  );
}

export default BeforeAfter;
