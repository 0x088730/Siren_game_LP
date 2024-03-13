import React, { Suspense, useEffect, useState } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import { counterUser } from "~/common/api";
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

  useEffect(() => {
    i18n.changeLanguage('en');
    counterUser().then(res => {
      // alert(res.message);
    });
  }, []);

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
                <MainPage />
                <HowPlay />
                <WhitePaper />
                <GemDescription />
                <HowEarn />
                <ContactUs />
              {/* </Suspense> */}
            </div>
          </div>
        </div>
      </I18nextProvider>
    </div>
  );
}
