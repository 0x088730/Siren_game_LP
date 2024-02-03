import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from 'react-router-dom'

export default function Account() {
    const location = useLocation();
    const { t, i18n } = useTranslation();
    const [ref, setRef] = useState("test ref");
    const [bonusRate, setBonusRate] = useState(7);

    const createRef = () => {
        // const ref_test = new URLSearchParams(location.search).get('ref')
        // const value = `${ref_test?.toString()}`
        console.log(location)
    }

    return (
        <>
            <div className="absolute top-0 translate-y-60 p-5 w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 min-w-[1024px]">
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-[500px] h-[300px] border-4 border-[#111111] rounded-2xl bg-[#83ADDD] opacity-80 relative flex justify-around items-center">
                        <div className="text-[#FFFFFF] font-animeace text-xl absolute top-4 left-4">{t("TOTAL BALLNCE:")}</div>
                        <div className="text-center">
                            <div className="text-[#FFFFFF] font-animeace text-lg">CSC TOKEN</div>
                            <div className="text-lg text-[#dcc90a] font-animeace buy-button-bg w-44 h-8 my-1 flex-center cursor-pointer">0</div>
                            <div className="flex justify-center cursor-pointer">
                                <div className="text-[#04D4A4] font-bold font-animeace text-[15px] bg-[#363636] w-fit px-[5px] rounded-full border-[3px] border-[#ACB0B8] shadow-[3px_3px_5px_#111111]" style={{ textShadow: "2px 2px 2px black" }}>CLAIM</div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-[#FFFFFF] font-animeace text-lg">USDT TOKEN</div>
                            <div className="text-lg text-[#00ff00] font-animeace buy-button-bg w-44 h-8 my-1 flex-center cursor-pointer">0</div>
                            <div className="flex justify-center cursor-pointer">
                                <div className="text-[#04D4A4] font-bold font-animeace text-[15px] bg-[#363636] w-fit px-[5px] rounded-full border-[3px] border-[#ACB0B8] shadow-[3px_3px_5px_#111111]" style={{ textShadow: "2px 2px 2px black" }}>CLAIM</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[500px] font-animeace text-md mt-12">
                        <div className="text-[#FFFFFF] mx-4">YOUR REF CODE</div>
                        <div className="bg-[#ffffff] border-[3px] border-[#353535] rounded-full px-[35px] py-[3px] text-[#6db1f5] flex">
                            <div className="cursor-pointer w-fit" onClick={() => createRef()}>CREATE</div>
                            <div className="w-full text-center text-black">{ref}</div>
                        </div>
                    </div>
                    <div className="w-[500px] font-animeace text-md mt-8">
                        <div className="text-[#FFFFFF] mx-4">YOUR CURRENT REFERRAL BONUS - {bonusRate}%</div>
                        <div className="bg-[#ffffff] border-[3px] border-[#353535] rounded-full py-[3px] text-[14px] text-[#FFFFFF] relative">
                            <div
                                className="bg-[#00ff00] h-[20px] rounded-[inherit]"
                                style={{ width: `${bonusRate ? bonusRate * 25 : 0}px` }}
                            />
                            <div className="absolute flex justify-evenly w-full top-0">
                                <div className="bg-[#00ff00] rounded-full w-[25px] h-[25px] flex justify-center items-center border-[2px] border-[#949494]">5</div>
                                <div className="bg-[#00ff00] rounded-full w-[25px] h-[25px] flex justify-center items-center border-[2px] border-[#949494]">10</div>
                                <div className="bg-[#00ff00] rounded-full w-[25px] h-[25px] flex justify-center items-center border-[2px] border-[#949494]">15</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}