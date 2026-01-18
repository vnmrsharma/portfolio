import Link from "next/link";
import { 
  FaLinkedin, 
  FaGithub, 
  FaTwitter, 
  FaGraduationCap,
  FaEnvelope,
  FaLaptopCode,
  FaPenFancy
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/vinamra-sharma", 
      icon: FaLinkedin 
    },
    { 
      name: "GitHub", 
      href: "https://github.com/vnmrsharma", 
      icon: FaGithub 
    },
    { 
      name: "Twitter", 
      href: "https://twitter.com/vnmrsharma", 
      icon: FaTwitter 
    },
    { 
      name: "Google Scholar", 
      href: "https://scholar.google.com/citations?user=ivJzcpAAAAAJ", 
      icon: FaGraduationCap 
    },
    { 
      name: "DevPost", 
      href: "https://devpost.com/vnmrsharma", 
      icon: FaLaptopCode 
    },
    { 
      name: "Wiki", 
      href: "https://wiki.vinamrasharma.com/", 
      icon: FaPenFancy 
    },
    { 
      name: "Email", 
      href: "mailto:vinamrasharma5@gmail.com", 
      icon: FaEnvelope 
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Research", href: "/research" },
    { name: "Projects", href: "/projects" },
    { name: "Personal", href: "/personal" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Vinamra Sharma
            </h3>
            <p className="text-gray-600 text-sm">
              PhD candidate in AI compilers and AI Engineer. 
              Developing mcurio.com and ClimateThread.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>
            © {currentYear}{" "}
            <Link
              href="https://vinamrasharma.com"
              className="text-primary hover:text-primary-dark font-medium transition-colors"
            >
              Vinamra Sharma
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

