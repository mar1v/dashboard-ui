import workQueueData from "@/data/workQueue.json";
import { type WorkQueueItem } from "@/shared/types/workQueue";
import { useState } from "react";
import { WorkQueueTable } from "./WorkQueueTable";
import { WorkQueueTabs } from "./WorkQueueTabs";

export const WorkQueue = () => {
  const [activeTab, setActiveTab] = useState<"All" | "Active" | "Pending">(
    "All",
  );

  const typedData = workQueueData as WorkQueueItem[];

  const filteredData =
    activeTab === "All"
      ? typedData
      : typedData.filter((item) => item.status === activeTab);

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Work Queue</h2>
      <WorkQueueTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <WorkQueueTable data={filteredData} />
    </div>
  );
};
