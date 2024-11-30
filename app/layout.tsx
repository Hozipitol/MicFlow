import type { Metadata } from "next";
import "./globals.css";
import {Inter} from "next/font/google"
import ConvexClerkProvider from "./providers/ConvexClerkProvider";

export const metadata: Metadata = {
  title: "MicFlow",
  description: "Smooth podcasting from mic to audience.",
  icons:{
    icon: "/icons/logo.svg",
  }
};
const inter = Inter({subsets: ["latin"]});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <ConvexClerkProvider>{children}</ConvexClerkProvider>
      </body>
    </html>
  );
}
