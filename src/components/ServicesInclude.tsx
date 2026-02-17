import { useState } from "react";
import { Link } from "react-router-dom";
import justice from "../assets/justice.webp";
import civil from "../assets/civil.webp";
import debugging from "../assets/debugging.webp";
import insurance from "../assets/insurance.webp";
import divorce from "../assets/divorce.webp";
import andmore from "../assets/andmore.webp";

const services = [
  {
    id: "criminal",
    label: "CRIMINAL",
    image: justice,
    content:
      "We do criminal defense work all over Texas. I am an approved vendor for Travis County and do criminal defense work for all types of criminal offenses. I have numerous references from criminal defense attorneys that I have worked with in their criminal cases.",
  },
  {
    id: "civil",
    label: "CIVIL",
    image: civil,
    content: "I have conducted numerous civil cases that range from product liability to wrongful death.",
  },
  {
    id: "debugging",
    label: "DEBUGGING",
    image: debugging,
    content: "I received my experience in detecting threats to personal privacy during my experience with the LAPD. I worked a unit that worked closely with the secret service. We conducted VIP dignitary protection details that required debugging.\n\nIf you are worried that you are being investigated, call our office from a payphone preferably some distance from your home. Do not call us from your home telephone. We can search for bugs and cameras using various techniques, many of them transparent to those doing the monitoring.",
  },
  {
    id: "insurance-fraud",
    label: "INSURANCE FRAUD",
    image: insurance,
    content: "As an approved vendor with State Farm we work with the law firms that represent the insurance companies. I have conducted numerous insurance fraud investigations and have numerous references upon request. We can help you recover assets and identify the amateurs and professionals engaged in these activities.",
  },
  {
    id: "divorce",
    label: "DIVORCE",
    image: divorce,
    content: "Divorce can be a very sensitive and emotional time for people. A private investigator's responsibilities may include surveillance that will supply the customer with photographs, pictures, etc. My advice to most people is that if you have gone this far and have accessed this site or contacted a private investigator, there is a problem. Finding the answer to the problem is what we do.",
  },
  {
    id: "more",
    label: "And More!",
    image: andmore,
    content: "Check out all of the services we provide, including CHILD CUSTODY, SURVEILLANCE, PROCESS SERVICE, UNDERCOVER INVESTIGATION, BACKGROUND CHECKS, and MISSING PERSON.",
    hasLink: true,
  },
];

export const ServicesInclude = () => {
  const [activeService, setActiveService] = useState("criminal");

  return (
    <div className="bg-white p-6 sm:p-8 md:p-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Services Include
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mb-8"></div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Sidebar Navigation */}
          <div role="tablist" aria-label="Services" className="flex flex-row md:flex-col flex-wrap gap-2 md:gap-3 md:w-48 shrink-0">
            {services.map((service) => (
              <button
                key={service.id}
                role="tab"
                id={`tab-${service.id}`}
                aria-selected={activeService === service.id}
                aria-controls={`panel-${service.id}`}
                onClick={() => setActiveService(service.id)}
                className={`text-left px-4 py-2 rounded font-semibold transition-colors text-sm sm:text-base ${
                  activeService === service.id
                    ? "bg-yellow-500 text-white"
                    : "text-yellow-500 hover:bg-yellow-50"
                }`}
              >
                {service.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1">
            {services.map((service) => (
              <div
                key={service.id}
                role="tabpanel"
                id={`panel-${service.id}`}
                aria-labelledby={`tab-${service.id}`}
                hidden={activeService !== service.id}
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.label}
                  loading="lazy"
                  className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg mb-6"
                />

                {/* Title and Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                  {service.id === "more" ? "More Services" : service.label}
                </h3>
                <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {service.content}
                </div>
                {service.hasLink && (
                  <Link
                    to="/services"
                    className="inline-block mt-6 bg-yellow-500 hover:bg-yellow-400 text-white font-semibold px-6 py-3 rounded transition-colors"
                  >
                    View All Services
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
