import Footer from "../components/Footer";
import Header from "../components/Header";
import AffliatedBrands from "./Customers";
import CTA from "./CTA";
import Hero from "./Hero";
import ProductFeatures from "./ProductFeatures";
import ProductPhilosopy from "./ProductPhilosopy";

function index() {
  return (
    <>
      <Header />
      <Hero />
      <AffliatedBrands />
      <ProductPhilosopy />
      <ProductFeatures />
      <CTA />
      <Footer />
    </>
  );
}

export default index;
