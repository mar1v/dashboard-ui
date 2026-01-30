import {
  FileText,
  MessageSquare,
  Plus,
  User,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";

export const iconsMap: Record<
  string,
  ComponentType<Omit<LucideProps, "ref">>
> = {
  plus: Plus,
  user: User,
  report: FileText,
  message: MessageSquare,
};
