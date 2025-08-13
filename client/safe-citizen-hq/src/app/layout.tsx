import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "SafeCitizen 119 HQ",
  description: "Central Command Dashboard",
};

const comfortaa = localFont({
  src: [
    {
      path: "./fonts/comfortaa.ttf",
      weight: "400",
      style: "normal",
    },
    
  ],
  variable: "--font-comfortaa", 
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={comfortaa.className}>
      <body className="bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
