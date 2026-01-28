import metricsData from "@/data/performanceMetrics.json";
import { type PerformanceMetric } from "@/shared/types/accountDetails";
import { PerformanceMetricCard } from "./PerformanceMetricCard";

export const PerformanceMetrics = () => {
  const metrics = metricsData as PerformanceMetric[];

  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Performance Metrics</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {metrics.map((metric) => (
          <PerformanceMetricCard key={metric.id} metric={metric} />
        ))}
      </div>
    </div>
  );
};
