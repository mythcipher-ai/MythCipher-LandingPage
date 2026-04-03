"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { trackEvent } from "@/lib/analytics";
import { useInView, useCountUp } from "@/lib/hooks";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

const USE_CASE_PILLS = [
  { icon: "🔗", text: "LinkedIn automation", label: "Trending" },
  { icon: "📧", text: "Email campaigns with AI", label: "Popular" },
  { icon: "📹", text: "YouTube scheduling", label: "Trending" },
  { icon: "📸", text: "Instagram automation", label: "Coming soon" },
  { icon: "🧠", text: "AI content & strategy", label: "New" },
  { icon: "📈", text: "Growth tools", label: "New" },
];

function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsData = useInView();
  const stat1 = useCountUp(500, statsData.inView);
  const stat2 = useCountUp(3, statsData.inView, 1000);
  const stat3 = useCountUp(50, statsData.inView);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.from(".hero-eyebrow", { y: 20, opacity: 0, filter: "blur(12px)", duration: 0.6 });
      tl.from(".hero-h1", { y: 30, opacity: 0, filter: "blur(12px)", duration: 0.8 }, "-=0.3");
      tl.from(".hero-sub", { y: 20, opacity: 0, filter: "blur(10px)", duration: 0.6 }, "-=0.4");
      tl.from(".hero-buttons", { y: 20, opacity: 0, filter: "blur(10px)", duration: 0.5 }, "-=0.2");
      tl.from(".hero-risk", { opacity: 0, filter: "blur(8px)", duration: 0.4 }, "-=0.2");
      tl.from(".hero-image", { y: 30, opacity: 0, filter: "blur(14px)", duration: 0.8 }, "-=0.6");
      tl.from(".hero-pills", { y: 20, opacity: 0, filter: "blur(10px)", duration: 0.5 }, "-=0.3");
    },
    { scope: containerRef }
  );

  const handlePillClick = (label: string) => {
    trackEvent("use_case_click", { label });
    window.location.href = "/use-cases";
  };

  return (
    <section id="hero" ref={containerRef} className="min-h-screen bg-Background pt-24 md:pt-32 px-5 md:px-8 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* 2-col: copy + image */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <div className="space-y-5 text-center lg:text-left order-2 lg:order-1">
            <p className="hero-eyebrow text-sm font-medium text-Accent-Cyan tracking-wide">
              AI-powered automation for your business
            </p>
            <h1 className="hero-h1 font-serif text-sm sm:text-4xl md:text-5xl leading-tight text-Surface-Hover tracking-tight font-semibold">
              Automate your social media, emails &amp; content  with AI doing the heavy lifting.
            </h1>
            <p className="hero-sub text-base text-Tertiary max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Connect your accounts in one click. No code. No chaos.
            </p>
            <div className="hero-buttons flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-2">
              <Link href="https://ai.mythcipher.in?utm_source=landing&utm_medium=hero&utm_campaign=hero_primary">
                <Button variant="primary" size="big" className="h-12 sm:h-14 px-6 sm:px-8" onClick={() => trackEvent("hero_cta_click")}>
                  Start Automating Free
                </Button>
              </Link>
              <Link href="/use-cases" className="text-Tertiary hover:text-Surface transition-colors font-medium">
                See what you can automate &rarr;
              </Link>
            </div>
            <p className="hero-risk text-xs text-Tertiary/60">
              7-day free trial &middot; No credit card &middot; Cancel anytime
            </p>
          </div>

          {/* Image */}
          <div className="hero-image order-1 lg:order-2 relative">
            <div className="absolute -inset-4 bg-linear-to-br from-Accent-Cyan/20 to-Accent-Purple/10 rounded-3xl blur-3xl animate-pulse-glow" />
            <div className="relative rounded-2xl overflow-hidden border border-Bento-Border bg-Card shadow-2xl">
              <Image
                src="/images/agents.png"
                alt="MythCipher Dashboard  automations running"
                width={640}
                height={440}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Use-case strip */}
        <div className="hero-pills mt-12 sm:mt-16 overflow-x-auto scrollbar-hide snap-scroll">
          <div className="flex gap-3 pb-2 w-max">
            {USE_CASE_PILLS.map((pill) => (
              <button
                key={pill.text}
                onClick={() => handlePillClick(pill.text)}
                className="shrink-0 border border-Bento-Border rounded-2xl px-4 sm:px-5 py-3 bg-Card hover:bg-Card-Hover hover:border-Accent-Cyan/40 transition-all duration-200 cursor-pointer text-left group"
              >
                <span className="text-xs sm:text-sm text-Surface font-medium">
                  {pill.icon} {pill.text}
                </span>
                <span className="block text-xs text-Accent-Cyan mt-1">{pill.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div ref={statsData.ref} className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 text-center max-w-3xl mx-auto">
          <div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-Surface-Hover font-semibold">{stat1}+</p>
            <p className="text-xs sm:text-sm text-Tertiary mt-1">automations running</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-Surface-Hover font-semibold">{stat2}</p>
            <p className="text-xs sm:text-sm text-Tertiary mt-1">platforms supported</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-Surface-Hover font-semibold">{stat3}+</p>
            <p className="text-xs sm:text-sm text-Tertiary mt-1">ready-to-use templates</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
