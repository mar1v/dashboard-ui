import { Menu } from "lucide-react";
import { type ReactNode, useState } from "react";
import { Sidebar } from "./widgets/Sidebar/Sidebar";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1">
        <header className="p-2 sm:p-4 border-b bg-gray-50 md:hidden">
          <button
            aria-label="Open menu"
            className="p-2 rounded hover:bg-gray-100"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={20} />
          </button>
        </header>

        <main className="p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
};
