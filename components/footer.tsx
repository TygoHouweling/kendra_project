

"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
export function CustomFooter() {

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
            <span className="text-sm text-[#888780]">Kendra Vonk</span>
            <span className="text-sm text-[#888780]">s1153738</span>
            <span className="text-sm text-[#888780]">
                Judith van Valkenhoef & Martina Geers-de Korte
            </span>
            <span className="text-sm text-[#888780]">Datum</span>
            <span className="text-sm text-[#888780]">Kans 1</span>
        </div>
    )
}