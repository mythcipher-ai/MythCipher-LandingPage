"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { ChevronRight } from "lucide-react";

const caseStudies = [
    {
        title: "How TechFlow scaled their engineering team by 3x",
        category: "Scale",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1170&auto=format&fit=crop",
        desc: "TechFlow used Mythcipher to streamline their sprint planning and reduce deployment time by 40%."
    },
    {
        title: "Modernizing product discovery at NovaSoft",
        category: "Discovery",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1170&auto=format&fit=crop",
        desc: "NovaSoft integrated Mythcipher with their existing stack to centralize product documentation."
    },
    {
        title: "Building the next generation of fintech at Pulse",
        category: "Fintech",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop",
        desc: "Pulse relies on Mythcipher's SLAs and custom workflows to maintain high-velocity development."
    }
];

export default function CaseStudyPage() {
    return (
        <div className="bg-Background min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 flex flex-col space-y-16 p-4 pt-32 max-w-7xl mx-auto w-full">
                <div className="space-y-4 max-w-3xl text-center md:text-left">
                    <h1 className="text-5xl md:text-8xl font-semibold text-Surface-Hover tracking-tighter">Case Studies</h1>
                    <p className="text-xl md:text-2xl text-Tertiary font-medium">
                        Learn how industry-leading teams use Mythcipher to build world-class products.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <article className="col-span-2 bg-Card rounded-4xl border border-Bento-Border overflow-hidden group cursor-pointer flex flex-col md:flex-row">
                        <div className="md:w-1/2 overflow-hidden">
                            <img src={caseStudies[0].image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="featured" />
                        </div>
                        <div className="md:w-1/2 p-8 md:p-12 space-y-6 flex flex-col justify-center">
                            <span className="text-Accent-Cyan font-semibold tracking-widest text-xs uppercase">{caseStudies[0].category}</span>
                            <h2 className="text-3xl md:text-5xl font-semibold text-Surface tracking-tight">{caseStudies[0].title}</h2>
                            <p className="text-lg text-Tertiary leading-relaxed">{caseStudies[0].desc}</p>
                            <div className="flex items-center gap-2 text-Surface font-medium">
                                Read full story <ChevronRight size={18} className="translate-y-0.5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </article>

                    {caseStudies.slice(1).map((study, i) => (
                        <article key={i} className="bg-Card rounded-4xl border border-Bento-Border overflow-hidden group cursor-pointer flex flex-col">
                            <div className="h-64 overflow-hidden">
                                <img src={study.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="case study" />
                            </div>
                            <div className="p-8 space-y-4 flex-1">
                                <span className="text-Accent-Green font-semibold tracking-widest text-xs uppercase">{study.category}</span>
                                <h3 className="text-2xl md:text-3xl font-semibold text-Surface tracking-tight">{study.title}</h3>
                                <p className="text-Tertiary leading-relaxed">{study.desc}</p>
                                <div className="flex items-center gap-2 text-Surface font-medium pt-4">
                                    Read story <ChevronRight size={16} className="translate-y-0.5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="bg-linear-to-r from-Primary-Hover to-Background rounded-3xl p-8 md:p-16 text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-Surface-Hover tracking-tight">Ready to transform your workflow?</h2>
                    <p className="text-Tertiary text-lg max-w-xl mx-auto">Join thousands of teams already building with Mythcipher.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Button variant="primary" className="h-12 px-12">Get Started</Button>
                        <Button variant="ghost" className="h-12 border border-Bento-Border">Talk to Sales</Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
