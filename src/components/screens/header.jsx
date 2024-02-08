import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { global } from "~/common/global";
export default function Header({ currentMenu, setCurrentMenu }) {
  const [showFlag, setShowFlag] = useState({ menu: false });
  // const [showpresale, setshowPresale] = useState(false);

  const router = useRouter()
  const { t, i18n } = useTranslation()
  const menuList = [
    t('Home'),
    // t("How To Play"),
    t("WhitePaper"),
    // t("Gems"),
    // t("Characters"),
    // t("How To Earn"),
    // t("About Us"),
    // t("Contact"),
    t("Presale"),
    t("Referral Info"),
  ];

  const handleMenuClick = (menu) => {
    if (menu === currentMenu) return
    global.pageStatus = "main"
    if (menu === t("Presale")) {
     router.push('/presale')
    //  setshowPresale(true)
    }
    else if (menu === t("Referral Info")) {
      router.push('/referral-info')
     }
    else {
      router.push('/')
    }
    // else {
    //   setCurrentMenu(menu);
    //   setShowFlag({ menu: false });
    // }

  };
  const handleLangClick = () => {
    const lang = i18n.language === 'ru' ? 'en' : 'ru';
    const imgElement = document.querySelector('.lang-image');
    if (imgElement) {
      imgElement.src = `assets/images/la_${lang}.png`;
    }
    i18n.changeLanguage(lang);
  }
  // useEffect(() => {
  //   if (!menuList.includes(currentMenu)) {
  //     setCurrentMenu("Home");
  //   }
  // }, [currentMenu]);


  return (
    <div className="fixed w-full h-20 bg-[#8d70ff] z-10 flex items-center shadow-2xl justify-between">
      <div className="flex items-center justify-start h-full ">
        <div className="px-4 text-xl text-center text-gray-300 cursor-pointer font-animeace lg:text-2xl">
          «{t("CRYPTO_SHOWDOWN")}»
        </div>
        <div className="justify-start hidden h-full lg:text-lg px-30 xl:flex">
          {menuList.map((menu) => {
            return (
              <Link
                key={menu}
                to={menu}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`px-4 hover:bg-[#3d208e] hover:text-orange-300 text-sm font-animeace duration-700 h-full flex items-center cursor-pointer 
                             hover:scale-105 border-0 border-b-4 border-transparent hover:border-orange-300 text-white `
                }
                onClick={() => handleMenuClick(menu)}
              >
                {menu}
              </Link>
            );
          })}
               {/* ${currentMenu === menu
                    ? "text-orange-300 " : "text-white"
                  } */}
        </div>
      </div>

      <div className="items-center hidden h-full space-x-5 xl:flex">
        <div className="h-1/3">
          <img
            src="assets/images/icons/tg.png"
            alt=""
            className="object-cover w-full cursor-pointer"
          />
        </div>
        <div className="h-1/3">
          <img
            src="assets/images/icons/tw.png"
            alt=""
            className="object-cover w-full cursor-pointer"
          />
        </div>
        <div className="h-1/3">
          <img
            src="assets/images/icons/discord.png"
            alt=""
            className="object-cover w-full cursor-pointer"
          />
        </div>
        <div className="flex space-x-2 text-white cursor-pointer font-animeace " onClick={handleLangClick}>

          <img alt='' className="lang-image" src={`assets/images/la_${i18n.language === 'en' ? 'en' : 'ru'}.png`} />
          <div>
            {t('EN')}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>

        </div>
        <div className="flex items-center justify-center w-32 h-full text-2xl text-white duration-500 cursor-pointer font-animeace bg-cyan-500 hover:bg-cyan-800">
          {t('PLAY')}
        </div>
      </div>
      <div className="w-1/2 h-full text-right xl:hidden">
        <button
          onClick={() => setShowFlag({ ...showFlag, menu: !showFlag.menu })}
          className="w-32 h-full "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div
          className={`absolute right-0 w-64 text-center xl:hidden bg-[#8d70ff] text-3xl transition-transform duration-500 transform ${showFlag.menu ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {showFlag.menu === true &&
            menuList.map((menu) => {
              return (
                <div
                  key={menu}
                  className={`px-4 py-2 cursor-pointer hover:bg-[#3d208e] hover:text-white duration-700 ${currentMenu === menu
                      ? "text-orange-500 " : "text-white"
                    }`}
                >
                  <Link
                    key={menu}
                    to={menu}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => handleMenuClick(menu)}
                  >
                    {menu}
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
