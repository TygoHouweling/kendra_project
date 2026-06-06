import Image from "next/image";

export default function webinarWerkdrukUitvoering() {
    return (
        <div className="mx-[10vw] mb-[5vh] gap-[3vh] flex flex-col min-h-full">
            <h1 className="text-xl bold">Webinar Werkdruk</h1>
            <p>Ik ga een online webinar volgen genaamd "werkdruk en werkstress de baas", die gaat over psychosociale arbeidsbelasting (PSA) en hoe daarmee omgegaan kan worden als leidinggevende of preventiemedewerker. Deze webinar sluit aan bij de specialisatie arbeid en organisatie en laat zien dat ik mij hierin heb verdiept. Ik verwerk opgedane kennis in een mindmap.
            </p>
            <a href="/images/webinar_werkdrukEnWerkstress.png" download className="size-fit">
                <Image
                    src="/images/webinar_werkdrukEnWerkstress.png"
                    alt="mindmap webinar werkdruk en werkstress"
                    className="flex-1 rounded-xl shadow"
                    width="800"
                    height="800"
                    loading="eager"
                /></a>
        </div>
    );
}
