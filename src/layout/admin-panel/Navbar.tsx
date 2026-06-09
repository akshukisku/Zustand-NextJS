"use client";

import ToggleTheme from "@/components/ToggleTheme";
import { Bell, Mail, Menu, Search } from "lucide-react";

interface NavbarProps {
  onMenuClick?: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-40 h-16 border-b bg-background">
      <div className="flex h-full items-center justify-between px-4 lg:px-6">
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="rounded-lg p-2 transition-colors hover:bg-muted lg:hidden"
          >
            <Menu size={22} />
          </button>

          <div className="relative hidden md:block">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />

            <input
              type="text"
              placeholder="Search..."
              className="
                w-64 rounded-xl border bg-background
                py-2 pl-10 pr-4 text-sm
                outline-none
                focus:ring-2
                focus:ring-ring
                lg:w-80
              "
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="rounded-lg p-2 transition-colors hover:bg-muted md:hidden">
            <Search size={20} />
          </button>

          <button className="rounded-lg p-2 transition-colors hover:bg-muted">
            <Mail size={20} />
          </button>

          <button className="relative rounded-lg p-2 transition-colors hover:bg-muted">
            <Bell size={20} />

            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive" />
          </button>

          <ToggleTheme />
        </div>
      </div>
    </header>
  );
};

export default Navbar;