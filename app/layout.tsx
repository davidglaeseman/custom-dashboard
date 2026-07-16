import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./css/globals.css";
import TheHeader from "@/app/components/TheHeader";
import LeftNavigation from "@/app/components/LeftNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Custom Dashboard",
  description: "Custom dashboard using next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <div className="application">
          <TheHeader />
          <LeftNavigation />
          <main className="pl-[200px] pt-[50px] bg-theme-900/50 h-full overflow-y-auto">
            <div className="p-4">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
