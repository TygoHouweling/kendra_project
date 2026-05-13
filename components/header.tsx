"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
export function CustomHeader() {

    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const leeruitkomst1Items = [
        { label: "Arbeid en organisatie", href: "/leeruitkomst1/arbeidEnOrganisatie" },
        { label: "Levensloop", href: "/leeruitkomst1/levensloop" },
        { label: "Preventie en aanpak crimineel gedrag", href: "/leeruitkomst1/preventieEnAanpakCrimineelGedrag" },
        { label: "Toegepaste Sociale Psychologie", href: "/leeruitkomst1/toegepasteSocialePsychologie" },

    ];
    return (
        <div className="flex w-full gap-5 justify-center bg-[#f1d5cc] px-12 py-3">
            {/* Leeruitkomst 1 — dropdown */}
            <div className="flex gap-[3vw]">
                <div className="relative" ref={ref}>
                    <button
                        onClick={() => setOpen((o) => !o)}
                        className="flex items-center gap-1 hover:opacity-70 transition-opacity"
                    >
                        Leeruitkomst 1
                        <svg
                            width="12" height="12" viewBox="0 0 12 12" fill="none"
                            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                        >
                            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {open && (
                        <div className="absolute top-full left-0 mt-2 w-44 rounded-xl border border-[#D3D1C7]
                          bg-white shadow-sm py-1 z-50">
                            {leeruitkomst1Items.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="block px-4 py-2 text-sm text-[#2C2C2A] hover:bg-[#F1EFE8] transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                <Link href="/leeruitkomst2">Leeruitkomst 2</Link>
                <Link href="/leeruitkomst3">Leeruitkomst 3</Link>
            </div>
            <Link href="/">
            <Image
                      src="/images/logo_kendra.png"
                      alt="frontpage filler image"
                      className="flex-1"
                      width="85"
                      height="40"
                      loading="eager"
                    />
            </Link>
            <div className="flex gap-[3vw]">
                <Link href="/leeruitkomst4">Leeruitkomst 4</Link>
                <Link href="/leeruitkomst5">Leeruitkomst 5</Link>
                <Link href="/leeruitkomst6">Leeruitkomst 6</Link>
            </div>
        </div>
    )
}