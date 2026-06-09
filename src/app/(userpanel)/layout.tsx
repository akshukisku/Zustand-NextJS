import Navbar from "@/layout/user-panel/Navbar";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<>
<Navbar/>
{children}</>
  )}