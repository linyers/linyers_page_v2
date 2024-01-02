"use client";

import { useRouter } from "../navigation";
import { useLocale } from "next-intl";

export default function LanguagueCard() {
  const router = useRouter();
  const locale = useLocale();
  const toggleLanguage = (locale: string) => {
    const localeReplace = ["en", "es"][+(locale === "en")];
    router.replace("/", { locale: localeReplace });
  };
  return (
    <div
      onClick={() => toggleLanguage(locale)}
      className="flex flex-col justify-center items-center bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out"
    >
      <p className="font-semibold uppercase text-white dark:text-white text-5xl">
        {locale.toUpperCase()}
      </p>
      <p className="font-bold transition duration-300 ease-in-out ">
        <span className={locale === "en" ? "text-purple-400" : "text-white"}>
          EN{" "}
        </span>
        <span className={locale === "es" ? "text-purple-400" : "text-white"}>
          ES
        </span>
      </p>
    </div>
  );
}
