"use client";

import { useState } from "react";
import { useInView } from "@/lib/hooks";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import Button from "./Button";
import Link from "next/link";

const CATEGORIES = ["Leads & CRM", "Email", "Reporting"];

const USE_CASES: Record<string, Array<{ name: string; desc: string }>> = {
  "Leads & CRM": [
    {
      name: "New Lead \u2192 WhatsApp Alert",
      desc: "The moment someone fills your form, you get a WhatsApp message with their name, email, and what they said. Zero delay.",
    },
    {
      name: "Form \u2192 Sheets + Email confirmation",
      desc: "Every form submission auto-saved to Google Sheets and a confirmation email sent to the lead. Runs every time, forever.",
    },
    {
      name: "LinkedIn \u2192 CRM Sync",
      desc: "New LinkedIn connection? Their details auto-added to your CRM within 60 seconds.",
    },
  ],
  Email: [
    {
      name: "Daily Gmail Summary",
      desc: "Every morning at 8am, a WhatsApp message with the 5 most important unread emails. No inbox required.",
    },
    {
      name: "Cold Email Reply Alert",
      desc: "When someone replies to your cold email campaign, you get a WhatsApp ping instantly. Never miss a hot lead.",
    },
    {
      name: "Invoice Follow-up",
      desc: "7 days after sending an invoice, if unpaid, a polite follow-up email sends automatically. Every time.",
    },
  ],
  Reporting: [
    {
      name: "Monday Morning Metrics",
      desc: "Every Monday at 9am, key numbers from your tools \u2014 revenue, leads, tasks \u2014 delivered to Slack. No manual pulling.",
    },
    {
      name: "Weekly Sheets Report Email",
      desc: "Every Friday at 5pm, your Google Sheet report emails to your team automatically.",
    },
    {
      name: "Daily Sales Pipeline",
      desc: "Every evening, a summary of open deals and their status sent to WhatsApp. Know where you stand without opening your CRM.",
    },
  ],
};

function UseCaseShowcase() {
  const [activeTab, setActiveTab] = useState("Leads & CRM");
  const { ref, inView } = useInView();

  return (
    <section
      id="templates"
      ref={ref}
      className="bg-Background-Alt py-20 md:py-32 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        <div className={cn("space-y-3 fade-in-up", inView && "visible")}>
          <p className="text-sm font-medium text-Accent-Purple tracking-wide">
            What people actually automate
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-Surface-Hover tracking-tight">
            Pick your use-case. Activated in under 2 minutes.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tab bar */}
          <div className="flex md:flex-col gap-2 overflow-x-auto scrollbar-hide md:w-48 shrink-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={cn(
                  "px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer text-left",
                  activeTab === cat
                    ? "bg-Accent-Purple/10 text-Accent-Purple border border-Accent-Purple/30"
                    : "text-Tertiary hover:text-Surface border border-transparent"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="flex-1 grid gap-4">
            {USE_CASES[activeTab].map((uc, i) => (
              <div
                key={uc.name}
                className={cn(
                  "bg-Card border border-Bento-Border rounded-2xl p-6 space-y-3 hover:border-Accent-Purple/30 transition-all duration-200 fade-in-up",
                  inView && "visible"
                )}
                style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-Surface-Hover">
                  {uc.name}
                </h3>
                <p className="text-sm text-Tertiary leading-relaxed">
                  {uc.desc}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-Accent-Yellow">
                    ⚡ Setup time: ~2 min
                  </span>
                  <Link
                    href={`https://ai.mythcipher.in?utm_source=landing&utm_medium=templates&utm_campaign=${encodeURIComponent(uc.name)}`}
                  >
                    <Button
                      variant="ghost"
                      size="small"
                      onClick={() =>
                        trackEvent("use_case_click", { label: uc.name })
                      }
                    >
                      Activate Free &rarr;
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UseCaseShowcase;
