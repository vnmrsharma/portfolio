import { ReactNode } from "react";

interface AchievementCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: ReactNode;
}

export default function AchievementCard({
  title,
  value,
  description,
  icon,
}: AchievementCardProps) {
  return (
    <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all text-center">
      {icon && (
        <div className="flex justify-center mb-4 text-primary text-4xl">
          {icon}
        </div>
      )}
      <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        {value}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}

