import { SlideShow } from "../components/SlideShow";
import { CallToAction } from "../components/CallToAction";
import { SecondCallToAction } from "../components/SecondCallToAction";
import { CustomerTestimonial } from "../components/CustomerTestimonial";
import { ServicesInclude } from "../components/ServicesInclude";

export const Home = () => {
  return (
    <>
      <SlideShow />
      <CallToAction />
      <SecondCallToAction />
      <ServicesInclude />
      <CustomerTestimonial />
    </>
  );
};
