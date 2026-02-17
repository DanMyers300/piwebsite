import { Helmet } from "react-helmet-async";
import { SlideShow } from "../components/SlideShow";
import { CallToAction } from "../components/CallToAction";
import { SecondCallToAction } from "../components/SecondCallToAction";
import { CustomerTestimonial } from "../components/CustomerTestimonial";
import { ServicesInclude } from "../components/ServicesInclude";
import { SEO } from "../components/SEO";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Watson Private Investigation Services Inc.",
  url: "https://watsonpiservices.com",
  logo: "https://watsonpiservices.com/logo.webp",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-512-801-9754",
    contactType: "customer service",
    areaServed: "US",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "PO Box 2338",
    addressLocality: "Cedar Park",
    addressRegion: "TX",
    postalCode: "78630-2338",
    addressCountry: "US",
  },
};

export const Home = () => {
  return (
    <>
      <SEO
        title="Watson Private Investigation Services"
        description="Licensed private investigator in Los Angeles & Austin. Surveillance, background checks, infidelity investigations & more. Free consultation."
        path="/"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>
      <SlideShow />
      <CallToAction />
      <SecondCallToAction />
      <ServicesInclude />
      <CustomerTestimonial />
    </>
  );
};
