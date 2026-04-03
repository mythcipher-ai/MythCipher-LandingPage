"use client";

import { useInView } from "@/lib/hooks";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const ENTRIES = [
  {
    title: "Get more leads",
    desc: "Capture, route, and follow up on leads without touching your inbox or CRM manually.",
  },
  {
    title: "Save time on email",
    desc: "Summarize, sort, and respond to emails without opening your inbox every hour.",
  },
  {
    title: "Automate my reports",
    desc: "Business metrics delivered to you every morning. No manual pulling, no spreadsheet formatting.",
  },
  {
    title: "Manage clients automatically",
    desc: "Onboarding emails, follow-ups, invoices \u2014 run themselves while you do the actual work.",
  },
];

function GuidedEntry() {
  const { ref, inView } = useInView();

  const handleClick = (title: string) => {
    trackEvent("guided_entry_click", { label: title });
    document
      .getElementById("templates")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="bg-Background py-20 md:py-32 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        <div className={cn("space-y-3 fade-in-up", inView && "visible")}>
          <p className="text-sm font-medium text-Accent-Purple tracking-wide">
            Not sure where to start?
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-Surface-Hover tracking-tight">
            Tell us what you want. We&apos;ll show you the automation.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {ENTRIES.map((entry, i) => (
            <button
              key={entry.title}
              onClick={() => handleClick(entry.title)}
              className={cn(
                "text-left bg-Card border border-Bento-Border rounded-2xl p-6 space-y-2 hover:border-Accent-Purple/40 hover:bg-Card-Hover transition-all duration-200 cursor-pointer fade-in-up",
                inView && "visible"
              )}
              style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
            >
              <h3 className="text-lg font-semibold text-Surface-Hover">
                {entry.title}
              </h3>
              <p className="text-sm text-Tertiary">{entry.desc}</p>
            </button>
          ))}
        </div>

        <div
          className={cn(
            "text-center fade-in-up",
            inView && "visible"
          )}
          style={{ transitionDelay: "0.5s" }}
        >
          <button
            onClick={() =>
              document
                .getElementById("templates")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-sm text-Accent-Purple hover:text-Accent-Purple/80 transition-colors cursor-pointer"
          >
            Or browse all 300+ automations &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}

export default GuidedEntry;
