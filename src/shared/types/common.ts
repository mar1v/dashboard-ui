export type Status = "Active" | "Pending" | "Inactive";
export type Triage = "High" | "Medium" | "Low";
export type Option<T extends string | number = string> = {
  label: string;
  value: T;
};
