import TimeInterval from "./TimeIntervalComponent";

export default function DayComponent({ weather }: { weather: any }) {
  const { data } = weather;

  return (
    <div className="bg-[#089cffa4] w-full flex overflow-hidden bg-clip-padding text-white py-2 px-4 lg:p-8">
      <div className="flex flex-col justify-center lg:h-full static z-10">
        <div className="flex items-center">
          <p className="text-md md:text-5xl font-bold">
            {data?.main.temp + "°"}
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
            width={100}
            height={100}
            className="w-6 h-6 md:w-12 md:h-12 lg:w-20 lg:h-20"
            draggable="false"
            alt=""
          />
        </div>
        <p className="capitalize text-xs md:text-2xl font-semibold lg:mb-0">
          {data?.weather[0].description}
        </p>
        <TimeInterval />
        <p className="text-xs lg:text-xl">
          {data?.name + ", " + data?.sys.country}
        </p>
      </div>
    </div>
  );
}
