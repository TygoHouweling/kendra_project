import { Carousel } from "@/components/carousel";
import Image from "next/image";

export default function gesprekVriendinGeloofUitvoering() {

    return (
        <div className="mx-[10vw] mb-[5vh] gap-[3vh] flex flex-col min-h-full">
            <h1 className="text-xl bold">Gesprek vriendin over geloof</h1>
            <p>
                Ik heb een gesprek gehad met een vriendin over haar geloof en over haar eerste levensjaren in Somalië. Dit gesprek heeft mij meer inzichten gegeven over de diversiteit in Nederland en hoe hiermee omgegaan wordt. Deze praktijkervaring kan ik koppelen aan leeruitkomst één en dan de specialisatie toegepaste sociale psychologie en aan leeruitkomst vier je handelt professioneel naar diverse doelgroepen. Ik verwerk de onderwerpen die voor mij het meest schokkend waren in een video.
            </p>
            <div>
                <p>
                    Kijkwijzer video:
                </p>
                <p>
                    0:00 - 0:47
                </p>
                <p>
                    2:58 - 3:32
                </p>
            </div>
            <p>
                De kijkwijzer is erg kort, omdat er beperkte nakijktijd is. In de fragmenten van de kijkwijzer laat ik de intro zien en beschrijf ik een moment uit het gesprek waar ik van was geschrokken en wat mij erg is bij gebleven.
            </p>

            <video controls width="600">
                <source src="/videos/gesprek_vriendin_geloof_2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
