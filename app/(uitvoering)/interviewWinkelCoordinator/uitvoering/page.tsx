import Image from "next/image";

export default function interviewWinkelCoordinatorUitvoering() {
    return (
        <div className="mx-[10vw] mb-[5vh] gap-[3vh] flex flex-col min-h-full">
            <h1 className="text-xl bold">Interview WinkelCoordinator</h1>
            <a href="/images/sollicitatie_albertheijn.png" download className="size-fit">
            {/* <a href="/images/sollicitatie_albertheijn.png" target="_blank" rel="noopener noreferrer" className="size-fit"> */}
                <Image
                    src="/images/sollicitatie_albertheijn.png"
                    alt="mindmap webinar werkdruk en werkstress"
                    className="flex-1 rounded-xl shadow"
                    width="800"
                    height="800"
                    loading="eager"
                /></a>
        </div>
    );
}
