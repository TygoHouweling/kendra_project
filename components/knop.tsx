import Image from "next/image";
import Link from "next/link";

export function Knop({ title, description, href, color, image, buttonCall }: { title: string; description: string; href: string; color: string; image: string; buttonCall: string }) {
    return (
        <div
            style={{ backgroundColor: `${color}33`, borderColor: color }}
            className="w-full lg:w-[30vw] gap-[2vh] shadow-xl rounded-xl border-3 border flex flex-col items-center py-[3vh] px-[2vw] text-center"
        >
            <div className="rounded-full shrink-0" style={{ backgroundColor: color }}>
                <Image src={image} width={80} height={80} alt="" />
            </div>
            <h4>{title}</h4>
            <p>{description}</p>
            <Link
                key={href}
                href={href}
                className="px-[2vw] py-[2vh] rounded-xl border border-2"
                style={{ backgroundColor: `${color}60`, borderColor: `${color}20` }}
            >
                {buttonCall}
            </Link>
        </div>
    )
}