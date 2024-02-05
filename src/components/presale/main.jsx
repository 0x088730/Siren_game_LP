import { useState } from "react";
import { useTranslation } from "react-i18next";
import LabelButton from "../labelButton";

export default function MainPresale({
    usdtamount,
    setusdtamount,
    receiveAmount,
    setReceiveAmount,
    onBtnClick
}) {
    const { t, i18n } = useTranslation();
    const [date, setDate] = useState({
        day: "00",
        hour: "02",
        percentage: "+10"
    })
    const [usdt, setUsdt] = useState("0.07");

    const onAmountClick = (amount) => {
        setusdtamount(amount);
        setReceiveAmount(amount * 14.4)
        console.log(amount)

    };

    const getEnterCode = (value) => {
        console.log("getEnterCode", value)
    }

    return (
        <>
            <div className="absolute top-0 translate-y-52 p-5 w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 min-w-[1024px]">
                <div className="w-full mb-10">
                    <div className="flex justify-between">
                        <div className="flex justify-evenly flex-col">
                            <div className="text-1xl font-bold text-white font-animeace">
                                {t("NEXT PRICE UPDATE: ")}
                                <span className="text-[#dcc90a]">{date.day + " DAYS: " + date.hour + " HOURS"}</span>
                                <span className="text-[#00ce2d]">{" (" + date.percentage + "%)"}</span>
                            </div>
                            <div className="text-2xl font-bold text-white font-animeace">
                                {t("CSC ACTUAL PRICE: ")}
                                <span className="text-[#dcc90a]">{usdt + " USDT"}</span>
                            </div>
                        </div>
                        <div className="flex justify-evenly flex-col">
                            <div className="flex">
                                <div className="usdt-btn w-40 h-10 flex items-center">
                                    {/* <img src="assets/images/usdt.png" alt="" className="w-6 ml-[1.6rem]" /> */}
                                </div>
                                <div className="network-btn w-40 h-10 flex items-center">
                                    {/* {t("NETWORK: ")}<span className="text-[#ffd616]">{t("BNB")}</span> */}
                                </div>
                            </div>
                            <div>
                                <div className="ref-btn w-40 h-10 flex items-center w-full">
                                    {/* {t("NETWORK: ")}<span className="text-[#ffd616]">{t("BNB")}</span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="shadow-[0_5px_10px_#272525] border-2 border-[#DADADA] rounded-full"></hr>
                </div>
                <div className="flex flex-col justify-center items-center space-y-6">
                    <LabelButton title={"YOU PAY"} color="text-green-500" img="assets/images/usdt.png" onChange={(e) => onAmountClick(e)} />
                    <img src="assets/images/arrow.png" alt="" className="w-8 h-10" />
                    <LabelButton title={"YOU RECEIVE"} color="text-yellow-500" img="assets/images/yellow_gem.png" receiveAmount={receiveAmount} />
                    <LabelButton title={"ENTER CODE"} onChange={(e) => getEnterCode(e)} />
                    <div className="text-2xl font-bold text-white font-animeace buy-button-bg w-60 h-12 flex-center cursor-pointer" onClick={() => onBtnClick("Buy")}>BUY</div>
                    <div className="font-bold text-white font-animeace">
                        <span className="text-[#ff0000] text-2xl">{t("! ")}</span>
                        <span className="text-[#dcc90a] text-1xl">{t("UNLOCK 15% ON TOKEN RELEASE AND EVERY 14 DAYS +21.25%")}</span>
                    </div>
                </div>
            </div>
        </>
    )
}