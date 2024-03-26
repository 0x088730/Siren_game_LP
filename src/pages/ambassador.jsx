import { I18nextProvider, useTranslation } from "react-i18next";
import Header from "~/components/screens/header";
import { goUrl } from "~/components/utils";
import i18next from "~/global/i18n";
import LazyImage from "~/components/lazyImage";
import { useState } from "react";

const ambaData = [
  {
    avatar: "https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/member/amba1-XRRNUGjMcRDD6ATvKK9WLMVUQV4V5T.webp",
    name: "CLEM",
    yutube: "https://www.youtube.com/@ClemFF",
    telegram: "https://t.me/+iYQNojPNQzwyNmIx"
  },
  {
    avatar: "https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/member/amba2-CGWBBINfTjzQKqHc349KghVsnplgNA.webp",
    name: "REI DO NFT",
    yutube: "https://www.youtube.com/@ReidoNFT",
    telegram: "https://t.me/ReidoNFTs"
  },
  {
    avatar: "https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/member/amba3-8gLogfqbrvcfuK2myJOOA2zVXJI1su.webp",
    name: "BERKSUN CRYPTO",
    yutube: "https://www.youtube.com/@BerkayBerksun",
    telegram: "https://t.me/BBTRD"
  },
  {
    avatar: "https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/member/amba4-mH9Tn0yrcAmRCqFjSw8rkR0JH0CPCU.webp",
    name: "SALLE SRJ",
    yutube: "https://www.youtube.com/@SalleSRJnaWeb3",
    telegram: "https://t.me/+S9OAZijBav8yNzNh"
  },
  {
    avatar: "https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/member/amba5-H4NgftYACuo35sfBAgSNrVB6lldcTL.webp",
    name: "BRUELGAMES",
    yutube: "https://www.youtube.com/@bruelgames",
    telegram: "https://t.me/BruelGames"
  },
  {
    avatar: "https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/member/amba6-wrxcvWPHBmRugYwEdOvwBlBF45SQJo.webp",
    name: "Мутим На Крипте",
    yutube: "https://youtube.com/@mutim_na_crypte?si=rqnwdBvWC9yHI7AW",
    telegram: "https://t.me/investhai5"
  },
  {
    avatar: "https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/member/amba7-qoyBWYiv1jcLoAZoCzHarFcT4l6Xgj.webp",
    name: "DiegolaYT",
    yutube: "https://www.youtube.com/@DIEGOLAYT",
    telegram: "https://t.me/DiegolaNftCrypto"
  },
  {
    avatar: "https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/member/amba8-0z3CJqKnbCPBDZxWjykAzxodRlEqUh.webp",
    name: "NFT Gamer",
    yutube: "https://youtube.com/c/NFTGame",
    telegram: "https://t.me/nftgame9"
  },
  {
    avatar: "https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/member/amba9-wyyJYB6V07iJgLbXY9vbQV9r2usnsj.webp",
    name: "Sakata",
    yutube: "https://www.youtube.com/channel/UCV8654Rqxch7JMUAF5SEv2g",
    telegram: "https://t.me/SakataPobrenosnft"
  },
  {
    avatar: "https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/member/amba10-fJfeIujHFRYaOiiAkmQFIz8tBWL0Om.webp",
    name: "QUOCBAOMMO",
    yutube: "https://www.youtube.com/channel/UCFU8LnLfrvUIjbI1OPjw0Ng",
    telegram: "https://t.me/agcryptovnchat"
  },  
  {
    avatar: "https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/member/amba11-ED0684jKYM1nXFGFQvpEM1hL4Bd85B.webp",
    name: "NFTGAMER",
    yutube: "https://www.youtube.com/100nftgamer",
    telegram: "https://t.me/+lzXMpnE7lDhlN2Fh"
  },
]

export default function Ambassador() {
  const { t, i18n } = useTranslation();
  const [presentData, setPresentData] = useState(ambaData.slice(0, 5))
  const [listIndex, setListIndex] = useState({ first: 0, last: 5 });

  const onPrevious = () => {
    if (listIndex.first <= 0) return;
    setListIndex({ first: listIndex.first - 5, last: listIndex.last - 5 });
    setPresentData(ambaData.slice(listIndex.first - 5, listIndex.last - 5))
  }

  const onNext = () => {
    if (listIndex.last >= 11) return;
    setListIndex({ first: listIndex.first + 5, last: listIndex.last + 5 });
    setPresentData(ambaData.slice(listIndex.first + 5, listIndex.last + 5))
  }

  return (
    <I18nextProvider i18n={i18next}>
      <div className="relative flex justify-center font-skranji">
        <Header currentMenu="Presale Admin" />
        <div className={`fixed overflow-y-auto overflow-x-hidden flex-col h-full w-full space-y-2 flex items-center justify-center`}>
          <LazyImage
            src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/backgrounds/ambassador-bg-6uYqZ0tLRZS5K2nWA9NTbKewHALoQD.webp"
            className="background-position-center w-[1920px] h-full 2xl:w-full 2xl:h-full"
          />
          <div className="absolute top-0 w-[90%] sm:w-[500px] lg:w-[1000px] xl:w-[1200px] translate-y-28 flex flex-col justify-center items-center z-10">
            <div className="font-animeace text-[#ffee00] text-[2rem] md:text-[2.5rem] text-center font-bold tracking-[-1px]">{t("OUR ")}<span className="text-white">{t("AMBASSADOR")}</span></div>
            <div className="font-animeace text-[#ffffff] text-[0.7rem] lg:text-[1rem] text-center font-bold my-2 tracking-[-1px] flex flex-col lg:flex-row justify-center items-center">
              <div>{t("WE HAVE MANY INFLUENCERS")}</div>
              <div className="flex justify-center items-center">
                {t("BUT AMBASSADORS ARE A SPECIAL PART OF OUR COMMUNITY")}
                <LazyImage
                  src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/other/heart-t7RMYrob1OQHy6gQLP28FQSXRemRvq.webp"
                  className="w-4 md:w-8 ml-1 md:ml-3"
                />
              </div>
            </div>
          </div>
          <div className="main_bg absolute pb-8 text-white text-[0.8rem] md:text-[1.5rem]">
            <div className="relative main-bg w-[1100px] h-[700px] flex flex-col items-center z-[1]">
              <div className="w-[95vw] md:w-[700px] mt-28 md:mt-24 flex justify-center items-center flex-wrap gap-y-8 md:gap-y-0 me-4">
                {presentData.map((item, index) => (
                  <div key={index} className="flex flex-col justify-center items-center gap-y-1 w-1/3">
                    <LazyImage
                      src={item.avatar}
                      className="cursor-pointer w-full"
                    />
                    <div className="flex items-center justify-center h-8 text-center">{item.name}</div>
                    <div className="flex gap-x-1">
                      <LazyImage
                        src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/other/yutube-icon-gyTH5ccbNvSDYURygYxnpWbyZYsWz8.webp"
                        className="cursor-pointer w-8 md:w-12"
                        onClick={() => goUrl(item.yutube)}
                      />
                      <LazyImage
                        src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/other/telegram-icon-nACOErk3nWPNEBdAmAjVXlzw5WPmvC.webp"
                        className="cursor-pointer w-8 md:w-12"
                        onClick={() => goUrl(item.telegram)}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-20 flex justify-center items-center gap-x-4 mt-4 me-4">
                <LazyImage
                  src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/other/left_purple-lbXN2HqCi3R6t3ZoKo5P4hOujRyoSw.png"
                  className={` w-[40px] cursor-pointer`}
                  onClick={onPrevious}
                />
                <div className="w-2 text-center">{Math.floor(listIndex.first / 5 + 1)}</div>
                <LazyImage
                  src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/other/right_purple-lanaXVC5zrmf6AgLbf7Q94853YqY5s.png"
                  className={`w-[40px] cursor-pointer`}
                  onClick={onNext}
                />
              </div>
            </div>
            <div className="sm:hidden grid flex-col sm:flex-row justify-around w-full ml-[-4%] mb-12 z-30 text-white">
              <div>{t("©SOURCECODE")}<br />{t("ALL RIGHTS RESERVERD")}</div>
              <div className="flex items-center my-8 sm:my-0">
                <LazyImage
                  src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/other/sms-3mFi2ZKDELVJqgrqesbg87Ah0MuXtI.webp"
                  className="me-2 w-6" />source.code.inf@gmail.com
              </div>
              <div className="flex gap-x-4 items-center">
                <LazyImage
                  src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/other/tw-OjuqOzP32WDdmiOryG0c77oCmB8qqz.webp"
                  className="cursor-pointer w-10"
                  onClick={() => goUrl("https://twitter.com/Crypto_Showdown")}
                />
                <LazyImage
                  src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/other/tg-Rfs0u6rn3Mn7JjBgV7LYEpXaSwT3Zg.webp"
                  className="cursor-pointer w-10"
                  onClick={() => goUrl("https://t.me/cryptoshowdown")}
                />
                <LazyImage
                  src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/other/discord-J89J3d9FsZrfJVjYkp0fsDQ5UlIuQr.webp"
                  className="cursor-pointer w-10"
                  onClick={() => goUrl("https://discord.gg/9FRAyNg9Qh")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </I18nextProvider>
  );
}
