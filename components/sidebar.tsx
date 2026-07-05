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
            title: "CareIbu/ woonzorgcentrum de Ingelanden",
            links: [
                { href: "/careIbu/uitvoering", label: "Uitvoering" },
                { href: "/careIbu/verantwoording", label: "Verantwoording" },
            ],
        },
        {
            title: "Interview winkel coördinator Albert Heijn",
            links: [
                { href: "/interviewWinkelCoordinator/uitvoering", label: "Uitvoering" },
                { href: "/interviewWinkelCoordinator/verantwoording", label: "Verantwoording" },
            ],
        },
        {
            title: "Meekijken bij sollictatie gesprek",
            links: [
                { href: "/meekijkenSollicitatie/uitvoering", label: "Uitvoering" },
                { href: "/meekijkenSollicitatie/verantwoording", label: "Verantwoording" },
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
            title: "Behandeltraject psycholoog angststoornis",
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
            title: "Website maken",
            links: [
                { href: "/websiteMaken/uitvoering", label: "Uitvoering" },
                { href: "/websiteMaken/verantwoording", label: "Verantwoording" },
            ],
        },
        {
            title: "Documentaire inside the manosphere",
            links: [
                { href: "/manosphere/uitvoering", label: "Uitvoering" },
                { href: "/manosphere/verantwoording", label: "Verantwoording" },
            ],
        },
        {
            title: "Blik op jezelf test",
            links: [
                { href: "/blikOpJezelfTest/uitvoering", label: "Uitvoering" },
                { href: "/blikOpJezelfTest/verantwoording", label: "Verantwoording" },
            ],
        },
        {
            title: "Boek 'gegijzeld'",
            links: [
                { href: "/boekGegijzeld/uitvoering", label: "Uitvoering" },
                { href: "/boekGegijzeld/verantwoording", label: "Verantwoording" },
            ],
        },
        {
            title: "Gesprek vriendin over geloof",
            links: [
                { href: "/gesprekVriendinGeloof/uitvoering", label: "Uitvoering" },
                { href: "/gesprekVriendinGeloof/verantwoording", label: "Verantwoording" },
            ],
        },
        {
            title: "CV opstellen",
            links: [
                { href: "/cvOpstellen/uitvoering", label: "Uitvoering" },
                { href: "/cvOpstellen/verantwoording", label: "Verantwoording" },
            ],
        },
        {
            title: "Gesprek inburgering",
            links: [
                { href: "/gesprekInburgering/uitvoering", label: "Uitvoering" },
                { href: "/gesprekInburgering/verantwoording", label: "Verantwoording" },
            ],
        },
        {
            title: "Observeren ongeluk",
            links: [
                { href: "/observerenOngeluk/uitvoering", label: "Uitvoering" },
                { href: "/observerenOngeluk/verantwoording", label: "Verantwoording" },
            ],
        },
        {
            title: "Podcast van verslaving naar vrijheid",
            links: [
                { href: "/podcastVerslavingNaarVrijheid/uitvoering", label: "Uitvoering" },
                { href: "/podcastVerslavingNaarVrijheid/verantwoording", label: "Verantwoording" },
            ],
        },
        {
            title: "SPSS",
            links: [
                { href: "/podcastVerslavingNaarVrijheid/uitvoering", label: "Uitvoering" },
                { href: "/podcastVerslavingNaarVrijheid/verantwoording", label: "Verantwoording" },
            ],
        },


    ];
    return (
        <div ref={ref} className="flex flex-col w-[50vw] lg:w-[20vw] text-wrap lg:max-w-[20vw] h-full gap-5 pt-[10vh] lg:pt-[2vh] bg-brand pl-[5vw] lg:pl-[2vw] py-3 fixed top-0 z-40 overflow-y-auto">
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

export function CustomLeeruiktkomstenSidebar({ onClose }: Props) {
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
            title: "Introductie leeruikomsten",
            links: [
                { href: "/introductieLeeruitkomsten", label: "Introductie leeruitkomsten" },
            ],
        },
        {
            title: "Leeruitkomst 1",
            links: [
                { href: "/leeruitkomst1", label: "Leeruitkomst 1" },
            ],
        },
        {
            title: "Leeruitkomst 2",
            links: [
                { href: "/leeruitkomst2", label: "Leeruitkomst 2" },
            ],
        }, {
            title: "Leeruitkomst 3",
            links: [
                { href: "/leeruitkomst3", label: "Leeruitkomst 3" },
            ],
        }, {
            title: "Leeruitkomst 4",
            links: [
                { href: "/leeruitkomst4", label: "Leeruitkomst 4" },
            ],
        }, {
            title: "Leeruitkomst 5",
            links: [
                { href: "/leeruitkomst5", label: "Leeruitkomst 5" },
            ],
        }, {
            title: "Leeruitkomst 6",
            links: [
                { href: "/leeruitkomst6", label: "Leeruitkomst 6" },
            ],
        }
    ];
    return (
        <div ref={ref} className="flex flex-col w-[50vw] lg:w-[20vw] text-wrap lg:max-w-[20vw] h-full gap-5 pt-[10vh] lg:pt-[2vh] bg-brand pl-[5vw] lg:pl-[2vw] py-3 fixed top-0 z-40 overflow-y-auto">
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
                    {section.links.map(({ href, label }) => (
                        <NavLink key={href} href={href} label={label} />
                    ))}
                </div>
            ))}
        </div>
    )
}