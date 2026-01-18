interface AchievementBadgeProps {
  title: string;
  organization: string;
  year: string;
  description?: string;
}

export default function AchievementBadge({
  title,
  organization,
  year,
  description,
}: AchievementBadgeProps) {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-200">
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">{title}</h4>
          <p className="text-sm text-gray-600">{organization}</p>
        </div>
        <span className="text-sm font-medium text-primary">{year}</span>
      </div>
      {description && (
        <p className="text-sm text-gray-700 mt-2">{description}</p>
      )}
    </div>
  );
}

