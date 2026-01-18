import { 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaTwitter, 
  FaGraduationCap,
  FaMapMarkerAlt,
  FaLaptopCode
} from "react-icons/fa";

export default function ContactInfo() {
  const contactMethods = [
    {
      name: "Email",
      value: "vinamrasharma5@gmail.com",
      href: "mailto:vinamrasharma5@gmail.com",
      icon: FaEnvelope,
    },
    {
      name: "Location",
      value: "Glasgow, Scotland, UK",
      href: null,
      icon: FaMapMarkerAlt,
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/vinamra-sharma",
      icon: FaLinkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/vnmrsharma",
      icon: FaGithub,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/vnmrsharma",
      icon: FaTwitter,
    },
    {
      name: "Google Scholar",
      href: "https://scholar.google.com/citations?user=ivJzcpAAAAAJ",
      icon: FaGraduationCap,
    },
    {
      name: "DevPost",
      href: "https://devpost.com/vnmrsharma",
      icon: FaLaptopCode,
    },
  ];

  return (
    <div className="space-y-8 text-left">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-left">
          Contact Methods
        </h3>
        <div className="space-y-4">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <div key={method.name} className="flex items-start gap-4 text-left">
                <div className="text-primary text-xl">
                  <Icon />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 text-left">{method.name}</p>
                  {method.href ? (
                    <a
                      href={method.href}
                      className="text-gray-600 hover:text-primary transition-colors text-left"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-left">{method.value}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-left">
          Connect on Social Media
        </h3>
        <div className="flex gap-4">
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
  );
}

