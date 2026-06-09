"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Toaster richColors position="top-right" />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Providers;
