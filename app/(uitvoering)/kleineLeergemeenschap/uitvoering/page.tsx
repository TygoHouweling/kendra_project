import { Carousel } from "@/components/carousel"

export default function kleineLeergemeenschapUitvoering() {

    const images = [
        { src: "/images/kleineLeergemeenschap/kleine_leergemeenschap_1.jpg", alt: "kleine_leergemeenschap_1" },
        { src: "/images/kleineLeergemeenschap/kleine_leergemeenschap_2.jpg", alt: "kleine_leergemeenschap_2" },
        { src: "/images/kleineLeergemeenschap/kleine_leergemeenschap_3.jpg", alt: "kleine_leergemeenschap_3" },
        { src: "/images/kleineLeergemeenschap/kleine_leergemeenschap_4.jpg", alt: "kleine_leergemeenschap_4" },
        { src: "/images/kleineLeergemeenschap/kleine_leergemeenschap_5.jpg", alt: "kleine_leergemeenschap_5" },
        { src: "/images/kleineLeergemeenschap/kleine_leergemeenschap_6.jpg", alt: "kleine_leergemeenschap_6" },
        { src: "/images/kleineLeergemeenschap/kleine_leergemeenschap_7.jpg", alt: "kleine_leergemeenschap_7" },
        { src: "/images/kleineLeergemeenschap/kleine_leergemeenschap_8.jpg", alt: "kleine_leergemeenschap_8" },
        { src: "/images/kleineLeergemeenschap/kleine_leergemeenschap_9.jpg", alt: "kleine_leergemeenschap_9" },
        { src: "/images/kleineLeergemeenschap/kleine_leergemeenschap_10.jpg", alt: "kleine_leergemeenschap_10" },
        { src: "/images/kleineLeergemeenschap/kleine_leergemeenschap_11.jpg", alt: "kleine_leergemeenschap_11" },
        { src: "/images/kleineLeergemeenschap/kleine_leergemeenschap_12.jpg", alt: "kleine_leergemeenschap_12" },
        { src: "/images/kleineLeergemeenschap/kleine_leergemeenschap_13.jpg", alt: "kleine_leergemeenschap_13" },
    ]

    const images_2 = [
        { src: "/images/kleineLeergemeenschap/kleine_leergemeenschap_2_1.jpg", alt: "kleine_leergemeenschap_2_1" },
        { src: "/images/kleineLeergemeenschap/kleine_leergemeenschap_2_2.jpg", alt: "kleine_leergemeenschap_2_2" },
        { src: "/images/kleineLeergemeenschap/kleine_leergemeenschap_2_3.jpg", alt: "kleine_leergemeenschap_2_3" },
    ]

    const feedback = [
        {
            src: "/images/kleineLeergemeenschap/feedback_medestudent.png", alt: "feedback"
        }
    ]
    return (
        <div className="mx-[10vw] mb-[5vh] gap-[3vh] flex flex-col min-h-full">
            <h1 className="text-xl bold">Care Ibu/ woonzorgcentrum de Ingelanden</h1>
            <div className="flex flex-col gap-[2vh]">
                <p>
                    Afgelopen semester heb ik voor het project Praktijkleren deel uitgemaakt van een kleine leergemeenschap. Deze kleine leergemeenschap bestond uit de halve klas. Binnen de kleine leergemeenschap heb ik gewerkt aan de leeruitkomst 6 ''je werkt aan het vormen en onderhouden van een leergemeenschap''. Hieronder neem ik jullie mee in alle dingen die ik heb uitgevoerd om deze leeruitkomst te waarborgen.
                </p>
                <p>
                    Als eerst wil ik ingaan om mijn aanwezigheid, aangezien dit bijdraagt aan het vormen en onderhouden van een leergemeenschap. Mijn aanwezigheid is hieronder te vinden in een tabel.
                </p>
                <table className="text-center">
                    <thead>
                        <tr>
                            <th>Projectles</th>
                            <th>Aanwezigheid</th>
                            <th>Reden</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Week 1</td>
                            <td>Aanwezig</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Week 2</td>
                            <td>Aanwezig</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Week 3</td>
                            <td>Afwezig</td>
                            <td>Ziekte</td>
                        </tr>
                        <tr>
                            <td>Week 4</td>
                            <td>Aanwezig</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Week 5</td>
                            <td>Aanwezig</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Week 6</td>
                            <td>Aanwezig</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Week 7</td>
                            <td>Aanwezig</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Week 8</td>
                            <td>Aanwezig</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Week 9</td>
                            <td>Aanwezig</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Week 10</td>
                            <td>Aanwezig</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Week 11</td>
                            <td>Vrij</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Week 12</td>
                            <td>Afwezig</td>
                            <td>Ziekte</td>
                        </tr>
                        <tr>
                            <td>Week 13</td>
                            <td>Aanwezig</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Week 14</td>
                            <td>Aanwezig</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Week 15</td>
                            <td>Aanwezig</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    Verder heb ik samen met een andere student een aantal keren wat onderdelen uit de lessen moeten presenteren. We hebben samen een check-in, check-out, energizer en een leeruitkomst moeten presenteren die ging over inclusie. De opzet van deze onderdelen heb ik hieronder toegevoegd.
                </p>
                <p>
                    Check-in:
                </p>
                <ul>
                    <li>Een student gaat staan en benoemt een stelling. </li>
                    <li>Mee eens? Ga ook staan! </li>
                    <li>De beurt wordt doorgegeven aan iemand die zit. </li>
                    <li>Denk bijvoorbeeld aan: </li>
                    <ul>
                        <li>
                            Hoe zit je er vandaag bij?
                        </li>
                        <li>
                            Waar kijk je naar uit?
                        </li>
                        <li>
                            Waar kijk je tegenop?
                        </li>
                    </ul>
                </ul>
                <p>
                    Check-out:
                </p>
                <ul>
                    <li>Iedereen schrijft een (gek) feitje over zichzelf op een briefje. </li>
                    <li>De briefjes worden verzameld. </li>
                    <li>Een aantal feitjes worden voorgelezen, de klas moet raden bij wie het feitje hoort.</li>
                </ul>
                <p>
                    PowerPoint presentatie over inclusie:
                </p>
                <Carousel images={images} />
                <p>
                    Er heeft in dit semester ook meerdere malen een show and share plaatsgevonden. Tijdens de show en share kreeg je feedback van je docenten maar ook je medestudenten. Ook kon je andere studenten feedback gegeven. Dit heb ik gedaan zodat ik mijn bijdrage aan de kleine leergemeenschap kan aantonen. De foto's hiervan heb i toegevoegd
                </p>
                <Carousel images={images_2} />
                <p>
                    Als laatst heb ik ook feedback gegeven aan een medestudent en heb ik ook feedback van deze student teruggekregen. Een screenshot van de gekregen feedback staat hieronder.
                </p>
                <Carousel images={feedback} />

            </div>
        </div>
    )
}