'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  tagline: string;
  description: string;
  category?: string;
  links?: Array<{ type: string; label: string; url: string }>;
}

interface ProjectCarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
        setIsTransitioning(false);
      }, 150);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
      setIsTransitioning(false);
    }, 150);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
      setIsTransitioning(false);
    }, 150);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 150);
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
        {/* Project Content */}
        <div className={`p-8 lg:p-10 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex items-center gap-3 mb-5">
            {currentProject.category && (
              <span className="px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
                {currentProject.category}
              </span>
            )}
          </div>
          
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight">
            {currentProject.title}
          </h3>
          
          {currentProject.tagline && (
            <p className="text-lg text-primary font-semibold mb-5">
              {currentProject.tagline}
            </p>
          )}
          
          <p className="text-gray-700 leading-relaxed mb-7 text-base">
            {currentProject.description}
          </p>

          {currentProject.links && currentProject.links.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-6">
              {currentProject.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 hover:bg-white rounded-full shadow-xl flex items-center justify-center text-gray-700 hover:text-primary transition-all z-10 backdrop-blur-sm border border-gray-100"
          aria-label="Previous project"
        >
          <FaChevronLeft className="text-sm" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 hover:bg-white rounded-full shadow-xl flex items-center justify-center text-gray-700 hover:text-primary transition-all z-10 backdrop-blur-sm border border-gray-100"
          aria-label="Next project"
        >
          <FaChevronRight className="text-sm" />
        </button>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2.5 p-5 bg-gradient-to-t from-gray-50 to-white border-t border-gray-100">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary w-8 shadow-md'
                  : 'bg-gray-300 hover:bg-gray-400 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* View All Projects Button */}
      <div className="mt-8 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <span>View All Projects</span>
          <FaExternalLinkAlt className="text-sm" />
        </Link>
      </div>
    </div>
  );
}

