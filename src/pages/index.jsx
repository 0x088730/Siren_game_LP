import React, { Suspense, useEffect, useState } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import { addTokenPrice, counterUser, getTokenPrice } from "~/common/api";
import i18next from "~/global/i18n";

// const Header = React.lazy(() => import('~/components/screens/header'));
// const MainPage = React.lazy(() => import('~/components/screens/mainPage'));
// const HowPlay = React.lazy(() => import('~/components/screens/howPlay'));
// const WhitePaper = React.lazy(() => import('~/components/screens/whitePaper'));
// const GemDescription = React.lazy(() => import('~/components/screens/gemDescription'));
// const HowEarn = React.lazy(() => import('~/components/screens/howEarn'));
// const ContactUs = React.lazy(() => import('~/components/screens/contactUs'));
import Header from "~/components/screens/header";
import MainPage from "~/components/screens/mainPage";
import HowPlay from "~/components/screens/howPlay";
import WhitePaper from "~/components/screens/whitePaper";
import GemDescription from "~/components/screens/gemDescription";
import HowEarn from "~/components/screens/howEarn";
import ContactUs from "~/components/screens/contactUs";

export default function Home() {
  const [currentMenu, setCurrentMenu] = useState("Home");
  const { t, i18n } = useTranslation();
  const [loaded1, setLoaded1] = useState(false);
  const [loaded2, setLoaded2] = useState(false);
  const [loaded3, setLoaded3] = useState(false);
  const [loaded4, setLoaded4] = useState(false);
  const [loaded5, setLoaded5] = useState(false);
  const [loaded6, setLoaded6] = useState(false);
  const [tokenList, setTokenList] = useState([]);
  const [isCooldownStarted, setIsCooldownStarted] = useState(false);

  useEffect(() => {
    i18n.changeLanguage('en');
    counterUser().then(res => {
      // alert(res.message);
    });
    addTokenPrice().then(res => {
      getTokenPrice().then(res => {
        setTokenList(res.data);
        setIsCooldownStarted(true);
      })
    })
  }, []);

  useEffect(() => {
    if (isCooldownStarted === true) {
      var cooldownInterval = setInterval(() => {
        getTokenPrice().then(res => {
          setTokenList(res.data);
        })
      }, 600000)
    }

    return () => clearInterval(cooldownInterval)
  }, [isCooldownStarted])

  return (
    <div>
      <I18nextProvider i18n={i18next}>
        <div className={`w-full overflow-hidden Home`}>
          <div className={`absolute w-full h-24 flex z-10 justify-center items-center`}>
            {/* <Suspense fallback={<div>Loading Header...</div>}> */}
            <Header currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />
            {/* </Suspense> */}
          </div>
          <div id="Home" className={`w-full`}>
            <div className="relative font-skranji text-white z-0">
              {/* <Suspense fallback={<div>Loading...</div>}> */}
              <MainPage loaded={loaded1} setLoaded={setLoaded1} />
              <HowPlay loaded={loaded2} setLoaded={setLoaded2} />
              <WhitePaper loaded={loaded3} setLoaded={setLoaded3} />
              <GemDescription loaded={loaded4} setLoaded={setLoaded4} />
              <HowEarn loaded={loaded5} setLoaded={setLoaded5} tokenList={tokenList} />
              <ContactUs loaded={loaded6} setLoaded={setLoaded6} />
              {/* </Suspense> */}
            </div>
          </div>
        </div>
      </I18nextProvider>
    </div>
  );
}
