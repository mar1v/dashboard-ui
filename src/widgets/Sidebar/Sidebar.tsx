import clsx from "clsx";
import { LayoutDashboard, User } from "lucide-react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r">
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
          to="/account/1"
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
  );
};
