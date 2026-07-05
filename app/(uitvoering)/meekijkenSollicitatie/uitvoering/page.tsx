import { Carousel } from "@/components/carousel";
import Image from "next/image";

const images = [
    { src: "/images/meekijkenSollicitatie/albertheijn_1.jpg", alt: "Albertheijn training communicatie - luisteren scherm" },
    { src: "/images/meekijkenSollicitatie/albertheijn_2.jpg", alt: "Albertheijn training STARR interview scherm" },
]

export default function interviewWinkelCoordinatorUitvoering() {
    return (
        <div className="mx-[10vw] mb-[5vh] gap-[3vh] flex flex-col min-h-full">
            <h1 className="text-xl bold">Meekijken bij sollicitatie gesprek</h1>
            <p>Ik ga een sollicitatiegesprek bijwonen van de Albert Heijn voor de functie vakkenvuller. Ik ga observeren hoe de winkelcoördinator   dit gesprek aanpakt en vervolgens met hem erover in gesprek. Ik laat daarmee zien dat ik mij verdiep in de specialisatie arbeid en organisatie en mijn concrete meerwaarde herken als Toegepast Psycholoog. Ik verwerk mijn observaties in een poster.</p>
            <div className="flex justif-between">
                <a href="/images/sollicitatie_albertheijn.png" download className="size-fit">
                    {/* <a href="/images/sollicitatie_albertheijn.png" target="_blank" rel="noopener noreferrer" className="size-fit"> */}
                    <Image
                        src="/images/sollicitatie_albertheijn.png"
                        alt="mindmap webinar werkdruk en werkstress"
                        className="flex-1 rounded-xl shadow"
                        width="800"
                        height="800"
                        loading="eager"
                    /></a>

                <Carousel images={images} />
            </div>
        </div>
    );
}
