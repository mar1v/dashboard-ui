import policyData from "@/data/policyData.json";
import { type Policy } from "@/shared/types/policy";
import { PoliciesTable } from "./PoliciesTable";

export function PoliciesBlock() {
  const policies = policyData as Policy[];

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Policies</h3>

        <span className="text-sm text-gray-500">{policies.length} total</span>
      </div>

      {policies.length === 0 ? (
        <p className="text-sm text-gray-500">No policies found</p>
      ) : (
        <PoliciesTable />
      )}
    </section>
  );
}
