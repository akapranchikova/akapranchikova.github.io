import type { Metadata } from "next";
import { PT_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientOnly from "@/components/ClientOnly";
import TypographyFixer from "@/components/TypographyFixer";
import "../styles/globals.css";

const ptMono = PT_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
  variable: "--font-pt-mono",
});

export const metadata: Metadata = {
  title: "Ruseva Yana Portfolio",
  description: "Portfolio of Ruseva Yana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ptMono.variable} antialiased`} suppressHydrationWarning>
        <ClientOnly>
          <TypographyFixer />
          <div className="site-shell">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ClientOnly>
      </body>
    </html>
  );
}
