import { type Account } from "@/shared/types/account";
import { Badge } from "@/shared/ui/Badge";
import { useNavigate } from "react-router-dom";

interface Props {
  account: Account;
}

export const AccountsRow = ({ account }: Props) => {
  const navigate = useNavigate();

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
    <tr
      onClick={() => navigate(`/account/${account.id}`)}
      className="cursor-pointer hover:bg-gray-50"
    >
      <td className="px-3 py-2 font-medium">{account.name}</td>
      <td className="px-3 py-2">{account.owner}</td>
      <td className="px-3 py-2">
        <Badge label={account.status} color={statusColor} />
      </td>
      <td className="px-3 py-2">
        <Badge label={account.triage} color={triageColor} />
      </td>
    </tr>
  );
};
