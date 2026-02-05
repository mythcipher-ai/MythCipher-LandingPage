import { LogoAlt } from "../Logo";

function Footer() {
  const FOOTER_LINKS = [
    {
      title: "Features",
      links: [
        "Plan",
        "Build",
        "Insights",
        "Customer Requests",
        "Linear Asks",
        "Security",
        "Mobile",
      ],
    },
    {
      title: "Product",
      links: [
        "Pricing",
        "Method",
        "Integrations",
        "Changelog",
        "Documentation",
        "Download",
        "Switch",
      ],
    },
    {
      title: "Company",
      links: [
        "About",
        "Customers",
        "Careers",
        "Now",
        "README",
        "Quality",
        "Brand",
      ],
    },
    {
      title: "Resources",
      links: [
        "Developers",
        "Status",
        "Startups",
        "Report vulnerability",
        "DPA",
        "Privacy",
        "Terms",
      ],
    },
    {
      title: "Connect",
      links: ["Contact us", "Community", "X (Twitter)", "GitHub", "YouTube"],
    },
  ];

  return (
    <section
      id="footer"
      className="bg-Background py-12 border-t border-t-Bento-Border"
    >
      <div className="max-w-dvw md:max-w-244 mx-auto grid grid-cols-3 md:grid-cols-6 gap-6 items-start px-4 md:px-0">
        <LogoAlt name={false} />
        {FOOTER_LINKS.map((section) => (
          <div key={section.title} className="relative top-1 pl-2">
            <h4 className="text-sm tracking-tight text-Surface font-medium mb-6">
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li
                  className="text-sm tracking-tight hover:text-Surface transition-all duration-150 ease-out cursor-pointer text-Tertiary font-medium"
                  key={link}
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Footer;
