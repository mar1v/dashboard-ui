import { type Status, type Triage } from "@/shared/types/common";
import { isStatus, isTriage } from "@/utils/typeGuards";

type FilterValue<T> = T | "All";

interface Props {
  status: FilterValue<Status>;
  triage: FilterValue<Triage>;
  onStatusChange: (v: FilterValue<Status>) => void;
  onTriageChange: (v: FilterValue<Triage>) => void;
}

export const AccountsFilters = ({
  status,
  triage,
  onStatusChange,
  onTriageChange,
}: Props) => {
  const handleStatusChange = (value: FilterValue<Status>) => {
    if (value === "All" || isStatus(value)) {
      onStatusChange(value);
    }
  };

  const handleTriageChange = (value: FilterValue<Triage>) => {
    if (value === "All" || isTriage(value)) {
      onTriageChange(value);
    }
  };

  return (
    <div className="flex gap-4 mb-4">
      <select
        value={status}
        onChange={(e) =>
          handleStatusChange(e.target.value as FilterValue<Status>)
        }
        className="border rounded px-2 py-1 text-sm"
      >
        <option value="All">All statuses</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
        <option value="inactive">Inactive</option>
      </select>

      <select
        value={triage}
        onChange={(e) =>
          handleTriageChange(e.target.value as FilterValue<Triage>)
        }
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
