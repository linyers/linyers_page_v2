"use server";

import { isAfter, add, getTime } from "date-fns";
// import { DayComponent, NightComponent } from ".";

import { fetchTime } from "@/lib/data";

export default async function TimeCard() {
  const { data } = await fetchTime();

  const [sunriseTime, sunsetTime] = (() => {
    if (!data) return [null, null];

    return [new Date(data.results.sunrise), new Date(data.results.sunset)];
  })();

  const getTimeComponent = () => {
    if (!sunriseTime || !sunsetTime) return null;
    if (isAfter(new Date(), add(sunsetTime, { hours: 1 }))) {
      return "night";
    }
    if (isAfter(new Date(), sunriseTime)) {
      return "day";
    }
    return "night";
  };

  // const timeComponent = useMemo(() => {
  //   if (!data) return null;

  //   if (isAfter(new Date(), add(sunsetTime, { hours: 1 }))) {
  //     return <NightComponent />;
  //   }

  //   if (isAfter(new Date(), sunriseTime)) {
  //     return <DayComponent />;
  //   }

  //   return <NightComponent />;
  // }, [data]);

  return (
    <div className={`rounded-3xl flex relative overflow-hidden col-span-2`}>
      {/* {timeComponent} */}
    </div>
  );
}
