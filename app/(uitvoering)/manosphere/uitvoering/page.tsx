import { Carousel } from "@/components/carousel"

export default function manosphereUitvoering() {
    const files = [
        { src: "/images/manosphere/manosphere.png", alt: "inside the manosphere bijlage 1" },
    ]
    return (
        <div className="mx-[10vw] mb-[5vh] gap-[3vh] flex flex-col min-h-full">
            <h1 className="text-xl bold">Documentaire inside the manosphere</h1>
            <p>Ik ga op netflix een documentaire kijken genaamd Louis Theroux: Inside the manosphere. Tijdens de documentaire wil ik mijn inzichten vastleggen. De documentaire kan ik koppelen aan leeruitkomst één en dan de specialisatie toegepaste sociale psychologie. Ik verwerk mijn 5 belangrijkste inzichten in een lijstje.</p>
            <h4>Mijn 5 belangrijkste inzichten uit inside the manosphere</h4>
            <ol>
                <li>Sociale media kunnen denkbeelden versterken.</li>
                <li>Groepsgevoel heeft veel invloed op gedrag, vooral dat van jongeren.</li>
                <li>Online rolmodellen beïnvloeden normen en waarden.</li>
                <li>Polarisatie ontstaat vaak in onlinegemeenschappen, het welbekende wij-zij denken.</li>
                <li>Complexe maartschappelijk problemen hebben geen eenvoudige oplossing omdat ze vaak ook diepgeworteld zijn.</li>
            </ol>

            <Carousel images={files} />

        </div>
    )
}