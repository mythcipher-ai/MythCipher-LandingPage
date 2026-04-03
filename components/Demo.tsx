"use client";

import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import AnimateIn from "./AnimateIn";

const ACTIVITY_FEED = [
  { color: "bg-Accent-Green", text: "Gmail Summary delivered to WhatsApp", time: "2 mins ago" },
  { color: "bg-Accent-Green", text: "New lead synced to Google Sheets", time: "14 mins ago" },
  { color: "bg-Accent-Green", text: "Invoice sent to client@email.com", time: "1 hr ago" },
  { color: "bg-Accent-Green", text: "Monday Slack report delivered", time: "3 hrs ago" },
  { color: "bg-Accent-Yellow", text: "CRM sync retried (auth refreshed) \u2014 resolved", time: "5 hrs ago" },
];

function Demo() {
  return (
    <section id="demo" className="bg-Background py-16 sm:py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        <AnimateIn className="space-y-3 text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-Accent-Cyan tracking-wide">See it happen</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-Surface-Hover tracking-tight">
            Gmail &rarr; WhatsApp. Set up in 90 seconds.
          </h2>
        </AnimateIn>

        {/* Video placeholder */}
        <AnimateIn delay={0.1}>
          {/* // Replace data-src with real Loom embed URL before launch */}
          <div
            className="relative w-full rounded-2xl bg-Card border border-Bento-Border overflow-hidden cursor-pointer group"
            style={{ aspectRatio: "16/9" }}
            onClick={() => trackEvent("demo_video_click")}
          >
            <div className="absolute inset-0 bg-Background-Alt opacity-50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 sm:gap-4 z-10 px-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-Surface/10 border-2 border-Surface/30 flex items-center justify-center group-hover:bg-Surface/20 group-hover:scale-110 transition-all duration-300">
                <svg width="20" height="24" viewBox="0 0 24 28" fill="none" className="ml-1">
                  <path d="M24 14L0 28V0L24 14Z" fill="currentColor" className="text-Surface" />
                </svg>
              </div>
              <p className="text-Surface font-medium text-sm sm:text-lg text-center">
                Watch: &ldquo;New lead &rarr; WhatsApp alert&rdquo; in 90 seconds
              </p>
              <p className="text-Tertiary text-xs sm:text-sm">No cuts. Real setup, real time.</p>
            </div>
          </div>
        </AnimateIn>

        {/* Activity feed */}
        <AnimateIn delay={0.2}>
          {/* // Connect to real webhook/API for live data before launch */}
          <div className="bg-Card border border-Bento-Border rounded-2xl p-5 sm:p-6 space-y-4">
            <h3 className="text-xs sm:text-sm font-semibold text-Tertiary uppercase tracking-wider">
              Recent runs &mdash; last 24 hours
            </h3>
            <div className="space-y-2.5">
              {ACTIVITY_FEED.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-xs sm:text-sm">
                  <div className={cn("w-2 h-2 rounded-full shrink-0", item.color)} />
                  <span className="text-Surface flex-1 truncate sm:overflow-visible sm:whitespace-normal">{item.text}</span>
                  <span className="text-Tertiary text-xs whitespace-nowrap">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

export default Demo;
