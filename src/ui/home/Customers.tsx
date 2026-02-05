import { ChevronRight } from "lucide-react";

function AffliatedBrands() {
  return (
    <section className="bg-Background">
      <div className="max-w-244 mx-auto py-8 md:py-16 space-y-8 text-center">
        <div className="text-[16px] md:text-2xl font-semibold tracking-tight w-4/5 mx-auto md:w-full md:mx-0 px-4 md:px-0">
          <h4 className="text-Tertiary md:text-Surface inline md:block mr-[0.5ch] md:mr-0">
            Powering the world’s best product teams.
          </h4>
          <h4 className="text-Tertiary inline md:block">
            From next-gen startups to established enterprises.
          </h4>
        </div>
        <div className="relative group py-4 overflow-hidden">
          <div className="md:gap-8 md:grid md:grid-cols-4 flex md:flex-none animate-marquee-mobile md:animate-none">
            {[...Array.from({ length: 8 })].map((_, i) => (
              <img
                key={i}
                src="/logos/MakeMyTripLogo.png"
                className="max-md:w-3/4 max-md:max-w-[50vw] group-hover:scale-95 group-hover:blur-md transition-all ease-out duration-300"
                alt="logo"
              />
            ))}
          </div>

          <div className="absolute inset-0 -z-10 grid place-items-center group-hover:z-10 transition-all duration-300">
            <button className="pr-3 pl-5 py-1.5 bg-Primary text-Surface border rounded-full border-Tertiary/50 flex items-center gap-2 text-sm scale-80 group-hover:scale-100 transition-all duration-300">
              Meet our Customers
              <ChevronRight size={20} className="text-Tertiary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AffliatedBrands;
