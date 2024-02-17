import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { addWithdraw, checkWithdrawDaily, createRefCode } from "~/common/api";
import { global } from "~/common/global";
import { useRouter } from "next/router";
import Web3 from 'web3'

export default function Account({ tokenAmount, setTokenAmount, btnType, bonusRate, setBonusRate }) {
    const { t, i18n } = useTranslation();
    const [ref, setRef] = useState("");
    const [withdrawDaily, setWithdrawDaily] = useState(true);
    const router = useRouter()

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
        if (btnType === "Connect") {
            alert("Please connect wallet!!!");
            return;
        }
        if (ref === "" || ref === undefined) {
            const hexString = (Math.floor(Math.random() * 16777215).toString(16)).padStart(6, "0");
            setRef(hexString);
            createRefCode(global.walletAddress, hexString)
                .then(res => {
                    global.userRef = res.data;
                });
        }
    }

    const goRefInfo = () => {
        router.push('/referral-info')
    }

    const claimUSDT = async () => {
        if (tokenAmount.usdt < 5) {
            alert("USDT token not enough! At least $5!");
            return;
        }
        await checkWithdrawDaily(global.walletAddress).then(res => {
            if (!res.data) {
                setWithdrawDaily(res.data);
                alert("Can withdraw once 1 day!");
                return;
            }
            try {
                addWithdraw(global.walletAddress).then(res => {
                    if (res.data) {
                        setTokenAmount({ ...tokenAmount, usdt: 0 })
                        alert("You will get usdt on your wallet in 24 hours!");
                    }
                })
            } catch (error) {
                console.error(error);
                alert("Failed to transfer tokens. Please try again.");
            }
        })
    }

    return (
        <>
            <div className="absolute top-0 translate-y-60 p-5 w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 min-w-[1024px]">
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-[600px] h-[300px] account-bg opacity-90 relative flex justify-around items-center p-4">
                        <div className="text-[#FFFFFF] font-animeace text-xl absolute top-[35px] left-[35px]">{t("TOTAL BALLANCE:")}</div>
                        <div className="text-center">
                            <div className="text-[#FFFFFF] font-animeace text-lg">CSC TOKEN</div>
                            <div className="flex justify-center w-full">
                                <div className="text-lg text-[#dcc90a] font-animeace buy-button-bg w-44 h-8 my-1 flex-center cursor-pointer">{Number.isInteger(tokenAmount.csc) ? tokenAmount.csc : Number(tokenAmount.csc).toFixed(2)}</div>
                            </div>
                            <div className="flex justify-center cursor-pointer">
                                <img src="assets/images/claim-btn.png" alt="" className="w-[73px]" />
                                {/* <div className="text-[#04D4A4] font-bold font-animeace text-[15px] bg-[#363636] w-fit px-[5px] rounded-full border-[3px] border-[#ACB0B8] shadow-[3px_3px_5px_#111111]" style={{ textShadow: "2px 2px 2px black" }}>CLAIM</div> */}
                            </div>
                            <div className="mt-3 text-[#FFFFFF] text-[13px] font-animeace tracking-tightest">NEXT TOKEN UNLOCK IN: <span className=" text-[#f6b135]">NONE</span></div>
                        </div>
                        <div className="text-center">
                            <div className="text-[#FFFFFF] font-animeace text-lg">USDT TOKEN</div>
                            <div className="flex justify-center w-full">
                                <div className="text-lg text-[#00ff00] font-animeace buy-button-bg w-44 h-8 my-1 flex-center cursor-pointer">{Number.isInteger(tokenAmount.usdt) ? tokenAmount.usdt : Number(tokenAmount.usdt).toFixed(2)}</div>
                            </div>
                            <div className="flex justify-center">
                                <img src="assets/images/claim-btn.png" alt="" className="w-[73px] cursor-pointer" onClick={claimUSDT} />
                                {/* <div className="text-[#04D4A4] font-bold font-animeace text-[15px] bg-[#363636] w-fit px-[5px] rounded-full border-[3px] border-[#ACB0B8] shadow-[3px_3px_5px_#111111]" style={{ textShadow: "2px 2px 2px black" }}>CLAIM</div> */}
                            </div>
                            <div className="mt-3 text-[#FFFFFF] text-[13px] font-animeace tracking-tightest">MORE ABOUT REF SYSTEM: <span className="text-[#00FFC3] cursor-pointer" onClick={goRefInfo}>HERE</span></div>
                        </div>
                    </div>
                    <div className="w-[600px] font-animeace text-md mt-8">
                        <div className="text-[#FFFFFF] mx-4">YOUR REF CODE</div>
                        <div className="progress-bg px-[35px] py-[3px] text-[#6db1f5] flex h-[43px]">
                            {global.userRef === "" || global.userRef === undefined ?
                                <>
                                    <div className="cursor-pointer w-fit flex items-center" onClick={() => createRef()}>CREATE</div>
                                    <div className="w-full text-center text-[#00ff00] flex items-center justify-center">{ref}</div>
                                </>
                                :
                                <>
                                    <div className="cursor-pointer w-fit flex items-center">CREATED</div>
                                    <div className="w-full text-center text-[#00ff00] flex items-center justify-center">{global.userRef}</div>
                                </>
                            }
                        </div>
                    </div>
                    <div className="w-[600px] font-animeace text-md mt-8">
                        <div className="text-[#FFFFFF] mx-4">YOUR CURRENT REFERRAL BONUS - {bonusRate}%</div>
                        <img src={`assets/images/bonusRate_${bonusRate}.png`} alt="" />
                        {/* <div className="bg-[#ffffff] border-[3px] border-[#353535] rounded-full py-[3px] text-[14px] text-[#FFFFFF] relative">
                            <div
                                className="bg-[#00ff00] h-[20px] rounded-[inherit]"
                                style={{ width: `${bonusRate ? bonusRate * 30 : 0}px` }}
                            />
                            <div className="absolute flex justify-evenly w-full top-0">
                                <div className="bg-[#00ff00] rounded-full w-[25px] h-[25px] flex justify-center items-center border-[2px] border-[#949494]">5</div>
                                <div className="bg-[#00ff00] rounded-full w-[25px] h-[25px] flex justify-center items-center border-[2px] border-[#949494]">10</div>
                                <div className="bg-[#00ff00] rounded-full w-[25px] h-[25px] flex justify-center items-center border-[2px] border-[#949494]">15</div>
                            </div>
                        </div> */}
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