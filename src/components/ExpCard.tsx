// import moment from "moment";
// import { useTranslation } from "react-i18next";
// import { CountUp } from "use-count-up";

export default function ExpCard() {
  // const [t, i18n] = useTranslation("global");

  const getExp = () => {
    const today = new Date();
    const start = new Date("2023-01-01");
    const years = today.getFullYear() - start.getFullYear();
    return years;
  };

  return (
    <div className="text-white rounded-3xl flex relative overflow-hidden aspect-square shadow-sm bg-blue-400/80 p-4 justify-center items-center">
      <div className="">
        <div className="flex justify-center items-center flex-col">
          <p className="text-4xl md:text-8xl font-bold">+{getExp()}</p>
          <p className="text-xs md:text-xl uppercase font-semibold text-center">
            {/* {t("exp")} */}
            AÑOS DE EXPERIENCIA
          </p>
        </div>
      </div>
    </div>
  );
}
