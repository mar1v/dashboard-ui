import { type Status } from "./common";

export type Policy = {
  id: string;
  policyNumber: string;
  product: string;
  premium: number;
  startDate: string;
  endDate: string;
  status: Status;
};
