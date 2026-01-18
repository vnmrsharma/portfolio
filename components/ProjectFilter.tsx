"use client";

import { useState } from "react";
import { FaFilter, FaTimes, FaChevronDown, FaSearch } from "react-icons/fa";

interface ProjectFilterProps {
  sectors: string[];
  techStacks: string[];
  selectedSector: string | null;
  selectedTechStack: string | null;
  searchQuery: string;
  onSectorChange: (sector: string | null) => void;
  onTechStackChange: (techStack: string | null) => void;
  onSearchChange: (query: string) => void;
}

export default function ProjectFilter({
  sectors,
  techStacks,
  selectedSector,
  selectedTechStack,
  searchQuery,
  onSectorChange,
  onTechStackChange,
  onSearchChange,
}: ProjectFilterProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [sectorSearch, setSectorSearch] = useState("");
  const [techSearch, setTechSearch] = useState("");

  const filteredSectors = sectors.filter(sector =>
    sector.toLowerCase().includes(sectorSearch.toLowerCase())
  );

  const filteredTechStacks = techStacks.filter(tech =>
    tech.toLowerCase().includes(techSearch.toLowerCase())
  );

  const hasActiveFilters = selectedSector !== null || selectedTechStack !== null;

  return (
    <div className="mb-6 sm:mb-8">
      {/* Compact Filter Bar */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-3 sm:p-4">
        <div className="flex flex-col gap-3 sm:gap-4">
          {/* Top Row: Search Bar, Filter Button, and Results Count */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            {/* Search Bar & Filter Button */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap flex-1">
              {/* Search Bar */}
              <div className="relative flex-1 min-w-[200px] sm:min-w-[250px] max-w-full">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Filter Toggle Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg font-medium text-xs sm:text-sm text-gray-700 transition-colors flex-shrink-0"
              >
                <FaFilter className="text-xs" />
                <span className="hidden sm:inline">Filters</span>
                {hasActiveFilters && (
                  <span className="ml-1 px-2 py-0.5 bg-primary text-white text-xs rounded-full">
                    {(selectedSector ? 1 : 0) + (selectedTechStack ? 1 : 0)}
                  </span>
                )}
                <FaChevronDown className={`text-xs transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Results Count & Search Indicator */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* Search Query Indicator */}
              {searchQuery.trim() && (
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm text-gray-600">
                    Searching: <span className="font-semibold text-gray-900">"{searchQuery}"</span>
                  </span>
                  <button
                    onClick={() => onSearchChange("")}
                    className="text-xs text-gray-600 hover:text-primary font-medium underline"
                    aria-label="Clear search"
                  >
                    Clear
                  </button>
                </div>
              )}
              
              {/* Results Count */}
              <div className="text-xs sm:text-sm text-gray-600 hidden sm:block">
                Showing <span className="font-semibold text-gray-900">{sectors.length}</span> sectors,{" "}
                <span className="font-semibold text-gray-900">{techStacks.length}</span> technologies
              </div>
            </div>
          </div>

          {/* Active Filter Pills */}
          {hasActiveFilters && (
            <div className="flex items-center gap-2 flex-wrap">
              {selectedSector && (
                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium">
                  <span className="max-w-[120px] sm:max-w-none truncate">{selectedSector}</span>
                  <button
                    onClick={() => onSectorChange(null)}
                    className="hover:bg-primary/20 rounded-full p-0.5 transition-colors flex-shrink-0"
                    aria-label={`Remove ${selectedSector} filter`}
                  >
                    <FaTimes className="text-xs" />
                  </button>
                </span>
              )}
              {selectedTechStack && (
                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-secondary/10 text-secondary rounded-full text-xs sm:text-sm font-medium">
                  <span className="max-w-[120px] sm:max-w-none truncate">{selectedTechStack}</span>
                  <button
                    onClick={() => onTechStackChange(null)}
                    className="hover:bg-secondary/20 rounded-full p-0.5 transition-colors flex-shrink-0"
                    aria-label={`Remove ${selectedTechStack} filter`}
                  >
                    <FaTimes className="text-xs" />
                  </button>
                </span>
              )}
              <button
                onClick={() => {
                  onSectorChange(null);
                  onTechStackChange(null);
                  onSearchChange("");
                }}
                className="text-xs sm:text-sm text-gray-600 hover:text-primary font-medium underline"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Expandable Filter Panels */}
        {isExpanded && (
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 space-y-4 sm:space-y-6 animate-fade-in">
            {/* Sector Filter */}
            <div>
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <label className="text-xs sm:text-sm font-semibold text-gray-900">Filter by Sector</label>
                {selectedSector && (
                  <button
                    onClick={() => onSectorChange(null)}
                    className="text-xs text-primary hover:text-primary-dark font-medium"
                  >
                    Clear
                  </button>
                )}
              </div>
              <div className="mb-2 sm:mb-3">
                <input
                  type="text"
                  placeholder="Search sectors..."
                  value={sectorSearch}
                  onChange={(e) => setSectorSearch(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="flex flex-wrap gap-2 max-h-40 sm:max-h-48 overflow-y-auto p-1">
                <button
                  onClick={() => onSectorChange(null)}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg font-medium text-xs sm:text-sm transition-all ${
                    selectedSector === null
                      ? "bg-primary text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  All Sectors
                </button>
                {filteredSectors.map((sector) => (
                  <button
                    key={sector}
                    onClick={() => onSectorChange(sector)}
                    className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg font-medium text-xs sm:text-sm transition-all ${
                      selectedSector === sector
                        ? "bg-primary text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {sector}
                  </button>
                ))}
              </div>
            </div>

            {/* Tech Stack Filter */}
            <div>
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <label className="text-xs sm:text-sm font-semibold text-gray-900">Filter by Tech Stack</label>
                {selectedTechStack && (
                  <button
                    onClick={() => onTechStackChange(null)}
                    className="text-xs text-secondary hover:text-secondary-dark font-medium"
                  >
                    Clear
                  </button>
                )}
              </div>
              <div className="mb-2 sm:mb-3">
                <input
                  type="text"
                  placeholder="Search technologies..."
                  value={techSearch}
                  onChange={(e) => setTechSearch(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>
              <div className="flex flex-wrap gap-2 max-h-40 sm:max-h-48 overflow-y-auto p-1">
                <button
                  onClick={() => onTechStackChange(null)}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg font-medium text-xs sm:text-sm transition-all ${
                    selectedTechStack === null
                      ? "bg-secondary text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  All Technologies
                </button>
                {filteredTechStacks.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => onTechStackChange(tech)}
                    className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg font-medium text-xs sm:text-sm transition-all ${
                      selectedTechStack === tech
                        ? "bg-secondary text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

