export const Footer = () => {
  return (
    <footer className="w-full">
      <div className="bg-[#313842] text-gray-300 px-6 py-12 sm:px-12 sm:py-16 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About</h3>
            <h4 className="text-yellow-500 font-medium mb-2">David Watson – Investigator</h4>
            <p className="text-sm text-gray-400 mb-3">
              <span className="text-gray-300">Specialties:</span> Criminal, Insurance Fraud, Missing Persons (criminal and civil)
            </p>
            <p className="text-sm leading-relaxed">
              Dave is a traditional and highly experienced investigator. With over 19 years at LAPD and then 23 years as a Texas PI, he has handled thousands of successful cases. At LAPD he worked patrol, VICE, Internal Affairs and at the elite Metro Division. Promoted quickly to Sergeant he also served as a Watch Commander, VICE Supervisor, assistant to a Captain, an assistant to a Commander. Dave finished his time with the LAPD in the Criminal Intelligence Group.
            </p>
          </div>

          {/* Company Info Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Watson Private Investigation</h3>
            <p className="text-yellow-500 text-sm mb-4">License A11319</p>
            <address className="not-italic text-sm leading-relaxed">
              PO Box 2338<br />
              Cedar Park, TX 78630-2338
            </address>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <p>
                <a href="tel:512-801-9754" aria-label="Call 512-801-9754" className="hover:text-yellow-500 transition-colors">512-801-9754</a>
              </p>
              <p>
                <a href="mailto:watsonpi2003@yahoo.com" className="hover:text-yellow-500 transition-colors">watsonpi2003@yahoo.com</a>
              </p>
              <p className="pt-2">
                <a
                  href="https://www.amazon.com/Cheating-Secrets-Through-Private-Investigator/dp/1667891847"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors"
                >
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                  Buy My New Book
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Notices */}
        <div className="max-w-6xl mx-auto mt-10 pt-6 pb-10 sm:pb-0 border-t border-gray-600 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <span>Licensed by Texas Commission on Private Security</span>
          <span>We accept all major credit cards</span>
        </div>
      </div>

      {/* Back to Top Arrow */}
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-yellow-500 hover:bg-yellow-400 transition-colors w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
            aria-label="Back to top"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="bg-black pt-10 pb-4 px-4 sm:p-6 md:p-8 text-center text-gray-400 text-sm">
        Copyright 2026 © Watson Private Investigation. All rights reserved.
      </div>
    </footer>
  );
};
