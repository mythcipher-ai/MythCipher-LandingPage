"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";
import { Linkedin, Youtube, Mail, Brain, Instagram, TrendingUp } from "lucide-react";

const FEATURES = [
  {
    icon: Linkedin,
    title: "LinkedIn Automation",
    desc: "AI-generated posts, scheduled publishing, engagement tracking. Grow your LinkedIn presence on autopilot.",
    image: "/images/feature1.png",
    badge: "Trending",
  },
  {
    icon: Mail,
    title: "Email Campaigns",
    desc: "Cold outreach, newsletters, follow-up sequences \u2014 all powered by AI. Write, schedule, send automatically.",
    image: "/images/feature2.png",
    badge: "Trending",
  },
  {
    icon: Youtube,
    title: "YouTube Scheduling",
    desc: "Schedule uploads, manage metadata, auto-generate descriptions and tags. Your YouTube channel runs itself.",
    image: "/images/feature3.png",
    badge: "Trending",
  },
  {
    icon: Brain,
    title: "AI Content & Strategy",
    desc: "Generate content ideas, captions, email copy, and posting strategies tailored to your niche and audience.",
    image: "/images/feature4.png",
    badge: null,
  },
  {
    icon: Instagram,
    title: "Instagram Automation",
    desc: "Schedule posts, reels, and stories. AI-generated captions and hashtags. Your Instagram on autopilot.",
    image: "/images/feature5.png",
    badge: "Coming Soon",
  },
  {
    icon: TrendingUp,
    title: "Growth Tools",
    desc: "Analytics, audience insights, and AI recommendations to help you grow faster across all platforms.",
    image: "/images/feature6.png",
    badge: null,
  },
];

function Features() {
  return (
    <section className="bg-Background-Alt py-16 sm:py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <AnimateIn className="space-y-3 text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-Accent-Green tracking-wide">What you can automate</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-Surface-Hover tracking-tight font-semibold">
            Your social media, email &amp; content on autopilot.
          </h2>
          <p className="text-sm text-Tertiary mt-2">This is just the start. More templates going live every week.</p>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <AnimateIn key={f.title} delay={0.05 + i * 0.08}>
              <div className="bg-Card border border-Bento-Border rounded-2xl overflow-hidden group hover:border-Accent-Green/30 transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-Background">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  {f.badge && (
                    <div className="absolute top-3 right-3">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${f.badge === "Coming Soon" ? "bg-Accent-Yellow/20 text-Accent-Yellow" : "bg-Accent-Cyan/20 text-Accent-Cyan"}`}>
                        {f.badge}
                      </span>
                    </div>
                  )}
                </div>
                {/* Copy */}
                <div className="p-5 space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <f.icon size={18} className="text-Accent-Green shrink-0" />
                    <h3 className="text-base font-semibold text-Surface-Hover">{f.title}</h3>
                  </div>
                  <p className="text-sm text-Tertiary leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
