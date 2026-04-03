"use client";

import { useInView } from "@/lib/hooks";
import { cn } from "@/lib/utils";

const PROBLEMS = [
  {
    num: "01",
    title: "The API key wall",
    desc: "Every automation starts the same way: \u2018Enter your API key.\u2019 You open five browser tabs trying to find it. The documentation is for engineers. You paste the wrong thing. It fails. You quit. This happens to 80% of users on their first attempt.",
  },
  {
    num: "02",
    title: "Errors with no translation",
    desc: "A red node. A 422 error. Maybe a JSON parsing message you\u2019ve never seen before. The tool gives you nothing. No plain-English explanation. No suggestion. Just failure \u2014 and silence. So you close the tab.",
  },
  {
    num: "03",
    title: "The self-hosting trap",
    desc: "n8n\u2019s free version means running your own server. Docker. Linux commands. Keeping it updated. Monitoring uptime. That\u2019s a part-time job \u2014 not a productivity tool. And the cloud version starts at $20/month with no handholding.",
  },
  {
    num: "04",
    title: "Templates with no starting point",
    desc: "Every tool has hundreds of templates. None of them tell you which one to pick, how to set it up for your specific situation, or what to do when the first run fails. You\u2019re on your own from minute one.",
  },
];

function Problem() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      className="bg-Background-Alt py-20 md:py-32 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        <div className={cn("space-y-3 fade-in-up", inView && "visible")}>
          <p className="text-sm font-medium text-Accent-Yellow tracking-wide">
            Why automation always fails you
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-Surface-Hover tracking-tight max-w-3xl">
            It&apos;s not that you&apos;re not technical enough. The tools
            are just broken for humans.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROBLEMS.map((p, i) => (
            <div
              key={p.num}
              className={cn(
                "bg-Card border border-Bento-Border rounded-2xl p-8 space-y-4 fade-in-up",
                inView && "visible"
              )}
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <span className="text-3xl font-serif text-Tertiary/40">
                {p.num}
              </span>
              <h3 className="text-xl font-semibold text-Surface-Hover">
                {p.title}
              </h3>
              <p className="text-sm text-Tertiary leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Problem;
