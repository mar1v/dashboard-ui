interface WorkQueueTabsProps {
  activeTab: "All" | "Active" | "Pending";
  setActiveTab: (tab: "All" | "Active" | "Pending") => void;
}

export const WorkQueueTabs = ({
  activeTab,
  setActiveTab,
}: WorkQueueTabsProps) => {
  const tabs: ("All" | "Active" | "Pending")[] = ["All", "Active", "Pending"];

  return (
    <div className="flex gap-2 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-3 py-1 rounded ${
            activeTab === tab
              ? "bg-blue-100 text-blue-700"
              : "bg-gray-100 text-gray-700"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
