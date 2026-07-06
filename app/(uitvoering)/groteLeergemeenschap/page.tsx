import { Carousel } from "@/components/carousel";
import Image from "next/image";

export default function groteLeergemeenschapUitvoering() {

    const images = [
        { src: "/images/groteLeergemeenschap/ferry_lost.png", alt: "Foto van ferry lost" },

    ]

    return (
        <div className="mx-[10vw] mb-[5vh] gap-[3vh] flex flex-col min-h-full">
            <h1 className="text-xl bold">Grote leergemeenschap</h1>
            <div className="flex flex-col gap-[2vh]">
                <p>
                    Dit semester werden er grote leergemeenschappen gehouden. Dit waren presentaties van gastsprekers of medestudenten. Deze grote leergemeenschappen kan je koppelen aan de leeruitkomst "je werkt aan het vormen en onderhouden van een leergemeenschap"
                </p>
                <p>
                    Voor deze grote leergemeenschappen was het belangrijk om aanwezig te zijn. Een enkele keer was ik niet aanwezig maar verder heb ik alle grote leergemeenschappen bijgewoond. Ik vond het vaak erg interessant om deze presentaties te zien. Degene die mij het meeste is bijgebleven is eentje van alzheimer Nederland. Dit ging over hoe je inclusief kan handelen naar mensen met alzheimer. Dit was voor mij erg relevant omdat ik meeliep bij een woonzorgcentrum waarbij ik in contact kwam met mensen die dementie of alzheimer kunnen hebben. Ik wist hierdoor beter hoe ik de bewoners kon afspreken en wat ik juist wel of juist niet moest doen. Een voorbeeld hiervan is dat je altijd maar één vraag tegelijk moet stellen.
                </p>
                <p>
                    Verder heb ik ook zelf een grote leergemeenschap moeten geven. Onze grote leergemeenschap ging over drugsmisbruik. Mijn taak was om een documentaire te kijken die betrekking had op dit onderwerp. Ik heb toen de documentaire ferry lost gekeken. Hieruit heb ik verschillende fragmenten gepakt om te laten zien aan de groep. Na het kijken van de fragmenten, ging ik met het publiek deze fragmenten bespreken aan de hand van twee vragen. Ik vond dit best spannend aangezien ik presenteren niet leuk vind, maar uiteindelijk ben ik trots op mezelf dat ik het heb gedaan. Hieronder is mijn dia te zien en welke vragen ik heb gesteld om op het publiek in te spelen.
                </p>

                <Carousel images={images}></Carousel>
            </div>
        </div>
    );
}
