import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub, FaRocket, FaTrophy } from "react-icons/fa";

interface ProjectLink {
  type: "website" | "github" | "demo" | "blog" | "devpost" | "other";
  label: string;
  url: string;
}

interface ProjectCardProps {
  title: string;
  tagline?: string;
  description: string;
  techStack?: string[];
  outcomes?: string;
  impact?: string;
  imageSrc?: string;
  imageAlt?: string;
  links?: ProjectLink[];
  featured?: boolean;
  category?: string;
  isWinner?: boolean;
}

export default function ProjectCard({
  title,
  tagline,
  description,
  techStack,
  outcomes,
  impact,
  imageSrc,
  imageAlt,
  links,
  featured,
  category,
  isWinner,
}: ProjectCardProps) {
  const getLinkIcon = (type: string) => {
    switch (type) {
      case "github":
        return <FaGithub />;
      case "website":
        return <FaExternalLinkAlt />;
      case "demo":
        return <FaRocket />;
      case "devpost":
        return <FaExternalLinkAlt />;
      default:
        return <FaExternalLinkAlt />;
    }
  };

  return (
    <article
      className={`p-4 sm:p-5 md:p-6 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all flex flex-col h-full ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="flex items-center gap-2 mb-3 sm:mb-4 flex-wrap">
        {isWinner && (
          <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 text-xs font-semibold text-yellow-700 bg-yellow-100 rounded-full">
            <FaTrophy className="text-xs" />
            Winner
          </span>
        )}
        {category && (
          <span className="inline-block px-2.5 sm:px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
            {category}
          </span>
        )}
      </div>
      
      {imageSrc && (
        <div className="relative w-full h-40 sm:h-48 rounded-lg overflow-hidden mb-3 sm:mb-4 bg-gradient-to-br from-primary/20 to-secondary/20">
          {imageSrc !== "/images/placeholder.jpg" ? (
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 400px"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <FaRocket className="text-3xl sm:text-4xl" />
            </div>
          )}
        </div>
      )}
      
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
        {title}
      </h3>
      
      {tagline && (
        <p className="text-base sm:text-lg text-primary font-semibold mb-2 sm:mb-3">
          {tagline}
        </p>
      )}
      
      <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 flex-grow text-justify">
        {description}
      </p>
      
      {techStack && techStack.length > 0 && !featured && (
        <div className="mb-3 sm:mb-4">
          <p className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">Tech Stack:</p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-0.5 sm:py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {outcomes && (
        <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
          <p className="text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">Key Outcomes:</p>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">{outcomes}</p>
        </div>
      )}
      
      {impact && (
        <div className="bg-primary/5 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
          <p className="text-xs sm:text-sm font-semibold text-primary mb-1.5 sm:mb-2">Impact:</p>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">{impact}</p>
        </div>
      )}
      
      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-2 sm:gap-3 pt-3 sm:pt-4 mt-auto border-t border-gray-200">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-primary hover:text-primary-dark font-medium"
            >
              {getLinkIcon(link.type)}
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

