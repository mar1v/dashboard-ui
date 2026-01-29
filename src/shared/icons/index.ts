import { FileText, MessageSquare, Plus, User } from "lucide-react";
import type { ComponentType } from "react";

export const iconsMap: Record<string, ComponentType> = {
  plus: Plus,
  user: User,
  report: FileText,
  message: MessageSquare,
};
