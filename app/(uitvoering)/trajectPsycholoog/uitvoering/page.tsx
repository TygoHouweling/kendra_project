import { Carousel } from "@/components/carousel";
import Image from "next/image";

export default function trajectPsycholoogUItvoering() {
    const files = [
        { src: "/images/trajectPsycholoog/traject_1.jpg", alt: "traject psycholoog bijlage 1" },
    ]
    return (
        <div className="mx-[10vw] mb-[5vh] gap-[3vh] flex flex-col min-h-full">
            <h1 className="text-xl bold">Traject Psycholoog</h1>
            <div className="flex flex-col gap-[2vh]">
                <p>
                    Ik heb 3 maanden lang een behandeltraject gevolgd bij een psycholoog voor mijn paniekstoornis. Tijdens dit behandeltraject lag de focus op het verminderen van mijn paniekklachten die voortkomen uit emetofobie en agarofobie. Mijn ervaring sluit aan bij leeruitkomst één en dan de specialisatie levensloop. Ik wil mijn behandeltraject samenvatten in een mini podcast, waarin ik vertel over het verloop van mij traject.
                </p>
                <p>Kijkwijzer docenten:</p>
                <p>Intro: 0:00 - 1:25</p>
                <p> Opdrachten in mijn behandeltraject: 2:30 - 2:50, 4:12 - 4:19</p>
                <p>
                    In verband met de beperkte nakijktijd, heb ik besloten om het bij deze fragmenten te laten wat betreft de kijkwijzer.
                </p>
                <audio controls src="/audiofiles/behandeltraject_podcast.mp4" />
                <Carousel images={files} />
            </div>
        </div>
    );
}
