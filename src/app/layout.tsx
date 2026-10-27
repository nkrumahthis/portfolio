import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderBar from "@/components/header-bar";
import { ThemeProvider } from "../../context/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nkrumah.dev"),
  title: {
    default: "Emmanuel Nkrumah-Sarpong",
    template: "%s · Emmanuel Nkrumah-Sarpong",
  },
  description: "Software engineer. Weekly notes on what I'm learning in software engineering.",
  alternates: {
    types: { "application/rss+xml": "/feed.xml" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="mx-auto max-w-3xl px-4">
          <HeaderBar />
          <main>{children}</main>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
