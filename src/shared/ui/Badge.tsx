interface BadgeProps {
  label: string;
  color: "green" | "yellow" | "red" | "gray";
}

const colors = {
  green: "bg-green-100 text-green-700",
  yellow: "bg-yellow-100 text-yellow-700",
  red: "bg-red-100 text-red-700",
  gray: "bg-gray-100 text-gray-700",
};

export const Badge = ({ label, color }: BadgeProps) => (
  <span className={`px-2 py-0.5 rounded text-xs font-medium ${colors[color]}`}>
    {label}
  </span>
);
