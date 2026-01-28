import { type PortfolioGoal } from "@/shared/types/portfolioGoal";
import { Progress } from "@/shared/ui/Progress";

interface GoalCardProps {
  goal: PortfolioGoal;
}

export const GoalCard = ({ goal }: GoalCardProps) => {
  return (
    <div className="p-4 border rounded bg-white shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium text-sm">{goal.title}</h3>
        <span className="text-xs text-gray-500">{goal.progress}%</span>
      </div>

      <p className="text-xs text-gray-500 mb-3">{goal.description}</p>

      <Progress value={goal.progress} />
    </div>
  );
};
