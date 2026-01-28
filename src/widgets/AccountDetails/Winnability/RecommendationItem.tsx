import { type Recommendation } from "@/shared/types/winnability";

interface Props {
  item: Recommendation;
}

export function RecommendationItem({ item }: Props) {
  const badgeColor =
    item.priority === "High"
      ? "bg-red-100 text-red-700"
      : item.priority === "Medium"
        ? "bg-yellow-100 text-yellow-700"
        : "bg-green-100 text-green-700";

  return (
    <div className="flex items-start gap-3 rounded-lg border border-gray-100 p-3">
      <span className={`rounded px-2 py-0.5 text-xs font-medium ${badgeColor}`}>
        {item.priority}
      </span>

      <p className="text-sm text-gray-700">{item.text}</p>
    </div>
  );
}
