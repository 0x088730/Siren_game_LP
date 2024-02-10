import { useState } from "react";
import { useTranslation } from "react-i18next";
import LabelButton from "../labelButton";

export default function MainPresale({
    usdtamount,
    setusdtamount,
    receiveAmount,
    setReceiveAmount,
    onBtnClick,
    buyStatus,
    setBuyStatus,
    code,
    setCode,
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
        setReceiveAmount(Number(amount * 14.4).toFixed(0))
    };

    const getEnterCode = (value) => {
        setCode(value);

    }
    const buyOkay = () => {
        setBuyStatus(false);
        setReceiveAmount("");

    }
    return (
        <>
            <div className="absolute top-0 translate-y-52 p-5 w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 min-w-[1024px]">
                <div className="absolute w-full h-full m-[-1.25rem] z-50 rounded-3xl border-[#000000] border-[10px]">
                    <div
                        className="w-full h-full text-white font-animeace text-1xl bg-[#000000] opacity-70 flex justify-center items-center rounded-xl"
                        style={{ textShadow: "2px 2px #f1617a" }}
                    >
                        START SOON
                    </div>
                </div>
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
                                    <img src="assets/images/usdt.png" alt="" className="w-6 ml-[2.5rem]" />
                                </div>
                                <div className="network-btn w-40 h-10 flex items-center">
                                    {/* {t("NETWORK: ")}<span className="text-[#ffd616]">{t("BNB")}</span> */}
                                </div>
                            </div>
                            <div>
                                <div className="ref-btn h-10 flex items-center w-full">
                                    {/* {t("NETWORK: ")}<span className="text-[#ffd616]">{t("BNB")}</span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="shadow-[0_5px_10px_#272525] border-2 border-[#DADADA] rounded-full"></hr>
                </div>
                <div className="flex flex-col justify-center items-center space-y-5">
                    {!buyStatus ?
                        <>
                            <LabelButton title={"YOU PAY"} buyStatus={buyStatus} color="text-green-500" img="assets/images/usdt.png" />
                            <img src="assets/images/arrow.png" alt="" className="w-8 h-10" />
                        </>
                        :
                        <div className="w-[32rem] h-[8rem] border-[3px] border-[#222222] bg-[#ffffff] rounded-3xl flex justify-center items-center text-[1.5rem] font-animeace relative">
                            BUY SUCCESSFUL:
                            <span
                                className="cryptoIcon w-[100px] h-[100px] mx-[10px] text-[#fdce35] font-[800] text-[1.8rem] flex justify-center items-center"
                                style={{ WebkitTextStroke: "0.1px rgb(73, 25, 25, 0.8)", textShadow: "rgb(34, 29, 61, 0.8) 0px 3px 3px" }}
                            >
                                <div style={{ WebkitTextStroke: "1px black" }}>
                                    {receiveAmount}
                                </div>
                            </span>
                            CSC
                            <button className="absolute right-[1rem] bottom-[1rem] font-[600] text-[#111111] text-[15px] bg-[#a1a1a1] w-fit px-[10px] rounded-full border-[2px] border-[#111111] shadow-[3px_3px_5px_#111111]" onClick={() => buyOkay()}>OKAY</button>
                        </div>
                    }
                    <LabelButton title={"YOU RECEIVE"} buyStatus={buyStatus} color="text-yellow-500" img="assets/images/yellow_gem.png" receiveAmount={receiveAmount} />
                    <LabelButton title={"ENTER CODE"} buyStatus={buyStatus} />
                    <div className="text-2xl font-bold text-white font-animeace buy-button-bg w-60 h-12 flex-center cursor-pointer">BUY</div>
                    <div className="font-bold text-white font-animeace">
                        <span className="text-[#ff0000] text-2xl">{t("! ")}</span>
                        <span className="text-[#dcc90a] text-1xl">{t("UNLOCK 15% ON TOKEN RELEASE AND EVERY 14 DAYS +21.25%")}</span>
                    </div>
                </div>
            </div>
        </>
    )
}