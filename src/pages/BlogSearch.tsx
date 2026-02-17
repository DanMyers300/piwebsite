import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import LA from "../assets/LA.webp";
import { PageHero } from "../components/PageHero";
import { blogPosts, allTags } from "../data/blogData";
import { SEO } from "../components/SEO";

export const BlogSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Initialize from URL params
  useEffect(() => {
    const tagParam = searchParams.get("tag");
    if (tagParam && allTags.includes(tagParam)) {
      setSelectedTags([tagParam]);
    }
  }, [searchParams]);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      // Filter by tags if any are selected
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => post.tags.includes(tag));

      // Filter by search query
      const query = searchQuery.toLowerCase();
      const matchesQuery =
        query === "" ||
        post.title.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesTags && matchesQuery;
    });
  }, [searchQuery, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      const newTags = prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag];
      // Update URL params
      if (newTags.length === 0) {
        setSearchParams({});
      }
      return newTags;
    });
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
    setSearchParams({});
  };

  return (
    <div>
      <SEO
        title="Search Blog | Watson PI Services"
        description="Search articles on private investigation, infidelity, hiring a PI, and more from Watson Private Investigation Services."
        path="/blog/search"
      />
      <PageHero image={LA} title="SEARCH BLOG" imageAlt="Los Angeles" />

      {/* Content */}
      <div className="p-6 sm:p-8 md:p-12 lg:p-16">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <Link
            to="/blog"
            className="inline-flex items-center text-yellow-500 hover:text-yellow-600 font-semibold mb-6 transition-colors"
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Blog
          </Link>

          {/* Search Box */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Search Articles</h2>

            {/* Keyword Search */}
            <div className="mb-6">
              <label htmlFor="blog-search" className="block text-sm font-medium text-gray-700 mb-2">
                Search by Keywords
              </label>
              <div className="relative">
                <input
                  id="blog-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter keywords..."
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                />
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Tag Filter */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Tags
              </label>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                      selectedTags.includes(tag)
                        ? "bg-yellow-500 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {(searchQuery || selectedTags.length > 0) && (
              <button
                onClick={clearFilters}
                className="text-yellow-500 hover:text-yellow-600 font-semibold text-sm transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Results */}
          <div className="mb-4">
            <p className="text-gray-600">
              {filteredPosts.length} {filteredPosts.length === 1 ? "result" : "results"} found
            </p>
          </div>

          {/* Blog Posts */}
          <div className="space-y-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
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
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {post.tags.map((tag, tagIndex) => (
                          <button
                            key={tagIndex}
                            onClick={() => toggleTag(tag)}
                            className={`text-xs px-2 py-0.5 rounded-full transition-colors ${
                              selectedTags.includes(tag)
                                ? "bg-yellow-500 text-white"
                                : "bg-gray-100 text-gray-500 hover:bg-yellow-500 hover:text-gray-900"
                            }`}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                      <Link
                        to={post.slug}
                        aria-label={`Read more about ${post.title}`}
                        className="text-yellow-500 hover:text-yellow-600 font-semibold text-sm transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-gray-300 mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-gray-500 text-lg">No articles found matching your search.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-yellow-500 hover:text-yellow-600 font-semibold transition-colors"
                >
                  Clear filters and try again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
