import Image from "next/image";

export default function careIbuUitvoering() {
    return (
        <div className="mx-[10vw] mb-[5vh] gap-[3vh] flex flex-col min-h-full">
            <h1 className="text-xl bold">Care Ibu</h1>
            <p>
                Ik ga bij woonzorgcentrum de Ingelanden meerdere keren meelopen op de maandag en daar helpen bij de activiteiten en een 1 op 1 maatje begeleiden. Dit doe ik om mij te oriënteren op de specialisatie levensloop. Ik verwerk mijn dagen en ervaringen in een logboek.
            </p>
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
                        <td><p>Kennismaking gehad en een snelle rondleiding</p></td>
                        <td>
                            <p></p>
                        </td>
                    </tr>
                    <tr className="bg-[#f7ede4] border-b-1">
                        <td><p>Maandag 30 maart</p></td>
                        <td><p>Ochtend een documentaire gekeken. In de middag koekjes versieren met de ouderen en kletsen, ook gebruik gemaakt van de beleef tv en geheugenspelletjes gespeeld.</p></td>
                        <td>
                            <p></p>
                        </td>
                    </tr>
                    <tr className="bg-[#f7ede4] border-b-1">
                        <td><p>Maandag 13 april</p></td>
                        <td><p>In de ochtend vragenspelletjes gedaan met wat ouderen in mijn eentje. In de middag cakejes gebakken voor de bewoners.</p></td>
                        <td>
                            <p></p>
                        </td>
                    </tr>
                    <tr className="bg-[#f7ede4] border-b-1">
                        <td><p>Maandag 20 april</p></td>
                        <td><p>In de ochtend op de duofiets mijn maatje G. In de middag worstenbroodjes gemaakt met de bewoners en ik heb de beleef tv gebruik en begeleiding gegeven bij memory spelen.</p></td>
                        <td>
                            <p></p>
                        </td>
                    </tr>
                    <tr className="bg-[#f7ede4] border-b-1">
                        <td><p>Maandag 4 mei</p></td>
                        <td><p>In de ochtend op de duofiets.</p></td>
                        <td>
                            <p></p>
                        </td>
                    </tr>
                    <tr className="bg-[#f7ede4]">
                        <td><p>Maandag 18 mei</p></td>
                        <td><p>In de ochtend op de duofiets. In de middag wafels versieren, beleef tv en muziek luisteren en zingen. </p></td>
                        <td>
                            <p></p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
