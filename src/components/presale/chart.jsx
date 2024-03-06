import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { global } from "~/common/global";

export default function Chart() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="chart-bg w-[1020px] h-[540px] me-[13px] flex flex-col items-center mt-8 sm:mt-0">
                <div className="flex flex-col items-center font-bold text-[#ffffff] mt-6 w-full">
                    <div className="font-oi text-[#FF9B00] text-[30px] text-gradient-shadow-stroke-middle text-center">{t("LISTING PRICE")}</div>
                    <div className="text-2xl my-4"><span className="text-[#00ce2d]">0.11$</span> | {t("25/MARCH/2024")}</div>
                </div>
                <LazyLoadImage effect="black-and-white" draggable="false" src={`assets/images/chart1.png`} alt="" className="hidden sm:block w-[35rem] md:w-[45rem] lg:w-[52rem]" />
                <LazyLoadImage effect="black-and-white" draggable="false" src={`assets/images/chart2.png`} alt="" className="block sm:hidden w-[23rem]" />
            </div>
            <img effect="black-and-white" draggable="false" src={`assets/images/characters/character-3.png`} alt="" className="absolute scale-x-[-1] sm:scale-100 bottom-[-15rem] sm:-bottom-20 left-[33rem] sm:left-[-23rem] w-[25rem] sm:w-[28rem]" />
        </>
    )
}