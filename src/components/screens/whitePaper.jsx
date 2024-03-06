import { useTranslation } from "react-i18next";
import { ClickButton } from "../clickButton";
import { goUrl } from "../utils";
import { LazyLoadImage } from "react-lazy-load-image-component";

const WhitePaper = () => {
    const { t, i18n } = useTranslation();

    return (
        <div id={t("WhitePaper")} className="relative md:w-full xl:h-[1202px] flex justify-center overflow-visible mt-[22rem] sm:mt-[18rem] lg:mt-[18rem] xl:mt-0">
            <LazyLoadImage effect="black-and-white" draggable="false" src="assets/images/backgrounds/whitepaper.jpg" className="background-position-center-absolute w-[1920px] h-[1200px] 2xl:w-full 2xl:h-full" />
            <LazyLoadImage effect="black-and-white" draggable="false" src="assets/images/tree1.png" alt="" className="absolute left-0 top-[-22.5rem] sm:top-[-20.5rem] md:top-[-20rem] xl:-top-8 w-1/2" />
            <LazyLoadImage effect="black-and-white" draggable="false" src="assets/images/tree2.png" alt="" className="absolute right-0 top-[-23rem] sm:top-[-21.5rem] xl:-top-20 w-[50.4%]" />
            <div className="relative w-[70rem] flex flex-col justify-start items-center translate-y-[-15rem] sm:translate-y-[-17rem] xl:translate-y-0">
                <img effect="black-and-white" draggable="false" src="assets/images/cloud.png" alt="" className="absolute translate-y-[3rem] md:translate-y-0 lg:translate-y-[-4rem] xl:translate-y-[-2rem]" />
                <LazyLoadImage effect="black-and-white" draggable="false" src="assets/images/white-book.png" alt="" className="my-32 z-10 translate-y-8 xl:translate-y-12" />
                <ClickButton title={t("WhitePaper")} className="w-1/2 md:w-[24rem] h-20 sm:h-24 md:h-24 uppercase z-10" onClick={() => goUrl('https://cryptoshowdawn.gitbook.io/untitled/')} />
            </div>
        </div>
    );
}

export default WhitePaper;

