import { SlideShow } from "../components/SlideShow";
import { CallToAction } from "../components/CallToAction";
import { SecondCallToAction } from "../components/SecondCallToAction";
import { CustomerTestimonial } from "../components/CustomerTestimonial";

export const Home = () => {
  return (
    <>
      <SlideShow />
      <CallToAction />
      <SecondCallToAction />
      <CustomerTestimonial />
    </>
  );
};
