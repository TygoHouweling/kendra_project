import Image from "next/image";

export default function leeruitkomst2() {
  return (
    <div className="mx-[10vw] mb-[5vh]">
      <h1>Leeruitkomst 2</h1>
      <h2>Subkopje Leeruitkomst 2</h2>
      <div className="gap-[5vh] flex-col flex">
        <div className="flex flex-row justify-between gap-[5vw]">
          <Image
            src="/images/stock.jpg"
            alt="frontpage filler image"
            className="flex-1 rounded-xl shadow"
            width="400"
            height="400"
            loading="eager"
          />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, aut doloremque molestiae quia quod odit animi quidem unde, consequatur cum blanditiis, hic earum non minima mollitia fugiat dolores! Eveniet, error?</p>
        </div>
        <div className="flex flex-row-reverse justify-between gap-[5vw]">
          <Image
            src="/images/stock.jpg"
            alt="frontpage filler image"
            className="flex-1 rounded-xl shadow"
            width="400"
            height="400"
            loading="eager"
          />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, aut doloremque molestiae quia quod odit animi quidem unde, consequatur cum blanditiis, hic earum non minima mollitia fugiat dolores! Eveniet, error?</p>
        </div>
        <div className="flex flex-row justify-between gap-[5vw]">
          <video width="400" height="400" controls preload="eager" className="rounded-xl shadow">
            <source src="/videos/stock.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, aut doloremque molestiae quia quod odit animi quidem unde, consequatur cum blanditiis, hic earum non minima mollitia fugiat dolores! Eveniet, error?</p>
        </div>

      </div>

    </div>
  )
}
