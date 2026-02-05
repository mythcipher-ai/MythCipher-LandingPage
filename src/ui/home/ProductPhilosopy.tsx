import { Dialog } from "@base-ui/react";
import clsx from "clsx";
import { ChevronRight, Plus, X } from "lucide-react";
import { useState } from "react";
import { flushSync } from "react-dom"; // Essential for VT API

const cards = [
  {
    imgSrc:
      "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/93514696-592a-4764-aa98-b6101349a100/f=auto,dpr=2,q=95,fit=scale-down,metadata=none",
    content: "Purpose-built for product development",
    redirect: "#",
  },
  {
    imgSrc:
      "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/5a4ff140-41a2-42dd-0723-e14cccc3e300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none",
    content: "Designed to move fast",
    redirect: "#",
  },
  {
    imgSrc:
      "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/0068f657-fe3f-47e9-6819-0ba9e6533900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none",
    content: "Crafted to perfection",
    redirect: "#",
  },
];

function ProductPhilosopy() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleOpenChange = (index: number | null) => {
    if (!document.startViewTransition) {
      setOpenIndex(index);
      return;
    }

    document.startViewTransition(() => {
      flushSync(() => {
        setOpenIndex(index);
      });
    });
  };

  return (
    <section className="bg-Background">
      <div className="max-w-264 mx-auto py-8 md:py-36 space-y-8">
        <div className="grid md:grid-cols-2 items-end p-4 px-4 md:px-10">
          <h2 className="text-[40px] md:text-[52px] max-md:mb-8 leading-12 md:leading-14 text-Surface-Hover tracking-tight font-semibold">
            Made for modern product teams
          </h2>
          <p className="text-Tertiary md:text-[15px] md:w-4/5 font-medium">
            Linear is shaped by the practices and principles that distinguish
            world-class product teams from the rest: relentless focus, fast
            execution, and a commitment to the quality of craft.{" "}
            <span className="items-center gap-1 inline-flex group text-Surface">
              Make the switch{" "}
              <ChevronRight
                size={14}
                className="group-hover:left-2 relative left-0 transition-all duration-300 ease-out"
                strokeWidth={3}
              />
            </span>
          </p>
        </div>
        <div className="md:grid md:grid-cols-3 md:grid-rows-[1fr_auto] max-md:pr-2 md:gap-2 flex items-stretch overflow-x-scroll scrollbar-hide snap-x snap-mandatory">
          {cards.map((card, i) => (
            <div
              key={i}
              className={clsx(
                "max-md:h-auto max-md:snap-start max-md:pl-4 max-md:pr-2 max-md:w-[calc(100vw-56px)] max-md:shrink-0",
              )}
            >
              <Dialog.Root
                open={openIndex === i}
                onOpenChange={(open: any) => handleOpenChange(open ? i : null)}
              >
                <Dialog.Trigger className="rounded-md h-full md:px-3.5 text-base font-medium select-none focus-visible:outline focus-visible:-outline-offset-2 focus-visible:outline-Outline">
                  <article
                    style={{
                      viewTransitionName:
                        openIndex === null ? `card-${i}` : "none",
                    }}
                    key={i}
                    className="w-full bg-Card grid h-full grid-rows-subgrid row-span-2 gap-0 hover:bg-Card-Hover group transition-all duration-300 ease-out rounded-3xl pb-6 cursor-pointer"
                  >
                    <img
                      style={{
                        viewTransitionName:
                          openIndex === null ? `image-${i}` : "none",
                      }}
                      src={card.imgSrc}
                      className="h-60 mt-14 mb-4 w-full object-cover"
                    />
                    <div className="flex items-end gap-2 w-full px-6">
                      <h3
                        style={{
                          viewTransitionName:
                            openIndex === null ? `heading-${i}` : "none",
                        }}
                        className="flex-1 text-Surface text-left text-[1.5rem] tracking-tighter font-medium"
                      >
                        {card.content}
                      </h3>
                      <div className="p-2 border border-[#232326] group-hover:bg-[#232326] group-hover:text-Surface text-Primary-Hover rounded-full transition-all duration-300 ease-out">
                        <Plus size={18} strokeWidth={3} />
                      </div>
                    </div>
                  </article>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Backdrop className="fixed inset-0 min-h-dvh bg-Background transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 dark:opacity-100 supports-[-webkit-touch-callout:none]:absolute" />
                  <Dialog.Popup
                    style={{
                      viewTransitionName:
                        openIndex === i ? `card-${i}` : "none",
                    }}
                    className="fixed top-[5vh] md:left-1/2 h-[95vh] w-full max-md:max-w-[95vw] max-md:left-[2.5vw] max-w-244 md:-translate-x-1/2 rounded-t-4xl bg-Card max-md:p-4 p-6 text-Surface transition-all duration-150 data-ending-style:scale-90 overflow-y-scroll data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0 scrollbar-hide"
                  >
                    <div className="sticky top-1 right-1 z-30 ml-auto w-10.5 aspect-square">
                      <Dialog.Close className="p-2 rounded-full border-2 border-Bento-Border aspect-square group hover:bg-Primary transition-all duration-300 ease-out cursor-pointer">
                        <X
                          className="text-Tertiary delay-100 transition-all duration-300 ease-out group-hover:text-Surface"
                          size={22}
                        />
                      </Dialog.Close>
                    </div>
                    <img
                      style={{
                        viewTransitionName:
                          openIndex === i ? `image-${i}` : "none",
                      }}
                      src={card.imgSrc}
                      className="max-md:max-h-[40vh] max-h-[70vh] w-full object-cover max-md:mb-6"
                    />
                    <div className="md:w-2/3 mx-auto space-y-8 md:space-y-12">
                      <Dialog.Title className="text-[40px] md:text-[52px] leading-12 md:leading-14 text-Surface-Hover tracking-tight font-semibold">
                        <h3
                          style={{
                            viewTransitionName:
                              openIndex === i ? `heading-${i}` : "none",
                          }}
                        >
                          {card.content}
                        </h3>
                      </Dialog.Title>
                      <Dialog.Description className="mb-6 space-y-6 text-[15px] font-medium text-Tertiary">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. In fugiat soluta consectetur. Incidunt corporis in
                        illum laborum distinctio voluptate quia quis.
                        <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. In fugiat soluta consectetur. Incidunt corporis in
                        illum laborum distinctio voluptate quia quis, cumque
                        quam commodi nam molestiae numquam provident corrupti
                        eos. Praesentium a, suscipit, error harum numquam nulla
                        pariatur ullam tempore ea, sunt est vitae odit maxime!
                        Accusantium suscipit maxime repudiandae.
                        <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. In fugiat soluta consectetur. Incidunt corporis in
                        illum laborum distinctio voluptate quia quis, cumque
                        quam commodi nam molestiae numquam provident corrupti
                        eos. Praesentium a, suscipit, error harum numquam nulla
                        pariatur ullam tempore ea, sunt est vitae odit maxime!
                        Accusantium suscipit maxime repudiandae.
                        <br />
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
