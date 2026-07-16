import type { Metadata } from "next";
import { authClient } from "@/lib/auth/client";
import { NeonAuthUIProvider } from "@neondatabase/auth-ui";
import { Geist, Geist_Mono } from "next/font/google";
import TheHeader from "@/app/components/TheHeader";
import LeftNavigation from "@/app/components/LeftNavigation";
import "./css/globals.css";
import { getUserAuth } from "@/app/actions";

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
  description: "Custom dashboard example",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUserAuth();

  return (
    <html
      lang="en"
      style={{ colorScheme: "dark" }}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body>
        <NeonAuthUIProvider
          authClient={authClient}
          emailOTP
          social={{ providers: ["google"] }}
        >
          <div className="application pt-[50px]">
            <TheHeader user={user} />
            <LeftNavigation />
            <main className="pl-0 md:pl-[200px] transition-all bg-linear-to-b from-theme-800/50 to-theme-900/50 bg-fixed  h-[calc(100vh-50px)] overflow-y-auto">
              <div className="p-2 h-full">{children}</div>
            </main>
          </div>
        </NeonAuthUIProvider>
      </body>
    </html>
  );
}
