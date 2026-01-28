import { type PerformanceMetric } from "@/shared/types/accountDetails";
import { ArrowDown, ArrowUp, Minus } from "lucide-react";

interface Props {
  metric: PerformanceMetric;
}

export const PerformanceMetricCard = ({ metric }: Props) => {
  const Icon =
    metric.trend === "up"
      ? ArrowUp
      : metric.trend === "down"
        ? ArrowDown
        : Minus;

  const color =
    metric.trend === "up"
      ? "text-green-600"
      : metric.trend === "down"
        ? "text-red-600"
        : "text-gray-400";

  return (
    <div className="border rounded p-4 bg-white shadow-sm">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-gray-500">{metric.label}</span>
        <Icon size={14} className={color} />
      </div>
      <div className="text-lg font-semibold">{metric.value}</div>
    </div>
  );
};
