import type { Metadata } from "next";
import { authClient } from "@/lib/auth/client";
import { NeonAuthUIProvider } from "@neondatabase/auth-ui";
import { Geist, Geist_Mono } from "next/font/google";
import TheHeader from "@/components/TheHeader";
import LeftNavigation from "@/components/LeftNavigation";
import "@/css/globals.css";
import { getUserAuth } from "@/app/actions";

export const dynamic = "force-dynamic";

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
      className={`${geistSans.variable} ${geistMono.variable} h-full overflow-hidden antialiased dark`}
    >
      <body>
        <NeonAuthUIProvider
          authClient={authClient}
          emailOTP
          social={{ providers: ["google"] }}
        >
          <div className="application bg-linear-to-b   from-theme-900/70 to-theme-800/50 bg-fixed  pt-[50px]">
            <TheHeader user={user} />
            <LeftNavigation user={user} />
            <main className="pl-0 md:pl-[calc(200px+1rem)] transition-all  h-[calc(100vh-50px)] overflow-y-auto scrollbar-gutter-stable">
              <div className="py-2 px-4 md:px-2 h-full">{children}</div>
            </main>
          </div>
        </NeonAuthUIProvider>
        <div id="portalRoot" />
      </body>
    </html>
  );
}
