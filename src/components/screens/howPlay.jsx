import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HowPlay = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="relative flex flex-col items-center justify-start w-full h-[1519px] mt-[-18rem] sm:mt-[-15rem]">
            <LazyLoadImage effect="black-and-white" draggable="false" src="assets/images/backgrounds/howPlay.png" className="background-position-center-absolute translate-x-[6%] sm:translate-x-0 w-[1920px] h-[1519px] 2xl:w-full 2xl:h-full" />
            <div className="font-oi translate-y-[25rem] text-[#FF9B00] text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] text-gradient-shadow-stroke"><span style={{ WebkitTextFillColor: "white" }}>{t("How to")}</span>{t(" play")}</div>
            <div className="translate-y-[28rem] md:translate-y-[30rem] flex flex-col lg:flex-row gap-y-[3.5rem] md:gap-x-4">
                <div className="relative w-[350px] sm:w-[330px] h-[200px] sm:h-[230px] flex flex-col justify-start items-center border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                    <LazyLoadImage effect="black-and-white" draggable="false" src="assets/images/playImg1.png" alt="" className="absolute top-[-3.5rem] sm:top-[-3.5rem] w-[55%] sm:w-[66%]" />
                    <div className="w-full h-full pt-16 sm:pt-20 p-4 flex flex-col justify-start items-center rounded-lg" style={{ backgroundImage: "linear-gradient(340deg, #ff4d007a, transparent)" }}>
                        <div className="text-[22px]">{t("FIGHT")}</div>
                        <div className="text-center text-[14px]">{t("When fighting, your characters become stronger, the higher your characters level , the more building improvements are available to you.")}</div>
                    </div>
                </div>
                <div className="relative w-[350px] sm:w-[330px] h-[200px] sm:h-[230px] flex flex-col justify-start items-center border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                    <LazyLoadImage effect="black-and-white" draggable="false" src="assets/images/playImg2.png" alt="" className="absolute top-[-3.5rem] sm:top-[-3.5rem] w-[55%] sm:w-[66%]" />
                    <div className="w-full h-full pt-16 sm:pt-20 p-4 flex flex-col justify-start items-center rounded-lg" style={{ backgroundImage: "linear-gradient(340deg, #ff4d007a, transparent)" }}>
                        <div className="text-[22px]">{t("BUILD")}</div>
                        <div className="text-center text-[14px]">{t("Upgrade buildings on your land to get resources and income. Wells give water to restore energy to the characters, buildings give resources and income, the wall protects your land.")}</div>
                    </div>
                </div>
                <div className="relative w-[350px] sm:w-[330px] h-[200px] sm:h-[230px] flex flex-col justify-start items-center border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                    <LazyLoadImage effect="black-and-white" draggable="false" src="assets/images/playImg3.png" alt="" className="absolute top-[-3.5rem] sm:top-[-3.5rem] w-[55%] sm:w-[66%]" />
                    <div className="w-full h-full pt-16 sm:pt-20 p-4 flex flex-col justify-start items-center rounded-lg" style={{ backgroundImage: "linear-gradient(340deg, #ff4d007a, transparent)" }}>
                        <div className="text-[22px]">{t("EARN")}</div>
                        <div className="text-center text-[14px]">{t("The higher your characters level, the better buildings are developed, the more you earn. Your income depends only on your achievements in the game.")}</div>
                    </div>
                </div>
            </div>
            <LazyLoadImage effect="black-and-white" draggable="false" src="assets/images/characters/character-5.png" alt="" className="absolute left-16 sm:-left-16 md:left-[-9rem] xl:-left-64 -bottom-8 sm:bottom-0 xl:-bottom-24 w-full sm:w-[60%]" />
            <LazyLoadImage effect="black-and-white" draggable="false" src="assets/images/rock3.png" alt="" className="absolute right-0 -bottom-24 sm:-bottom-20 xl:-bottom-40 w-[90%] sm:w-1/2" />
        </div>
    );
}

export default HowPlay;