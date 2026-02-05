import { useState } from "react";
import { LogoAlt } from "../Logo";
import Button from "./Button";
import clsx from "clsx";

function Header() {
  const navbarMobileLinks = [
    {
      title: "Product",
      links: [
        "Features",
        "Integrations",
        "Pricing",
        "Changelog",
        "Documentation",
      ],
    },
    {
      title: "Resources",
      links: [
        "About",
        "Customers",
        "Careers",
        "Contact",
        "Now",
        "Method",
        "Switch",
      ],
    },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div
      className={clsx(
        "fixed top-0 z-30 left-0 bg-Background/75 backdrop-blur-lg border-b border-b-Bento-Border w-screen md:p-4",
        isSidebarOpen ? "h-dvh max-h-dvh flex flex-col md:h-auto" : "h-auto",
      )}
    >
      <header className="flex justify-between items-center md:gap-8 p-4 md:p-0 border-b border-b-Bento-Border md:border-0 md:min-w-244 min-w-screen max-w-244 mx-auto">
        <LogoAlt />
        <nav className="hidden md:block">
          <ul className="flex items-center gap-2">
            <li>
              <a href="#">
                <Button variant={"ghost"} size={"small"}>
                  Product
                </Button>
              </a>
            </li>
            <li>
              <a href="#">
                <Button variant={"ghost"} size={"small"}>
                  Resources
                </Button>
              </a>
            </li>
            <li>
              <a href="#">
                <Button variant={"ghost"} size={"small"}>
                  Pricing
                </Button>
              </a>
            </li>
            <li>
              <a href="#">
                <Button variant={"ghost"} size={"small"}>
                  Customers
                </Button>
              </a>
            </li>
            <li>
              <a href="#">
                <Button variant={"ghost"} size={"small"}>
                  Now
                </Button>
              </a>
            </li>
            <li>
              <a href="#">
                <Button variant={"ghost"} size={"small"}>
                  Contact
                </Button>
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant={"ghost"} size={"small"}>
            Log in
          </Button>
          <Button variant={"primary"} size={"small"}>
            Sign up
          </Button>
        </div>
        <button
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className={clsx(
            "md:hidden cursor-pointer w-4 aspect-square",
            isSidebarOpen ? "space-y-0" : "space-y-1.5",
          )}
        >
          <div
            className={clsx(
              "w-4 h-0.5 bg-Surface rounded-full transform transition-transform duration-150 ease-out origin-center",
              isSidebarOpen ? "rotate-45 mt-[1.5px]" : "rotate-0",
            )}
          ></div>
          <div
            className={clsx(
              "w-4 h-0.5 bg-Surface rounded-full transform transition-transform duration-150 ease-out origin-center",
              isSidebarOpen ? "-rotate-45 -mt-[1.5px]" : "rotate-0",
            )}
          ></div>
        </button>
      </header>
      {isSidebarOpen && (
        <div className="flex-1 h-full p-4 py-8 md:py-0 md:p-0 space-y-8 transition-all duration-150 ease-out max-h-full overflow-scroll scrollbar-hide">
          {navbarMobileLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-Tertiary font-medium tracking-tight text-[15px]">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li
                    className="text-2xl font-medium text-Surface tracking-tight cursor-pointer hover:text-Primary-Hover transition-all duration-150 ease-out"
                    key={link}
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Header;
