import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AtCoder 精進チャート",
  description:
    "日々の精進の確認とライバルとの比較によりモチベーションを向上させるにゃ🐾",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId={process.env.GAID ?? ""}></GoogleAnalytics>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
