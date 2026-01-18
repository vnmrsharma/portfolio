import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  primaryLink?: { text: string; href: string };
  secondaryLink?: { text: string; href: string };
}

export default function CTASection({
  title,
  description,
  primaryLink,
  secondaryLink,
}: CTASectionProps) {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg text-white mb-8 text-center">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {primaryLink && (
              <Link
                href={primaryLink.href}
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
              >
                {primaryLink.text}
              </Link>
            )}
            {secondaryLink && (
              <Link
                href={secondaryLink.href}
                download={secondaryLink.href.endsWith('.pdf')}
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-white border-2 border-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
              >
                {secondaryLink.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

