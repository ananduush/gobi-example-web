import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gobi Example Web",
  description: "Built with NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="h-[64px]">
          <Header />
        </header>
        <main className="min-h-screen overflow-hidden max-w-screen max-w-[1600px] mx-auto">
          {children}
        </main>
        <footer className="">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
