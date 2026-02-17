import { Link } from "react-router-dom";
import LA from "../assets/LA.webp";
import { PageHero } from "../components/PageHero";
import { blogPosts } from "../data/blogData";
import { SEO } from "../components/SEO";

export const Blog = () => {
  return (
    <div>
      <SEO
        title="Blog | Watson PI Services"
        description="Expert articles on private investigation, infidelity signs, hiring a PI, and more from Watson Private Investigation Services."
        path="/blog"
      />
      <PageHero image={LA} title="BLOG" imageAlt="Los Angeles" />

      {/* Content */}
      <div className="p-6 sm:p-8 md:p-12 lg:p-16">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Search Button - shown above articles on mobile */}
          <Link
            to="/blog/search"
            className="flex md:hidden items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg group mb-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:scale-110 transition-transform"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            Search Articles
          </Link>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Column - Blog Posts */}
          <div className="md:w-2/3">
            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="flex">
                    {/* Date Badge */}
                    <div className="bg-yellow-500 text-white text-center px-4 py-4 flex flex-col justify-center min-w-[70px]">
                      <span className="text-sm font-medium uppercase">{post.month}</span>
                      <span className="text-3xl font-bold">{post.day}</span>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1">
                      <Link to={post.slug}>
                        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 hover:text-yellow-600 cursor-pointer transition-colors">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
                        {post.excerpt}
                      </p>
                      <Link to={post.slug} className="text-yellow-500 hover:text-yellow-600 font-semibold text-sm transition-colors">
                        Read More →
                      </Link>
                      <p className="text-gray-400 text-xs mt-3">
                        Posted on Watson PI Blog on {post.date}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="md:w-1/3 space-y-6">
            {/* Search Button - hidden on mobile, shown in sidebar on md+ */}
            <Link
              to="/blog/search"
              className="hidden md:flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:scale-110 transition-transform"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              Search Articles
            </Link>

            {/* Article List */}
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-yellow-500">
                Private Investigation
              </h3>
              <ul className="space-y-3">
                {blogPosts.map((post, index) => (
                  <li key={index}>
                    <Link
                      to={post.slug}
                      className="text-gray-600 hover:text-yellow-500 transition-colors text-sm sm:text-base flex items-start gap-2"
                    >
                      <span className="text-yellow-500 mt-1">›</span>
                      <span>{post.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
