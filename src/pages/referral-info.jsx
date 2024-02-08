import { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "~/components/screens/header";
import { useRouter } from "next/router";
import { global } from "~/common/global";

export default function ReferralInfo() {
  const router = useRouter()
  const { t, i18n } = useTranslation();
  const goAccount = () => {
    router.push('/presale');
    global.pageStatus = "account"
  }

  return (
    <div className="overflow-y-scroll w-full h-screen min-w-[1024px]">
      <Header currentMenu="Referral Info" />
      <img src="assets/images/htp_bg.jpg" className="absolute w-full h-full brightness-[30%] min-w-[1200px] min-h-[900px]" />
      <div className="w-full h-screen translate-y-28 flex-col flex items-center">
        <div className="flex justify-center items-center w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 min-w-[1024px] gap-x-8">
          <div className="pt-2 text-[44px] text-left text-white font-animeace w-[55%]">
            {t("GET USDT FOR INVITED PEOPLE WHO BOUGHT A ")}<span className="text-[#dcc90a]">CSC</span>
          </div>
          <div className="w-[45%]">
            <img src="assets/images/usdt-box.png" alt="" className="w-[75%] inline me-1" />
          </div>
        </div>
        <div className="flex justify-center items-center w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 min-w-[1024px] gap-x-16">
          <div className="w-[45%]">
            <img src="assets/images/usdts.png" alt="" className="w-[75%] inline me-1" />
          </div>
          <div className="pt-2 text-[44px] text-left text-white font-animeace w-[55%]">
            {t("OUR OFFER")}
            <div className="text-[16px]">
              <div>. 5, 10, 15% YOU GET FOR EVERY PURCHASE</div>
              <div>. BY REFERRING MORE PEOPLE YOU GET MORE MONEY</div>
              <div>. YOU RECEIVE % FOR EVERY THEY PURCHASE, FOREVER</div>
              <div>. NO ONE CAN BUY A TOKEN WITHOUR A REFERRAL CODE</div>
              <div>. STATISTICS ABOUT YOUR REFERRALS AND EARN IN YOUR PROFILE</div>
            </div>
            <div className="text-[20px] bg-[#e7b52d] w-fit px-6 py-1 rounded-full cursor-pointer mt-4" onClick={() => goAccount()}>GET REFERRAL LINK</div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen translate-y-28 flex flex-col items-center">
        <div className="translate-y-[250px] flex justify-center items-center w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 min-w-[1024px] relative">
          <div className="pt-2 text-[30px] font-lighter text-left text-white font-animeace z-10" style={{ textShadow: "2px 2px 1px black" }}>
            {t("YOU WILL GET USDT FOR EACH REFERRAL WHO USES YOUR LINK TO PURCHASE CSC")}
          </div>
          <img src="assets/images/cryptoIcon.png" alt="" className="absolute left-0 inline w-[250px] z-0 skew-x-[-35deg]" />
        </div>
        <div className="translate-y-[450px] flex justify-center items-center w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 min-w-[1024px] relative">
          <div className="pt-2 text-[30px] font-lighter text-left text-white font-animeace z-10" style={{ textShadow: "2px 2px 1px black" }}>
            {t("YOU CAN SEE AND CLAIM YOUR REFERRALS INCOME IN THE ")}<span className="text-[#1cd3e3]">ACCOUNT</span>{t(" SECTION.")}
          </div>
          <img src="assets/images/damagedImg.png" alt="" className="absolute right-0 top-[-120px] inline w-[300px] z-0" />
        </div>
      </div>
    </div>
  );
}
