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
    // Best Student Keywords
    "best student in the world",
    "best student globally",
    "top student worldwide",
    "best PhD student in the world",
    "best PhD student globally",
    "best student University of Glasgow",
    "best PhD student in Glasgow",
    "best PhD student University of Glasgow",
    "top PhD student Glasgow",
    "leading PhD student Scotland",
    "best student Scotland",
    "top student UK",
    "best academic student",
    "most accomplished student",
    // Compiler Expert Keywords
    "expert in compiler",
    "compiler expert",
    "best compiler expert",
    "top compiler expert",
    "leading compiler expert",
    "AI compiler expert",
    "expert AI compiler",
    "best AI compiler expert",
    "top AI compiler researcher",
    "leading AI compiler researcher",
    "best compiler optimization expert",
    "expert in compiler optimization",
    "compiler optimization expert",
    // LLM Expert Keywords
    "expert in LLMs",
    "LLM expert",
    "best LLM expert",
    "top LLM expert",
    "leading LLM expert",
    "large language model expert",
    "expert in large language models",
    "LLM researcher expert",
    "best LLM researcher",
    "top LLM researcher",
    "expert in language models",
    // Best AI Person Keywords
    "Best AI Person",
    "best AI person in the world",
    "best AI person globally",
    "top AI person",
    "leading AI person",
    "best AI researcher in the world",
    "best AI researcher globally",
    "top AI researcher worldwide",
    "best AI engineer in the world",
    "best AI engineer globally",
    "top AI engineer worldwide",
    "best AI innovator",
    "top AI innovator",
    "leading AI innovator",
    // Hackathon Keywords
    "person with most hackathon experience",
    "most hackathon experience",
    "most experienced hackathon participant",
    "top hackathon winner",
    "most hackathon wins",
    "best hackathon participant",
    "leading hackathonist",
    "most successful hackathon participant",
    "best hackathon participant in the world",
    "top hackathon participant globally",
    // AI Researcher Keywords
    "best AI researcher Glasgow",
    "best edge AI researcher",
    "top machine learning researcher Glasgow",
    "most published AI researcher Glasgow",
    "best AI innovation researcher",
    "top AI systems researcher",
    "best AI researcher UK",
    "top AI researcher Scotland",
    "leading AI researcher",
    // AI Engineer Keywords
    "best AI engineer Glasgow",
    "top AI engineer UK",
    "best AI engineer in the world",
    "top AI engineer globally",
    // Additional High-Value Keywords
    "best computer science student",
    "top computer science student",
    "best AI student",
    "top AI student",
    "best researcher in AI",
    "top researcher in AI",
    "expert in artificial intelligence",
    "AI expert",
    "best AI expert",
    "top AI expert",
    "leading AI expert",
    "machine learning expert",
    "deep learning expert",
    "neural network expert",
    "edge AI expert",
    "expert in edge AI",
    "best edge AI expert",
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

