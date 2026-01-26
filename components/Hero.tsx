"use client";

import Image from "next/image";
import Link from "next/link";
import PixelTransition from "./PixelTransition";
import { 
  FaLinkedin, 
  FaGithub, 
  FaTwitter, 
  FaGraduationCap,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap as FaEducation,
  FaLeaf,
} from "react-icons/fa";

interface Belief {
  icon: React.ReactNode;
  text: string;
  projectName: string;
  projectUrl: string;
}

interface HeroProps {
  name: string;
  tagline: string;
  location: React.ReactNode;
  description: React.ReactNode;
  extendedBio: React.ReactNode;
  researchInterests: string;
  beliefs?: Belief[];
  email: string;
  imageSrc: string;
  imageAlt: string;
  socialLinks: Array<{ name: string; url: string; icon: React.ReactNode }>;
  ctas: Array<{ text: string; href: string; primary?: boolean; download?: boolean }>;
}

export default function Hero({
  name,
  tagline,
  location,
  description,
  extendedBio,
  researchInterests,
  beliefs,
  email,
  imageSrc,
  imageAlt,
  socialLinks,
  ctas,
}: HeroProps) {
  return (
    <section 
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24"
      aria-labelledby="hero-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Image with Pixel Transition and Social Icons - First on mobile, second on desktop */}
        <div className="flex flex-col items-center justify-center h-full order-1 lg:order-2">
          <div className="w-[300px] sm:w-[350px] md:w-[400px] aspect-square mb-6">
            <PixelTransition
              firstContent={
                <div className="w-full h-full relative">
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      className="object-cover rounded-[13px]"
                      priority
                      sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, 400px"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100 rounded-[13px]">
                      <div className="text-center">
                        <div className="text-6xl mb-4">👤</div>
                        <p className="text-sm">Profile Photo</p>
                      </div>
                    </div>
                  )}
                </div>
              }
              secondContent={
                <div
                  className="w-full h-full flex items-center justify-center rounded-[13px]"
                  style={{
                    backgroundColor: "#111"
                  }}
                >
                  <p className="font-black text-2xl sm:text-3xl md:text-4xl text-white text-center px-4">
                    Hey, I am Vin :D!
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              once={false}
              animationStepDuration={0.4}
              className="custom-pixel-card w-full h-full"
            />
          </div>
          
          {/* Follow Section - Moved under image */}
          <div className="flex flex-col items-center gap-3 pt-2 w-[300px] sm:w-[350px] md:w-[400px]">
            <span className="text-sm font-semibold text-gray-700">Follow</span>
            <div className="flex items-center justify-center gap-5">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
                    {social.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Text Content - Second on mobile, first on desktop */}
        <div className="space-y-4 sm:space-y-5 animate-fade-in order-2 lg:order-1">
          {/* Name and Tagline */}
          <div className="text-center lg:text-left">
            <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-3">
              {name}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-primary mb-2 text-center lg:text-left">
              {tagline}
            </p>
            <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600 justify-center lg:justify-start">
              <FaMapMarkerAlt className="text-primary" />
              <span>{location}</span>
            </div>
          </div>

          {/* Main Description */}
          <div className="space-y-3 text-base sm:text-lg text-gray-700 leading-relaxed text-center lg:text-left">
            <p className="text-balance">
              {description}
            </p>
            <p className="text-balance">
              {extendedBio}
            </p>
            <p className="text-balance">
              <em>My interests lie in {researchInterests}</em>
            </p>
          </div>

          {/* Beliefs & Values Section */}
          {beliefs && beliefs.length > 0 && (
            <div className="-mt-1 mb-0 flex justify-center lg:justify-start">
              <div className="inline-block p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 hover:border-primary hover:shadow-sm transition-all duration-300">
                <p className="text-sm text-gray-700 leading-relaxed text-center lg:text-left">
                  {beliefs[0]?.text}{" "}
                  <Link
                    href={beliefs[0]?.projectUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    {beliefs[0]?.projectName}
                    <svg className="w-3 h-3 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                  . {beliefs[1]?.text}{" "}
                  <Link
                    href={beliefs[1]?.projectUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    {beliefs[1]?.projectName}
                    <svg className="w-3 h-3 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                  .
                </p>
              </div>
            </div>
          )}

          {/* Email */}
          <div className="pt-1">
            <p className="text-base text-gray-700 text-center lg:text-left">
            I'm always open and excited to connect with like-minded people and collaborate on projects, hackathons, or research; feel free to reach out at {" "}
              <Link
                href={`mailto:${email}`}
                className="text-primary hover:text-primary-dark font-medium"
              >
                {email}
              </Link>
              . I'd love to hear from you!
            </p>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start">
            {ctas.map((cta, index) => (
              <Link
                key={index}
                href={cta.href}
                download={cta.download}
                className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  cta.primary
                    ? "bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl"
                    : "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white"
                }`}
                aria-label={cta.text}
              >
                {cta.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}