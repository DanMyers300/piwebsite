export const CallToAction = () => {
  return (
    <div className="bg-[#313842] p-8 flex justify-between items-center">
      <div className="ml-[15%]">
        <p className="text-yellow-400 font-bold text-2xl">
          LOOKING FOR A PRIVATE INVESTIGATOR?
        </p>
        <p className="text-white font-bold text-xl mt-2">
          WASTE NO MORE TIME! CALL NOW!
        </p>
        <p className="text-gray-300 mt-2">
          We make it easy, affordable, and comfortable. Our services are discreet and confidential.
        </p>
      </div>
      <div className="mr-[10%]">
        <a
          href="tel:4698479401"
          className="bg-yellow-400 text-black font-bold text-xl px-6 py-4 rounded block hover:bg-yellow-500"
        >
          (469) 847-9401
        </a>
      </div>
    </div>
  );
};
