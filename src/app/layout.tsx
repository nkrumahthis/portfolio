import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
        <div className="container mx-auto px-4">
          <header className="py-6 flex justify-between items-center">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">Nkrumah's Portfolio</h1>
              <p className="text-muted-foreground">Fullstack Software Engineer</p>
            </div>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
