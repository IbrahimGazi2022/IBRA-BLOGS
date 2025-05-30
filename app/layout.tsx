import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ibra Blogs",
  description: "Generated by Ibrahim - The Coder",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} relative min-h-screen`}>
        <div className="svg-bg" />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}