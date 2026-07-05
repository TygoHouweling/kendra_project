import { CustomFooter } from "@/components/footer";
import { Knop } from "@/components/knop";
import { LeeruitkomstenTabel } from "@/components/leeruitkomstenTabel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const knoppen = [
    {
      title: "Leeruitkomsten",
      description: "Bekijk alles over mijn interperatie van de leeruitkomsten.",
      href: "/introductieLeeruitkomsten",
      color: "#e08484",
      image: "/leeruitkomsten.png",
      buttonCall: "Ga naar leeruitkomsten"
    },
    {
      title: "Uitvoering",
      description: "Bekijk alle praktijkervaringen en wat ik heb gedaan.",
      href: "/careIbu/uitvoering",
      color: "#92AC86",
      image: "/checklist.png",
      buttonCall: "Ga naar uitvoering"
    },
    {
      title: "Verantwoording",
      description: "Bekijk de verantwoording, reflectie en koppeling aan de leeruitkomsten.",
      href: "/careIbu/verantwoording",
      color: "#F089BB",
      image: "/brain.png",
      buttonCall: "Ga naar verantwoording"
    }
  ]
  return (
    <main className="flex justify-center flex-col">

      {/* <CustomHeader /> */}
      <CustomFooter />


      <div className="flex flex-col gap-[5vh] w-[80vw] w-full">
        <div className="flex justify-center">

          <div className="flex flex-col gap-2 justify-start mt-[5vh] items-center text-center px-8">
            <h1>
              TP2P02 Praktijkleren 2025-2026
            </h1>

            <div className="max-w-[70vw] mx-auto space-y-4 text-left leading-relaxed">
              <p>
                In deze showcase neem ik jullie mee in het werkveld van een toegepast
                psycholoog. Afgelopen semester ben ik de praktijk ingedoken, om te
                kijken wat ik met de opleiding kan en wil. Dit heb ik gedaan aan de
                hand van drie vragen die centraal stonden:
              </p>

              <ol type="1" className="list-decimal list-inside space-y-1 pl-2">
                <li>Hoe ziet het werkveld van een TP'er eruit?</li>
                <li>Wat is de toegevoegde waarde van de TP'er in het werkveld?</li>
                <li>Wat is jouw professionele rol daarbinnen?</li>
              </ol>

              <p>
                De vragen zijn beantwoord aan de hand van de zes leeruitkomsten, die
                weer zijn opgedeeld in verschillende bewijslasten. Aan de hand van de
                praktijkervaringen wil ik mijn laatste twee jaar van deze studie voor
                mijzelf beter in beeld brengen.
              </p>

              <p>
                In de tabel hieronder vind je een overzicht van de praktijkervaringen
                en de leeruitkomsten die ik daaraan gekoppeld heb.
              </p>
              <br />
              <p>
                Onder de tabel staan drie verschillende knoppen. De knop{" "}
                <strong>"leeruitkomsten"</strong> navigeert naar mijn visies van de
                zes verschillende leeruitkomsten. De knop <strong>"uitvoering"</strong>{" "}
                navigeert naar de bewijsstukken van de praktijkervaringen. De knop{" "}
                <strong>"verantwoording"</strong> navigeert naar de verdere
                onderbouwing bij de praktijkervaringen. De website is opgedeeld in de
                verschillende praktijkervaringen. Als je op uitvoering of
                verantwoording klikt, word je daarnaar doorgestuurd. Er komt dan links
                een menu tevoorschijn, en als je daarop klikt kan je makkelijk
                switchen tussen de verschillende praktijkervaringen en de
                bijbehorende uitvoeringen en verantwoordingen.
              </p>
            </div>
          </div>
        </div>

        <LeeruitkomstenTabel />
        <div className="flex flex-col items-center text-center">
          <h2>Kies wat je wilt bekijken</h2>

          <div className="flex justify-between pt-[3vh] w-[70vw] mb-[5vh] flex-col lg:flex-row gap-[2vh] lg:gap-[2vw]">
            {knoppen.map((knop) => (
              <Knop
                key={knop.href}
                title={knop.title}
                description={knop.description}
                href={knop.href}
                color={knop.color}
                image={knop.image}
                buttonCall={knop.buttonCall}
              />
            ))}
          </div>
        </div>


      </div>

    </main>
  );
}