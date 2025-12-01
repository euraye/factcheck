import type { Metadata } from "next";
import localFont from "next/font/local";
// @ts-ignore
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Footer from "@/components/footer";

const windowsXPTahoma = localFont({
  variable: "--font-windows-xp-tahoma",
  src: "./windows-xp-tahoma.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fact Check",
  description:
    "Enhancing Digital Literacy and Critical Thinking Through a Fact-Checking Simulation Game",
};

const DOWNLOAD_LINK = "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={`${windowsXPTahoma.className} antialiased`}>
        <SidebarProvider>
          <SidebarInset>
            <header className="fixed top-0 w-full grid grid-cols-3 h-20 shrink-0 items-center justify-items-center gap-2 border-b px-4 md:px-10 bg-[#383838] text-[#D9D9D9] z-100">
              <h1 className="text-3xl mr-auto text-white block text-nowrap">Fact Checking</h1>
              <nav className="lg:flex flex-row gap-16 text-3xl hidden">
                <Link href="/">Home</Link>
                <Link href="#about">About</Link>
                <Link href="#features">Features</Link>
                <Link href="#survey">Survey</Link>
              </nav>
              {DOWNLOAD_LINK ? (
                <Link href={DOWNLOAD_LINK} className="hidden lg:block ml-auto border border-white px-4 py-2 rounded text-white text-2xl hover:bg-white hover:text-black transition">
                  DOWNLOAD GAME
                </Link>
              ) : (
                <button disabled className="hidden lg:block ml-auto border border-gray-400 px-4 py-2 rounded text-gray-400 text-2xl cursor-not-allowed">
                  NOT YET AVAILABLE
                </button>
              )}
              <SidebarTrigger className="-mr-1 ml-auto rotate-180 lg:hidden col-span-2" />
            </header>
            <div className="mt-20">{children}</div>
            <Footer />
          </SidebarInset>
          <AppSidebar side="right" className="z-200"/>
        </SidebarProvider>
      </body>
    </html>
  );
}
