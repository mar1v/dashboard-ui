import { type WinnabilityData } from "@/shared/types/winnability";
import { RecommendationItem } from "./RecommendationItem";
import { WinnabilityChart } from "./WinnabilityChart";
import { WinnabilityScore } from "./WinnabilityScore";

interface Props {
  data: WinnabilityData;
}

export function Winnability({ data }: Props) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-3 sm:p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">Winnability</h3>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <WinnabilityScore score={data.score} />
          <WinnabilityChart factors={data.factors} />
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-gray-700">
            Recommendations
          </h4>

          <div className="space-y-3">
            {data.recommendations.map((rec) => (
              <RecommendationItem key={rec.id} item={rec} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
