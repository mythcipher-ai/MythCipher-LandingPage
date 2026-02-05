import Button from "../components/Button";

function CTA() {
  return (
    <section id="cta" className="bg-Background">
      <div className="max-w-dvw md:max-w-244 mx-auto pt-16 md:pt-36 py-8 md:py-12 flex max-md:flex-col justify-between items-center gap-4 md:gap-8 px-4 md:px-0">
        <h3 className="text-4xl leading-12 md:leading-14 text-Surface-Hover tracking-tight font-medium">
          Plan the present. Build the future.
        </h3>
        <div className="flex max-md:flex-col justify-stretch items-center gap-2 md:gap-4 w-full">
          <Button variant={"secondary"} className="w-full">
            Contact Sales
          </Button>
          <Button variant={"primary"} className="w-full">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
