import type { Metadata } from "next";
import { Montserrat, News_Cycle, Stardos_Stencil } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import StarsCanvas from "@/components/StarCanvas";
import WalletContextProvider from "@/lib/WalletContextProvider";

require('@solana/wallet-adapter-react-ui/styles.css');

export const metadata: Metadata = {
  title: "StarSol Tracker",
  description: "Generated by create next app",
  icons: "/Lard_Vader.webp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-Starwars min-h-screen w-full relative flex flex-col justify-center items-center tracking-widest`}
      >
        <div className="-z-50">
          <StarsCanvas />
        </div>
        <WalletContextProvider>
          <Navbar />
          {children}
          <Footer />
        </WalletContextProvider>
      </body>
    </html>
  );
}
