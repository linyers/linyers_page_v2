"use server";

import { isAfter, add, getTime } from "date-fns";
import { fetchTime, fetchWeather } from "@/lib/data";
import NightComponent from "./NightComponent";
import DayComponent from "./DayComponent";

export default async function TimeCard() {
  const { data } = await fetchTime();
  const weather = await fetchWeather();

  const [sunriseTime, sunsetTime] = (() => {
    if (!data) return [null, null];

    return [new Date(data.results.sunrise), new Date(data.results.sunset)];
  })();

  const getTimeComponent = () => {
    if (!sunriseTime || !sunsetTime) return null;
    if (isAfter(new Date(), add(sunsetTime, { hours: 1 }))) {
      return <NightComponent weather={weather} />;
    }
    if (isAfter(new Date(), sunriseTime)) {
      return <DayComponent weather={weather} />;
    }
    return <NightComponent weather={weather} />;
  };

  return (
    <div className={`rounded-3xl flex relative overflow-hidden aspect-square`}>
      {getTimeComponent()}
    </div>
  );
}
