import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Using Outfit for modern/premium look
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Software Engineer",
  description: "A premium portfolio showcasing software engineering expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
