
"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { CustomLeeruiktkomstenSidebar, CustomOtherSidebar, CustomSidebar } from "@/components/sidebar";
import { useEffect, useState } from "react";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function evaluatieLayout({ children }: { children: React.ReactNode }) {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);
  
  return <div className="theme-evaluatie">
    <div>
      <div className="hidden lg:block">
        <CustomOtherSidebar onClose={() => { }} />
      </div>
      {isOpen && (
        <div className="lg:hidden">
          <CustomOtherSidebar onClose={() => setIsOpen(false)} />
        </div>
      )}
      <button
        className="lg:hidden bg-brand rounded-full p-3 absolute top-5 left-5 sticky"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src="/bars.svg" alt="Open menu" width={24} height={24} />
      </button>
      <div
        className={`lg:w-[85vw] ml-auto lg:pt-[2vh] pt-[10vh]`}
        onClick={() => { if (isOpen) setIsOpen(false); }}
      >
        {children}
      </div>
    </div>
  </div>;
}
