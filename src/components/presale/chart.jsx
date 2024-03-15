import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { global } from "~/common/global";
import LazyImage from "../lazyImage";

export default function Chart(props) {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="chart-bg w-[1020px] h-[540px] me-[13px] flex flex-col items-center mt-8 sm:mt-0">
                <div className="flex flex-col items-center font-bold text-[#ffffff] mt-6 w-full">
                    <div className="font-oi text-[#FF9B00] text-[30px] text-gradient-shadow-stroke-middle text-center">{t("LISTING PRICE")}</div>
                    <div className="text-2xl my-4"><span className="text-[#00ce2d]">0.11$</span> | {t("25/MARCH/2024")}</div>
                </div>
                <div className="flex flex-row-reverse sm:flex-row">
                    <LazyImage
                        src={`https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/other/chart1-a9JEwotItDWY9xQojj7JcVZmwkOrfL.webp`}
                        // onLoad={() => props.handleImageLoad()}
                        className="hidden sm:block w-[35rem] md:w-[45rem] lg:w-[50rem]"
                    />
                    <LazyImage
                        src={`https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/other/chart2-Jd3dmPIgzGW1PthaBc8xVaBIJe3uNS.webp`}
                        // onLoad={() => props.handleImageLoad()}
                        className="block sm:hidden w-[20rem]"
                    />
                    <div className="flex flex-col items-start justify-evenly font-bold text-gradient-shadow-stroke-middle text-[15px] md:text-[14px] lg:text-[16px]" style={{ filter: "none", WebkitTextStroke: "unset" }}>
                        <div className="">{t("LAUNCHED")}</div>
                        <div className="">{t("SOLD OUT")}</div>
                        <div className="">{t("SOLD OUT")}</div>
                        <div className="">{t("SOLD OUT")}</div>
                    </div>
                </div>
            </div>
            <img effect="black-and-white" draggable="false" src={`https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/characters/character-3-h2ibM9ks44m3DsyJUciGgE2I0QDPVy.webp`} alt="" className="absolute scale-x-[-1] sm:scale-100 bottom-0 sm:-bottom-20 left-[33rem] sm:left-[-23rem] w-[25rem] sm:w-[28rem]" />
        </>
    )
}