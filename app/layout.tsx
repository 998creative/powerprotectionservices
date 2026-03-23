import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const appFont = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Power Protection Experts | Independent UPS & Backup Power Specialists",
  description:
    "Power Protection Experts (trading name of OnLiTECH Ltd) provides independent UPS systems, batteries, generators, and maintenance for critical infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${appFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
