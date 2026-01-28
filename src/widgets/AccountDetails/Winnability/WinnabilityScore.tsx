interface Props {
  score: number;
}

export function WinnabilityScore({ score }: Props) {
  const color =
    score >= 75
      ? "text-green-600"
      : score >= 50
        ? "text-yellow-600"
        : "text-red-600";

  return (
    <div className="mb-6">
      <div className="text-sm text-gray-500">Overall Score</div>
      <div className={`text-4xl font-bold ${color}`}>{score}%</div>
    </div>
  );
}
