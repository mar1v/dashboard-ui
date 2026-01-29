import { AccountsTable } from "@/widgets/AccountsTable/AccountsTable";
import { MarketIntelligence } from "@/widgets/MarketIntelligence/MarketIntelligence";
import { PortfolioGoals } from "@/widgets/PortfolioGoals/PortfolioGoals";
import { QuickActions } from "@/widgets/QuickActions/QuickActions";
import { WorkQueue } from "@/widgets/WorkQueue/WorkQueue";

export const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WorkQueue />
        <PortfolioGoals />
        <MarketIntelligence />
        <QuickActions />
      </div>
      <AccountsTable />
    </div>
  );
};
