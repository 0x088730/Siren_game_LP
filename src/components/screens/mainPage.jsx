import { LazyLoadImage } from "react-lazy-load-image-component";
import { ClickButton } from "../clickButton";
import { goUrl } from "../utils";
import { useTranslation } from "react-i18next";

const MainPage = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="relative overflow-hidden h-[750px] md:w-full xl:h-screen flex justify-center">
            <LazyLoadImage effect="black-and-white" draggable="false" src="assets/images/backgrounds/home.jpg" className="background-position-center-absolute w-[1300px] h-[935px] sm:w-[1920px] sm:h-[1270px] 2xl:w-full 2xl:h-full" />
            <div className="flex flex-col items-center w-[22rem] sm:w-[24rem] md:w-[26rem] lg:w-[26rem] xl:w-[30rem] translate-y-40">
                <div className="font-oi text-[#FF9B00] text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] 2xl:text-[90px] text-gradient-shadow-stroke text-center">{t("Play Soon")}</div>
                <div className="text-center px-16 mt-4 lg:mt-0 mb-12 lg:mb-16 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px]">{t("The first RPG gacha game on the blockchain")}</div>
                <ClickButton title={t("GET START")} className="w-60 sm:w-52 lg:w-[60%] h-20" onClick={() => goUrl("https://play.cryptoshowdown.io/")} />
            </div>
            <LazyLoadImage effect="black-and-white" draggable="false" src="assets/images/characters/character-1.gif" alt="" className="absolute left-0 bottom-[50px] w-[55%] sm:w-[42%]" />
            <LazyLoadImage effect="black-and-white" draggable="false" src="assets/images/characters/character-2.gif" alt="" className="absolute -right-4 bottom-[50px] w-[45%] sm:w-[36%]" />
        </div>
    );
}

export default MainPage;