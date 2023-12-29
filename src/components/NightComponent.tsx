import styles from "@/styles/WeatherCard.module.css";
import TimeInterval from "./TimeIntervalComponent";
// import { useTranslation } from "react-i18next";

export default function NightComponent({ weather }: { weather: any }) {
  const { data } = weather;
  // const [t, i18n] = useTranslation("global");

  return (
    <div className="bg-[#001324] w-full flex overflow-hidden bg-clip-padding text-white py-2 px-4 lg:p-8">
      <div className="flex flex-col justify-center lg:h-full static z-10">
        <div className="flex items-center">
          <p className="text-4xl md:text-5xl font-bold">
            {data?.main.temp + "°"}
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
            width={100}
            height={100}
            className="w-14 h-14 md:w-20 md:h-20"
            draggable="false"
            alt=""
          />
        </div>
        <p className="capitalize text-xl lg:text-2xl font-semibold lg:mb-0">
          {data?.weather[0].description}
        </p>
        <TimeInterval />
        <p className="text-md lg:text-xl">
          {data?.name + ", " + data?.sys.country}
        </p>
      </div>
      <div className="absolute right-0 top-0 flex justify-end pr-5 z-0 items-center w-full h-full overflow-hidden">
        {/* <Moon /> */}
      </div>
    </div>
  );
}

function Moon() {
  return (
    <div
      className={`${styles.night} ${styles.container} w-20 h-20 lg:w-56 lg:h-56 right-5`}
    >
      <span className={`${styles.moon} w-10 h-10 lg:w-24 lg:h-24`}></span>
      <span className={styles.spot1}></span>
      <span className={styles.spot2}></span>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
