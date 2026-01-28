import { iconsMap } from "@/shared/icons";
import { type QuickAction } from "@/shared/types/quickAction";

interface Props {
  action: QuickAction;
  onClick: (action: QuickAction) => void;
}

export const QuickActionButton = ({ action, onClick }: Props) => {
  const Icon = iconsMap[action.icon];

  return (
    <button
      onClick={() => onClick(action)}
      className="
        flex flex-col items-center justify-center
        gap-2 p-4 rounded border
        hover:bg-blue-50 hover:border-blue-400
        transition text-sm font-medium
      "
    >
      <Icon size={20} />
      <span>{action.label}</span>
    </button>
  );
};
