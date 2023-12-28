export default function LanguagueCard() {
  return (
    <div
      // onClick={toggleLanguage}
      className="flex flex-col justify-center items-center bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out"
    >
      <p className="font-semibold uppercase text-white dark:text-white text-5xl">
        ES
      </p>
      <p className="font-bold transition duration-300 ease-in-out ">
        <span className={"text-white"}>EN </span>
        <span className={"es" === "es" ? "text-purple-400" : "text-white"}>
          ES
        </span>
      </p>
    </div>
  );
}
