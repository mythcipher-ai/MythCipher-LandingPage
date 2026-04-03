"use client";

import { useState } from "react";
import { Logo } from "./Logo";
import Button from "./Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

const NAV_LINKS = [
  { name: "Use Cases", href: "/use-cases" },
  { name: "How it works", href: "/#how-it-works" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        "fixed top-0 z-30 left-0 w-screen bg-Background/75 backdrop-blur-lg border-b border-b-Bento-Border transition-all duration-300",
        isOpen ? "h-dvh flex flex-col md:h-auto" : "h-auto"
      )}
    >
      <header className="flex justify-between items-center p-4 md:px-8 w-full max-w-7xl mx-auto">
        <Logo />
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link key={link.name} href={link.href}>
              <Button variant="ghost" size="small">
                {link.name}
              </Button>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="https://ai.mythcipher.in/signup?utm_source=landing&utm_medium=nav&utm_campaign=nav_cta"
            onClick={() => trackEvent("nav_cta_click")}
            className="hidden sm:block"
          >
            <Button variant="primary" size="small">
              Start Free
            </Button>
          </Link>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden cursor-pointer w-5 aspect-square flex flex-col justify-center gap-1.5 ml-1"
          >
            <div
              className={cn(
                "w-5 h-0.5 bg-Surface rounded-full transition-transform duration-150 origin-center",
                isOpen ? "rotate-45 translate-y-1" : ""
              )}
            />
            <div
              className={cn(
                "w-5 h-0.5 bg-Surface rounded-full transition-transform duration-150 origin-center",
                isOpen ? "-rotate-45 -translate-y-1" : ""
              )}
            />
          </button>
        </div>
      </header>
      {isOpen && (
        <div className="flex-1 p-6 py-8 space-y-6 overflow-y-auto scrollbar-hide md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-2xl font-medium text-Surface tracking-tight hover:text-Surface-Hover transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://ai.mythcipher.in/signup?utm_source=landing&utm_medium=nav&utm_campaign=nav_cta"
            onClick={() => {
              trackEvent("nav_cta_click");
              setIsOpen(false);
            }}
            className="block pt-4"
          >
            <Button variant="primary" className="w-full">
              Start Free
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
