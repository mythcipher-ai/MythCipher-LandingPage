"use client";

import Button from "./Button";
import Link from "next/link";

function CTA() {
    return (
        <section id="cta" className="bg-Background py-24 md:py-48">
            <div className="max-w-7xl mx-auto px-4 md:px-0 text-center space-y-12">
                <h3 className="text-5xl md:text-9xl leading-none text-Surface-Hover tracking-tighter font-semibold">
                    Automate the present.<br />Build the future.
                </h3>
                <p className="text-xl md:text-2xl text-Tertiary max-w-2xl mx-auto font-medium">
                    Ready to streamline your business with custom AI solutions? Let&apos;s discuss how automation can work for you.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-lg mx-auto pt-8">
                    <Link href="/contact" className="w-full">
                        <Button variant={"secondary"} className="w-full h-16 text-xl">
                            Book a Strategy Call
                        </Button>
                    </Link>
                    <Link href="/register" className="w-full">
                        <Button variant={"primary"} className="w-full h-16 text-xl">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default CTA;
