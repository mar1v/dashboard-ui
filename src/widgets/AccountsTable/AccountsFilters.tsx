import { type Status, type Triage } from "@/shared/types/common";
import { isStatus, isTriage } from "@/utils/typeGuards";

interface Props {
  status: Status | "All";
  triage: Triage | "All";
  onStatusChange: (v: Status | "All") => void;
  onTriageChange: (v: Triage | "All") => void;
}

export const AccountsFilters = ({
  status,
  triage,
  onStatusChange,
  onTriageChange,
}: Props) => {
  const handleStatusChange = (value: string) => {
    if (value === "All") {
      onStatusChange("All");
    } else if (isStatus(value)) {
      onStatusChange(value);
    }
  };

  const handleTriageChange = (value: string) => {
    if (value === "All") {
      onTriageChange("All");
    } else if (isTriage(value)) {
      onTriageChange(value);
    }
  };

  return (
    <div className="flex gap-4 mb-4">
      <select
        value={status}
        onChange={(e) => handleStatusChange(e.target.value)}
        className="border rounded px-2 py-1 text-sm"
      >
        <option value="All">All statuses</option>
        <option value="Active">Active</option>
        <option value="Pending">Pending</option>
        <option value="Inactive">Inactive</option>
      </select>

      <select
        value={triage}
        onChange={(e) => handleTriageChange(e.target.value)}
        className="border rounded px-2 py-1 text-sm"
      >
        <option value="All">All triage</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
  );
};
