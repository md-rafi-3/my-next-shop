import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Providers } from "./Providers";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next-Shop",
  description: "NextShop - Your one-stop online store for electronics, fashion, and everyday essentials. Discover top products, amazing deals, and fast delivery all in one place!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <Providers>
         <Navbar></Navbar>
        {children}
        <Footer></Footer>
       </Providers>
      </body>
    </html>
  );
}
