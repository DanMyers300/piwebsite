interface PageHeroProps {
  image: string;
  title: string;
  imageAlt?: string;
}

export const PageHero = ({ image, title, imageAlt = "Hero image" }: PageHeroProps) => {
  return (
    <div className="relative h-40 sm:h-48 md:h-56 lg:h-[280px] overflow-hidden">
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-full object-cover object-top"
        style={{
          animation: "pulseZoom 8s ease-in-out infinite",
        }}
      />
      <style>{`
        @keyframes pulseZoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          {title}
        </h1>
      </div>
    </div>
  );
};
