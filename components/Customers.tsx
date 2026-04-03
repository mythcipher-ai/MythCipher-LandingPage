"use client";

import { ChevronRight } from "lucide-react";

function AffliatedBrands() {
    return (
        <section className="bg-Background">
            <div className="max-w-7xl mx-auto py-8 md:py-16 space-y-8 text-center">
                <div className="text-[16px] md:text-3xl font-semibold tracking-tight w-4/5 mx-auto md:w-full md:mx-0 px-4 md:px-0">
                    <h4 className="text-Tertiary md:text-Surface inline md:block mr-[0.5ch] md:mr-0">
                        Pioneering the future of business operations.
                    </h4>
                    <h4 className="text-Tertiary inline md:block">
                        Trusted by industry leaders to automate what matters.
                    </h4>
                </div>
                <div className="relative group py-4 overflow-hidden">
                    <div className="md:gap-8 md:grid md:grid-cols-4 flex md:flex-none animate-marquee-mobile md:animate-none justify-items-center items-center">
                        {[...Array.from({ length: 4 })].map((_, i) => (
                            <div key={i} className="flex items-center justify-center p-4 filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <span className="text-2xl font-bold text-Surface/20 tracking-widest uppercase">Brand-{i + 1}</span>
                            </div>
                        ))}
                    </div>

                    <div className="absolute inset-0 -z-10 grid place-items-center group-hover:z-10 transition-all duration-300 pointer-events-none">
                        <button className="pr-3 pl-5 py-2 bg-Primary text-Surface border rounded-full border-Tertiary/50 flex items-center gap-2 text-sm scale-80 group-hover:scale-100 transition-all duration-300 pointer-events-auto shadow-2xl">
                            See My Automation Work
                            <ChevronRight size={20} className="text-Tertiary" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AffliatedBrands;
