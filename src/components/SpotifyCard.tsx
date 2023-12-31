// import { motion } from "framer-motion";
import styles from "@/styles/SpotifyCard.module.css";
import { useLocale } from "next-intl";

import { BsSpotify } from "react-icons/bs";
import { fetchSpotifyPlaying } from "@/lib/data";
import SpotifyAudio from "./SpotifyAudio";

export default async function SpotifyCard() {
  const locale = useLocale();
  const data = await fetchSpotifyPlaying();

  return (
    <div className="relative flex flex-col justify-between p-3 md:p-7 lg:p-8 rounded-3xl md:col-span-2 col-span-1 row-span-1 overflow-hidden bg-white dark:bg-slate-900 scale-[100%]">
      <div className="absolute right-3 md:static">
        <a
          href={data?.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="md:text-4xl text-[#62DBBE] dark:text-[#25ac8c] duration-500 hover:text-[#4cd1b2] dark:hover:text-[#3ca188] ease-in-out"
          aria-label="Spotify"
        >
          <BsSpotify />
        </a>
      </div>

      <div className={styles.card__body}>
        <p className="text-slate-600 dark:text-white font-bold text-xs lg:text-2xl md:text-xl">
          {locale === "es" ? "Escuchado recientemente" : "Recently listened to"}
        </p>
        <div className="flex mb-2 flex-col">
          <p className="text-slate-600 dark:text-white w-full xl:text-xl lg:text-lg text-xs font-semibold truncate">
            {data?.name}
          </p>
          <p className="text-slate-600 dark:text-white w-full xl:text-xl lg:text-lg text-xs truncate">
            {!data
              ? "Error"
              : data?.artists.length > 1
              ? data?.artists.map((artist) => artist.name).join(", ")
              : data?.artists[0].name}
          </p>
        </div>
        <SpotifyAudio data={data} />
      </div>

      <img
        src={data?.album.images[0].url}
        alt={data?.name || ""}
        width={data?.album.images[0].width}
        height={data?.album.images[0].height}
        className={`${styles.image}`}
        loading="lazy"
      />
    </div>
  );
}
