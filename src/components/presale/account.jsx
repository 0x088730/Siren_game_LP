import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { addBonusClaim, addCSCWithdraw, addWithdraw, checkTokenCoolDown, checkWithdrawDaily, createRefCode } from "~/common/api";
import { global } from "~/common/global";
import { useRouter } from "next/router";
import Web3 from 'web3'
import { ClaimButton } from "../clickButton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyImage from "../lazyImage";
import { convertSecToHMS } from "../utils";

export default function Account({ tokenAmount, setTokenAmount, btnType, bonusRate, setBonusRate, userData, setUserData }) {
    const { t, i18n } = useTranslation();
    const [ref, setRef] = useState("");
    const [withdrawDaily, setWithdrawDaily] = useState(true);
    const router = useRouter()
    const [remainedTime, setRemainedTime] = useState(0);
    const [isCooldownStarted, setIsCooldownStarted] = useState(false)
    const [claimAvailable, setClaimAvailable] = useState(false);

    useEffect(() => {
        if (global.walletAddress !== "") {
            checkTokenCoolDown(global.walletAddress).then(res => {
                let cooldownSec = res.data.time
                if (cooldownSec === 99999999) {
                    setClaimAvailable(true);
                }
                else if (cooldownSec <= 0) {
                    setClaimAvailable(true);
                }
                else {
                    setClaimAvailable(false);
                    setRemainedTime(cooldownSec)
                    setIsCooldownStarted(true)
                }
            })
        }
    }, [global.walletAddress])

    useEffect(() => {
        if (isCooldownStarted) {
            var cooldownInterval = setInterval(() => {
                setRemainedTime((prevTime) => {
                    if (prevTime === 1) {
                        setClaimAvailable(true);
                        checkTokenCoolDown(global.walletAddress).then(res => {
                        })
                    }
                    if (prevTime === 0) {
                        clearInterval(cooldownInterval)
                        setIsCooldownStarted(false)
                        return 0
                    }
                    return prevTime - 1
                })
            }, 1000)
        }

        return () => clearInterval(cooldownInterval)
    }, [isCooldownStarted])

    // useEffect(() => {
    //     if (tokenAmount.usdt <= 5000) {
    //         setBonusRate(5);
    //         return;
    //     }
    //     else if (tokenAmount.usdt <= 10000) {
    //         setBonusRate(10);
    //         return;
    //     }
    //     else {
    //         setBonusRate(15);
    //         return;
    //     }
    // }, [tokenAmount])

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

    const claimCSC = async () => {
        if (!claimAvailable) {
            alert("please wait...")
            return;
        }
        if (tokenAmount.csc <= 0) {
            alert("CSC token not enough!")
            return;
        }
        addCSCWithdraw(global.walletAddress).then(res => {
            if (!res.data) {
                alert(res.message);
                return;
            }
            setTokenAmount({ ...tokenAmount, csc: res.data.csc });
            setRemainedTime(res.data.time);
            setClaimAvailable(false);
            setIsCooldownStarted(true)
        })
    }

    const claimBonus = async (type) => {
        if (global.walletAddress === "") return;
        addBonusClaim(global.walletAddress, type).then(res => {
            if (res.data === false) {
                alert(res.message);
                return;
            }
            setUserData(res.data);
            alert("Successful withdrawal, tokens will be sent to your wallet within 24 hours");
        })
    }

    return (
        <>
            <div className="w-[1020px] h-[540px] me-[13px] flex flex-col items-center font-skranji text-white mt-8 sm:mt-0">
                <div className="w-full flex flex-col justify-center items-center gap-y-4">
                    <div className="font-oi text-[#FF9B00] text-[30px] text-gradient-shadow-stroke-middle text-center" style={{ WebkitTextFillColor: "white" }}>{t("Total balance:")}</div>
                    <div className="w-[400px] sm:w-[500px] md:w-[600px] h-[200px] opacity-90 relative flex justify-between items-center p-4">
                        <div className="text-center w-[130px] sm:w-[150px] md:w-[180px]">
                            <div className="text-[#FFFFFF] text-lg">CSC {t("Token")}</div>
                            <div className="flex justify-center w-full border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                                <div className="w-full h-full rounded-lg" style={{ backgroundImage: "linear-gradient(175deg, transparent, #C04F0F)" }}>
                                    <div className="text-lg text-[#dcc90a] w-full h-8 my-1 flex-center cursor-pointer">{Number.isInteger(tokenAmount.csc) ? tokenAmount.csc : Number(tokenAmount.csc).toFixed(2)}</div>
                                </div>
                            </div>
                            <div className="flex justify-center cursor-pointer mt-2">
                                <ClaimButton title="CLAIM" className={`text-xl sm:text-2xl w-40 h-10 sm:w-44 sm:h-12 md:w-48 md:h-14 ${claimAvailable ? "" : "grayscale"}`} onClick={claimAvailable ? claimCSC : null} />
                            </div>
                            <div className="mt-3 text-[#FFFFFF] text-[13px] tracking-tightest">{t("Next token unlock in:")}<br /> <span className="text-[#f6b135]">{convertSecToHMS(remainedTime)}</span></div>
                        </div>
                        <div className="text-center w-[130px] sm:w-[150px] md:w-[180px]">
                            <div className="text-[#FFFFFF] text-lg">CSC REF</div>
                            <div className="flex justify-center w-full border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                                <div className="w-full h-full rounded-lg" style={{ backgroundImage: "linear-gradient(175deg, transparent, #5DC00F)" }}>
                                    {/* <div className="text-lg text-[#00ff00] w-full h-8 my-1 flex-center cursor-pointer">{Number.isInteger(tokenAmount.usdt) ? tokenAmount.usdt : Number(tokenAmount.usdt).toFixed(2)}</div> */}
                                    <div className="text-lg text-[#00ff00] w-full h-8 my-1 flex-center cursor-pointer">{userData && userData.bonus.csc}</div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-2">
                                <ClaimButton title="CLAIM" className="text-xl sm:text-2xl w-40 h-10 sm:w-44 sm:h-12 md:w-48 md:h-14" onClick={() => claimBonus("csc")} />
                            </div>
                            <div className="mt-3 text-[#FFFFFF] text-[13px] tracking-tightest">{t("More about ref system:")}<br className="hidden sm:block" /> <span className="text-[#00FFC3] cursor-pointer" onClick={goRefInfo}>here</span></div>
                        </div>
                        <div className="text-center w-[130px] sm:w-[150px] md:w-[180px]">
                            <div className="text-[#FFFFFF] text-lg">USDT REF</div>
                            <div className="flex justify-center w-full border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                                <div className="w-full h-full rounded-lg" style={{ backgroundImage: "linear-gradient(175deg, transparent, #5DC00F)" }}>
                                    {/* <div className="text-lg text-[#00ff00] w-full h-8 my-1 flex-center cursor-pointer">{Number.isInteger(tokenAmount.usdt) ? tokenAmount.usdt : Number(tokenAmount.usdt).toFixed(2)}</div> */}
                                    <div className="text-lg text-[#00ff00] w-full h-8 my-1 flex-center cursor-pointer">{userData && userData.bonus.usdt}</div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-2">
                                <ClaimButton title="CLAIM" className="text-xl sm:text-2xl w-40 h-10 sm:w-44 sm:h-12 md:w-48 md:h-14" onClick={() => claimBonus("usdt")} />
                            </div>
                            <div className="mt-3 text-[#FFFFFF] text-[13px] tracking-tightest">{t("More about ref system:")}<br className="hidden sm:block" /> <span className="text-[#00FFC3] cursor-pointer" onClick={goRefInfo}>here</span></div>
                        </div>
                    </div>
                    <div className="w-[400px] sm:w-[500px] md:w-[600px] text-md">
                        <div className="text-[#FFFFFF] mx-4">{t("Your Ref Code")}</div>
                        <div className="text-[#6db1f5] text-[20px] flex h-[43px] border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                            <div className="w-full h-full flex rounded-lg py-[3px] px-[30px]" style={{ backgroundImage: "linear-gradient(175deg, transparent, #00A3FF)" }}>
                                {global.userRef === "" || global.userRef === undefined ?
                                    <>
                                        <div className="cursor-pointer w-fit flex items-center" onClick={() => createRef()}>{t("CREATE")}</div>
                                        <div className="w-full text-center text-[#00ff00] flex items-center justify-center">{ref}</div>
                                    </>
                                    :
                                    <>
                                        <div className="cursor-pointer w-fit flex items-center">{t("CREATED")}</div>
                                        <div className="w-full text-center text-[#00ff00] flex items-center justify-center">{global.userRef}</div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="w-[400px] sm:w-[500px] md:w-[600px] text-md mt-8">
                        <div className="text-[#FFFFFF] mx-4">{t("Your Current Referral Bonus")} - {bonusRate}%</div>
                        <LazyImage
                            src={`assets/images/bonusRate_${bonusRate}.webp`}
                            // onLoad={handleImageLoad}
                            className="w-full"
                        />
                        {/* <div className="flex justify-evenly w-full text-[#FFFFFF]">
                            <div>0~5000$</div>
                            <div className="mx-[-2rem]">5001~10000$</div>
                            <div>10001$+</div>
                        </div> */}
                    </div>
                </div>
            </div>
            <img effect="black-and-white" draggable="false" src={`https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/characters/character-4-ejjxajVp77FKJR3UdOfqw8d3leNnLt.webp`} alt="" className="absolute bottom-0 sm:-bottom-24 right-56 sm:right-[-20rem] w-[25rem] sm:w-[33rem]" />
        </>
    )
}