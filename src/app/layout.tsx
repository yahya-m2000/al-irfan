import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Al-Irfan",
  description: "Hoyga Culuumta Diinta ee Jaamacada Al-Cirfaan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
