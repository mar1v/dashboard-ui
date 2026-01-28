interface ProgressProps {
  value: number;
}

export const Progress = ({ value }: ProgressProps) => {
  return (
    <div className="w-full bg-gray-200 rounded h-2">
      <div
        className="h-2 rounded bg-blue-600 transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};
