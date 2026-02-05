import {
  BadgeCheck,
  Box,
  ChartNoAxesColumn,
  ChevronLeft,
  ChevronRight,
  Circle,
  Diamond,
  Flame,
  Layers2,
  ListFilter,
  MountainSnow,
  Plus,
} from "lucide-react";
import { useRef, useState } from "react";
import Button from "../components/Button";
import clsx from "clsx";

function ProductFeatures() {
  return (
    <>
      <section
        className="bg-linear-to-b from-Card to-Background to-25% py-12 md:py-28"
        id="ai-assisted-development"
      >
        <AiAssistedDevelopment />
      </section>
      <section
        className="bg-linear-to-b from-Card to-Background to-25% py-12 md:py-28"
        id="project-and-long-term-planning"
      >
        <ProjectAndLongTermPlanning />
      </section>
      <section
        className="bg-linear-to-b from-Card to-Background to-25% py-12 md:py-28"
        id="task-tracking-and-sprint-planning"
      >
        <TaskTrackingAndSprintPlanning />
      </section>
      <section
        className="bg-linear-to-b from-Card to-Background to-25% py-12 md:py-28"
        id="workflow-and-integrations"
      >
        <WorkFlowAndIntegrations />
      </section>
      <section
        className="bg-linear-to-b from-Card to-Background to-25% py-12 md:py-28"
        id="foundations"
      >
        <Foundation />
      </section>
    </>
  );
}

function AiAssistedDevelopment() {
  return (
    <div className="max-w-dvw md:max-w-244 mx-auto space-y-6 px-4 md:px-0">
      <div className="flex items-center gap-1 group cursor-pointer">
        <div className="px-2 py-1 bg-Accent-Cyan w-fit rounded-full" />
        <p className="font-medium text-sm text-Tertiary">
          Artificial Intelligence
        </p>
        <ChevronRight
          size={14}
          className="text-Tertiary ease-out group-hover:text-Surface group-hover:ml-2 duration-300 transition-all group-hover:size-4 "
        />
      </div>
      <h2 className="text-[40px] md:text-[52px] leading-12 md:leading-14 text-Surface-Hover tracking-tight font-semibold">
        AI-assisted product development
        <span className="max-md:hidden md:ml-[.5ch]">Linear for Agents</span>.
      </h2>
      <p className="md:w-2/5 text-Tertiary tracking-tight text-[17px] font-medium">
        <span className="text-Surface">Linear for Agents.</span> Choose from a
        variety of AI agents and start delegating work, from code generation to
        other technical tasks.
      </p>
      <Button
        variant={"secondary"}
        size={"small"}
        className="flex items-center gap-2 max-md:mb-12"
      >
        Learn More
        <ChevronRight
          size={18}
          className="text-Surface transition-all duration-300"
        />
      </Button>
      <div>
        <img src="/images/agents.png" />
      </div>
      <div className="grid md:grid-cols-2 items-start border max-md:border-b-0 border-x-0 border-Bento-Border">
        <article className="md:border-r md:border-Bento-Border py-12 md:p-12 md:px-16 pl-0 space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl text-Surface font-medium tracking-tighter">
              Self-driving product operations
            </h3>
            <p className="font-medium text-Tertiary tracking-tight">
              Streamline your product development workflows with AI assistance
              for routine, manual tasks.
            </p>
          </div>
          <img src="/images/feature1.png" />
        </article>
        <article className="py-12 md:p-12 pr-0 space-y-8 max-md:border-t max-md:border-t-Bento-Border">
          <div className="space-y-2">
            <h3 className="text-2xl text-Surface font-medium tracking-tighter">
              Linear MCP
            </h3>
            <p className="font-medium text-Tertiary tracking-tight">
              Connect Linear to your favorite tools including Cursor, Claude,
              ChatGPT, and more.
            </p>
          </div>
          <img src="/images/feature2.png" />
        </article>
      </div>
    </div>
  );
}

function ProjectAndLongTermPlanning() {
  const features = [
    "Collaborative documents",
    "Inline comments",
    "Text-to-issue commands",
  ];
  const imgUrls = [
    "/images/idea1.png",
    "/images/idea2.png",
    "/images/idea3.png",
  ];
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <div className="max-w-dvw md:max-w-244 mx-auto space-y-6 px-4 md:px-0">
        <div className="flex items-center gap-1 group cursor-pointer w-fit">
          <div className="px-2 py-1 bg-Accent-Green w-fit rounded-full" />
          <p className="font-medium text-sm w-fit leading-none text-Tertiary">
            Project and long-term planning
          </p>
          <ChevronRight
            size={14}
            className="text-Tertiary ease-out group-hover:text-Surface group-hover:ml-2 duration-300 transition-all group-hover:size-4 "
          />
        </div>
        <h2 className="text-[40px] md:text-[52px] leading-12 md:leading-14 text-Surface-Hover tracking-tight font-semibold">
          Set the product direction
        </h2>
        <p className="md:w-2/5 text-Tertiary tracking-tight text-[17px] font-medium max-md:mb-12">
          <span className="text-Surface">
            Align your team around a unified product timeline.
          </span>{" "}
          Plan, manage, and track all product initiatives with Linear’s visual
          planning tools.
        </p>
      </div>
      <div>
        <img
          src="/images/timeline.png"
          className="max-md:w-250vw max-md:h-[40vh] max-md:object-cover"
        />
      </div>
      <div className="max-w-244 mx-auto grid md:grid-cols-2 items-start border max-md:border-b-0 border-x-0 border-Bento-Border max-md:mx-4">
        <article className="md:border-r md:border-Bento-Border max-md:pt-12 md:p-12 md:px-16 pl-0 space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl text-Surface font-medium tracking-tighter">
              Manage projects end-to-end
            </h3>
            <p className="font-medium text-Tertiary tracking-tight">
              Consolidate specs, milestones, tasks, and other documentation in
              one centralized location.
            </p>
          </div>
          <img src="/images/feature3.png" />
        </article>
        <article className="max-md:py-12 max-md:border-t max-md:border-t-Bento-Border md:p-12 md:pb-0 pr-0 space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl text-Surface font-medium tracking-tighter">
              Project updates
            </h3>
            <p className="font-medium text-Tertiary tracking-tight">
              Communicate progress and project health with built-in project
              updates.
            </p>
          </div>
          <img src="/images/feature4.png" />
        </article>
      </div>
      <div className="grid md:grid-cols-3 max-w-dvw md:max-w-244 mx-auto max-md:gap-6 py-12">
        <div className="col-start-1 w-4/5 md:w-3/5 max-md:px-4">
          <div className="space-y-6 md:pt-16">
            <h3 className="text-2xl text-Surface font-medium tracking-tighter">
              Ideate and specify what to build next
            </h3>
            <div className="flex flex-col gap-2">
              {features.map((feature, i) => (
                <button
                  key={i}
                  className="flex items-center gap-4 w-fit cursor-pointer"
                  onClick={() => setSelectedTab(i)}
                >
                  <div
                    className={clsx(
                      "w-fit px-0.5 py-3 rounded-full transition-all duration-150 ease-out",
                      selectedTab === i ? "bg-Accent-Green" : "bg-Secondary",
                    )}
                  ></div>
                  <p
                    className={clsx(
                      "text-[17px] font-medium text-nowrap tracking-tight transition-all duration-150 ease-out",
                      selectedTab === i ? "text-Surface" : "text-Tertiary",
                    )}
                  >
                    {feature}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-2 md:pl-24 md:pr-12">
          <img
            src={imgUrls[selectedTab]}
            className="max-md:min-h-[60vh] max-md:object-cover max-md:object-left max-md:px-4"
          />
        </div>
      </div>
      <div className="border-t border-t-Bento-Border py-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-244 mx-auto max-md:mx-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 max-md:flex-col max-md:items-start max-md:gap-3">
            <MountainSnow size={14} className="text-Surface" strokeWidth={3} />
            <p className="text-sm text-Surface font-medium tracking-tight">
              Initiatives
            </p>
          </div>
          <p className="text-sm text-Tertiary font-medium tracking-tight">
            Coordinate strategic product efforts.
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2 max-md:flex-col max-md:items-start max-md:gap-3">
            <Box size={14} className="text-Surface" strokeWidth={3} />
            <p className="text-sm text-Surface font-medium tracking-tight">
              Cross-team projects
            </p>
          </div>
          <p className="text-sm text-Tertiary font-medium tracking-tight">
            Collaborate across teams and departments.
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2 max-md:flex-col max-md:items-start max-md:gap-3">
            <Diamond
              size={14}
              className="text-Surface fill-Surface"
              strokeWidth={3}
            />
            <p className="text-sm text-Surface font-medium tracking-tight">
              Milestones
            </p>
          </div>
          <p className="text-sm text-Tertiary font-medium tracking-tight">
            Break projects down into concrete phases.
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2 max-md:flex-col max-md:items-start max-md:gap-3">
            <ChartNoAxesColumn
              size={14}
              className="text-Surface"
              strokeWidth={3}
            />
            <p className="text-sm text-Surface font-medium tracking-tight">
              Progress insights
            </p>
          </div>
          <p className="text-sm text-Tertiary font-medium tracking-tight">
            Track scope, velocity, and progress over time.
          </p>
        </div>
      </div>
    </>
  );
}

function TaskTrackingAndSprintPlanning() {
  return (
    <>
      <div className="max-w-244 mx-auto space-y-6 max-md:px-4">
        <div className="flex items-center gap-1 group cursor-pointer w-fit">
          <div className="px-2 py-1 bg-Accent-Yellow w-fit rounded-full" />
          <p className="font-medium text-sm w-fit leading-none text-Tertiary">
            Task tracking and sprint planning
          </p>
          <ChevronRight
            size={14}
            className="text-Tertiary ease-out group-hover:text-Surface group-hover:ml-2 duration-300 transition-all group-hover:size-4 "
          />
        </div>
        <h2 className="text-[40px] md:text-[52px] leading-12 md:leading-14 text-Surface-Hover tracking-tight font-semibold">
          Issue tracking you’ll enjoy using
        </h2>
        <p className="md:w-2/5 md:max-w-[31ch] text-Tertiary tracking-tight text-[17px] font-medium">
          <span className="text-Surface">
            Optimized for speed and efficiency.
          </span>{" "}
          Create tasks in seconds, discuss issues in context, and breeze through
          your work in views tailored to you and your team.
        </p>
      </div>
      <div>
        <img
          src="/images/issuetracking.png"
          className="max-md:w-250vw max-md:h-[40vh] object-cover"
        />
      </div>
      <div className="max-w-244 mx-auto grid md:grid-cols-2 items-start border max-md:border-b-0 border-x-0 border-Bento-Border max-md:mx-4">
        <article className="md:border-r md:border-Bento-Border max-md:pt-12 md:p-12 md:px-16 pl-0 space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl text-Surface font-medium tracking-tighter">
              Build momentum with Cycles
            </h3>
            <p className="font-medium text-Tertiary tracking-tight">
              Create healthy routines and focus your team on what work should
              happen next.
            </p>
          </div>
          <img src="/images/feature5.png" />
        </article>
        <article className="max-md:py-12 max-md:border-t max-md:border-t-Bento-Border md:p-12 md:pb-0 pr-0 space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl text-Surface font-medium tracking-tighter">
              Manage incoming work with Triage
            </h3>
            <p className="font-medium text-Tertiary tracking-tight">
              Review and assign incoming bug reports, feature requests, and
              other unplanned work.
            </p>
          </div>
          <img src="/images/feature6.png" />
        </article>
      </div>
      <article className="py-12 pr-0 space-y-8 max-w-dvw md:max-w-244 mx-auto">
        <div className="space-y-6 z-10 relative max-md:px-4">
          <div className="space-y-2 ">
            <h3 className="text-2xl text-Surface font-medium tracking-tighter">
              Linear Insights
            </h3>
            <p className="font-medium max-w-[40ch] text-Tertiary tracking-tight">
              Take the guesswork out of product planning with realtime analytics
              and reporting dashboards.
            </p>
          </div>
          <Button
            variant={"secondary"}
            size={"small"}
            className="flex items-center gap-2"
          >
            Learn More
            <ChevronRight
              size={18}
              className="text-Surface transition-all duration-300"
            />
          </Button>
        </div>
        <div className="md:-mt-48 z-0 relative">
          <img
            src="/images/linearinsights.png"
            className="max-md:w-250vw max-md:h-[40vh] max-md:object-cover max-md:object-right"
          />
        </div>
      </article>
      <div className="border-t border-t-Bento-Border py-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-244 mx-auto max-md:mx-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 max-md:flex-col max-md:items-start max-md:gap-3">
            <Circle size={14} className="text-Surface" strokeWidth={3} />
            <p className="text-sm text-Surface font-medium tracking-tight">
              Tailored workflows
            </p>
          </div>
          <p className="text-sm text-Tertiary font-medium tracking-tight">
            Track progress across custom issue flows for your team.
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2 max-md:flex-col max-md:items-start max-md:gap-3">
            <Layers2 size={14} className="text-Surface" strokeWidth={3} />
            <p className="text-sm text-Surface font-medium tracking-tight">
              Custom views
            </p>
          </div>
          <p className="text-sm text-Tertiary font-medium tracking-tight">
            Switch between list and board. Group issues with swimlanes.{" "}
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2 max-md:flex-col max-md:items-start max-md:gap-3">
            <ListFilter size={14} className="text-Surface" strokeWidth={3} />
            <p className="text-sm text-Surface font-medium tracking-tight">
              Filters
            </p>
          </div>
          <p className="text-sm text-Tertiary font-medium tracking-tight">
            Refine issue lists down to what’s most relevant to you.
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2 max-md:flex-col max-md:items-start max-md:gap-3">
            <Flame
              size={14}
              className="text-Surface fill-Surface"
              strokeWidth={3}
            />
            <p className="text-sm text-Surface font-medium tracking-tight">
              SLAs
            </p>
          </div>
          <p className="text-sm text-Tertiary font-medium tracking-tight">
            Automatically apply deadlines to time-sensitive tasks.
          </p>
        </div>
      </div>
    </>
  );
}

function WorkFlowAndIntegrations() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const carouselContent = {
    imgUrl: "/images/workflowcarousel1.png",
    subtitle: "Customer Requests",
    title: "Build what customers actually want",
    redirect: "#",
  };

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const animateScroll = (target: number, duration = 600) => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const start = container.scrollLeft;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      container.scrollLeft = start + (target - start) * eased;

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const moveCarousel = (dir: "left" | "right") => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const cardWidth = 336 + 8;
    const delta = container.clientWidth > 768 ? cardWidth * 2 : cardWidth;

    const target =
      dir === "right"
        ? container.scrollLeft + delta
        : container.scrollLeft - delta;

    animateScroll(target);
  };

  return (
    <>
      <div className="max-w-dvw md:max-w-244 mx-auto space-y-6 mb-12 max-md:px-4">
        <div className="flex items-center gap-1 group cursor-pointer w-fit">
          <div className="px-2 py-1 bg-Accent-Yellow w-fit rounded-full" />
          <p className="font-medium text-sm w-fit leading-none text-Tertiary">
            Workflows and Integrations
          </p>
          <ChevronRight
            size={14}
            className="text-Tertiary ease-out group-hover:text-Surface group-hover:ml-2 duration-300 transition-all group-hover:size-4 "
          />
        </div>
        <div className="grid md:grid-cols-2 items-end gap-6 md:gap-20">
          <h2 className="text-[40px] md:text-[52px] leading-12 md:leading-14 text-Surface-Hover tracking-tight font-semibold">
            Collaborate across tools and teams
          </h2>
          <p className="text-Tertiary text-[15px] md:px-12 font-medium">
            Expand the capabilities of the Linear system with a wide variety of
            integrations that keep everyone in your organization aligned and
            focused.
          </p>
        </div>
      </div>
      <div
        ref={carouselRef}
        className="px-4 md:px-[15vw] scroll-smooth flex flex-nowrap overflow-x-scroll gap-2 scrollbar-hide transition-all ease-in-out snap-x snap-mandatory md:snap-none"
      >
        {[...Array.from({ length: 8 })].map((_, i) => (
          <article
            key={i}
            className="min-w-[calc(100vw-48px)] md:min-w-84 bg-WorkFlow-Card rounded-2xl transition-all duration-300 ease-out group overflow-hidden snap-center md:snap-start"
          >
            <div>
              <img
                src={carouselContent.imgUrl}
                alt="sm image"
                className="rounded-t-2xl"
              />
            </div>
            <span className="text-Tertiary text-[13px] px-6">
              {carouselContent.subtitle}
            </span>
            <div className="flex items-end gap-2 w-full px-6 pb-6">
              <h3 className="flex-1 text-Surface text-[15px]] font-medium">
                {carouselContent.title}
              </h3>
              <a
                href={carouselContent.redirect}
                className="p-2 border border-[#232326] group-hover:bg-[#232326] group-hover:text-Surface text-Primary-Hover rounded-full transition-all duration-300 ease-out"
              >
                <Plus size={18} strokeWidth={3} />
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="flex max-md:hidden justify-center items-center gap-2 py-12">
        <div
          className="p-3 bg-WorkFlow-Card group hover:bg-WorkFlow-Card-Hover rounded-full cursor-pointer"
          onClick={() => moveCarousel("left")}
        >
          <ChevronLeft className="text-Tertiary group-hover:text-Surface relative -left-0.5" />
        </div>
        <div
          className="p-3 bg-WorkFlow-Card hover:bg-WorkFlow-Card-Hover rounded-full cursor-pointer"
          onClick={() => moveCarousel("right")}
        >
          <ChevronRight className="text-Tertiary group-hover:text-Surface relative left-0.5" />
        </div>
      </div>
    </>
  );
}

function Foundation() {
  const insights = [
    {
      title: "Linear Sync Engine",
      subtitle:
        "Built with a high-performance architecture and an obsessive focus on speed.",
      chevron: false,
    },
    {
      title: "Enterprise-ready security",
      subtitle:
        "Best-in-class security practices keep your work safe and secure at every layer.",
      chevron: true,
    },
    {
      title: "Engineered for scale",
      subtitle:
        "Built for teams of all sizes. From early-stage startups to global enterprises.",
      chevron: false,
    },
  ];
  return (
    <div className="md:pl-[15vw] grid md:grid-cols-3 md:gap-x-28 md:gap-y-2 max-md:px-4">
      <div className="space-y-6">
        <div className="flex items-center gap-1 group cursor-pointer w-fit">
          <div className="px-2 py-1 bg-transparent outline outline-Tertiary mr-1 w-fit rounded-full" />
          <p className="font-medium text-sm w-fit leading-none text-Tertiary">
            Under the hood
          </p>
          <ChevronRight
            size={14}
            className="text-Tertiary ease-out group-hover:text-Surface group-hover:ml-2 duration-300 transition-all group-hover:size-4 "
          />
        </div>
        <h2 className="text-[40px] md:text-[52px] leading-12 md:leading-14 text-Surface-Hover tracking-tight font-semibold">
          Built on strong foundations
        </h2>
        <p className="text-Tertiary text-[15px] max-w-[40ch] font-medium mb-12">
          Linear is so simple to use, it’s easy to overlook the wealth of
          complex technologies packed under the hood that keep Linear robust,
          safe, and blazing fast.
        </p>
        <div className="border-t border-t-Bento-Border flex flex-col gap-6 py-6 max-md:mb-12">
          {insights.map((insight, i) => (
            <div
              key={i}
              className="grid md:grid-cols-2 max-md:gap-2 items-start"
            >
              <div
                className={clsx(
                  "flex items-center gap-2 group",
                  insight.chevron && "cursor-pointer",
                )}
              >
                <p className="text-[15px] text-Surface hover:text-Surface-Hover">
                  {insight.title}
                </p>
                {insight.chevron && (
                  <ChevronRight
                    size={15}
                    className="relative left-0 text-Tertiary group-hover:text-Surface group-hover:left-2 duration-300 transition-all ease-out"
                  />
                )}
              </div>
              <p className="text-[15px] text-Tertiary md:pl-4">
                {insight.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="max-md:hidden md:col-span-2">
        <img src="/images/foundation.png" />
      </div>

      <div className="border-t border-Bento-Border grid grid-cols-3 place-items-center">
        <div className="space-y-3 p-4 md:p-6 border-r border-Bento-Border">
          <img src="/images/soc2.png" />
          <div className="flex items-center gap-2 max-md:justify-center">
            <p className="text-[15px] text-Tertiary/80">SOC 2</p>
            <BadgeCheck size={15} className="text-Surface fill-Primary-Hover" />
          </div>
        </div>
        <div className="space-y-3 p-4 md:p-6 border-r border-Bento-Border">
          <img src="/images/GDPR.png" />
          <div className="flex items-center gap-2 max-md:justify-center">
            <p className="text-[15px] text-Tertiary/80">GDPR</p>
            <BadgeCheck size={15} className="text-Surface fill-Primary-Hover" />
          </div>
        </div>
        <div className="space-y-3 p-4 md:p-6">
          <img src="/images/hippa.png" />
          <div className="flex items-center gap-2 max-md:justify-center">
            <p className="text-[15px] text-Tertiary/80">HIPPA</p>
            <BadgeCheck size={15} className="text-Surface fill-Primary-Hover" />
          </div>
        </div>
      </div>
      <div className="w-full max-md:hidden md:col-span-2 flex items-center justify-end">
        <img
          src="/images/logostripfade.png"
          className="relative right-0 inline-block w-2/3"
        />
      </div>
    </div>
  );
}

export default ProductFeatures;
