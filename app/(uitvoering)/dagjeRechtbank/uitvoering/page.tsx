import Image from "next/image";

export default function dagjeRechtbankUItvoering() {
    return (
        <div className="mx-[10vw] mb-[5vh] gap-[3vh] flex flex-col min-h-full">
            <h1 className="text-xl bold">Dagje Rechtbank</h1>
            <p>
                Ik ga een ochtend kijken bij de rechtbank van Den Haag en een aantal rechtzaken bijwonen. Ik ga observeren hoe het eraan toe gaat tijdens en rechtzaak. Hiermee verdiep ik mij in de specialisatie preventie en aanpak van crimineel gedrag. Ik verwerk mijn dag in een mini strip, waarin staat wat ik heb geleerd en wat mij op viel.</p>
            <a href="/images/rechtbank_strip.png" download className="size-fit">
                <Image
                    src="/images/rechtbank_strip.png"
                    alt="mindmap webinar werkdruk en werkstress"
                    className="flex-1 rounded-xl shadow"
                    width="800"
                    height="800"
                    loading="eager"
                /></a>
        </div>
    );
}
