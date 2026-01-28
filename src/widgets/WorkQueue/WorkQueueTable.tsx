import { type WorkQueueItem } from "@/shared/types/workQueue";

interface WorkQueueTableProps {
  data: WorkQueueItem[];
}

export const WorkQueueTable = ({ data }: WorkQueueTableProps) => (
  <div className="overflow-x-auto">
    <table className="min-w-full text-left border">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-3 py-2">ID</th>
          <th className="px-3 py-2">Name</th>
          <th className="px-3 py-2">Owner</th>
          <th className="px-3 py-2">Status</th>
          <th className="px-3 py-2">Triage</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="border-t hover:bg-gray-50">
            <td className="px-3 py-2">{item.id}</td>
            <td className="px-3 py-2">{item.name}</td>
            <td className="px-3 py-2">{item.owner}</td>
            <td className="px-3 py-2">{item.status}</td>
            <td className="px-3 py-2">{item.triage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
