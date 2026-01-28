import { type AccountDetails } from "@/shared/types/accountDetails";
import { Badge } from "@/shared/ui/Badge";

interface Props {
  account: AccountDetails;
}

export const AccountHeader = ({ account }: Props) => {
  const statusColor =
    account.status === "Active"
      ? "green"
      : account.status === "Pending"
        ? "yellow"
        : "gray";

  const triageColor =
    account.triage === "High"
      ? "red"
      : account.triage === "Medium"
        ? "yellow"
        : "green";

  return (
    <div className="bg-white rounded shadow p-4 flex flex-col gap-3">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-xl font-semibold">{account.name}</h1>
          <p className="text-sm text-gray-500">Owner: {account.owner}</p>
        </div>

        <div className="flex gap-2">
          <Badge label={account.status} color={statusColor} />
          <Badge label={account.triage} color={triageColor} />
        </div>
      </div>

      <div className="flex gap-6 text-sm text-gray-600">
        <span>Industry: {account.industry}</span>
        <span>Region: {account.region}</span>
      </div>
    </div>
  );
};
