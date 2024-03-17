import { useEffect, useState } from "react";
import Web3 from 'web3'
import { I18nextProvider, useTranslation } from "react-i18next";
import LabelButton from "~/components/labelButton";
import Header from "~/components/screens/header";
import Account from "~/components/presale/account";
import { global } from "~/common/global";
import { addRefer, createProfile, getProfile, getRefCodeList, getWalletStatus } from "~/common/api";
import MainPresale from "~/components/presale/main1";
import Chart from "~/components/presale/chart";
import MainPresaleAdmin from "~/components/presale/main";
import { goUrl } from "~/components/utils";
import i18next from "~/global/i18n";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyImage from "~/components/lazyImage";

export default function Ambassador() {
  const { t, i18n } = useTranslation();
  const ambaData = [
    {
      avatar: "https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/member/amba1-XRRNUGjMcRDD6ATvKK9WLMVUQV4V5T.webp",
      name: "CLAM",
    },
    {
      avatar: "https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/member/amba2-CGWBBINfTjzQKqHc349KghVsnplgNA.webp",
      name: "REDIO NFT",
    },
    {
      avatar: "https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/member/amba3-8gLogfqbrvcfuK2myJOOA2zVXJI1su.webp",
      name: "BERKSUN CRYPTO",
    }
  ]

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
          <div className="main_bg absolute pb-8 text-white text-[1rem] md:text-[1.5rem]">
            <div className="main-bg w-[1100px] h-[700px] flex flex-col items-center z-[1]">
              <div className="w-[95vw] md:w-[800px] mt-36 md:mt-28 flex justify-center items-center">
                {ambaData.map((item, index) => (
                  <div key={index} className="flex flex-col justify-center items-center gap-y-1">
                    <LazyImage
                      src={item.avatar}
                      className="cursor-pointer w-full"
                    />
                    <div className="flex items-center justify-center h-12 text-center">{item.name}</div>
                    <div className="flex gap-x-1">
                      <LazyImage
                        src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/other/yutube-icon-gyTH5ccbNvSDYURygYxnpWbyZYsWz8.webp"
                        className="cursor-pointer w-10 md:w-16"
                      />
                      <LazyImage
                        src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/other/telegram-icon-nACOErk3nWPNEBdAmAjVXlzw5WPmvC.webp"
                        className="cursor-pointer w-10 md:w-16"
                      />
                    </div>
                  </div>
                ))}
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
