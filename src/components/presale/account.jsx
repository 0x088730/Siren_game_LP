import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Account({ tokenAmount }) {
    const { t, i18n } = useTranslation();
    const [ref, setRef] = useState("");
    const [bonusRate, setBonusRate] = useState(0);

    useEffect(() => {
        if (tokenAmount.usdt <= 5000) {
            setBonusRate(5);
            return;
        }
        else if (tokenAmount.usdt <= 10000) {
            setBonusRate(10);
            return;
        }
        else {
            setBonusRate(15);
            return;
        }
    }, [tokenAmount])

    const createRef = () => {
        if (ref === "" || ref === undefined) {
            const hexString = Math.floor(Math.random() * 16777215).toString(16);
            setRef(hexString.padStart(6, "0"));
        }
    }

    return (
        <>
            <div className="absolute top-0 translate-y-60 p-5 w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 min-w-[1024px]">
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-[600px] h-[300px] border-4 border-[#111111] rounded-2xl bg-[#83ADDD] opacity-80 relative flex justify-around items-center">
                        <div className="text-[#FFFFFF] font-animeace text-xl absolute top-4 left-4">{t("TOTAL BALLNCE:")}</div>
                        <div className="text-center">
                            <div className="text-[#FFFFFF] font-animeace text-lg">CSC TOKEN</div>
                            <div className="flex justify-center w-full">
                                <div className="text-lg text-[#dcc90a] font-animeace buy-button-bg w-44 h-8 my-1 flex-center cursor-pointer">{tokenAmount.csc}</div>
                            </div>
                            <div className="flex justify-center cursor-pointer">
                                <div className="text-[#04D4A4] font-bold font-animeace text-[15px] bg-[#363636] w-fit px-[5px] rounded-full border-[3px] border-[#ACB0B8] shadow-[3px_3px_5px_#111111]" style={{ textShadow: "2px 2px 2px black" }}>CLAIM</div>
                            </div>
                            <div className="mt-3 text-[#FFFFFF] text-[13px] font-animeace tracking-tightest">NEXT TOKEN UNLOCK IN: <span className=" text-[#f6b135]">NONE</span></div>
                        </div>
                        <div className="text-center">
                            <div className="text-[#FFFFFF] font-animeace text-lg">USDT TOKEN</div>
                            <div className="flex justify-center w-full">
                                <div className="text-lg text-[#00ff00] font-animeace buy-button-bg w-44 h-8 my-1 flex-center cursor-pointer">{tokenAmount.usdt * bonusRate / 100}</div>
                            </div>
                            <div className="flex justify-center cursor-pointer">
                                <div className="text-[#04D4A4] font-bold font-animeace text-[15px] bg-[#363636] w-fit px-[5px] rounded-full border-[3px] border-[#ACB0B8] shadow-[3px_3px_5px_#111111]" style={{ textShadow: "2px 2px 2px black" }}>CLAIM</div>
                            </div>
                            <div className="mt-3 text-[#FFFFFF] text-[13px] font-animeace tracking-tightest">MORE ABOUT REF SYSTEM: <span className="text-[#00FFC3]">HERE</span></div>
                        </div>
                    </div>
                    <div className="w-[600px] font-animeace text-md mt-8">
                        <div className="text-[#FFFFFF] mx-4">YOUR REF CODE</div>
                        <div className="bg-[#ffffff] border-[3px] border-[#353535] rounded-full px-[35px] py-[3px] text-[#6db1f5] flex">
                            <div className="cursor-pointer w-fit" onClick={() => createRef()}>CREATE</div>
                            <div className="w-full text-center text-black">{ref}</div>
                        </div>
                    </div>
                    <div className="w-[600px] font-animeace text-md mt-8">
                        <div className="text-[#FFFFFF] mx-4">YOUR CURRENT REFERRAL BONUS - {bonusRate}%</div>
                        <div className="bg-[#ffffff] border-[3px] border-[#353535] rounded-full py-[3px] text-[14px] text-[#FFFFFF] relative">
                            <div
                                className="bg-[#00ff00] h-[20px] rounded-[inherit]"
                                style={{ width: `${bonusRate ? bonusRate * 30 : 0}px` }}
                            />
                            <div className="absolute flex justify-evenly w-full top-0">
                                <div className="bg-[#00ff00] rounded-full w-[25px] h-[25px] flex justify-center items-center border-[2px] border-[#949494]">5</div>
                                <div className="bg-[#00ff00] rounded-full w-[25px] h-[25px] flex justify-center items-center border-[2px] border-[#949494]">10</div>
                                <div className="bg-[#00ff00] rounded-full w-[25px] h-[25px] flex justify-center items-center border-[2px] border-[#949494]">15</div>
                            </div>
                        </div>
                        <div className="flex justify-evenly w-full text-[#FFFFFF]">
                            <div>0~5000$</div>
                            <div className="mx-[-2rem]">5001~10000$</div>
                            <div>10001$+</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}