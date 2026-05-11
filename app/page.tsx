import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* Content */}
      <div className="flex">

        {/* Photo placeholder */}
        <Image
          src="/images/flower_green.png"
          alt="frontpage filler image"
          className="flex-1"
          width="600"
          height="600"
        />

        {/* Introduction */}
        <div className="flex flex-col gap-2 justify-start mt-[5vh] items-center flex-3 text-center">
          <h1>
            TP2P02 Praktijkleren 2025-2026
          </h1>

          <div>
            <p>
              In deze showcase neem ik jullie mee in het werkveld van een toegepast psycholoog. Afgelopen semester ben ik de praktijk ingedoken, om te kijken wat ik met de opleiding kan en wil.
            </p>
            <p>
              Verder heb ik mijzelf ontwikkeld als professional in het werkveld.
              Dit laat ik allemaal zien aan de hand van verschillende leeruitkomsten. Die weer zijn opgedeeld in verschillende bewijslasten.
              Aan de hand van deze praktijkervaringen wil ik mijn laatste twee jaar van deze studie voor mijzelf beter in beeld brengen.
            </p>
          </div>
        </div>

        <Image
          src="/images/flower_pink.png"
          alt="frontpage filler image"
          className="flex-1"
          width="600"
          height="600"
          loading="eager"
        />
      </div>

      {/* Footer */}
      <div className="flex justify-center flex-wrap gap-x-6 gap-y-1 bg-[#f1d5cc] py-[5vh] absolute bottom-0 w-full">
        <span className="text-sm text-[#888780]">Kendra Vonk</span>
        <span className="text-sm text-[#888780]">s1153738</span>
        <span className="text-sm text-[#888780]">
          Judith van Valkenhoef & Martina Geers-de Korte
        </span>
        <span className="text-sm text-[#888780]">Datum</span>
        <span className="text-sm text-[#888780]">Kans 1</span>
      </div>
    </main>
  );
}

