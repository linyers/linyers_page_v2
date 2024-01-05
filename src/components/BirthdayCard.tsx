import { useTranslations } from "next-intl";

export default function BirthdayCard() {
  const t = useTranslations("Age");

  const getAge = () => {
    const today = new Date();
    const birthDate = new Date("2003-04-06");
    const difference = today.getTime() - birthDate.getTime();
    const age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
    return age;
  };

  return (
    <div className="text-white rounded-3xl flex relative overflow-hidden aspect-square shadow-sm bg-blue-300 dark:bg-blue-900 p-4 justify-center items-center">
      <div className="">
        <div className="flex justify-center items-center flex-col">
          <p className="text-xs md:text-lg uppercase font">{t("age")}</p>
          <p className="text-4xl md:text-8xl font-bold">{getAge()}</p>
          <p className="text-xs md:text-xl uppercase font-semibold text-center">
            {t("years")}
          </p>
        </div>
      </div>
    </div>
  );
}
