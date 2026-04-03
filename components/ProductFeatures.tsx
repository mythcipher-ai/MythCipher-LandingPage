"use client";

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
import Button from "./Button";
import { cn } from "@/lib/utils";

function ProductFeatures() {
    return (
        <>
            <section
                className="bg-linear-to-b from-Card to-Background to-25% py-12 md:py-28"
                id="features"
            >
                <AiAssistedDevelopment />
            </section>
            <section
                className="bg-linear-to-b from-Card to-Background to-25% py-12 md:py-28"
            >
                <ProjectAndLongTermPlanning />
            </section>
            <section
                className="bg-linear-to-b from-Card to-Background to-25% py-12 md:py-28"
            >
                <TaskTrackingAndSprintPlanning />
            </section>
            <section
                className="bg-linear-to-b from-Card to-Background to-25% py-12 md:py-28"
            >
                <WorkFlowAndIntegrations />
            </section>
            <section
                className="bg-linear-to-b from-Card to-Background to-25% py-12 md:py-28"
            >
                <Foundation />
            </section>
        </>
    );
}

function AiAssistedDevelopment() {
    return (
        <div className="max-w-7xl mx-auto space-y-12 px-4 md:px-0">
            <div className="flex items-center gap-1 group cursor-pointer w-fit">
                <div className="px-2 py-1 bg-Accent-Cyan w-fit rounded-full" />
                <p className="font-medium text-sm text-Tertiary">
                    Artificial Intelligence
                </p>
                <ChevronRight
                    size={14}
                    className="text-Tertiary ease-out group-hover:text-Surface group-hover:translate-x-1 duration-300 transition-all"
                />
            </div>
            <h2 className="text-[40px] md:text-6xl leading-tight text-Surface-Hover tracking-tight font-semibold max-w-3xl">
                AI-assisted product development
                <span className="block opacity-50">Mythcipher for Agents.</span>
            </h2>
            <p className="md:w-1/2 text-Tertiary text-lg md:text-xl font-medium">
                <span className="text-Surface">Mythcipher for Agents.</span> Choose from a
                variety of AI agents and start delegating work, from code generation to
                other technical tasks.
            </p>
            <Button
                variant={"secondary"}
                size={"small"}
                className="flex items-center gap-2"
            >
                Learn More
                <ChevronRight size={18} />
            </Button>
            <div className="w-full h-[400px] md:h-[600px] bg-Card rounded-3xl border border-Bento-Border overflow-hidden flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-linear-to-br from-Accent-Cyan/10 to-transparent"></div>
                <span className="text-3xl font-bold text-Surface/10 group-hover:scale-110 transition-transform duration-500">Mythcipher Agents Dashboard</span>
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
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-0 space-y-12">
            <div className="flex items-center gap-1 group cursor-pointer w-fit">
                <div className="px-2 py-1 bg-Accent-Green w-fit rounded-full" />
                <p className="font-medium text-sm text-Tertiary">
                    Project and long-term planning
                </p>
                <ChevronRight size={14} className="text-Tertiary transition-all group-hover:translate-x-1" />
            </div>
            <h2 className="text-[40px] md:text-6xl leading-tight text-Surface-Hover tracking-tight font-semibold max-w-2xl">
                Set the product direction
            </h2>
            <p className="md:w-1/2 text-Tertiary text-lg md:text-xl font-medium">
                <span className="text-Surface">Align your team around a unified product timeline.</span>
                Plan, manage, and track all product initiatives with Mythcipher’s visual planning tools.
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-12 py-12">
                    <h3 className="text-3xl text-Surface font-semibold tracking-tight">Ideate and specify what to build next</h3>
                    <div className="flex flex-col gap-4">
                        {features.map((feature, i) => (
                            <button
                                key={i}
                                className="flex items-center gap-6 group cursor-pointer w-fit"
                                onClick={() => setSelectedTab(i)}
                            >
                                <div className={cn(
                                    "w-1.5 h-10 rounded-full transition-all duration-300",
                                    selectedTab === i ? "bg-Accent-Green scale-y-110" : "bg-Secondary"
                                )} />
                                <p className={cn(
                                    "text-xl font-medium transition-colors duration-300",
                                    selectedTab === i ? "text-Surface" : "text-Tertiary group-hover:text-Surface/70"
                                )}>
                                    {feature}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="bg-Card h-[400px] md:h-[500px] rounded-3xl border border-Bento-Border flex items-center justify-center p-8 overflow-hidden relative">
                    <div className="absolute inset-0 bg-linear-to-tr from-Accent-Green/10 to-transparent"></div>
                    <p className="text-2xl font-bold text-Surface/10">Feature Visualization: {features[selectedTab]}</p>
                </div>
            </div>
        </div>
    );
}

function TaskTrackingAndSprintPlanning() {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-0 space-y-12">
            <div className="flex items-center gap-1 group cursor-pointer w-fit">
                <div className="px-2 py-1 bg-Accent-Yellow w-fit rounded-full" />
                <p className="font-medium text-sm text-Tertiary">Task tracking and sprint planning</p>
                <ChevronRight size={14} className="text-Tertiary transition-all group-hover:translate-x-1" />
            </div>
            <h2 className="text-[40px] md:text-6xl leading-tight text-Surface-Hover tracking-tight font-semibold max-w-2xl">
                Issue tracking you’ll enjoy using
            </h2>
            <p className="md:w-1/2 text-Tertiary text-lg md:text-xl font-medium">
                <span className="text-Surface">Optimized for speed and efficiency.</span>
                Create tasks in seconds, discuss issues in context, and breeze through your work in views tailored to you.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-Bento-Border">
                {[
                    { icon: Circle, title: "Tailored workflows", desc: "Track progress across custom issue flows." },
                    { icon: Layers2, title: "Custom views", desc: "Switch between list and board easily." },
                    { icon: ListFilter, title: "Filters", desc: "Refine lists to what's most relevant." },
                    { icon: Flame, title: "SLAs", desc: "Apply deadlines to sensitive tasks." },
                ].map((item, i) => (
                    <div key={i} className="space-y-4">
                        <item.icon size={20} className="text-Accent-Yellow" />
                        <h4 className="text-Surface font-semibold text-lg">{item.title}</h4>
                        <p className="text-Tertiary text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function WorkFlowAndIntegrations() {
    const carouselRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-0 space-y-12">
            <div className="flex items-center gap-1 group cursor-pointer w-fit">
                <div className="px-2 py-1 bg-Accent-Purple w-fit rounded-full" />
                <p className="font-medium text-sm text-Tertiary">System Integrations</p>
                <ChevronRight size={14} className="text-Tertiary transition-all group-hover:translate-x-1" />
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-end">
                <h2 className="text-[40px] md:text-7xl leading-tight text-Surface-Hover tracking-tight font-semibold">Connect your entire tech stack</h2>
                <p className="text-Tertiary text-lg md:text-xl font-medium">
                    I build bridges between your tools. From CRM to Slack, I ensure your data flows seamlessly through automated agents.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
                {[
                    { title: "SaaS Connectivity", desc: "Automate data sync between Salesforce, HubSpot, and Jira." },
                    { icon: null, title: "Custom APIs", desc: "Build tailored endpoints to connect proprietary systems." },
                    { icon: null, title: "Real-time Ops", desc: "Instant notifications and actions based on user events." },
                ].map((item, i) => (
                    <div key={i} className="bg-Card h-85 rounded-4xl border border-Bento-Border p-10 group hover:border-Surface/20 transition-all duration-300">
                        <div className="w-14 h-14 bg-Secondary rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-300"></div>
                        <h4 className="text-2xl font-semibold text-Surface mb-4">{item.title}</h4>
                        <p className="text-Tertiary text-base leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Foundation() {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-0 space-y-12">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl md:text-6xl font-semibold text-Surface tracking-tight">Built on robust foundations</h2>
                <div className="hidden md:flex gap-4">
                    <div className="px-6 py-3 border border-Bento-Border rounded-full text-sm text-Tertiary font-semibold tracking-widest uppercase">Security First</div>
                    <div className="px-6 py-3 border border-Bento-Border rounded-full text-sm text-Tertiary font-semibold tracking-widest uppercase">Scalable Ops</div>
                </div>
            </div>
            <p className="text-Tertiary text-lg md:text-2xl max-w-3xl font-medium leading-relaxed">
                Automation is only as good as its reliability. I pack complex error handling and security protocols under the hood of every agent I build.
            </p>
        </div>
    );
}

export default ProductFeatures;
