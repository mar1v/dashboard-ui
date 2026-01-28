import { type Status, type Triage } from "./common";

export interface AccountDetails {
  id: string;
  name: string;
  owner: string;
  status: Status;
  triage: Triage;
  industry: string;
  region: string;
}

export interface PerformanceMetric {
  id: string;
  label: string;
  value: string;
  trend?: "up" | "down" | "neutral";
}
