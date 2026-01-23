export const Header = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white text-sm">
          {/* Phone Numbers */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="tel:512-801-9754"
              className="flex items-center gap-2 hover:text-yellow-100 transition-colors font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              512-801-9754
            </a>
          </div>

          {/* Email and Book */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <a
              href="mailto:watsonpi2003@yahoo.com"
              className="flex items-center gap-2 hover:text-yellow-100 transition-colors font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="hidden md:inline">watsonpi2003@yahoo.com</span>
              <span className="md:hidden">Email</span>
            </a>
            <a
              href="https://www.amazon.com/Cheating-Secrets-Through-Private-Investigator/dp/1667891847"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-yellow-600 hover:bg-yellow-100 px-3 py-1.5 rounded-full font-semibold transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              Buy My Book
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
