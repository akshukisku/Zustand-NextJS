"use client";

import {
  Menu,
  ArrowUpRight,
  Sun,
  Moon,
  LogIn,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navbar() {
  const router = useRouter();

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    "Home",
    "Why Us",
    "Our Service",
    "Our Experts",
    "Our Cases",
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <h1 className="cursor-pointer text-xl font-semibold">
          BrainwaveBoard
        </h1>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <button
              key={link}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/consultation")}
            className="hidden text-sm font-medium md:block"
          >
            Get Consultation
          </button>

          <button className="rounded-full border p-2">
            <ArrowUpRight size={16} />
          </button>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              className="rounded-full border p-2"
            >
              {theme === "dark" ? (
                <Sun size={16} />
              ) : (
                <Moon size={16} />
              )}
            </button>
          )}

          {/* Login */}
          <button
            onClick={() => router.push("/login")}
            className="rounded-full border p-2"
          >
            <LogIn size={16} />
          </button>

          {/* Mobile Menu */}
          <button className="rounded-full border p-2 md:hidden">
            <Menu size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;