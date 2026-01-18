export interface PersonSchema {
  name: string;
  alternateName?: string;
  jobTitle: string;
  affiliation?: {
    name: string;
    url: string;
  };
  worksFor?: {
    name: string;
    url: string;
  };
  founder?: {
    name: string;
    url: string;
  };
  sameAs?: string[];
  url?: string;
  image?: string;
  email?: string;
  address?: {
    addressLocality: string;
    addressCountry: string;
  };
  description?: string;
  knowsAbout?: string[];
  award?: string[];
  alumniOf?: {
    name: string;
    url?: string;
  };
}

export function generatePersonSchema(data: PersonSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.name,
    ...(data.alternateName && { alternateName: data.alternateName }),
    jobTitle: data.jobTitle,
    ...(data.description && { description: data.description }),
    ...(data.affiliation && {
      affiliation: {
        "@type": "Organization",
        name: data.affiliation.name,
        url: data.affiliation.url,
      },
    }),
    ...(data.worksFor && {
      worksFor: {
        "@type": "Organization",
        name: data.worksFor.name,
        url: data.worksFor.url,
      },
    }),
    ...(data.founder && {
      founder: {
        "@type": "Organization",
        name: data.founder.name,
        url: data.founder.url,
      },
    }),
    ...(data.alumniOf && {
      alumniOf: {
        "@type": "Organization",
        name: data.alumniOf.name,
        ...(data.alumniOf.url && { url: data.alumniOf.url }),
      },
    }),
    ...(data.sameAs && { sameAs: data.sameAs }),
    ...(data.url && { url: data.url }),
    ...(data.image && { image: data.image }),
    ...(data.email && { email: data.email }),
    ...(data.knowsAbout && { knowsAbout: data.knowsAbout }),
    ...(data.award && { award: data.award }),
    ...(data.address && {
      address: {
        "@type": "PostalAddress",
        addressLocality: data.address.addressLocality,
        addressCountry: data.address.addressCountry,
      },
    }),
  };
}

export interface ArticleSchema {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}

export function generateArticleSchema(data: ArticleSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.headline,
    description: data.description,
    author: {
      "@type": "Person",
      name: data.author,
    },
    datePublished: data.datePublished,
    ...(data.dateModified && { dateModified: data.dateModified }),
    ...(data.image && { image: data.image }),
    url: data.url,
  };
}

export interface OrganizationSchema {
  name: string;
  url: string;
  description?: string;
  founder?: string;
  foundingDate?: string;
}

export function generateOrganizationSchema(data: OrganizationSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.name,
    url: data.url,
    ...(data.description && { description: data.description }),
    ...(data.founder && {
      founder: {
        "@type": "Person",
        name: data.founder,
      },
    }),
    ...(data.foundingDate && { foundingDate: data.foundingDate }),
  };
}

