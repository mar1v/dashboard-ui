import clsx from "clsx";
import { LayoutDashboard, User, X } from "lucide-react";
import type { FC } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  open?: boolean;
  onClose?: () => void;
}

export const Sidebar: FC<Props> = ({ open = false, onClose }) => {
  return (
    <>
      <aside className="hidden md:block w-64 bg-white border-r">
        <div className="p-4 font-bold text-lg">Dashboard</div>

        <nav className="flex flex-col gap-1 px-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              clsx(
                "flex items-center gap-2 px-3 py-2 rounded text-sm",
                isActive
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:bg-gray-100",
              )
            }
          >
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          <NavLink
            to="/account"
            className={({ isActive }) =>
              clsx(
                "flex items-center gap-2 px-3 py-2 rounded text-sm",
                isActive
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:bg-gray-100",
              )
            }
          >
            <User size={18} />
            Account
          </NavLink>
        </nav>
      </aside>

      <div
        className={clsx(
          "fixed inset-0 z-50 md:hidden",
          open ? "block" : "pointer-events-none",
        )}
      >
        <div
          className={clsx(
            "absolute inset-0 bg-black/40 transition-opacity",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={onClose}
        />

        <aside
          className={clsx(
            "relative bg-white w-64 h-full shadow-xl transform transition-transform",
            open ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="p-4 flex items-center justify-between">
            <div className="font-bold text-lg">Dashboard</div>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-1 rounded hover:bg-gray-100"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="flex flex-col gap-1 px-2">
            <NavLink
              to="/"
              onClick={onClose}
              className={({ isActive }) =>
                clsx(
                  "flex items-center gap-2 px-3 py-2 rounded text-sm",
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100",
                )
              }
            >
              <LayoutDashboard size={18} />
              Dashboard
            </NavLink>

            <NavLink
              to="/account"
              onClick={onClose}
              className={({ isActive }) =>
                clsx(
                  "flex items-center gap-2 px-3 py-2 rounded text-sm",
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100",
                )
              }
            >
              <User size={18} />
              Account
            </NavLink>
          </nav>
        </aside>
      </div>
    </>
  );
};
