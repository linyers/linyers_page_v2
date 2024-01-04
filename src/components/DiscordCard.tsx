import { BsDiscord } from "react-icons/bs";
import { fetchDiscordStatus } from "../lib/data";
import { MdOpenInNew } from "react-icons/md";

export default async function DiscordCard() {
  const status = await fetchDiscordStatus();
  const getBgClass = (status: string): string => {
    const bgClass = {
      idle: "bg-[#FF5B5B] dark:bg-[#E33E3E]",
      dnd: "bg-[#FF5B5B] dark:bg-[#E33E3E]",
      online: "bg-[#6DD2B7] dark:bg-[#35AC8C]",
      offline: "bg-slate-300 dark:bg-slate-900",
    };
    return bgClass[status] || "bg-slate-300 dark:bg-slate-900";
  };

  return (
    <a
      href="https://discord.com/users/948009520850931722"
      target="_blank"
      rel="noopener noreferrer"
      className={`text-white rounded-3xl flex relative overflow-hidden aspect-square shadow-sm cursor-pointer scale-[100%] hover:scale-[103%] transition duration-300 ease-in-out ${getBgClass(
        status,
      )}`}
    >
      <div className="absolute inset-0 flex items-center justify-center text-md md:text-2xl xl:text-3xl font-bold">
        <div className="flex items-center gap-3">
          <MdOpenInNew className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white dark:text-[#ffffffaa]" />
          <p className="flex gap-1 md:gap-2 justify-center items-center capitalize">
            <BsDiscord /> {status}
          </p>
        </div>
      </div>

      {/* {status !== "offline" && activity && (
        <div className="absolute bottom-0 w-full flex justify-end items-center p-5 gap-5 invisible lg:visible">
          <div className="flex flex-col items-end ">
            <p className="font-bold">{activity?.name}</p>
            <p>
              {`${t("online.since")} ${moment(
                activity?.timestamps?.start
              ).fromNow()}`}
            </p>
          </div>
          {activity?.assets?.large_image && (
            <Image
              className="invisible rounded-md w-10 h-10 lg:visible"
              src={`https://cdn.discordapp.com/app-assets/${activity?.application_id}/${activity?.assets?.large_image}.webp`}
              width="40"
              height="40"
              draggable="false"
              alt=""
            />
          )}
        </div>
      )} */}
    </a>
  );
}
