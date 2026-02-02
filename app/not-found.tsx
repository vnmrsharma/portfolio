import Link from "next/link";
import { FaHome, FaRocket, FaSearch, FaArrowLeft, FaSmile } from "react-icons/fa";
import GridScanWrapper from "@/components/GridScanWrapper";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <GridScanWrapper
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#3136b4"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* 404 Number with Animation */}
          <div className="mb-8">
            <h1 className="text-9xl sm:text-[12rem] lg:text-[15rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-pulse">
              404
            </h1>
          </div>

          {/* Fun Message */}
          <div className="mb-8 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Oops! Page Not Found
            </h2>
            <div className="flex items-center justify-center gap-2 text-2xl mb-4">
              <FaSmile className="text-primary animate-bounce" />
              <p className="text-xl sm:text-2xl text-gray-700">
                Looks like this page went on a hackathon adventure!
              </p>
              <FaSmile className="text-primary animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              The page you're looking for might have been compiled away or optimized out of existence. 
              Don't worry, even the best AI compilers sometimes miss a page or two!
            </p>
          </div>

          {/* Fun Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border-2 border-primary/20 shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2">110+</div>
              <div className="text-sm text-gray-600">Hackathons Participated</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border-2 border-primary/20 shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2">65+</div>
              <div className="text-sm text-gray-600">Awards Won</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border-2 border-primary/20 shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <div className="text-sm text-gray-600">Page Not Found</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-bold rounded-xl hover:from-primary/90 hover:to-primary transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg"
            >
              <FaHome className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Return to Home
            </Link>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-primary border-2 border-primary font-bold rounded-xl hover:bg-primary/5 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              <FaRocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Explore Projects
            </Link>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link
              href="/about"
              className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
            >
              <FaArrowLeft className="w-4 h-4" />
              About
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="/research"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Research
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="/"
              className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
            >
              <FaSearch className="w-4 h-4" />
              Search
            </Link>
          </div>

          {/* Fun Quote */}
          <div className="mt-12 max-w-xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/5 rounded-xl p-6 border-l-4 border-primary">
              <p className="text-gray-700 italic text-lg">
                "The only way to do great work is to love what you do. 
                And if you haven't found it yet, keep looking. Don't settle."
              </p>
              <p className="text-sm text-gray-600 mt-2 font-semibold">
                — Steve Jobs (but also applies to finding missing pages)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

