"use client";

import { useState } from "react";
import { useInView } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Do I need to know what n8n is?",
    a: "No. You will never see n8n. MythCipher is a completely separate interface. n8n is the engine running underneath \u2014 invisible to you. Like how you don\u2019t need to know what MySQL is to use Notion.",
  },
  {
    q: "What happens when an automation breaks?",
    a: "You get a notification that says: \u2018Your Gmail Summary failed because your Gmail password changed. Click here to reconnect.\u2019 Plain English. Exact cause. One-click fix. No red nodes.",
  },
  {
    q: "Is my Gmail, WhatsApp, or Sheets data safe?",
    a: "We never store email content, message content, or file content. We store: what your automation should do, and whether it ran successfully. You can delete everything permanently in one click from Settings.",
  },
  {
    q: "Can I build something custom that\u2019s not in the templates?",
    a: "Yes, on Pro and Team plans. Tell us what you want automated in plain English. We build it and deploy it. Most requests done within 48 hours. No extra charge.",
  },
  {
    q: "What if I already know n8n well?",
    a: "Import your own n8n JSON. We host it, run it on schedule, add our credential layer, and give you plain-English error alerts when it breaks. Instant hosting for workflows you\u2019ve already built.",
  },
  {
    q: "Why not just use Zapier?",
    a: "Zapier costs \u20B98,000+/month for serious usage. Still requires setup. Still gives you cryptic errors. MythCipher is \u20B9999/month, handles setup for you, and when something breaks, actually tells you what happened.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      className="bg-Background py-20 md:py-32 px-4 md:px-0"
    >
      <div className="max-w-3xl mx-auto space-y-12">
        <h2
          className={cn(
            "font-serif text-3xl md:text-5xl text-Surface-Hover tracking-tight text-center fade-in-up",
            inView && "visible"
          )}
        >
          Frequently asked questions
        </h2>

        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={cn(
                "border border-Bento-Border rounded-xl overflow-hidden fade-in-up",
                inView && "visible"
              )}
              style={{ transitionDelay: `${0.05 + i * 0.05}s` }}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
                className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer"
              >
                <span className="text-sm font-medium text-Surface pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={cn(
                    "text-Tertiary shrink-0 transition-transform duration-200",
                    openIndex === i && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-out",
                  openIndex === i ? "max-h-96" : "max-h-0"
                )}
              >
                <p className="px-6 pb-4 text-sm text-Tertiary leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
