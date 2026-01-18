import { Metadata } from "next";
import Link from "next/link";
import { generateMetadata as genMeta } from "@/lib/seo";
import { FaDownload, FaArrowLeft } from "react-icons/fa";

export const metadata: Metadata = genMeta({
  title: "Resume | Vinamra Sharma | CV Download | PhD Candidate & AI Engineer",
  description: "Download Vinamra Sharma's complete resume/CV. PhD candidate in AI compilers at University of Glasgow, AI Engineer at Unineed Limited, founder of mcurio.com and ClimateThread. Includes education, work experience, research publications, awards, skills, and achievements.",
  path: "/resume",
  keywords: [
    "Vinamra Sharma resume",
    "Vinamra Sharma CV",
    "download resume",
    "download CV",
    "PhD candidate resume",
    "AI Engineer resume",
    "resume download",
    "CV download",
    "academic CV",
    "research CV",
    "professional resume",
    "portfolio CV",
  ],
  type: "website",
  section: "Resume",
});

export default function Resume() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium mb-8"
        >
          <FaArrowLeft />
          Back to Home
        </Link>

        <div className="bg-white rounded-xl border border-gray-200 p-8 md:p-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resume / CV
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Download my complete resume with detailed work experience, education, 
            publications, awards, and achievements.
          </p>
          
          <a
            href="/Vin_resume.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-lg"
          >
            <FaDownload />
            Download PDF Resume
          </a>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4">
              For the most up-to-date information, please also visit:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/about"
                className="text-primary hover:text-primary-dark font-medium"
              >
                About Page
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                href="/research"
                className="text-primary hover:text-primary-dark font-medium"
              >
                Research
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                href="/projects"
                className="text-primary hover:text-primary-dark font-medium"
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

