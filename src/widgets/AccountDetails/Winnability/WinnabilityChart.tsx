interface Factor {
  label: string;
  value: number;
}

interface Props {
  factors: Factor[];
}

export function WinnabilityChart({ factors }: Props) {
  return (
    <div className="space-y-3">
      {factors.map((factor) => (
        <div key={factor.label}>
          <div className="mb-1 flex justify-between text-xs text-gray-600">
            <span>{factor.label}</span>
            <span>{factor.value}%</span>
          </div>

          <div className="h-2 w-full rounded bg-gray-100">
            <div
              className="h-2 rounded bg-blue-600"
              style={{ width: `${factor.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
