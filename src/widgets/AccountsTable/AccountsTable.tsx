import accountsData from "@/data/accounts.json";
import { type Account } from "@/shared/types/account";
import { type Status, type Triage } from "@/shared/types/common";
import { useState } from "react";
import { AccountsFilters } from "./AccountsFilters";
import { AccountsRow } from "./AccountsRow";

export const AccountsTable = () => {
  const accounts = accountsData as Account[];

  const [status, setStatus] = useState<Status | "All">("All");
  const [triage, setTriage] = useState<Triage | "All">("All");

  const filtered = accounts.filter((acc) => {
    if (status !== "All" && acc.status !== status) return false;
    if (triage !== "All" && acc.triage !== triage) return false;
    return true;
  });

  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-4">My Accounts</h2>

      <AccountsFilters
        status={status}
        triage={triage}
        onStatusChange={setStatus}
        onTriageChange={setTriage}
      />

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2 text-left">Account</th>
              <th className="px-3 py-2 text-left">Owner</th>
              <th className="px-3 py-2 text-left">Status</th>
              <th className="px-3 py-2 text-left">Triage</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((acc) => (
              <AccountsRow key={acc.id} account={acc} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
