"use client";

import { Dialog } from "@base-ui/react";
import { cn } from "@/lib/utils";
import { ChevronRight, Plus, X } from "lucide-react";
import { useState } from "react";
import { flushSync } from "react-dom";

const cards = [
    {
        imgSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
        content: "Autonomous AI Agents",
        redirect: "#",
    },
    {
        imgSrc: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1000&auto=format&fit=crop",
        content: "Seamless Tool Integration",
        redirect: "#",
    },
    {
        imgSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
        content: "Workflow Optimization",
        redirect: "#",
    },
];

function ProductPhilosopy() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleOpenChange = (index: number | null) => {
        // @ts-ignore
        if (!document.startViewTransition) {
            setOpenIndex(index);
            return;
        }

        // @ts-ignore
        document.startViewTransition(() => {
            flushSync(() => {
                setOpenIndex(index);
            });
        });
    };

    return (
        <section className="bg-Background overflow-hidden">
            <div className="max-w-7xl mx-auto py-12 md:py-36 space-y-12 px-4 md:px-0">
                <div className="grid md:grid-cols-2 items-end gap-12">
                    <h2 className="text-[40px] md:text-7xl leading-11 md:leading-tight text-Surface-Hover tracking-tight font-semibold max-w-2xl">
                        Intelligent systems for ambitious businesses
                    </h2>
                    <p className="text-Tertiary text-lg md:text-xl font-medium max-w-xl">
                        I focus on building automation frameworks that are fast, scalable, and tailored to your specific business needs. Relentless focus on efficiency and quality.{" "}
                        <span className="items-center gap-1 inline-flex group text-Surface cursor-pointer">
                            Learn about my process{" "}
                            <ChevronRight
                                size={14}
                                className="group-hover:translate-x-1 relative transition-all duration-300 ease-out"
                                strokeWidth={3}
                            />
                        </span>
                    </p>
                </div>
                <div className="flex md:grid md:grid-cols-3 max-md:overflow-x-auto gap-6 py-12 scrollbar-hide snap-x">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="min-w-[85vw] md:min-w-0 snap-center"
                        >
                            <Dialog.Root
                                open={openIndex === i}
                                onOpenChange={(open: any) => handleOpenChange(open ? i : null)}
                            >
                                <Dialog.Trigger className="w-full text-left rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-Outline">
                                    <article
                                        className="w-full bg-Card hover:bg-Card-Hover group transition-all duration-300 ease-out rounded-4xl p-8 cursor-pointer h-full flex flex-col justify-between min-h-[450px] border border-Bento-Border"
                                    >
                                        <div className="h-56 mb-8 overflow-hidden rounded-2xl">
                                            <img
                                                src={card.imgSrc}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                alt={card.content}
                                            />
                                        </div>
                                        <div className="flex items-end gap-4">
                                            <h3 className="flex-1 text-Surface text-3xl tracking-tighter font-medium leading-tight">
                                                {card.content}
                                            </h3>
                                            <div className="p-3 border border-Bento-Border group-hover:bg-Surface group-hover:text-Primary text-Tertiary rounded-full transition-all duration-300 ease-out shrink-0">
                                                <Plus size={24} />
                                            </div>
                                        </div>
                                    </article>
                                </Dialog.Trigger>
                                <Dialog.Portal>
                                    <Dialog.Backdrop className="fixed inset-0 z-50 bg-Background/80 backdrop-blur-sm transition-all duration-300 animate-in fade-in" />
                                    <Dialog.Popup
                                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[95vw] max-w-4xl max-h-[90vh] bg-Card rounded-3xl p-6 md:p-12 overflow-y-auto scrollbar-hide shadow-2xl animate-in zoom-in fade-in duration-300"
                                    >
                                        <div className="absolute top-4 right-4 translate-x-1/2 -translate-y-1/2 z-50">
                                            <Dialog.Close className="p-2 bg-Background rounded-full border border-Bento-Border hover:bg-Surface hover:text-Primary transition-all duration-300">
                                                <X size={24} />
                                            </Dialog.Close>
                                        </div>
                                        <div className="space-y-8">
                                            <div className="h-64 md:h-96 rounded-2xl overflow-hidden">
                                                <img
                                                    src={card.imgSrc}
                                                    className="w-full h-full object-cover"
                                                    alt={card.content}
                                                />
                                            </div>
                                            <Dialog.Title className="text-3xl md:text-5xl text-Surface-Hover font-semibold tracking-tight">
                                                {card.content}
                                            </Dialog.Title>
                                            <Dialog.Description className="text-Tertiary text-lg leading-relaxed">
                                                Lorem ipsum dolor sit amet consectetur, adipisicing
                                                elit. In fugiat soluta consectetur. Incidunt corporis in
                                                illum laborum distinctio voluptate quia quis.
                                                <br /><br />
                                                At Mythcipher, we believe that the tools you use should
                                                empower your creativity, not hinder it. Our platform is
                                                designed to stay out of your way while providing all the
                                                power you need to build amazing products.
                                            </Dialog.Description>
                                        </div>
                                    </Dialog.Popup>
                                </Dialog.Portal>
                            </Dialog.Root>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductPhilosopy;
