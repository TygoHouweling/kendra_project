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
            title: "CareIbu",
            links: [
                { href: "/careIbu/uitvoering", label: "Uitvoering" },
                { href: "/careIbu/verantwoording", label: "Verantwoording" },
            ],
        },
        {
            title: "Interview winkel coördinator",
            links: [
                { href: "/interviewWinkelCoordinator/uitvoering", label: "Uitvoering" },
                { href: "/interviewWinkelCoordinator/verantwoording", label: "Verantwoording" },
            ],
        },
        {
            title: "Interview psycholoog",
            links: [
                { href: "/interviewPsycholoog/uitvoering", label: "Uitvoering" },
                { href: "/interviewPsycholoog/verantwoording", label: "Verantwoording" },
            ],
        },
        {
            title: "Traject psycholoog",
            links: [
                { href: "/trajectPsycholoog/uitvoering", label: "Uitvoering" },
                { href: "/trajectPsycholoog/verantwoording", label: "Verantwoording" },
            ],
        },
        {
            title: "Dagje rechtbank",
            links: [
                { href: "/dagjeRechtbank/uitvoering", label: "Uitvoering" },
                { href: "/dagjeRechtbank/verantwoording", label: "Verantwoording" },
            ],
        },
                {
            title: "Webinar werkdruk",
            links: [
                { href: "/webinarWerkdruk/uitvoering", label: "Uitvoering" },
                { href: "/webinarWerkdruk/verantwoording", label: "Verantwoording" },
            ],
        },
                {
            title: "Gesprek immigratie",
            links: [
                { href: "/gesprekImmigratie/uitvoering", label: "Uitvoering" },
                { href: "/gesprekImmigratie/verantwoording", label: "Verantwoording" },
            ],
        }

    ];
    return (
        <div className="flex flex-col w-[20vw] text-wrap max-w-[20vw] h-full gap-5 pt-[10vh] bg-brand px-12 py-3 fixed top-0 z-40 overflow-y-auto">
            <NavLink key="/" href="/" label="Terug naar start" />

            {sections.map((section) => (
                <div key={section.title} className="flex flex-col ">
                    <p className="font-bold">{section.title}</p>
                    {section.links.map(({ href, label }) => (
                        <NavLink key={href} href={href} label={label} />
                    ))}
                </div>
            ))}
        </div>
    )
}