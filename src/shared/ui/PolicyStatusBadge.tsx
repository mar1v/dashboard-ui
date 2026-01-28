import { type Status } from "@/shared/types/common";

type Props = {
  status: Status;
};

export function PolicyStatusBadge({ status }: Props) {
  const statusColor =
    status === "Active" ? "green" : status === "Pending" ? "yellow" : "gray";

  const classes = `inline-block px-2 py-1 text-sm font-medium rounded-full bg-${statusColor}-100 text-${statusColor}-800`;

  return <span className={classes}>{status}</span>;
}
