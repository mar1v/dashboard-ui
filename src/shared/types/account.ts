import { type Status, type Triage } from "./common";

export interface Account {
  id: string;
  name: string;
  status: Status;
  triage: Triage;
  owner: string;
}
