import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center">

      {/* <div className="fixed left-0 top-0 h-full flex items-center pointer-events-none z-10">
        <Image
          src="/images/flower_green.png"
          alt="frontpage filler image"
          width="300"
          height="300"
          loading="eager"
        />
      </div>

      <div className="fixed right-0 top-0 h-full flex items-center pointer-events-none z-10">
        <Image
          src="/images/flower_pink.png"
          alt="frontpage filler image"
          width="300"
          height="300"
          loading="eager"
        />
      </div> */}

      <div className="flex flex-col gap-[5vh] w-[80vw]">
        <div className="flex justify-center">

          <div className="flex flex-col gap-2 justify-start mt-[5vh] items-center text-center px-8">
            <h1>
              TP2P02 Praktijkleren 2025-2026
            </h1>

            <div>
              <p>
                In deze showcase neem ik jullie mee in het werkveld van een toegepast psycholoog. Afgelopen semester ben ik de praktijk ingedoken, om te kijken wat ik met de opleiding kan en wil.
              </p>
              <p>
                Verder heb ik mijzelf ontwikkeld als professional in het werkveld.
                Dit laat ik allemaal zien aan de hand van verschillende leeruitkomsten, die weer zijn opgedeeld in verschillende bewijslasten.
                Aan de hand van deze praktijkervaringen wil ik mijn laatste twee jaar van deze studie voor mijzelf beter in beeld brengen.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2>Kies wat je wilt bekijken</h2>
          <div className="flex justify-between pt-[3vh] w-[70vw] mb-[5vh]">

            <div className="w-[30vw] gap-[2vh] bg-[#92AC86]/20 border-[#92AC86] shadow-xl rounded-xl border-3 border flex flex-col items-center py-[3vh] px-[2vw] text-center">
              <div className="rounded-full bg-[#92AC86] shrink-0">
                <Image src="/checklist.png" width={80} height={80} alt="" />
              </div>
              <h4>Uitvoering</h4>
              <p>Bekijk alle praktijkervaringen en wat ik heb gedaan.</p>
              <Link
                key=""
                href=""
                className="px-[2vw] py-[2vh] rounded-xl border border-2 border-[#92AC86]/20 bg-[#92AC86]/60 hover:bg-[#92AC86]"
              >
                Ga naar uitvoering
              </Link>
            </div>
            <div className="w-[30vw] gap-[2vh] bg-[#F18805]/20 border-[#F18805] shadow-xl rounded-xl border-3 border flex flex-col items-center py-[3vh] px-[2vw] text-center">
              <div className="rounded-full bg-[#F18805] shrink-0">
                <Image src="/brain.png" width={80} height={80} alt="" />
              </div>
              <h4>Verantwoording</h4>
              <p>Bekijk de verantwoording, reflectie en koppeling aan de leeruitkomsten.</p>
              <Link
                key=""
                href=""
                className="px-[2vw] py-[2vh] rounded-xl border border-2 border-[#F18805]/20 bg-[#F18805]/60 hover:bg-[#F18805]"
              >
                Ga naar verantwoording
              </Link>
            </div>
          </div>
        </div>
      </div>




    </main>
  );
}