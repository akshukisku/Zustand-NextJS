"use client";

import Navbar from "@/layout/admin-panel/Navbar";
import Sidebar from "@/layout/admin-panel/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Sidebar />

      {/* Only apply margin on desktop */}
      <div className="lg:ml-64">
        <Navbar />

        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}