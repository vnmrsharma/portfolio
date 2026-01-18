import { ReactNode } from "react";

interface ResearchThemeCardProps {
  title: string;
  description: string;
  impact?: string;
  icon?: ReactNode;
}

export default function ResearchThemeCard({
  title,
  description,
  impact,
  icon,
}: ResearchThemeCardProps) {
  return (
    <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
      {/* Icon and Title - Side by Side */}
      <div className="flex items-center gap-4 mb-4">
        {icon && (
          <div className="text-primary text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-bold text-gray-900 leading-tight">
          {title}
        </h3>
      </div>
      
      {/* Description */}
      <p className="text-gray-700 mb-4 leading-relaxed flex-grow">
        {description}
      </p>
      
      {/* Impact Section */}
      {impact && (
        <div className="pt-4 mt-auto border-t border-gray-200">
          <p className="text-sm font-semibold text-primary mb-2">Impact:</p>
          <p className="text-sm text-gray-700 leading-relaxed">{impact}</p>
        </div>
      )}
    </div>
  );
}

