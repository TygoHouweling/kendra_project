"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavLink } from "./nav-link";

export function CustomSidebar() {

    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const sections = [
        {
            title: "Leeruitkomst 1 Arbeid & organisatie",
            links: [
                { href: "/leeruitkomst1/ArbeidEnOrganisatie/uitvoering", label: "Uitvoering" },
                { href: "/leeruitkomst1/ArbeidEnOrganisatie/verantwoording", label: "Verantwoording" },
            ],
        },
        {
            title: "Leeruitkomst 1 Levensloop",
            links: [
                { href: "/leeruitkomst1/Levensloop/uitvoering", label: "Uitvoering" },
                { href: "/leeruitkomst1/Levensloop/verantwoording", label: "Verantwoording" },
            ],
        },
    ];
    return (
        <div className="flex flex-col w-[20vw] text-wrap max-w-[20vw] h-full gap-5 pt-[10vh] bg-brand px-12 py-3 fixed top-0 z-40">
            <NavLink key="/" href="/" label="Terug naar start" />

            {sections.map((section) => (
                <div key={section.title} className="flex flex-col gap-2">
                    <p className="font-bold">{section.title}</p>
                    {section.links.map(({ href, label }) => (
                        <NavLink key={href} href={href} label={label} />
                    ))}
                </div>
            ))}
        </div>
    )
}