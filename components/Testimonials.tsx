"use client";

import AnimateIn from "./AnimateIn";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    text: "I was manually posting on LinkedIn 5 days a week. MythCipher handles it all now \u2014 AI writes the posts, schedules them, and my engagement actually went up.",
    name: "Rohan M.",
    role: "Freelance Designer, Pune",
  },
  {
    text: "Set up my email campaign in under 3 minutes. AI wrote better cold emails than I ever did. Already got 4 replies in the first week.",
    name: "Priya S.",
    role: "Marketing Consultant, Bangalore",
  },
  {
    text: "YouTube scheduling was a nightmare. Now I batch-upload, MythCipher generates metadata, and everything goes live on schedule. Saves me 5+ hours a week.",
    name: "Aditya K.",
    role: "Content Creator, Mumbai",
  },
];

function Testimonials() {
  return (
    <section className="bg-Background py-16 sm:py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <AnimateIn className="space-y-3 text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-Accent-Yellow tracking-wide">Early users</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-Surface-Hover tracking-tight font-semibold">
            People who hated manual work now automate everything.
          </h2>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <AnimateIn key={t.name} delay={0.1 + i * 0.1}>
              <div className="bg-Card border border-Bento-Border rounded-2xl p-5 sm:p-6 space-y-4 h-full flex flex-col">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} className="text-Accent-Yellow fill-Accent-Yellow" />
                  ))}
                </div>
                <p className="text-sm text-Surface leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="pt-2 border-t border-Bento-Border">
                  <p className="text-sm font-medium text-Surface-Hover">{t.name}</p>
                  <p className="text-xs text-Tertiary">{t.role}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
