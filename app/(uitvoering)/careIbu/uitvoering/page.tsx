import { Carousel } from "@/components/carousel";
import Image from "next/image";

export default function careIbuUitvoering() {

    const images = [
        { src: "/images/careIbu/photo_duo_fiets.png", alt: "Foto van de duo fiets" },
        { src: "/images/careIbu/photo_outside.png", alt: "Foto van buiten met aantal bewoners (anoniem)" },
        { src: "/images/careIbu/photo_self_and_duofiets.png", alt: "Foto mijzelf en de duo fiets" },
    ]
    return (
        <div className="mx-[10vw] mb-[5vh] gap-[3vh] flex flex-col min-h-full">
            <h1 className="text-xl bold">Care Ibu/ woonzorgcentrum de Ingelanden</h1>
            <p>
                Ik ga bij woonzorgcentrum de Ingelanden 3 maanden meelopen en daar helpen bij de activiteiten op de maandagen en een 1 op 1 maatje begeleiden. Dit doe ik om mij te oriënteren op de specialisatie levensloop, om te leren hoe ik samenwerk met professionals, mijn concrete meerwaarde als Toegepast Psycholoog te ontdekken en om te leren hoe ik professioneel handen naar diverse doelgroepen. Ik verwerk mijn dagen en ervaringen in een logboek.             </p>
            <div className="overflow-x-auto w-full">
                <table className="table-auto rounded-xl border border-gray-200 overflow-hidden shadow-xl">
                    <colgroup>
                        <col className="w-[25%]" />
                        <col className="w-[37.5%]" />
                        <col className="w-[37.5%]" />
                    </colgroup>
                    <thead>
                        <tr className="bg-[#f1d5cc] border-b border-gray-200">
                            <th className="px-4 py-2.5 text-left text-m font-medium tracking-wide">
                                Dag
                            </th>
                            <th className="px-4 py-2.5 text-left text-m font-medium tracking-wide">
                                Wat heb ik gedaan?
                            </th>
                            <th className="px-4 py-2.5 text-left text-m font-medium tracking-wide">
                                Wat heb ik geleerd?
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-[#f7ede4] border-b-1">
                            <td><p>Donderdag 26 maart</p></td>
                            <td className="px-[1vw]"><p>Kennismaking gehad en een snelle rondleiding</p></td>
                            <td>
                                <p>
                                    Ik heb geleerd wat de begrippen NAH en PG inhouden.
                                </p>
                            </td>
                        </tr>
                        <tr className="bg-[#f7ede4] border-1">
                            <td><p>Maandag 30 maart</p></td>
                            <td className="px-[1vw]"><p>Ochtend een documentaire gekeken. In de middag koekjes versieren met de ouderen en kletsen, ook gebruik gemaakt van de beleef tv en geheugenspelletjes gespeeld.</p></td>
                            <td>
                                <p>
                                    Ik vond het heftig om sommige bewoners te zien, omdat sommigen niet eens konden communiceren of bewegen. Ik leerde dat je bij sommige bewoners je grenzen moet stellen.
                                </p>
                            </td>
                        </tr>
                        <tr className="bg-[#f7ede4] border-b-1">
                            <td><p>Maandag 13 april</p></td>
                            <td className="px-[1vw]"><p>In de ochtend vragenspelletjes gedaan met wat ouderen in mijn eentje. In de middag cakejes gebakken voor de bewoners.</p></td>
                            <td>
                                <p>
                                    Aan het begin wilde bijna niemand meedoen met het vragenspel, alleen één bewoner deed mee. Nadat de andere bewoners nog even de kat uit de boom keken, begonnen er steeds meer bewoners mee te spelen. Ik herkende dit patroon ook al van de vorige keer met de beleeftv. Wellicht dat de bewoners pas willen meedoen als ze een eigen keus hebben en niet als ze van alles voorgelegd krijgen.
                                </p>
                            </td>
                        </tr>
                        <tr className="bg-[#f7ede4] border-b-1">
                            <td><p>Maandag 20 april</p></td>
                            <td className="px-[1vw]"><p>In de ochtend op de duofiets mijn maatje G. In de middag worstenbroodjes gemaakt met de bewoners en ik heb de beleef tv gebruik en begeleiding gegeven bij memory spelen.</p></td>
                            <td>
                                <p>
                                    Ik heb vandaag aan G gevraagd wat hij fijn vindt met manier hoe ik om moet gaan met zijn vergeetachtigheid. Ik vroeg dit omdat ik dit uit een eerder gastcollege had geleerd. G gaf aan dat hij het vervelend vindt als mensen op een botte manier aangeven als hij al een keer iets heeft gezegd. Het liefst wil hij dat mensen op een normale en beleefde manier zeggen dat hij zichzelf herhaald.
                                </p>
                            </td>
                        </tr>
                        <tr className="bg-[#f7ede4] border-b-1">
                            <td><p>Maandag 4 mei</p></td>
                            <td className="px-[1vw]"><p>In de ochtend op de duofiets met G. In de middag cakejes versieren </p></td>
                            <td>
                                <p>
                                    Ik heb vandaag weer veel met G gekletst toen we aan het duofietsen waren. Ik leer steeds beter hoe ik om moet gaan met zijn vergeetachtigheid. Aan het begin maakte me het soms ongemakkelijk, maar ik merk steeds meer dat ik minder ongemak ervaar.
                                </p>
                            </td>
                        </tr>
                        <tr className="bg-[#f7ede4] border-b-1">
                            <td><p>Maandag 18 mei</p></td>
                            <td className="px-[1vw]"><p>In de ochtend op de duofiets. In de middag wafels versieren, beleef tv en muziek luisteren en zingen. </p></td>
                            <td>
                                <p>
                                    Tijdens de middag activiteit viel het mij op dat veel van de bewoners muziek wel goed kunnen herinneren. Ondanks dat ze veel dingen vergeten of niet meer kunnen herinneren, kunnen ze de songtekst van veel nummers wel met gemak meezingen ook herkennen ze de melodie. Ik vind dat heel mooi om te zien en wil hier meer onderzoek naar doen.
                                </p>
                                <p>
                                    Ook leerde ik dat als een bewoner naar buiten wil maar dat niet mag, je eerst moet wachten totdat deze bewoner weg is voordat je zelf naar buiten gaat.
                                </p>
                            </td>
                        </tr>
                        <tr className="bg-[#f7ede4] border-b-1">
                            <td><p>Maandag 1 juni</p></td>
                            <td className="px-[1vw]"><p>In de ochtend de voorbereiding voor de middag gedaan, want in de middag gingen we taartjes versieren.</p></td>
                            <td>
                                <p>
                                    Ik ging vandaag voor het eerst zelf bewoners ophalen voor de middagactiviteit. Ik moest hierbij een nieuwe vrijwilliger begeleiden. Dit keer liep ik ook tegen hetzelfde probleem aan als op 13 april. Ik merkte weer dat bewoners weerstand bieden als je ze iets voorlegt, ze willen een eigen keuze kunnen maken. Ook dit keer viel het mij op dat muziek en melodie goed blijft hangen bij de bewoners. Dit waren allemaal bewoners van de pg-afdeling, dus met dementie. Wellicht dat dementie de herinnering van muziek minder aantast? Ik wil hier meer onderzoek naar doen
                                </p>
                            </td>
                        </tr>
                        <tr className="bg-[#f7ede4]">
                            <td><p>Maandag 8 juni</p></td>
                            <td className="px-[1vw]"><p>We zijn met 4 begeleiders en 5 ouderen naar de Intratuin gegaan. Daar hebben we plantjes gekocht voor bij het woonzorgcentrum en ook hebben we daar geluncht. </p></td>
                            <td>
                                <p>
                                    Ik heb niet heel veel extra's geleerd deze dag, maar ik vond het vooral heel mooi om te zien hoe erg de ouderen aan het genieten waren. Ook waren ze erg dankbaar voor deze dag en spraken ze dit vaak uit. Ik vond het fijn om te zien dat zo'n activiteit zo veel voor iemand kan betekenen en dat ik daaraan heb kunnen bijdragen.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Carousel images={images} />
            </div>
        </div>
    );
}
