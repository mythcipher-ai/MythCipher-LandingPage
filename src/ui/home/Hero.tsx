import Button from "../components/Button";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Hero() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef1 = useRef<HTMLParagraphElement | null>(null);
  const paraRef2 = useRef<HTMLParagraphElement | null>(null);
  const button1Ref = useRef<HTMLButtonElement | null>(null);
  const button2Ref = useRef<HTMLButtonElement | null>(null);

  function splitText<T extends HTMLElement>(current: T, classPrefix: string) {
    const words = current.textContent!.trim().split(" ");

    current.innerHTML = "";

    words.forEach((word, i) => {
      const wordElement = document.createElement("span");
      wordElement.classList.add(`${classPrefix}-word`);
      wordElement.style.display = "inline-block";

      [...word].forEach((letter) => {
        const letterElement = document.createElement("span");
        letterElement.textContent = letter;
        letterElement.classList.add(`${classPrefix}-letter`);
        wordElement.appendChild(letterElement);
      });

      current.appendChild(wordElement);

      // space BETWEEN words (safe)
      if (i < words.length - 1) {
        current.appendChild(document.createTextNode(" "));
      }
    });
  }

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    if (headingRef.current) {
      splitText(headingRef.current, "heading");
      tl.from(".heading-word", {
        y: 40,
        opacity: 0,
        filter: "blur(25px)",
        stagger: 0.06,
        duration: 1,
      });
    }

    if (paraRef1.current) {
      splitText(paraRef1.current, "para1");
      tl.from(
        ".para1-word",
        {
          y: 40,
          opacity: 0,
          filter: "blur(25px)",

          duration: 0.5,
        },
        "-=0.7",
      );
    }

    if (paraRef2.current) {
      splitText(paraRef2.current, "para2");
      tl.from(
        ".para2-word",
        {
          y: 40,
          opacity: 0,
          filter: "blur(25px)",

          duration: 0.5,
        },
        "-=0.7",
      );
    }
    if (button1Ref.current && button2Ref.current) {
      tl.from(
        ".button1-ref, .button2-ref",
        {
          y: 40,
          opacity: 0,
          filter: "blur(25px)",
          duration: 0.5,
        },
        "-=0.4",
      );
    }
  });

  return (
    <section
      id="hero"
      className="min-h-screen bg-Background pt-36 md:pt-48 p-4 md:p-0"
    >
      <div className="max-w-244 mx-auto space-y-4">
        <h1
          ref={headingRef}
          className="text-[40px] md:text-6xl leading-11 md:leading-16 text-Surface-Hover text-center md:text-left tracking-tighter font-semibold"
        >
          Linear is a purpose-built tool for planning and building products
        </h1>
        <div className="leading-7 text-Tertiary mb-6 text-center md:text-left">
          <p ref={paraRef1} className="inline md:block mr-[.5ch]">
            Meet the system for modern software development.
          </p>
          <p ref={paraRef2} className="inline md:block">
            Streamline issues, projects, and product roadmaps.
          </p>
        </div>
        <div className="flex max-md:flex-col max-md:justify-center items-center gap-4">
          <Button ref={button1Ref} className="button1-ref">
            Start building
          </Button>
          <Button
            ref={button2Ref}
            className="flex items-center gap-2 px-4 group button2-ref"
            variant={"ghost"}
            size={"small"}
          >
            <span className="bg-linear-to-r from-Surface-Hover to-Tertiary bg-clip-text text-transparent">
              New: Linear Reviews (Beta)
            </span>{" "}
            <ChevronRight
              size={18}
              className="text-Tertiary group-hover:text-Surface transition-all duration-300"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
