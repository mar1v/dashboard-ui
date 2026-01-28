import accountData from "@/data/accountDetails.json";
import messagesData from "@/data/messagesData.json";
import winnabilityData from "@/data/winnabilityData.json";
import { type AccountDetails as AccountDetailsType } from "@/shared/types/accountDetails";
import { type Message } from "@/shared/types/message";
import { type WinnabilityData } from "@/shared/types/winnability";
import {
  AccountHeader,
  Communication,
  PerformanceMetrics,
  PoliciesBlock,
  Winnability,
} from "@/widgets/AccountDetails";

export const AccountPage = () => {
  const account = accountData as AccountDetailsType;
  const winnability = winnabilityData as WinnabilityData;
  const messages = messagesData as Message[];

  return (
    <div className="grid gap-6">
      <AccountHeader account={account} />

      <PerformanceMetrics />

      <PoliciesBlock />

      <Communication messages={messages} />

      <Winnability data={winnability} />
    </div>
  );
};
