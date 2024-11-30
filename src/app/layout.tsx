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
  title: "Emmanuel's Portfolio",
  description: "Portfolio of Emmanuel Nkrumah-Sarpong",
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
        <div className="container mx-auto px-4">
          <HeaderBar />
          <main>{children}</main>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
