import { ClickButton } from "../clickButton";
import { goUrl } from "../utils";
import { useTranslation } from "react-i18next";
import LazyImage from "../lazyImage";
import { useEffect, useState } from "react";

const MainPage = (props) => {
    let imagesCount = 3;
    const { t, i18n } = useTranslation();
    const [loadedImages, setLoadedImages] = useState(0);
    const [gifLoad, setGifLoad] = useState(0);
    const [gifStatus, setGifStatus] = useState(false);

    useEffect(() => {
        if (loadedImages >= imagesCount) {
            props.setLoaded(true)
        }
    }, [loadedImages]);
    useEffect(() => {
        if (gifLoad >= 2) {
            setGifStatus(true)
        }
    }, [gifLoad]);

    const handleImageLoad = () => {
        setLoadedImages(prevState => prevState + 1);
    };
    const handleGifLoad = () => {
        setGifLoad(prevState => prevState + 1);
    };

    return (
        <div className={`video-size relative overflow-hidden md:w-full flex justify-center`}>
            <video
                src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/main-tX1scCmyaCXaLdhVrhXvWvYLXCW8Ou.mp4"
                className="background-position-center-absolute Video"
                autoPlay
                loop
                muted
            ></video>
            <div className="flex flex-col items-center w-[22rem] sm:w-[24rem] md:w-[26rem] lg:w-[26rem] xl:w-[30rem] translate-y-40 z-10">
                <div className="font-oi text-[#FF9B00] text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] 2xl:text-[90px] text-gradient-shadow-stroke text-center">{t("Play Now")}</div>
                <div className="text-center px-16 mt-4 lg:mt-0 mb-12 lg:mb-16 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px]">{t("The first RPG gacha game on the blockchain")}</div>
                <ClickButton title={t("GET START")} className="w-60 sm:w-52 lg:w-[60%] h-20" onClick={() => goUrl("https://play.cryptoshowdown.io/")} />
                <LazyImage
                    src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/other/buysell-w6TiuyO2v5ho9ZZk4wQvZao3GPraU6.webp"
                    className="w-60 sm:w-52 lg:w-[60%] mt-4 cursor-pointer"
                    onClick={() => goUrl("https://pancakeswap.finance/swap?outputCurrency=BNB&inputCurrency=0x6Bbf980b64a2b467559BEA94dD5bDF47daE67508")}
                />
            </div>
        </div >
    );
}

export default MainPage;