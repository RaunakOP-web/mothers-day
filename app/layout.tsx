import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Happy Mother's Day, Jaspreet 💛",
  description:
    "A heartfelt digital scrapbook celebrating the most amazing mom — Jaspreet. Made with love.",
  openGraph: {
    title: "Happy Mother's Day, Jaspreet 💛",
    description:
      "A heartfelt digital scrapbook celebrating the most amazing mom — Jaspreet.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
