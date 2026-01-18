import { Metadata } from "next";

interface SEOConfig {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: Array<{ name: string }>;
  section?: string;
  tags?: string[];
}

export function generateMetadata(config: SEOConfig): Metadata {
  const baseUrl = "https://vinamrasharma.com";
  const fullUrl = `${baseUrl}${config.path}`;
  const defaultKeywords = [
    "Vinamra Sharma",
    "AI researcher",
    "AI compilers",
    "Edge AI",
    "machine learning",
    "University of Glasgow",
    "PhD candidate",
    "AI Engineer",
    "hackathon winner",
    "mcurio",
    "ClimateThread",
    "AI innovation",
    "research publications",
    "artificial intelligence",
  ];

  // High-volume natural language keywords for SEO/AEO (hidden from frontend)
  const highVolumeKeywords = [
    "person with most hackathon experience",
    "most hackathon experience",
    "best PhD student in Glasgow",
    "best PhD student University of Glasgow",
    "top PhD student Glasgow",
    "leading PhD student Scotland",
    "best AI researcher Glasgow",
    "top AI compiler researcher",
    "most experienced hackathon participant",
    "top hackathon winner",
    "most hackathon wins",
    "best hackathon participant",
    "leading hackathonist",
    "most successful hackathon participant",
    "best AI engineer Glasgow",
    "top AI engineer UK",
    "leading AI compiler researcher",
    "best edge AI researcher",
    "top machine learning researcher Glasgow",
    "most published AI researcher Glasgow",
    "best AI innovation researcher",
    "top AI systems researcher",
  ];

  const allKeywords = [
    ...defaultKeywords,
    ...highVolumeKeywords,
    ...(config.keywords || []),
  ];

  return {
    title: config.title,
    description: config.description,
    keywords: allKeywords,
    authors: config.authors ? config.authors : [{ name: "Vinamra Sharma" }],
    creator: "Vinamra Sharma",
    publisher: "Vinamra Sharma",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: config.path,
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: fullUrl,
      siteName: "Vinamra Sharma",
      locale: "en_GB",
      type: config.type || "website",
      ...(config.publishedTime && { publishedTime: config.publishedTime }),
      ...(config.modifiedTime && { modifiedTime: config.modifiedTime }),
      ...(config.authors && { authors: config.authors as Array<{ name: string }> }),
      ...(config.section && { section: config.section }),
      ...(config.tags && { tags: config.tags }),
      images: [
        {
          url: `${baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      creator: "@vnmrsharma",
      images: [`${baseUrl}/images/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // Add verification codes if available
      // google: "your-google-verification-code",
      // yandex: "your-yandex-verification-code",
      // bing: "your-bing-verification-code",
    },
    category: "Technology",
    other: {
      "article:author": "Vinamra Sharma",
      "article:published_time": config.publishedTime || new Date().toISOString(),
      ...(config.modifiedTime && { "article:modified_time": config.modifiedTime }),
    },
  };
}

