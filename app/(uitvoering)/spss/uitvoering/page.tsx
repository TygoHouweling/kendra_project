import { Carousel } from "@/components/carousel";
import Image from "next/image";

export default function spssUitvoering() {
    const images = [
        { src: "/images/spss/spss_1.png", alt: "spss_1" },
        { src: "/images/spss/spss_2.png", alt: "spss_2" },
        { src: "/images/spss/spss_3.png", alt: "spss_3" },
        { src: "/images/spss/spss_4.png", alt: "spss_4" },
    ]
    const images_2 = [
        { src: "/images/spss/spss_2_1.jpeg", alt: "spss_2_1" },
        { src: "/images/spss/spss_2_2.jpeg", alt: "spss_2_2" },
        { src: "/images/spss/spss_2_3.jpeg", alt: "spss_2_3" },
        { src: "/images/spss/spss_2_4.jpeg", alt: "spss_2_4" },
        { src: "/images/spss/spss_2_5.jpeg", alt: "spss_2_5" },
        { src: "/images/spss/spss_2_6.jpeg", alt: "spss_2_6" },
        { src: "/images/spss/spss_2_7.jpeg", alt: "spss_2_7" },
    ]
    return (
        <div className="mx-[10vw] mb-[5vh] gap-[3vh] flex flex-col min-h-full">
            <h1 className="text-xl bold">SPSS</h1>

            <div className=" gap-[2vh] flex flex-col">
                <p>
                    Afgelopen semester heb ik vier SPSS lessen gevolgd. Voor deze lessen heb ik artikelen moeten lezen en daarover vragen beantwoorden. Ook moest je een actieve deelname hebben in de les en individueel werken aan opdrachten. Door dit te doen toon ik groei aan in het toepassen van kwantitatieve data-analyse en beantwoord ik drie onderzoeksvragen met de geschikte, statistische technieken. Ook kan ik wetenschappelijke artikelen over kwantitatieve analyses begrijpen en kritische vragen stellen.
                </p>
                <p>
                    Hieronder staan een aantal foto's die mijn groei laten zien van kwantitatieve data-analyse en dat ik wetenschappelijke artikelen kan beantwoorden.
                </p>
                <Carousel images={images} />
                <p>
                    Voor de beschrijvende onderzoeksvraag had ik gekozen <i>"Wat is de gemiddelde leeftijd van een tweedejaars TP-student?"</i> Het antwoord hierbij was 20,67 jaar.
                </p>
                <p>
                    Als samenhangvraag had ik <i>"Is er een verband tussen leeftijd en plannen?" </i>Het antwoord was dat er geen samenhang blijkt te zijn (r=-0,115; p=0,141; n=164) tussen leeftijd en plannen
                </p>
                <p>
                    De verschil vraag was als volgt <i>"is er een verschil in uitstelgedrag tussen studenten die hun propedeuse hebben gehaald en die hem nog niet hebben gehaald?"</i> Het antwoord was dat er een significant verschil (t=2,201; df=162; p=0,029) is in uitstelgedrag tussen studenten die hun propedeuse hebben gehaald en die hem nog niet hebben gehaald.
                </p>
                <p>
                    Hieronder staan een aantal afbeeldingen die laten zien dat ik bezig was met spss. Deze afbeeldingen ondersteunen dat ik heb geleerd om verschillende stappen uit te voeren die uiteindelijk ervoor zorgden dat ik verschillende soorten vragen kan beantwoorden.
                </p>
                <Carousel images={images_2} />

            </div>
        </div>
    );
}
