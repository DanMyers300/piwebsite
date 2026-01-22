export const CustomerTestimonial = () => {
  return (
    <div className="bg-white p-6 sm:p-8 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Customers Say
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mb-8"></div>
      </div>
      <div className="max-w-5xl mx-auto relative">
        {/* Quote icon */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gray-600 w-10 h-10 rounded flex items-center justify-center shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        {/* Testimonial box */}
        <div className="bg-yellow-500 px-6 py-6 sm:px-8 sm:py-7 md:px-10 md:py-8 pt-8 rounded-lg shadow-lg">
          <p className="text-black text-sm sm:text-base md:text-lg leading-normal italic text-center">
            If it weren't for that one call to Watson Private Investigation Services, my relationship with my children would have been overseas. Today, I am looking over the beaches once again with my two boys, in fact, we are going surfing today.
          </p>
        </div>
      </div>
    </div>
  );
};
