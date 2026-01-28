import goalsData from "@/data/portfolioGoals.json";
import { type PortfolioGoal } from "@/shared/types/portfolioGoal";
import { GoalCard } from "./GoalCard";

export const PortfolioGoals = () => {
  const goals = goalsData as PortfolioGoal[];

  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Portfolio Goals</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {goals.map((goal) => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </div>
    </div>
  );
};
