"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";

const STEPS = [
  {
    num: "1",
    title: "Choose your automation",
    desc: "LinkedIn posting, YouTube scheduling, email campaigns \u2014 pick what you want to automate. Browse by outcome, not by tool.",
    image: "/images/idea1.png",
  },
  {
    num: "2",
    title: "Connect your account in 1 click",
    desc: "We handle OAuth and all the auth complexity. One click to connect LinkedIn, YouTube, Gmail, or any other account. No API keys.",
    image: "/images/idea2.png",
  },
  {
    num: "3",
    title: "AI runs it \u2014 you sit back",
    desc: "AI generates your content, schedules your posts, sends your emails. It runs on autopilot. If anything breaks, you get a plain-English alert.",
    image: "/images/idea3.png",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-Background-Alt py-16 sm:py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        <AnimateIn className="space-y-3 text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-Accent-Cyan tracking-wide">How it works</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-Surface-Hover tracking-tight font-semibold">
            Three steps. That&apos;s genuinely it.
          </h2>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <AnimateIn key={step.num} delay={0.1 + i * 0.15}>
              <div className="bg-Card border border-Bento-Border rounded-2xl overflow-hidden group hover:border-Accent-Cyan/30 transition-all duration-300 h-full">
                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden bg-Background">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-Accent-Cyan/90 flex items-center justify-center">
                    <span className="text-Background font-semibold text-lg">{step.num}</span>
                  </div>
                </div>
                {/* Copy */}
                <div className="p-5 sm:p-6 space-y-2">
                  <h3 className="text-lg font-semibold text-Surface-Hover">{step.title}</h3>
                  <p className="text-sm text-Tertiary leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
