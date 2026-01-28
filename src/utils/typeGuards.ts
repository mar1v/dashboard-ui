import { type Status, type Triage } from "@/shared/types/common";

export const isStatus = (value: string): value is Status => {
  return ["Active", "Pending", "Inactive"].includes(value);
};

export const isTriage = (value: string): value is Triage => {
  return ["High", "Medium", "Low"].includes(value);
};
