import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";

const gotham = localFont({
  src: "../../public/Gotham-Bold.otf",
  variable: "--font-gotham",
});

const helvetica = localFont({
  src: "../../public/helvetica-world.ttf",
  variable: "--font-helvetica",
});

const openSans = localFont({
  src: "../../public/open-sans.semibold.ttf",
  variable: "--font-opensans",
});

export const metadata: Metadata = {
  title: "710LABS - The Executive Vanguard",
  description: "The Executive Vanguard in Business Process Outsourcing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${gotham.variable} ${helvetica.variable} ${openSans.variable} font-body bg-surface-dim text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col antialiased`}
      >
        <TopNav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
