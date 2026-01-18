import Link from "next/link";
import { FaFilePdf, FaCode, FaExternalLinkAlt } from "react-icons/fa";

interface PublicationLink {
  type: "pdf" | "arxiv" | "code" | "blog" | "other";
  label: string;
  url: string;
}

interface PublicationCardProps {
  title: string;
  authors: string;
  venue: string;
  year: string;
  summary: string;
  takeaway?: string;
  links?: PublicationLink[];
  award?: string;
}

export default function PublicationCard({
  title,
  authors,
  venue,
  year,
  summary,
  takeaway,
  links,
  award,
}: PublicationCardProps) {
  const getLinkIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FaFilePdf />;
      case "code":
        return <FaCode />;
      default:
        return <FaExternalLinkAlt />;
    }
  };

  return (
    <article className="p-6 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          {award && (
            <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-2">
              {award}
            </span>
          )}
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            {authors}
          </p>
          <p className="text-sm font-medium text-primary">
            {venue} • {year}
          </p>
        </div>
      </div>
      
      <p className="text-gray-700 mb-3">
        {summary}
      </p>
      
      {takeaway && (
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <p className="text-sm font-semibold text-gray-900 mb-1">Key Takeaway:</p>
          <p className="text-sm text-gray-700">{takeaway}</p>
        </div>
      )}
      
      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dark font-medium"
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

