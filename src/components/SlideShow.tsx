import { useState, useEffect } from "react";
import justice from "../assets/justice.webp";
import civil from "../assets/civil.webp";
import debugging from "../assets/debugging.webp";
import insurance from "../assets/insurance.webp";
import divorce from "../assets/divorce.webp";
import investigator from "../assets/investigator.webp";

const slides = [
  { image: investigator, alt: "Private investigator conducting surveillance" },
  { image: justice, alt: "Scales of justice representing legal investigations" },
  { image: civil, alt: "Civil investigation case documentation" },
  { image: debugging, alt: "Electronic debugging and counter-surveillance equipment" },
  { image: insurance, alt: "Insurance fraud investigation" },
  { image: divorce, alt: "Divorce and infidelity investigation services" },
];

export const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] relative overflow-hidden">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt={slide.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 drop-shadow-lg">
          Free Consultation with Our Lead Private Investigator!
        </h2>
        <a
          href="tel:512-801-9754"
          className="text-yellow-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 hover:text-yellow-300 transition-colors drop-shadow-lg"
        >
          Call 512-801-9754 NOW!
        </a>
        <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed drop-shadow-md">
          We're an Austin Texas private investigation agency,
          <br className="hidden sm:block" />
          offering surveillance, background, infidelity,
          <br className="hidden sm:block" />
          and corporate investigations, as well as executive protection services.
        </p>
      </div>
    </div>
  );
};
