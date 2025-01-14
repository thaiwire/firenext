import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { Auth } from "firebase-admin/auth";
import { AutoProvider } from "../context/auth"; // Adjust the path as necessary
import AuthButtons from "@/components/auth-buttons";
import { HomeIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AutoProvider>
          <nav className="bg-sky-950 text-white p-5 h-24 flex items-center  justify-between">
            <Link
              href="/"
              className="text-3xl tracking-widest flex gap-2 items-center uppercase"
            >
              <HomeIcon size={32} />
              <span> Fire Home</span>
            </Link>
            <ul className="flex gap-6 items-center">
              <Link
                href="/property-search"
                className="uppercase tracking-widest hover:underline"
              >
                Property search
              </Link>
              <li>
                <AuthButtons />
              </li>
            </ul>
          </nav>
          {children}
        </AutoProvider>
      </body>
    </html>
  );
}
