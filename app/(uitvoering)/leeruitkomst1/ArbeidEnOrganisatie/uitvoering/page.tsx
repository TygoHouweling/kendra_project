import { CustomHeader } from "@/components/header";
import Image from "next/image";

export default function arbeidEnOrganisatie() {
    return (
        <div className=" mx-[10vw] mb-[5vh] gap-[3vh] flex flex-col min-h-full">
            <h1 className="text-xl bold">Arbeid en Organisatie</h1>
            <h2>Webinar werkdruk en werkstress de baas</h2>
            <p>Ik ga een online webinar volgen genaamd "werkdruk en werkstress de baas", die gaat over psychosociale arbeidsbelasting (PSA) en hoe daarmee omgegaan kan worden als leidinggevende of preventiemedewerker. Deze webinar sluit aan bij de specialisatie arbeid en organisatie en laat zien dat ik mij hierin heb verdiept. Ik verwerk opgedane kennis in een mindmap.
            </p>
            <div className="flex mx-[20vw]">

                <a href="/images/webinar_werkdrukEnWerkstress.png" download>
                    <Image
                        src="/images/webinar_werkdrukEnWerkstress.png"
                        alt="frontpage filler image"
                        className="flex-1 rounded-xl shadow"
                        width="600"
                        height="600"
                        loading="eager"
                    /></a>
            </div>
            <p>
                De webinar sluit aan bij de specialisatie arbeid en organisatie, omdat het gaat over mens en werk. Bij arbeid en organisatie is het doel om mensen te laten floreren in hun werk en organisatie. Dit kan dwarsgezeten worden door werkstress oftewel psychosociale arbeidsbelasting. In de webinar wordt hierop ingegaan, dus wat het inhoudt maar ook hoe hiermee omgegaan kan worden.
            </p>
            <p>
                Hoewel ik het interessant vond om meer te leren over werkstress en psychosociale arbeidsbelasting, merkte ik tijdens de webinar dat mijn interesse minder ligt bij het analyseren en begeleiden van stress- en welzijnsvraagstukken binnen organisaties. Ik vond het nuttig om kennis op te doen over dit onderwerp, maar ik merkte dat mijn motivatie en nieuwsgierigheid sterker uitgaan naar andere thema’s binnen de psychologie.
            </p>
        </div>
    );
}
