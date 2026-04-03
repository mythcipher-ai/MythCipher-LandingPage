"use client";

import { useInView } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { Eye, Trash2, Shield } from "lucide-react";

const TRUST_CARDS = [
  {
    icon: Eye,
    title: "We see configuration, not content",
    desc: "MythCipher stores what your automation should do and whether it ran. Never the emails, messages, files, or data that flow through it.",
  },
  {
    icon: Trash2,
    title: "Delete everything, anytime",
    desc: "One click in Settings removes your account, your workflows, and every log we have. No emails. No \u2018are you sure?\u2019. Gone.",
  },
  {
    icon: Shield,
    title: "Powered by infrastructure you already trust",
    desc: "MythCipher runs on n8n \u2014 the same engine used by 45,000+ companies including Deutsche Telekom. We add the interface. You get the reliability.",
  },
];

const INTEGRATIONS = [
  "Gmail",
  "WhatsApp",
  "Google Sheets",
  "Slack",
  "Notion",
  "Stripe",
  "Razorpay",
  "HubSpot",
];

function Trust() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      className="bg-Background py-20 md:py-32 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        <div className={cn("space-y-3 fade-in-up", inView && "visible")}>
          <p className="text-sm font-medium text-Accent-Green tracking-wide">
            Your data is safe
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-Surface-Hover tracking-tight">
            We never read your emails. We never store your messages.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TRUST_CARDS.map((card, i) => (
            <div
              key={card.title}
              className={cn(
                "bg-Card border border-Bento-Border rounded-2xl p-6 space-y-4 fade-in-up",
                inView && "visible"
              )}
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <card.icon size={24} className="text-Accent-Green" />
              <h3 className="text-lg font-semibold text-Surface-Hover">
                {card.title}
              </h3>
              <p className="text-sm text-Tertiary leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Integration logos */}
        <div
          className={cn(
            "text-center space-y-6 fade-in-up",
            inView && "visible"
          )}
          style={{ transitionDelay: "0.4s" }}
        >
          <p className="text-sm text-Tertiary font-medium">
            Works with tools you already use
          </p>
          {/* // Use official brand logos with proper attribution */}
          <div className="flex flex-wrap justify-center gap-3">
            {INTEGRATIONS.map((name) => (
              <div
                key={name}
                className="px-4 py-2 bg-Card border border-Bento-Border rounded-xl text-sm text-Tertiary font-medium"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trust;
