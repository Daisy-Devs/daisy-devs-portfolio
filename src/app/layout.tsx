import type { Metadata } from "next";
import { Geist, Bricolage_Grotesque, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "Daisy Devs🌼",
  description: "A small team of developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        nunitoSans.variable,
        "font-sans",
        bricolageGrotesque.variable,
      )}
    >
      <body className="min z-h-full flex flex-col">
        <header>
          <Navbar />
        </header>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
