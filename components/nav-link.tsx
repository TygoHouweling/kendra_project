// components/nav-link.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`px-[1vw] py-[1vh] rounded-lg ${pathname === href ? "bg-brand-selected" : ""}`}
    >
      {label}
    </Link>
  );
}