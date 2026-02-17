export const CallToAction = () => {
  return (
    <div className="bg-[#313842] p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
      <div className="text-center md:text-left md:ml-[15%]">
        <p className="text-yellow-500 font-bold text-xl sm:text-2xl">
          LOOKING FOR A PRIVATE INVESTIGATOR?
        </p>
        <p className="text-white font-bold text-lg sm:text-xl mt-2">
          WASTE NO MORE TIME! CALL NOW!
        </p>
        <p className="text-gray-300 mt-2 text-sm sm:text-base">
          We make it easy, affordable, and comfortable. Our services are discreet and confidential.
        </p>
      </div>
      <div className="flex-shrink-0 md:mr-[10%]">
        <a
          href="tel:5128019754"
          aria-label="Call 512-801-9754"
          className="bg-yellow-500 text-black font-bold text-lg sm:text-xl px-6 py-3 sm:py-4 rounded block hover:bg-yellow-600 transition-colors text-center whitespace-nowrap"
        >
          (512) 801-9754
        </a>
      </div>
    </div>
  );
};
