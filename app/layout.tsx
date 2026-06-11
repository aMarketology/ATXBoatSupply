import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ATX Boat Supply Co",
  description: "Marine fuel delivery right to your dock in Austin, TX.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
