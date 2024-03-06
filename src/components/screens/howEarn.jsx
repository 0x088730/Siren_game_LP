import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HowEarn = () => {
    const { t, i18n } = useTranslation();
    const characterList = [1, 2, 3, 4];
    const [currentCharacter, setCurrentCharacter] = useState(1)
    const characterData = [
        { header: "Sakura", detail: t("She comes from the distant lands of Aden, being a bounty hunter she is interested in the precious artifacts found in these lands. Sakura has high critical damage as well as instant damage abilities. Her weakness is fighting against water elemental creatures, especially if they have instant damage.") },
        { header: "Rena", detail: t("Rena is a water element character. She's been on these battlefields for what seems like an eternity, but we don't know exactly how long she's been here. Rena is an ancient water element creature with periodic damage and a high crit chance, but she is weak against opponents with the lightning element, especially if that creature has periodic damage.") },
        { header: "Motoko", detail: t("Motoko is a lightning element character. A wanderer who seems to have been everywhere, or nowhere? Has anyone seen him? Rumor has it that all creatures who have ever seen him were defeated by him in an instant. But what we do know is that this character can take a lot of instant damage and deal a lot of crushing damage. He doesn't have a lot of critical damage, but every attack he makes can be his enemy's last. His weakness is fighting against creatures with the wood element, especially if that creature has intermittent damage.") },
        { header: "Hayate", detail: t("Hayate is a wood element character. The huge castle of Altdream, more like a city, was once home to thousands of people. One day, one of the guards discovered the ability to control wooden objects and then the earth. One day, while practicing with the elements, not far from the castle, the knight sent the entire castle underground, destroying everyone in it. He became maddened by his own power and now constantly seeks out creatures to destroy. His strength is periodic damage. His weakness is fighting creatures with the element of fire, especially if those") }
    ]

    return (
        <div className="relative md:w-full xl:h-[1280px] flex justify-center mt-[76rem] sm:mt-[52em] md:mt-[61rem] lg:mt-[31rem] xl:mt-0">
            <LazyLoadImage effect="black-and-white" draggable="false" src="assets/images/backgrounds/howEarn.jpg" className="background-position-center-absolute w-[1920px] h-[1280px] 2xl:w-full 2xl:h-full" />
            <LazyLoadImage effect="black-and-white" draggable="false" src="assets/images/characters/character-3.png" alt="" className="absolute left-0 top-[-99rem] sm:top-[-74rem] md:top-[-67rem] lg:top-[-42rem] xl:top-[-42rem] w-[73%] sm:w-[45%] md:w-[35%] lg:w-[27%]" />
            <LazyLoadImage effect="black-and-white" draggable="false" src="assets/images/rock4.png" alt="" className="absolute left-0 top-[-25rem] w-[30%] hidden sm:block" />
            <LazyLoadImage effect="black-and-white" draggable="false" src="assets/images/rock5.png" alt="" className="absolute right-0 top-[-22rem] w-[30%] hidden sm:block" />
            <div className="main-bg absolute w-[1200px] h-[1000px] sm:h-[800px] top-[-81rem] sm:top-[-57rem] md:top-[-52rem] lg:top-[-26rem] xl:top-[-33rem] flex flex-col-reverse sm:flex-row justify-center items-center">
                <LazyLoadImage effect="black-and-white" draggable="false" src="assets/images/earn-center.png" alt="" className="absolute w-[75%] h-[70%] sm:h-[65%] me-6" />
                <LazyLoadImage effect="black-and-white" draggable="false" src={`assets/images/characters/idle/${currentCharacter}.gif`} alt="GIF Image" className={`object-cover ${currentCharacter === 2 ? "w-44 sm:w-56" : "w-56 sm:w-64"} me-0 sm:me-16 z-10`} />
                <div className={`relative text-bg ${currentCharacter === 3 || currentCharacter === 4 ? "w-[365px] sm:w-[380px] h-[370px] sm:h-[370px]" : ""} w-[280px] sm:w-[300px] h-[320px] sm:h-[350px] ml-0 sm:ml-16 z-10 p-4 sm:p-6 flex justify-center items-center`}>
                    <div className="absolute top-6 text-[25px]">{characterData[currentCharacter - 1].header}</div>
                    <div className="text-center text-[14px] leading-6 mt-6">{characterData[currentCharacter - 1].detail}</div>
                </div>
                <div className="absolute bottom-16 flex justify-between">
                    {characterList.map((item, index) => (
                        <LazyLoadImage effect="black-and-white" draggable="false"
                            key={index}
                            src={`assets/images/characters/avatar${item}.png`}
                            alt=""
                            className={`${item !== currentCharacter ? "grayscale" : ""} object-cover w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 mx-2 sm:mx-4 md:mx-6 lg:mx-8 z-10 cursor-pointer`}
                            onClick={() => setCurrentCharacter(item)}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col justify-start items-center translate-y-[-43%] sm:translate-y-[-70%] md:translate-y-[-22rem] lg:translate-y-8 xl:translate-y-0 -mt-20 sm:mt-[20rem] md:mt-[22rem]">
                <div className="font-oi text-[#FF9B00] text-[30px] sm:text-[40px] md:text-[50px] lg:text-[55px] xl:text-[60px] text-gradient-shadow-stroke"><span style={{ WebkitTextFillColor: "white" }}>{t("How to")}</span>{t(" earn")}</div>
                <div className="flex flex-col md:flex-row my-16 gap-y-16 sm:gap-y-12 md:gap-x-4 xl:gap-x-12">
                    <div className="relative w-[350px] sm:w-[350px] lg:w-[500px] h-[160px] sm:h-[180px] md:h-[170px] lg:h-[200px] flex flex-col justify-end items-center border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                        <LazyLoadImage effect="black-and-white" draggable="false" src="assets/images/helmit.png" alt="" className="absolute -top-16 sm:-top-20 w-[45%] md:w-[50%]" />
                        <div className="w-full h-full p-4 flex flex-col justify-end items-center rounded-lg" style={{ backgroundImage: "linear-gradient(340deg, #005DB27a, transparent)" }}>
                            <div className="text-[22px]">{t("CHARACTERS")}</div>
                            <div className="text-center text-[15px]">{t("Fight in battles for increase your characters level. The higher level your characters have, the better you can improve your land.")}</div>
                        </div>
                    </div>
                    <div className="relative w-[350px] sm:w-[350px] lg:w-[500px] h-[160px] sm:h-[180px] md:h-[170px] lg:h-[200px] flex flex-col justify-end items-center border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                        <LazyLoadImage effect="black-and-white" draggable="false" src="assets/images/playImg2.png" alt="" className="absolute -top-16 sm:-top-20 w-[45%] md:w-[50%]" />
                        <div className="w-full h-full p-4 flex flex-col justify-end items-center rounded-lg" style={{ backgroundImage: "linear-gradient(340deg, #005DB27a, transparent)" }}>
                            <div className="text-[22px]">{t("LAND")}</div>
                            <div className="text-center text-[15px]">{t("Improve your land this opens up all the ways for you to progress in the game, the better your land is inproved, the more you earn.")}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowEarn