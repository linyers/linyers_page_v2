// import { useTranslation } from "react-i18next";
// import { CountUp } from "use-count-up";

export default function BirthdayCard() {
  // const [t, i18n] = useTranslation("global");

  const getAge = () => {
    const today = new Date();
    const birthDate = new Date("2003-04-06");
    const age = today.getFullYear() - birthDate.getFullYear();
    return age;
  };

  return (
    <div className="text-white rounded-3xl flex relative overflow-hidden aspect-square shadow-sm bg-[#ff4848d3] p-4 justify-center items-center">
      <div className="">
        <div className="flex justify-center items-center flex-col">
          <p className="text-xs md:text-lg uppercase font">
            {/* {t("birthday.age")} */}
            EDAD
          </p>
          <p className="text-4xl md:text-8xl font-bold">{getAge()}</p>
          <p className="text-xs md:text-xl uppercase font-semibold text-center">
            {/* {t("birthday.years-old")} */}
            Años
          </p>
        </div>
      </div>
    </div>
  );
}
