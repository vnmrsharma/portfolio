'use client';

import { FaGraduationCap, FaAward } from 'react-icons/fa';

interface JourneyItem {
  year: string;
  title: string;
  description: string;
  institution?: string;
  achievement?: string;
  location: 'india' | 'uk';
}

interface AcademicJourneyProps {
  items: JourneyItem[];
}

export default function AcademicJourney({ items }: AcademicJourneyProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {items.map((item, index) => {
        const isIndia = item.location === 'india';

        return (
          <div
            key={index}
            className="relative p-5 bg-white rounded-lg border-2 border-gray-200 hover:border-primary/50 transition-all duration-300 hover:shadow-md flex flex-col"
          >
            {/* Header with Icon and Location */}
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  isIndia
                    ? 'bg-green-100 text-green-600'
                    : 'bg-blue-100 text-blue-600'
                }`}
              >
                <FaGraduationCap className="text-xl" />
              </div>
              <span
                className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  isIndia
                    ? 'bg-green-100 text-green-700'
                    : 'bg-blue-100 text-blue-700'
                }`}
              >
                {isIndia ? '🇮🇳' : '🇬🇧'}
              </span>
            </div>

            {/* Year */}
            <div className="text-sm font-semibold text-primary mb-2">
              {item.year}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
              {item.title}
            </h3>

            {/* Institution */}
            {item.institution && (
              <p className="text-sm text-gray-600 font-medium mb-3 leading-tight">
                {item.institution}
              </p>
            )}

            {/* Description */}
            <p className="text-sm text-gray-700 mb-3 leading-relaxed flex-grow">
              {item.description}
            </p>

            {/* Achievement */}
            {item.achievement && (
              <div className="flex items-center gap-2 mt-auto pt-3 border-t border-gray-100">
                <FaAward className="text-primary text-sm" />
                <span className="text-xs font-semibold text-primary">
                  {item.achievement}
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
