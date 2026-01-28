import { type Status, type Triage } from "./common";

export interface WorkQueueItem {
  id: string;
  name: string;
  owner: string;
  status: Status;
  triage: Triage;
}
