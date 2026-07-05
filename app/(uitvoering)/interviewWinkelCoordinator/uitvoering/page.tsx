import { Carousel } from "@/components/carousel";
import Image from "next/image";

export default function interviewWinkelCoordinatorUitvoering() {

    const images = [
        { src: "/images/interviewWinkelCoordinator/interview_1.png", alt: "Interview Winkelcoordinator - gesprek" },
    ]
    return (
        <div className="mx-[10vw] mb-[5vh] gap-[3vh] flex flex-col min-h-full">
            <h1 className="text-xl bold break-all">Interview WinkelCoordinator</h1>
            <div className="flex flex-col gap-[2vh]">
                <p>
                    Ik ga samen met een medestudent, via teams, een interview afnemen bij een winkelcoördinator van de Albert Heijn. Ik wil meer te weten komen over haar functie en hoe ze bijvoorbeeld gesprekken en sollicitaties aanpakt. Door het afleggen van dit interview werk ik aan leeruitkomst één specialisatie arbeid en organisatie, ook werk ik ook leeruitkomst twee door professioneel samen te werken met een medestudent. Ik verwerk het interview in een samenvatting en voeg een foto toe als bewijs. 
                </p>
                <Carousel images={images} />
                <p>
                    <i>
                        Achtergrond informatie
                    </i>
                </p>
                <p>
                    Dana is op dit moment een winkelcoördinator bij de Albert Heijn is Boskoop. Haar loopbaan in de Albert Heijn gaat terug naar 2015. In dat jaar begon ze als kassamedewerker bij de AH Ridderhof in Alphen aan den Rijn. Snel groeide ze door als servicebalie medewerker (caissière B), waarbij haar taken onder andere waren om sigaretten te verkopen en ruilingen verwerken. Dit heeft ze 5,5 jaar gedaan waarna ze doorgroeide als shiftleider service. Binnen die rol mocht ze veel verschillende leidinggevende taken uitvoeren zoals roosters maken en het serviceteam aansturen. Na 1,5 jaar groeide ze door als manager service. In de tussentijd haalde Dana haar masterdiploma en besloot ze als adviseur duurzaamheid aan de slag te gaan bij een ander bedrijf en de AH achter zich te laten. Uiteindelijk bleek ze dit toch niet leuk genoeg te vinden en keerde ze terug naar de Albert Heijn maar dan als winkelcoördinator in Boskoop. Binnen deze rol heeft ze verantwoordelijk over alle afdelingen; service, vers en operatie.
                </p>
                <p>
                    <i>
                        Taken van een winkelcoördinator
                    </i>
                </p>
                <p>
                    Dana haar werkdag begint altijd met het maken van een to-do-lijstje, zodat ze weet wat ze die dag allemaal wil en moet gaan uitvoeren. Bij het maken van haar to-do-lijstjes houdt ze rekening met de vaste taken die gedaan moeten worden. Dit houdt in het maken van roosters en het uitvoeren van de dagelijkse processen. Dana vindt een goede taakverdeling erg belangrijk, omdat een verkeerde of onvolledige planning kan zorgen voor chaos tijdens de drukke momenten. Dit zorgt uiteindelijk weer voor slechte resultaten en het niet behalen van targets. Hierdoor stuurt zij bij waar nodig en is ze zelf ook aanwezig op de werkvloer en niet alleen achter op kantoor. Verder vindt ze het belangrijk om echt een aanspreekpunt te zijn in de winkel. Persoonlijk contact is iets wat hoog bij haar staat. Elke dag doet ze ook meerdere malen een rondje bij de medewerkers om te kijken hoe het met iedereen gaat.
                </p>
                <p>
                    <i>
                        Team aansturen en motiveren
                    </i>
                </p>
                <p>
                    Dana gaf aan dat ze transparantie en betrokkenheid erg belangrijk vindt binnen het team. Ze gelooft erin dat dit erg belangrijk is voor een goede en soepele samenwerking. Ook probeert ze haar team te stimuleren en te motiveren door hen mee te nemen in (nieuwe) processen en deze ook grondig uit te leggen. Dit doet ze door teamavonden te organiseren of door uitleg appjes te sturen in de AH app. Ook vraagt ze regelmatig aan medewerkers hoe zij over bepaalde onderwerpen denken, zodat hun ook wat regie in handen hebben.
                </p>
                <p>
                    Soms merkt ze dat er medewerkers zijn die minder motivatie hebben. Dit pakt ze aan door een open gesprek waarbij ze benoemt wat ze ziet en vraagt waarom dit gedrag getoond wordt. De reden zijn vaak verschillend, maar geeft voor haar wel meer inzicht en daardoor kan ze er ook meer rekening mee houden. Wel maakt ze afspraken over welk gedrag ze eigenlijk wilt zien. Na enige tijd gaat ze observeren en als het slechte gedrag zich blijft herhalen, voert ze een gesprek op kantoor op dieper op het onderwerp in te gaan. 
                </p>
                <p>
                    Dana heeft haar gespreksvoering geleerd door verschillende trainingen die aangeboden worden vanuit de AH. Bij zulke trainingen komen meerdere leidinggevenden samen, om casussen en rollenspellen uit te voeren. Ook worden er vanuit de AH e-learnings aangeboden, die thuis of op kantoor gemaakt kunnen worden om zo meer te leren over gespreksvoering.
                </p>
                <p>
                    <i>
                        Afsluiting
                    </i>
                </p>
                <p>
                    Als laatst gaf Dana aan dat ze erachter is gekomen dat ze niet alles zelf hoeft te doen. Voorheen had ze altijd het idee dat ze alles zelf moest oplossen, maar tegenwoordig weet ze ook dat ze kan terugvallen op haar mede winkelcoördinator en haar medewerkers. Hierbij gaf ze aan dat het oke is om soms taken uit handen te leggen, dit vergroot alleen maar het vertrouwen binnen het team. Verder heeft ze als advies aan toekomstige leidinggevenden dat je altijd jezelf moet blijven. Je weet zelf het best wie je bent en hoe jij het beste leiding kan geven. Ook geeft ze aan dat het belangrijk is om niet alleen te focussen op wat slecht gaat, maar dat complimenten net zo vaak of misschien wel vaker gegeven mogen worden. Het belangrijkste aan het werk is toch het plezier hebben in je werk. Zonder plezier functioneert een team niet.
                </p>
            </div>
        </div>
    );
}
