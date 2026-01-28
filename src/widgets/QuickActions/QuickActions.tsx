import actionsData from "@/data/quickActions.json";
import { type QuickAction } from "@/shared/types/quickAction";
import { QuickActionButton } from "./QuickActionButton";

export const QuickActions = () => {
  const actions = actionsData as QuickAction[];

  const handleAction = (action: QuickAction) => {
    console.log("Action:", action.action);

    alert(`Action triggered: ${action.label}`);
  };

  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {actions.map((action) => (
          <QuickActionButton
            key={action.id}
            action={action}
            onClick={handleAction}
          />
        ))}
      </div>
    </div>
  );
};
