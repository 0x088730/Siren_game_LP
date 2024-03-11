import React, { Suspense, useEffect, useState } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import { counterUser } from "~/common/api";
import i18next from "~/global/i18n";
import Image from 'next/image';
import LazyImage from "~/components/lazyImage";

const Header = React.lazy(() => import('~/components/screens/header'));
const MainPage = React.lazy(() => import('~/components/screens/mainPage'));
const HowPlay = React.lazy(() => import('~/components/screens/howPlay'));
const WhitePaper = React.lazy(() => import('~/components/screens/whitePaper'));
const GemDescription = React.lazy(() => import('~/components/screens/gemDescription'));
const HowEarn = React.lazy(() => import('~/components/screens/howEarn'));
const ContactUs = React.lazy(() => import('~/components/screens/contactUs'));

export default function Home() {
  const [currentMenu, setCurrentMenu] = useState("Home");
  const { t, i18n } = useTranslation();
  const [loadedImages1, setLoadedImages1] = useState({ count: 0, loaded: false });
  const [loadedImages2, setLoadedImages2] = useState({ count: 0, loaded: false });
  const [loadedImages3, setLoadedImages3] = useState({ count: 0, loaded: false });
  const [loadedImages4, setLoadedImages4] = useState({ count: 0, loaded: false });
  const [loadedImages5, setLoadedImages5] = useState({ count: 0, loaded: false });
  const [loadedImages6, setLoadedImages6] = useState({ count: 0, loaded: false });
  const [percent, setPercent] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loadedImages1.count >= 3 && !loadedImages1.loaded) {
      setLoadedImages1(prevState => ({ ...prevState, loaded: true }));
    }
  }, [loadedImages1.count, loadedImages1.loaded]);

  useEffect(() => {
    if (loadedImages2.count >= 6 && loadedImages1.loaded && !loadedImages2.loaded) {
      setLoadedImages2(prevState => ({ ...prevState, loaded: true }));
    }
  }, [loadedImages2.count, loadedImages2.loaded, loadedImages1.loaded]);

  useEffect(() => {
    if (loadedImages3.count >= 5 && loadedImages2.loaded && !loadedImages3.loaded) {
      setLoadedImages3(prevState => ({ ...prevState, loaded: true }));
    }
  }, [loadedImages3.count, loadedImages3.loaded, loadedImages2.loaded]);

  useEffect(() => {
    if (loadedImages4.count >= 8 && loadedImages3.loaded && !loadedImages4.loaded) {
      setLoadedImages4(prevState => ({ ...prevState, loaded: true }));
    }
  }, [loadedImages4.count, loadedImages4.loaded, loadedImages3.loaded]);

  useEffect(() => {
    if (loadedImages5.count >= 12 && loadedImages4.loaded && !loadedImages5.loaded) {
      setLoadedImages5(prevState => ({ ...prevState, loaded: true }));
    }
  }, [loadedImages5.count, loadedImages5.loaded, loadedImages4.loaded]);

  useEffect(() => {
    if (loadedImages6.count >= 11 && loadedImages5.loaded && !loadedImages6.loaded) {
      setLoadedImages6(prevState => ({ ...prevState, loaded: true }));
    }
  }, [loadedImages6.count, loadedImages6.loaded, loadedImages5.loaded]);

  useEffect(() => {
    setPercent(Math.floor((loadedImages1.count + loadedImages2.count + loadedImages3.count + loadedImages4.count + loadedImages5.count + loadedImages6.count) * 100 / 45))
    if ((loadedImages1.count + loadedImages2.count + loadedImages3.count + loadedImages4.count + loadedImages5.count + loadedImages6.count) >= 45) {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [loadedImages1.count, loadedImages2.count, loadedImages3.count, loadedImages4.count, loadedImages5.count, loadedImages6.count])
  console.log(loadedImages1.count, loadedImages2.count, loadedImages3.count, loadedImages4.count, loadedImages5.count, loadedImages6.count)

  const handleImageLoad1 = () => {
    setLoadedImages1(prevState => ({ ...prevState, count: prevState.count + 1 }));
  };
  const handleImageLoad2 = () => {
    setLoadedImages2(prevState => ({ ...prevState, count: prevState.count + 1 }));
  };
  const handleImageLoad3 = () => {
    setLoadedImages3(prevState => ({ ...prevState, count: prevState.count + 1 }));
  };
  const handleImageLoad4 = () => {
    setLoadedImages4(prevState => ({ ...prevState, count: prevState.count + 1 }));
  };
  const handleImageLoad5 = () => {
    setLoadedImages5(prevState => ({ ...prevState, count: prevState.count + 1 }));
  };
  const handleImageLoad6 = () => {
    setLoadedImages6(prevState => ({ ...prevState, count: prevState.count + 1 }));
  };

  useEffect(() => {
    setLoading(true)
    i18n.changeLanguage('en');
    counterUser().then(res => {
      if (res.count === false) {
        // alert(res.message);
      }
    });
  }, []);

  return (
    <div>
      <I18nextProvider i18n={i18next}>
        <div className={`w-full overflow-hidden Home`}>
          <div className={`${loading === false ? "h-0 hidden z-0" : "h-full flex z-30"} w-full justify-center`}>
            <LazyImage
              src="assets/images/backgrounds/loading.jpg"
              className={`background-position-center w-full h-full ${loading === true ? "z-10" : ""}`}
            />
            <LazyImage
              src="assets/images/spinner.svg"
              className={`absolute bottom-16 w-40 ${loading === true ? "z-10" : ""}`}
            />
            <div className={`absolute bottom-[6.5rem] font-skranji text-white text-[3rem] font-bold ${loading === true ? "z-10" : ""}`}>{percent}%</div>
          </div>
          <div className={`absolute w-full h-24 ${loading === false ? "flex" : "hidden"} z-10 flex justify-center items-center`}>
            <Suspense fallback={<div>...</div>}>
              <Header currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />
            </Suspense>
          </div>
          <div id="Home" className="w-full">
            <div className="relative font-skranji text-white z-0">
              <Suspense fallback={<div></div>}>
                <MainPage handleImageLoad={handleImageLoad1} loadedImages={loadedImages1} />
              </Suspense>
              <Suspense fallback={<div></div>}>
                <HowPlay handleImageLoad={handleImageLoad2} loadedImages={loadedImages2} />
              </Suspense>
              <Suspense fallback={<div></div>}>
                <WhitePaper handleImageLoad={handleImageLoad3} loadedImages={loadedImages3} />
              </Suspense>
              <Suspense fallback={<div></div>}>
                <GemDescription handleImageLoad={handleImageLoad4} loadedImages={loadedImages4} />
              </Suspense>
              <Suspense fallback={<div></div>}>
                <HowEarn handleImageLoad={handleImageLoad5} loadedImages={loadedImages5} />
              </Suspense>
              <Suspense fallback={<div></div>}>
                <ContactUs handleImageLoad={handleImageLoad6} loadedImages={loadedImages6} />
              </Suspense>
            </div>
          </div>
        </div>
      </I18nextProvider>
    </div>
  );
}
