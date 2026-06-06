"use client";
import { useState, useRef, useEffect } from "react";
import { NavLink } from "./nav-link";

interface Props {
    onClose: () => void;
}

export function CustomSidebar({ onClose }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const scrollKey = "sidebar-scroll";
    const [open, setOpen] = useState(false);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                onClose();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);

    useEffect(() => {
        const saved = sessionStorage.getItem(scrollKey);
        if (saved && ref.current) {
            ref.current.scrollTop = parseInt(saved);
        }
    }, []);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const handler = () => sessionStorage.setItem(scrollKey, String(el.scrollTop));
        el.addEventListener("scroll", handler);
        return () => el.removeEventListener("scroll", handler);
    }, []);

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
        <div  ref={ref} className="flex flex-col w-[50vw] lg:w-[20vw] text-wrap lg:max-w-[20vw] h-full gap-5 pt-[10vh] lg:pt-[2vh] bg-brand pl-[5vw] lg:pl-[2vw] py-3 fixed top-0 z-40 overflow-y-auto">
            <button
                onClick={((onClose))}
                className="absolute top-4 right-4 text-xl leading-none lg:hidden"
                aria-label="Sluit menu"
            >
                X
            </button>
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