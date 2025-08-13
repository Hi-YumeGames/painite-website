import React from "react";
import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Painite CODE",
  description: "I'm an aspiring developer, working on video games, websites and webapps",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider 
          attribute="class"
          defaultTheme="system" 
          enableSystem 
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen w-full">
            <Header />
            <main className="flex flex-1 flex-col ">
              {children}
            </main>
            <Footer type={1} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
