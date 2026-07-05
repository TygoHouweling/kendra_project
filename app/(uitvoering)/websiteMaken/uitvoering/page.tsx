import { Carousel } from "@/components/carousel";

export default function websiteMakenUitvoering() {
    const images = [
        { src: "/images/website/website_1.jpg", alt: "Foto student aan code" },
        { src: "/images/website/website_2.jpg", alt: "Foto van code" },
        { src: "/images/website/website_3.jpg", alt: "Foto van code" },
    ]
    return (
        <div className="mx-[10vw] mb-[5vh] gap-[3vh] flex flex-col min-h-full">
            <h1 className="text-xl bold">Website maken</h1>
            <p>
                Ik ga thuis een website bouwen samen met een student informatica om zo mijn showcase op een creatieve manier weer te geven, wat ik ook ga inleveren als eindproduct. Door samen te werken met een student uit een andere discipline laat ik zien dat ik professioneel kan samenwerken. Ik verwerk mijn opgedane kennis in de website waar dit op te lezen is en voeg foto's toen als bewijs dat ik eraan heb gezeten.
            </p>
            <p>
                De creatieve vorm die hierbij hoort is dus de website zelf.
            </p>
            <Carousel images={images} />
        </div>

    )
}