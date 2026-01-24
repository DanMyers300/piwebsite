import { Link } from "react-router-dom";
import LA from "../assets/LA.webp";
import { PageHero } from "../components/PageHero";

export const NotFound = () => {
  return (
    <div>
      <PageHero image={LA} title="PAGE NOT FOUND" imageAlt="Los Angeles" />

      <div className="p-6 sm:p-8 md:p-12 lg:p-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-6xl sm:text-8xl font-bold text-gray-800 mb-4">
            404
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6"></div>

          <p className="text-gray-600 text-lg mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>

          <Link
            to="/"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};
