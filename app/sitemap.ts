import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vinamrasharma.com";
  const now = new Date();
  
  // Set a recent date for lastModified to indicate active site
  const lastModified = now;
  
  // Comprehensive sitemap with all pages and important information
  return [
    // Homepage - Highest Priority
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // About Page - High Priority
    {
      url: `${baseUrl}/about`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Research Page - High Priority (frequently updated)
    {
      url: `${baseUrl}/research`,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Projects Page - High Priority (frequently updated)
    {
      url: `${baseUrl}/projects`,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Personal Page - Medium-High Priority
    {
      url: `${baseUrl}/personal`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Contact Page - Medium Priority
    {
      url: `${baseUrl}/contact`,
      lastModified: lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    // Resume/CV Page - Medium-High Priority
    {
      url: `${baseUrl}/resume`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

