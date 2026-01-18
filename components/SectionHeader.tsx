interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export default function SectionHeader({ title, subtitle, id }: SectionHeaderProps) {
  return (
    <div className="text-center mb-6 sm:mb-7 md:mb-8" id={id}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-center px-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}

