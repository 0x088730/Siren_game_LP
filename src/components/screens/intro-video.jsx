import { useTranslation } from "react-i18next";

export default function IntroVideo() {
  const { t, i18n } = useTranslation();  
  return (
    <div className="relative  overflow-hidden bg-[#8d70ff]  md:w-full xl:h-screen">
      <video
        src="assets/videos/intro.mp4"
        className="object-cover object-center w-full h-full"
        autoPlay
        loop
        muted
      ></video>
      <div
        className="absolute top-0 w-full h-full translate-y-10 md:translate-y-1/3 translate-x-10 md:translate-x-1/4"
        style={{ WebkitBackfaceVisibility: "hidden" }}
      >
        <div className="">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-6xl xl:text-7xl text-shadow-sm-gray font-animeace">
            {t("PLAY SOON")}!
          </h1>
          <div className="w-2/3 text-sm h-10 font-bold text-white md:text-2xl lg:text-4xl xl:text-3xl text-shadow-sm-red font-animeace md:mt-10">
            {t("The first RPG gacha game on the blockchain")}
          </div>
          <button className="px-20 py-5 md:mt-16 text-lg text-white duration-500 border md:text-2xl hover:bg-sky-300 border-sky-300 font-animeace ">
            {t("GET STARTED")}
          </button>
        </div>
      </div>
    </div>
  );
}