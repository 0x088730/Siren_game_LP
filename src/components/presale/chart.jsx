import { global } from "~/common/global";

export default function Chart() {
    return (
        <>
            <div className="chart-bg absolute top-1 translate-y-52 rounded-3xl p-5 w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 min-w-[1024px] h-[60%] min-h-[580px]">
                <div className="flex text-3xl font-bold text-[#dcc90a] font-animeace mt-[2.5rem]">
                    <div className="w-[88%] text-center">
                        <div>LISTING PRICE <span className="text-[#00ce2d]">0.11$</span> | 25/MARCH/2024</div>
                    </div>
                    <div className="w-[12%]"></div>
                </div>
                <div className="flex text-xl font-bold text-white font-animeace h-full mt-[2.2rem]">
                    <div className="w-[88%]">
                        <div className="h-[18%] flex items-center justify-center">
                            <div className="w-[62%]"></div>
                            <div className="w-[38%] h-full flex items-center justify-center text-center relative">PUBLICK SALE <br/> 0.1$<span className="absolute top-1 right-12 text-[#00ce2d] text-[16px]">+10%</span></div>
                        </div>
                        <div className="h-[18%] flex items-center justify-center mt-[3px]">
                            <div className="w-[40%]"></div>
                            <div className="w-[30%] h-full flex items-center justify-center relative">0.09$<span className="absolute top-0 right-12 text-[#00ce2d] text-[16px]">+10%</span></div>
                            <div className="w-[30%]"></div>
                        </div>
                        <div className="h-[18%] flex items-center justify-center mt-[3px]">
                            <div className="w-[15%]"></div>
                            <div className="w-[35%] h-full flex items-center justify-center relative">0.08$<span className="absolute top-0 right-16 text-[#00ce2d] text-[16px]">+10%</span></div>
                            <div className="w-[50%]"></div>
                        </div>
                        <div className="h-[20%] flex items-center justify-center mt-[3px]">
                            <div className="w-[15%] flex items-center justify-center">0.07$</div>
                            <div className="w-[80%]"></div>
                        </div>
                    </div>
                    <div className="w-[12%] text-[#dcc90a] text-[15px]">
                        <div className="h-[20%] flex items-center justify-center">STRAT SOON</div>
                        <div className="h-[20%] flex items-center justify-center">LIVE</div>
                        <div className="h-[20%] flex items-center justify-center">SOLD OUT</div>
                        <div className="h-[20%] flex items-center justify-center">SOLD OUT</div>
                    </div>
                </div>
            </div>
        </>
    )
}