import "./globals.css";
import type { Metadata } from "next";
import Berkshire_Swash from "next/font/local";
import { NextAuthProvider } from "./website/components/providers/providers";
import Navbar from "./website/components/Navbar/Navbar";
import Footer from "./website/components/Footer/Footer";

const berkish = Berkshire_Swash({
  src: [
    {
      path: "../public/BerkshireSwash-Regular.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/BerkshireSwash-Regular.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/BerkshireSwash-Regular.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/BerkshireSwash-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/BerkshireSwash-Regular.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-berkish-swash-regular",
});

export const metadata: Metadata = {
  title: "Tudar",
  description: "Tudar: tulu club at NMAMIT nitte ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={berkish.className}>
        <NextAuthProvider>
        <Navbar/>
          {children}
          <Footer/>
          </NextAuthProvider>
      </body>
    </html>
  );
}
