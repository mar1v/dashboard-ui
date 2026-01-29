import policyData from "@/data/policyData.json";
import { type Policy } from "@/shared/types/policy";
import { Badge } from "@/shared/ui/Badge";

export function PoliciesTable() {
  const policies = policyData as Policy[];

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
      <table className="min-w-full border-collapse text-sm">
        <thead className="bg-gray-50 text-left text-xs font-semibold uppercase text-gray-500">
          <tr>
            <th className="px-4 py-3">Policy #</th>
            <th className="px-4 py-3">Product</th>
            <th className="px-4 py-3">Premium</th>
            <th className="px-4 py-3">Period</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {policies.map((policy) => (
            <tr key={policy.id} className="transition hover:bg-gray-50">
              <td className="px-4 py-3 font-medium text-gray-900">
                {policy.policyNumber}
              </td>

              <td className="px-4 py-3 text-gray-700">{policy.product}</td>

              <td className="px-4 py-3 text-gray-700">
                ${policy.premium.toLocaleString()}
              </td>

              <td className="px-4 py-3 text-gray-600">
                {policy.startDate} – {policy.endDate}
              </td>

              <td className="px-4 py-3">
                <Badge label={policy.status} color="green" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
