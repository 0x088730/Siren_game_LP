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
  const [loadedImages, setLoadedImages] = useState([
    { count: 0, loaded: false, imgCount: 3 },
    { count: 0, loaded: false, imgCount: 6 },
    { count: 0, loaded: false, imgCount: 5 },
    { count: 0, loaded: false, imgCount: 8 },
    { count: 0, loaded: false, imgCount: 12 },
    { count: 0, loaded: false, imgCount: 11 },
  ]);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const totalCount = loadedImages.reduce((total, image) => total + image.count, 0);
    const loadedCount = loadedImages.filter(image => image.loaded).length;
    const newPercent = Math.floor((loadedCount * 100) / (loadedImages.length * 3));
    setPercent(newPercent);
  }, [loadedImages]);

  const handleImageLoad = (index) => {
    setLoadedImages(prevState => {
      const newState = [...prevState];
      newState[index] = { ...newState[index], count: newState[index].count + 1 };
      if (newState[index].count >= newState[index].imgCount && !newState[index].loaded) {
        newState[index] = { ...newState[index], loaded: true };
      }
      return newState;
    });
  };

  const imageLoadHandlers = loadedImages.map((_, index) => () => handleImageLoad(index));

  console.log(loadedImages);

  useEffect(() => {
    document.body.style.overflowY = "hidden"
    i18n.changeLanguage('en');
    counterUser().then(res => {
      if (res.count === false) {
        // alert(res.message);
      }
    });
  }, []);
  useEffect(() => {
    if (percent === 100)
      document.body.style.overflowY = "auto"
  }, [percent]);

  return (
    <div>
      <I18nextProvider i18n={i18next}>
        <div className={`w-full overflow-hidden Home`}>
          <div className={`${percent === 100 ? "h-0" : "h-full"} w-full z-30 flex justify-center`}>
            <LazyImage
              src="assets/images/backgrounds/loading.jpg"
              className={`background-position-center w-full h-full`}
            />
            <LazyImage
              src="assets/images/spinner.svg"
              className="absolute bottom-16 w-40"
            />
            <div className="absolute bottom-[6.5rem] font-skranji text-white text-[3rem] font-bold">{percent}%</div>
          </div>
          <div className={`absolute w-full h-24 ${percent === 100 ? "flex" : "hidden"} z-10 flex justify-center items-center`}>
            <Suspense fallback={<div>...</div>}>
              <Header currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />
            </Suspense>
          </div>
          <div id="Home" className={`w-full ${percent === 100 ? "" : "h-0"}`}>
            <div className="relative font-skranji text-white z-0">
              <Suspense fallback={<div></div>}>
                <MainPage handleImageLoad={imageLoadHandlers[0]} loadedImages={loadedImages[0]} />
              </Suspense>
              <Suspense fallback={<div></div>}>
                <HowPlay handleImageLoad={imageLoadHandlers[1]} loadedImages={loadedImages[1]} />
              </Suspense>
              <Suspense fallback={<div></div>}>
                <WhitePaper handleImageLoad={imageLoadHandlers[2]} loadedImages={loadedImages[2]} />
              </Suspense>
              <Suspense fallback={<div></div>}>
                <GemDescription handleImageLoad={imageLoadHandlers[3]} loadedImages={loadedImages[3]} />
              </Suspense>
              <Suspense fallback={<div></div>}>
                <HowEarn handleImageLoad={imageLoadHandlers[4]} loadedImages={loadedImages[4]} />
              </Suspense>
              <Suspense fallback={<div></div>}>
                <ContactUs handleImageLoad={imageLoadHandlers[5]} loadedImages={loadedImages[5]} />
              </Suspense>
            </div>
          </div>
        </div>
      </I18nextProvider>
    </div>
  );
}
