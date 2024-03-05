import { ClickButton } from "../clickButton";
import { useState } from "react";
import Claim from "./claim";
import { goUrl } from "../utils";
import Home from "~/pages";

export default function IntroVideo() {
  const count = [1, 2, 3];
  const characterList = [1, 2, 3, 4];
  const [currentCharacter, setCurrentCharacter] = useState(1)
  const [showClaimWindowFlag, setShowClaimWindowFlag] = useState(false)
  const characterData = [
    { header: "Sakura", detail: "She comes from the distant lands of Aden, being a bounty hunter she is interested in the precious artifacts found in these lands. Sakura has high critical damage as well as instant damage abilities. Her weakness is fighting against water elemental creatures, especially if they have instant damage." },
    { header: "Rena", detail: "Rena is a water element character. She's been on these battlefields for what seems like an eternity, but we don't know exactly how long she's been here. Rena is an ancient water element creature with periodic damage and a high crit chance, but she is weak against opponents with the lightning element, especially if that creature has periodic damage." },
    { header: "Motoko", detail: "Motoko is a lightning element character. A wanderer who seems to have been everywhere, or nowhere? Has anyone seen him? Rumor has it that all creatures who have ever seen him were defeated by him in an instant. But what we do know is that this character can take a lot of instant damage and deal a lot of crushing damage. He doesn't have a lot of critical damage, but every attack he makes can be his enemy's last. His weakness is fighting against creatures with the wood element, especially if that creature has intermittent damage." },
    { header: "Hayate", detail: "Hayate is a wood element character. The huge castle of Altdream, more like a city, was once home to thousands of people. One day, one of the guards discovered the ability to control wooden objects and then the earth. One day, while practicing with the elements, not far from the castle, the knight sent the entire castle underground, destroying everyone in it. He became maddened by his own power and now constantly seeks out creatures to destroy. His strength is periodic damage. His weakness is fighting creatures with the element of fire, especially if those" }
  ]

  return (
    <div className="relative font-skranji text-white">
      <div className="relative overflow-hidden h-[750px] md:w-full xl:h-screen flex justify-center">
        <img src="assets/images/backgrounds/home.jpg" className="background-position-center-absolute w-[1300px] h-[935px] sm:w-[1920px] sm:h-[1270px] 2xl:w-full 2xl:h-full" />
        <div className="flex flex-col items-center w-80 translate-y-40">
          <div className="font-oi text-[#FF9B00] text-[40px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[90px] 2xl:text-[100px] text-gradient-shadow-stroke text-center">Play Soon</div>
          <div className="text-center px-16 my-8">The first RPG gacha game on the blockchain</div>
          <ClickButton title={"GET START"} className="w-60 sm:w-52 lg:w-60 h-20" onClick={() => goUrl("https://play.cryptoshowdown.io/")} />
        </div>
        <img src="assets/images/characters/character-1.png" alt="" className="absolute left-0 bottom-[50px] w-1/2 sm:w-[40%]" />
        <img src="assets/images/characters/character-2.png" alt="" className="absolute right-0 bottom-[50px] w-1/2 sm:w-[40%]" />
      </div>
      <div className="relative flex flex-col items-center justify-start w-full h-[1519px] mt-[-18rem] sm:mt-[-15rem]">
        <img src="assets/images/backgrounds/howPlay.png" className="background-position-center-absolute translate-x-[6%] sm:translate-x-0 w-[1920px] h-[1519px] 2xl:w-full 2xl:h-full" />
        <div className="font-oi translate-y-[25rem] text-[#FF9B00] text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] text-gradient-shadow-stroke"><span style={{ WebkitTextFillColor: "white" }}>How to</span> play</div>
        <div className="translate-y-[30rem] flex flex-col lg:flex-row gap-y-12 md:gap-x-12">
          <div className="relative w-[350px] sm:w-[300px] h-[200px] sm:h-[250px] p-8 flex flex-col justify-end items-center border-4 border-[#ffffff]/[0.5] rounded-xl backdrop-blur-md">
            <img src="assets/images/playImg1.png" alt="" className="absolute -top-16 sm:-top-20 w-[55%] sm:w-[75%]" />
            <div className="text-[22px]">FIGHT</div>
            <div className="text-center text-[15px]">When fighting, your characters become stronger, the higher your characters level , the more building improvements are available to you.</div>
          </div>
          <div className="relative w-[350px] sm:w-[300px] h-[200px] sm:h-[250px] p-8 flex flex-col justify-end items-center border-4 border-[#ffffff]/[0.5] rounded-xl backdrop-blur-md">
            <img src="assets/images/playImg2.png" alt="" className="absolute -top-16 sm:-top-20 w-[55%] sm:w-[75%]" />
            <div className="text-[22px]">BUILD</div>
            <div className="text-center text-[15px]">Upgrade buildings on your land to get resources and income. Wells give water to restore energy to the characters, buildings give resources and income, the wall protects your land.</div>
          </div>
          <div className="relative w-[350px] sm:w-[300px] h-[200px] sm:h-[250px] p-8 flex flex-col justify-end items-center border-4 border-[#ffffff]/[0.5] rounded-xl backdrop-blur-md">
            <img src="assets/images/playImg3.png" alt="" className="absolute -top-16 sm:-top-20 w-[55%] sm:w-[75%]" />
            <div className="text-[22px]">EARN</div>
            <div className="text-center text-[15px]">The higher your characters level, the better buildings are developed, the more you earn. Your income depends only on your achievements in the game.</div>
          </div>
        </div>
        <img src="assets/images/characters/character-5.png" alt="" className="absolute left-16 sm:-left-16 md:left-[-9rem] xl:-left-64 bottom-0 sm:bottom-0 xl:-bottom-24 w-full sm:w-[60%]" />
        <img src="assets/images/rock3.png" alt="" className="absolute right-0 -bottom-24 sm:-bottom-20 xl:-bottom-40 w-[90%] sm:w-1/2" />
      </div>
      <div className="relative md:w-full xl:h-[1202px] flex justify-center overflow-visible mt-[22rem] sm:mt-[18rem] lg:mt-[18rem] xl:mt-0">
        <img src="assets/images/backgrounds/whitepaper.jpg" className="background-position-center-absolute w-[1920px] h-[1200px] 2xl:w-full 2xl:h-full" />
        <img src="assets/images/tree1.png" alt="" className="absolute left-0 top-[-22.5rem] sm:top-[-20.5rem] md:top-[-20rem] xl:-top-8 w-1/2" />
        <img src="assets/images/tree2.png" alt="" className="absolute right-0 top-[-23rem] sm:top-[-21.5rem] xl:-top-20 w-[50.4%]" />
        <div className="flex flex-col justify-start items-center translate-y-[-15rem] sm:translate-y-[-17rem] xl:translate-y-0">
          <img src="assets/images/white-book.png" alt="" className="my-32 z-10" />
          <ClickButton title="WHITEPAPER" className="w-[18rem] h-20" onClick={() => goUrl('https://cryptoshowdawn.gitbook.io/untitled/')} />
        </div>
      </div>
      <div className="relative md:hidden md:w-full xl:h-[1428px] flex flex-col justify-center items-center mt-[47rem] sm:mt-[43rem] md:mt-[-22rem]">
        <img src="assets/images/backgrounds/gemdescription.png" className="background-position-center-absolute w-[1920px] h-[1428px] 2xl:w-full 2xl:h-full" />
      </div>
      <div className="relative md:w-full xl:h-[1428px] flex flex-col justify-center items-center mt-0 sm:mt-4 md:mt-[12rem] lg:mt-[10rem] xl:mt-[-22rem]">
        <img src="assets/images/backgrounds/gemdescription.png" className="background-position-center-absolute w-[1920px] h-[1428px] 2xl:w-full 2xl:h-full" />
        <img src="assets/images/characters/character-4.png" alt="" className="absolute -right-8 top-[-55rem] md:top-[-32rem] lg:top-[-35rem] xl:top-[-19rem] w-[85%] sm:w-[65%] md:w-[55%] lg:w-[500px] xl:w-[600px]" />
        <img src="assets/images/rock6.png" alt="" className="absolute right-0 sm:-right-40 top-[-31rem] md:top-[-9rem] lg:top-[-9rem] xl:top-60 w-[90%] md:w-[73%] lg:w-[60%]" />
        <img src="assets/images/rock7.png" alt="" className="absolute -right-40 top-[-6rem] w-[33%] -z-10" />
        <div className="w-[1300px] flex flex-col justify-start items-center translate-y-[-27rem] md:translate-y-[-5rem] xl:translate-y-[-20rem]">
          <div className="font-oi text-[#FF9B00] text-[30px] sm:text-[40px] md:text-[50px] lg:text-[55px] xl:text-[60px] text-center xl:text-left text-gradient-shadow-stroke w-full">Gem<br /><span style={{ WebkitTextFillColor: "white" }}>description</span></div>
          <div className="flex flex-col xl:flex-row mt-20 gap-y-20 md:gap-x-6">
            <div className="flex flex-col md:flex-row gap-x-6 gap-y-20">
              <div className="relative w-[350px] md:w-[310px] h-[270px] md:h-[340px] p-5 pt-10 md:p-4 md:pt-16 flex flex-col justify-start items-center border-4 border-[#ffffff]/[0.5] rounded-xl backdrop-blur-md">
                <img src="assets/images/item/item-infernal-3.png" alt="" className="absolute -top-16 md:-top-20 w-[25%] md:w-[30%]" />
                <div className="text-[18px] md:text-[22px]">CRITICAL</div>
                <div className="text-center text-[13px] md:text-[15px]">This gem increases chance of critical attack if equipped on a character.</div>
                {count.map((number) => (
                  <div key={number} className="text-[15px] md:text-[18px] flex justify-between border-b-2 border-white my-2 w-full">
                    <div>{number} LVL GEM GIVE</div>
                    <div className="percent-text">+{5 * number}%</div>
                  </div>
                ))}
                <div className="text-[15px] md:text-[18px] flex justify-between my-2 w-full">
                  <div>INITIAL CRIT CHANCE</div>
                  <div className="percent-text">+10%</div>
                </div>
              </div>
              <div className="relative w-[350px] md:w-[310px] h-[250px] md:h-[340px] p-5 pt-10 md:p-4 md:pt-16 flex flex-col justify-start items-center border-4 border-[#ffffff]/[0.5] rounded-xl backdrop-blur-md">
                <img src="assets/images/item/item-chimera-3.png" alt="" className="absolute -top-16 md:-top-20 w-[25%] md:w-[30%]" />
                <div className="text-[18px] md:text-[22px]">HP</div>
                <div className="text-center text-[13px] md:text-[15px]">This gem increases hp if equipped on a character.</div>
                {count.map((number) => (
                  <div key={number} className={`text-[15px] md:text-[18px] flex justify-between ${number === 3 ? "" : "border-b-2"} border-white my-2 w-full`}>
                    <div>{number} LVL GEM GIVE</div>
                    <div className="percent-text">+{50 * number} HP</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-x-6 gap-y-20">
              <div className="relative w-[350px] md:w-[310px] h-[250px] md:h-[340px] p-5 pt-10 md:p-4 md:pt-16 flex flex-col justify-start items-center border-4 border-[#ffffff]/[0.5] rounded-xl backdrop-blur-md">
                <img src="assets/images/item/item-gem-3.png" alt="" className="absolute -top-16 md:-top-20 w-[25%] md:w-[30%]" />
                <div className="text-[18px] md:text-[22px]">ATTACK</div>
                <div className="text-center text-[13px] md:text-[15px]">This gem increases attack damage if equipped on a character.</div>
                {count.map((number) => (
                  <div key={number} className={`text-[15px] md:text-[18px] flex justify-between ${number === 3 ? "" : "border-b-2"} border-white my-2 w-full`}>
                    <div>{number} LVL GEM GIVE</div>
                    <div className="percent-text">+{10 * number} DMAGE</div>
                  </div>
                ))}
              </div>
              <div className="relative w-[350px] md:w-[310px] h-[250px] md:h-[340px] p-5 pt-10 md:p-4 md:pt-16 flex flex-col justify-start items-center border-4 border-[#ffffff]/[0.5] rounded-xl backdrop-blur-md">
                <img src="assets/images/item/box-closed.png" alt="" className="absolute -top-16 md:-top-20 w-[25%] md:w-[30%]" />
                <div className="text-[18px] md:text-[22px]">CHEST</div>
                <div className="text-center text-[13px] md:text-[15px]">Crystals can only be obtained from chests. Crystals drop from chests randomly and have 3 types of rarity</div>
                <img src="assets/images/test-btn.png" alt="" className="cursor-pointer mt-6 w-[55%] md:w-[65%]" onClick={() => setShowClaimWindowFlag(true)} />
              </div>
            </div>
          </div>
        </div>
        {showClaimWindowFlag && <Claim setShowClaimWindowFlag={setShowClaimWindowFlag} />}
      </div>
      <div className="relative md:w-full xl:h-[1280px] flex justify-center mt-[76rem] sm:mt-[52em] md:mt-[61rem] lg:mt-[31rem] xl:mt-0">
        <img src="assets/images/backgrounds/howEarn.jpg" className="background-position-center-absolute w-[1920px] h-[1280px] 2xl:w-full 2xl:h-full" />
        <img src="assets/images/characters/character-3.png" alt="" className="absolute left-0 top-[-99rem] sm:top-[-74rem] md:top-[-67rem] lg:top-[-42rem] xl:top-[-42rem] w-[73%] sm:w-[45%] md:w-[35%] lg:w-[27%]" />
        <img src="assets/images/rock4.png" alt="" className="absolute left-0 top-[-25rem] w-[30%] hidden sm:block" />
        <img src="assets/images/rock5.png" alt="" className="absolute right-0 top-[-22rem] w-[30%] hidden sm:block" />
        <div className="main-bg absolute w-[1200px] h-[1000px] sm:h-[800px] top-[-81rem] sm:top-[-57rem] md:top-[-52rem] lg:top-[-26rem] xl:top-[-33rem] flex flex-col-reverse sm:flex-row justify-center items-center">
          <img src="assets/images/earn-center.png" alt="" className="absolute w-[75%] h-[70%] sm:h-[65%] me-6" />
          <img src={`assets/images/characters/idle/${currentCharacter}.gif`} alt="GIF Image" className={`object-cover ${currentCharacter === 2 ? "w-44 sm:w-56" : "w-56 sm:w-64"} me-0 sm:me-16 z-10`} />
          <div className={`relative text-bg ${currentCharacter === 3 || currentCharacter === 4 ? "w-[365px] sm:w-[380px] h-[370px] sm:h-[370px]" : ""} w-[280px] sm:w-[300px] h-[320px] sm:h-[350px] ml-0 sm:ml-16 z-10 p-4 sm:p-6 flex justify-center items-center`}>
            <div className="absolute top-6 text-[25px]">{characterData[currentCharacter - 1].header}</div>
            <div className="text-center text-[14px] leading-6 mt-6">{characterData[currentCharacter - 1].detail}</div>
          </div>
          <div className="absolute bottom-16 flex justify-between">
            {characterList.map((item, index) => (
              <img
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
          <div className="font-oi text-[#FF9B00] text-[30px] sm:text-[40px] md:text-[50px] lg:text-[55px] xl:text-[60px] text-gradient-shadow-stroke"><span style={{ WebkitTextFillColor: "white" }}>How to</span> earn</div>
          <div className="flex flex-col md:flex-row my-16 gap-y-16 sm:gap-y-12 md:gap-x-4 xl:gap-x-12">
            <div className="relative w-[350px] sm:w-[350px] lg:w-[500px] h-[160px] sm:h-[180px] md:h-[170px] lg:h-[200px] p-4 flex flex-col justify-end items-center border-4 border-[#ffffff]/[0.5] rounded-xl backdrop-blur-md">
              <img src="assets/images/helmit.png" alt="" className="absolute -top-16 sm:-top-20 w-[45%] md:w-[50%]" />
              <div className="text-[22px]">CHARACTERS</div>
              <div className="text-center text-[15px]">Fight in battles for increase your characters level. The higher level your characters have, the better you can improve your land.</div>
            </div>
            <div className="relative w-[350px] sm:w-[350px] lg:w-[500px] h-[160px] sm:h-[180px] md:h-[170px] lg:h-[200px] p-4 flex flex-col justify-end items-center border-4 border-[#ffffff]/[0.5] rounded-xl backdrop-blur-md">
              <img src="assets/images/playImg2.png" alt="" className="absolute -top-16 sm:-top-20 w-[45%] md:w-[50%]" />
              <div className="text-[22px]">LAND</div>
              <div className="text-center text-[15px]">Improve your land this opens up all the ways for you to progress in the game, the better your land is inproved, the more you earn.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative md:w-full xl:h-[1223px] flex flex-col justify-start items-center -mt-12 sm:mt-[-17rem] md:mt-[-22rem] lg:mt-[-10rem] xl:mt-[-50rem] 2xl:mt-[-48rem]">
        <img src="assets/images/backgrounds/contact.png" className="background-position-center-absolute w-[1920px] h-[750px] md:h-[1132px] lg:h-[1300px] 2xl:w-full 2xl:h-full" />
        <div className="flex flex-col justify-center items-center mt-0 md:mt-[24rem] lg:mt-[20rem] xl:mt-[35rem] 2xl:mt-[20rem] translate-y-[-31%] sm:translate-y-[-25%] md:translate-y-[-24rem] lg:translate-y-[-10rem] xl:translate-y-[-14rem] 2xl:translate-y-0">
          <div className="font-oi text-[#FF9B00] text-[30px] sm:text-[40px] md:text-[50px] lg:text-[55px] xl:text-[60px] text-gradient-shadow-stroke"><span style={{ WebkitTextFillColor: "white" }}>Main</span> team</div>
          <div className="flex flex-col lg:flex-row items-center gap-y-6 my-6 md:gap-x-6 z-10">
            <div className="relative w-[300px] xl:w-[420px] h-[170px] xl:h-[225px] flex flex-col justify-center items-center">
              <img src="assets/images/member/member1.png" alt="" className="absolute w-full h-full -z-10" />
              <div className="text-[22px] mt-20 xl:mt-24">ILYA GUZNENKOV</div>
              <div className="text-[18px]">FOUNDER</div>
            </div>
            <div className="relative w-[300px] xl:w-[420px] h-[170px] xl:h-[225px] flex flex-col justify-center items-center">
              <img src="assets/images/member/member2.png" alt="" className="absolute w-full h-full -z-10" />
              <div className="text-[22px] mt-20 xl:mt-24">NIKOKAY POPOV</div>
              <div className="text-[18px]">CO-FOUNDER</div>
            </div>
            <div className="relative w-[300px] xl:w-[420px] h-[170px] xl:h-[225px] flex flex-col justify-center items-center">
              <img src="assets/images/member/member3.png" alt="" className="absolute w-full h-full -z-10" />
              <div className="text-[22px] mt-20 xl:mt-24">ANNA RERICH</div>
              <div className="text-[18px]">ADMINISTRATOR</div>
            </div>
          </div>
          <ClickButton title="PLAY" className="w-52 h-16 z-10" onClick={() => goUrl("https://play.cryptoshowdown.io/")} />
        </div>
        <img src="assets/images/rock8.png" alt="" className="absolute left-0 -bottom-4 w-[40%]" />
        <img src="assets/images/rock9.png" alt="" className="absolute right-0 -bottom-4 w-1/2" />
        <img src="assets/images/characters/character-6.png" alt="" className="absolute -right-12 lg:-right-20 bottom-0 w-[62%] lg:w-[400px] 2xl:w-[600px] h-[64%] sm:h-[70%] lg:h-[660px] 2xl:h-[1000px] z-20" />
        <div className="absolute left-12 sm:left-0 bottom-0 sm:bottom-8 md:bottom-20 flex flex-col sm:flex-row justify-around w-full mb-2 z-30">
          <div>©SOURCECODE<br />ALL RIGHTS RESERVERD</div>
          <div className="flex items-center my-8 sm:my-0"><img src="assets/images/sms.png" alt="" className="me-2" />ADM@SOURCE-CODE.WORK</div>
          <div className="flex gap-x-4 items-center">
            <img src="assets/images/tw.png" alt="" className="cursor-pointer" onClick={() => goUrl("https://twitter.com/Crypto_Showdown")} />
            <img src="assets/images/tg.png" alt="" className="cursor-pointer" onClick={() => goUrl("https://t.me/cryptoshowdown")} />
            <img src="assets/images/discord.png" alt="" className="cursor-pointer" onClick={() => goUrl("https://discord.gg/9FRAyNg9Qh")} />
          </div>
        </div>
      </div>
    </div>
  );
}