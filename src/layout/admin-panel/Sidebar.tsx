    "use client";

import {
  LayoutDashboard,
  Package,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      icon: Package,
      label: "Products",
      path: "/admin/products",
    },
    {
      icon: Users,
      label: "Users",
      path: "/admin/users",
    },
  ];

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col border-r bg-background text-foreground">
      {/* Header */}
      <div className="border-b p-6">
        <h2 className="text-xl font-bold">ProCore</h2>
        <p className="text-sm text-muted-foreground">
          Admin Dashboard
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <button
              key={item.label}
              onClick={() => router.push(item.path)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors ${
                isActive
                  ? "border font-medium"
                  : "text-muted-foreground"
              }`}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t p-4">
        <button className="mb-2 flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground">
          <Settings size={18} />
          Settings
        </button>

        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;