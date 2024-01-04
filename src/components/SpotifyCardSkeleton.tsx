import Image from "next/image";
import styles from "@/styles/SpotifyCard.module.css";
import skelton from "../assets/images/skeleton.gif";
import { useTranslations } from "next-intl";
import { BsSpotify } from "react-icons/bs";

export default function SpotifyCard() {
  const t = useTranslations("Spotify");
  const tGlobal = useTranslations("Global");
  return (
    <div className="relative flex flex-col justify-between p-3 md:p-7 lg:p-8 rounded-3xl md:col-span-2 col-span-1 row-span-1 overflow-hidden bg-white dark:bg-slate-900 scale-[100%]">
      <div className="absolute invisible md:visible md:static">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="md:text-4xl text-[#62DBBE] dark:text-[#25ac8c] duration-500 hover:text-[#4cd1b2] dark:hover:text-[#3ca188] ease-in-out"
          aria-label="Spotify"
          aria-disabled="true"
        >
          <BsSpotify />
        </a>
      </div>

      <div className={styles.card__body}>
        <p className="text-slate-600 dark:text-white font-bold text-xs lg:text-2xl md:text-xl">
          {t("title")}
        </p>
        <div className="flex mb-2 flex-col">
          <p className="text-slate-600 dark:text-white w-full xl:text-xl lg:text-lg text-xs font-semibold truncate">
            {tGlobal("loading")}
          </p>
        </div>
        <div id="audiovisual" className={styles.audiovisual}>
          <div
            className={`${styles.audiowire} bg-slate-600 dark:bg-white`}
            id="audio1"
          ></div>
          <div
            className={`${styles.audiowire} bg-slate-600 dark:bg-white`}
            id="audio2"
          ></div>
          <div
            className={`${styles.audiowire} bg-slate-600 dark:bg-white`}
            id="audio3"
          ></div>
          <div
            className={`${styles.audiowire} bg-slate-600 dark:bg-white`}
            id="audio4"
          ></div>
          <div
            className={`${styles.audiowire} bg-slate-600 dark:bg-white`}
            id="audio5"
          ></div>
          <div
            className={`${styles.audiowire} bg-slate-600 dark:bg-white`}
            id="audio6"
          ></div>
          <div
            className={`${styles.audiowire} bg-slate-600 dark:bg-white`}
            id="audio7"
          ></div>
          <div
            className={`${styles.audiowire} bg-slate-600 dark:bg-white`}
            id="audio8"
          ></div>
          <div
            className={`${styles.audiowire} bg-slate-600 dark:bg-white`}
            id="audio9"
          ></div>
        </div>
      </div>

      <Image
        src={skelton}
        alt={"Song coverpage"}
        width={500}
        height={500}
        className={`${styles.image}`}
        loading="lazy"
      />
    </div>
  );
}
