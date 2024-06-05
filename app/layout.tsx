import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linked in clone",
  description: "Clone de la red social linkedin utilizando Next 14.2 + MongoDB + Azure cloud",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Toaster */}
        <header className="border-b sticky top-0 bg-white z-50">
          <Header />
        </header>

        <div className="bg-[#F4F2ED] flex-1 w-full">
          {children}
        </div>

      </body>
    </html>
  );
}
