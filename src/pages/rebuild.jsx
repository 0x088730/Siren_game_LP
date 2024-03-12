import { ClickButton } from "../components/clickButton";
import { goUrl } from "../components/utils";
import LazyImage from "../components/lazyImage";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18next from "~/global/i18n";

const Rebuild = (props) => {
    const { t, i18n } = useTranslation();

    return (
        <I18nextProvider i18n={i18next}>
            <div className="relative font-skranji text-white z-0">
                <div className="background-position-center-test w-[1920px] 2xl:w-full">
                    <div className="home-bg-test relative w-[1920px] 2xl:w-full h-[1080px] flex justify-center">
                        <div className="flex flex-col items-center w-[22rem] sm:w-[24rem] md:w-[26rem] lg:w-[26rem] xl:w-[30rem] translate-y-40">
                            <div className="font-oi text-[#FF9B00] text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] 2xl:text-[90px] text-gradient-shadow-stroke text-center">{t("Play Soon")}</div>
                            <div className="text-center px-16 mt-4 lg:mt-0 mb-12 lg:mb-16 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px]">{t("The first RPG gacha game on the blockchain")}</div>
                            <ClickButton title={t("GET START")} className="w-60 sm:w-52 lg:w-[60%] h-20" onClick={() => goUrl("https://play.cryptoshowdown.io/")} />
                        </div>
                        <LazyImage
                            src="assets/images/characters/character-1.png"
                            className="absolute left-0 bottom-[50px] w-[55%] sm:w-[40%]"
                        />
                        <LazyImage
                            src="assets/images/characters/character-2.png"
                            className="absolute -right-4 bottom-[50px] w-[45%] sm:w-[33%]"
                        />
                    </div>
                    <div className="white-bg-test relative w-[1920px] 2xl:w-full h-[3782px] mt-[-15rem] flex flex-col items-center justify-start">
                        <div className="font-oi translate-y-[25rem] text-[#FF9B00] text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] text-gradient-shadow-stroke"><span style={{ WebkitTextFillColor: "white" }}>{t("How to")}</span>{t(" play")}</div>
                        <div className="translate-y-[28rem] md:translate-y-[30rem] flex flex-col lg:flex-row gap-y-[3.5rem] md:gap-x-4">
                            <div className="relative w-[350px] sm:w-[330px] xl:w-[420px] h-[200px] sm:h-[230px] xl:h-[300px] flex flex-col justify-start items-center border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                                <div className="absolute top-[-3.5rem] sm:top-[-3.5rem] xl:top-[-5rem] w-[55%] sm:w-[66%] flex-center">
                                    <LazyImage
                                        src="assets/images/playImg1.png"
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="w-full h-full pt-16 sm:pt-20 xl:pt-24 p-4 xl:px-12 flex flex-col justify-start items-center rounded-lg" style={{ backgroundImage: "linear-gradient(340deg, #ff4d007a, transparent)" }}>
                                    <div className="text-[22px]">{t("FIGHT")}</div>
                                    <div className="text-center text-[14px] xl:text-[16px]">{t("When fighting, your characters become stronger, the higher your characters level , the more building improvements are available to you.")}</div>
                                </div>
                            </div>
                            <div className="relative w-[350px] sm:w-[330px] xl:w-[420px] h-[200px] sm:h-[230px] xl:h-[300px] flex flex-col justify-start items-center border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                                <div className="absolute top-[-3.5rem] sm:top-[-3.5rem] xl:top-[-5rem] w-[55%] sm:w-[66%] flex-center">
                                    <LazyImage
                                        src="assets/images/playImg2.png"
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="w-full h-full pt-16 sm:pt-20 xl:pt-24 p-4 xl:px-12 flex flex-col justify-start items-center rounded-lg" style={{ backgroundImage: "linear-gradient(340deg, #ff4d007a, transparent)" }}>
                                    <div className="text-[22px]">{t("BUILD")}</div>
                                    <div className="text-center text-[14px] xl:text-[16px]">{t("Upgrade buildings on your land to get resources and income. Wells give water to restore energy to the characters, buildings give resources and income, the wall protects your land.")}</div>
                                </div>
                            </div>
                            <div className="relative w-[350px] sm:w-[330px] xl:w-[420px] h-[200px] sm:h-[230px] xl:h-[300px] flex flex-col justify-start items-center border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                                <div className="absolute top-[-3.5rem] sm:top-[-3.5rem] xl:top-[-5rem] w-[55%] sm:w-[66%] flex-center">
                                    <LazyImage
                                        src="assets/images/playImg3.png"
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="w-full h-full pt-16 sm:pt-20 xl:pt-24 p-4 xl:px-12 flex flex-col justify-start items-center rounded-lg" style={{ backgroundImage: "linear-gradient(340deg, #ff4d007a, transparent)" }}>
                                    <div className="text-[22px]">{t("EARN")}</div>
                                    <div className="text-center text-[14px] xl:text-[16px]">{t("The higher your characters level, the better buildings are developed, the more you earn. Your income depends only on your achievements in the game.")}</div>
                                </div>
                            </div>
                        </div>
                        <LazyImage
                            src="assets/images/characters/character-5.png"
                            className="absolute left-16 sm:-left-16 md:left-[-9rem] xl:-left-64 top-[40rem] w-full sm:w-[55%]"
                        />
                        <LazyImage
                            src="assets/images/rock3.png"
                            className="absolute right-0 top-[75rem] w-[90%] sm:w-1/2"
                        />
                        <LazyImage
                            src="assets/images/tree.png"
                            className="absolute top-[90rem] w-full"
                        />
                    </div>
                    <div className="gem-bg-test relative w-[1920px] 2xl:w-full h-[1428px] mt-[-40rem] md:hidden">

                    </div>
                    <div className="earn-bg-test relative w-[1920px] 2xl:w-full h-[2404px] mt-[-40rem]">

                    </div>
                </div>
            </div>
        </I18nextProvider>
    );
}

export default Rebuild;