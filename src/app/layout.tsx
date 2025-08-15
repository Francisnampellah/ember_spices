import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ember & Spice | Indian Fusion Restaurant - Dar es Salaam",
  description: "Experience bold Indian fusion flavors in Dar es Salaam. Dine-in, takeout, delivery, and curbside pickup available. Rated 4.9 stars with moody, vibey atmosphere.",
  keywords: "Indian fusion restaurant, Dar es Salaam, Ember Spice, Indian food, delivery, takeout, reservations, Mwai Kibaki Road",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
