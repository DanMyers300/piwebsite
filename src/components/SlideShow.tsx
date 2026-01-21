import { useState, useEffect } from "react";
import corporate from "../assets/corporate.jpg";
import gun from "../assets/gun.jpg";
import baby from "../assets/baby.jpg";

const images = [corporate, gun, baby];

export const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[500px]">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
