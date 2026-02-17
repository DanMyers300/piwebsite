import { Helmet } from "react-helmet-async";

const SITE_NAME = "Watson PI Services";
const SITE_URL = "https://watsonpiinvestigation.com";
const DEFAULT_IMAGE = `${SITE_URL}/logo.webp`;

interface SEOProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  article?: {
    publishedTime: string;
    tags: string[];
  };
}

export const SEO = ({
  title,
  description,
  path,
  type = "website",
  article,
}: SEOProps) => {
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />

      {/* Article-specific */}
      {article && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article?.tags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
    </Helmet>
  );
};
