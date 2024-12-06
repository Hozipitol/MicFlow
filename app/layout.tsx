import type { Metadata } from "next";
import "./globals.css";
import {Manrope} from "next/font/google"
import ConvexClerkProvider from "../providers/ConvexClerkProvider";
import AudioProvider from "@/providers/AudioProvider";

export const metadata: Metadata = {
  title: "MicFlow",
  description: "Smooth podcasting from mic to audience.",
  icons:{
    icon: "/icons/logo.svg",
  }
};
const manrope = Manrope({subsets: ["latin"]});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
    <html lang="en">
      <AudioProvider>
      <body
        className={`${manrope.className}`}>
        {children}
      </body>
      </AudioProvider>
    </html>
    </ConvexClerkProvider>
  );
}
