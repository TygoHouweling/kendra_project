import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#eaffe0]">

        <div className="w-full h-[20vh] bg-[#abd1a1] flex flex-col justify-between pt-[6vh] items-center">
          <h1 className="font-serif text-4xl font-normal text-[#2C2C2A] mb-1">
            TP2P02 Praktijkleren 2025-2026
          </h1>

          <div className="flex flex-wrap gap-x-6 gap-y-1 mb-6">
            <span className="text-sm text-[#888780]">Kendra Vonk</span>
            <span className="text-sm text-[#888780]">s1153738</span>
            <span className="text-sm text-[#888780]">Judith van Valkenhoef & Martina Geers-de Korte</span>
            <span className="text-sm text-[#888780]">Datum</span>
            <span className="text-sm text-[#888780]">Kans 1</span>
          </div>
        </div>
        {/* Header */}

      <div className="w-[90vw] mx-auto">

        <hr className="border-[#D3D1C7] mb-6" />

        {/* Content */}
        <div className="flex">

          {/* Photo placeholder */}
          <Image src="/images/frontpage.jpg" alt="frontpage filler image" className="rouded-xl" width="250" height="250"></Image>

          {/* Introduction */}
          <div className="flex flex-col gap-2">
            <label className="text-[11px] uppercase tracking-widest">
              Introductie
            </label>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, voluptas quo nobis sunt ratione voluptate ut illo deleniti nam sapiente. Quidem in, iure quo suscipit impedit nihil. Voluptatum, vel ad.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
