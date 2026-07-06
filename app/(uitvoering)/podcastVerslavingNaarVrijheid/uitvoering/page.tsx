import { Carousel } from "@/components/carousel";
import Image from "next/image";

export default function podcastVerslavingNaarVrijheidUItvoering() {

    const images = [
        { src: "/images/verslavingNaarVrijheid/verslavingNaarVrijheid.png", alt: "Foto over podcast verslaving naar vrijheid" },
    ]
    return (
        <div className="mx-[10vw] mb-[5vh] gap-[3vh] flex flex-col min-h-full">
            <h1 className="text-xl bold">Podcast van verslaving naar vrijheid</h1>
            <p>
                Ik ga een podcastaflevering luisteren van verslaving naar vrijheid. Ik wil meer leren over het leven van iemand die verslaafd is geweest. Deze ervaring kan ik koppelen aan leeruitkomst 1 en dan de specialisatie preventie en aanpak van crimineel gedrag. De informatie uit de podcast aflevering verwerk ik in een levenslijn.
            </p>

            <Carousel images={images} />

        </div>
    );
}
