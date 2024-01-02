import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutCard() {
  const t = useTranslations("About");
  return (
    <div className="relative col-span-3 aspect-video md:aspect-auto row-span-2 rounded-3xl overflow-hidden bg-slate-700">
      <div className="h-full md:w-8/12 absolute top-0 left-0 p-4 md:p-8 flex flex-col justify-start  md:justify-end">
        <h1 className="text-3xl md:text-xl lg:text-5xl font-bold text-white mb-4 md:mb-5">
          {t("title")}
        </h1>
        <p
          dangerouslySetInnerHTML={{ __html: t.raw("description") }}
          className="text-md md:text-lg lg:text-2xl text-white"
        />
      </div>
    </div>
  );
}
