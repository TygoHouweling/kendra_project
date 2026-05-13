import Image from "next/image";

export default function levensloop() {
    return (
        <div>
            <h1 className="text-xl bold">Leeruitkomst 1</h1>

            <div className="flex gap">
                <Image
                    className="dark:invert"
                    src="/next.svg"
                    alt="Next.js logo"
                    width={100}
                    height={20}
                    priority
                />
                <p>Hoi dit is mooie tekst</p>
            </div>

        </div>
    );
}
