// import moment from "moment";
import { useTranslations } from "next-intl";

export default function ExpCard() {
  const t = useTranslations("Exp");

  const getExp = () => {
    const today = new Date();
    const start = new Date("2023-01-01");
    const difference = today - start;
    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
    return years;
  };

  return (
    <div className="text-slate-600 dark:text-white rounded-3xl flex relative overflow-hidden aspect-square shadow-sm bg-white dark:bg-slate-900 p-4 justify-center items-center">
      <div className="">
        <div className="flex justify-center items-center flex-col">
          <p className="text-4xl md:text-8xl font-bold">+{getExp()}</p>
          <p className="text-xs md:text-xl uppercase font-semibold text-center">
            {t("exp")}
          </p>
        </div>
      </div>
    </div>
  );
}
