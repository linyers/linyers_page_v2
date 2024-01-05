import { useTranslations } from "next-intl";

export default function TimeCardSkeleton() {
  const t = useTranslations("Global");

  return (
    <div className={`rounded-3xl flex relative overflow-hidden aspect-square`}>
      <div className="bg-[#001324] w-full flex overflow-hidden bg-clip-padding text-white py-2 px-4 lg:p-8">
        <div className="flex flex-col justify-center lg:h-full static z-10">
          <div className="flex items-center">
            <p className="text-md md:text-5xl font-bold">... °</p>
          </div>
          <p className="capitalize text-xs md:text-2xl font-semibold lg:mb-0">
            {t("loading")}
          </p>
          <p className="text-xs lg:text-xl">Santiago del Estero, AR</p>
        </div>
      </div>
    </div>
  );
}
