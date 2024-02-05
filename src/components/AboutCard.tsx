import Image from "next/image";
import { useTranslations } from "next-intl";
import guts from "../assets/images/guts.png";

export default function AboutCard() {
  const t = useTranslations("About");
  return (
    <div className="relative col-span-3 aspect-video md:aspect-auto row-span-2 rounded-3xl overflow-hidden bg-white dark:bg-slate-900">
      <Image
        className="absolute bottom-0 right-0 w-1/4 md:w-1/2 top-0 object-cover -z-0"
        src={guts}
        alt="guts"
        width="488"
        height="1100"
        draggable="false"
        placeholder="blur"
        loading="eager"
        priority
      />
      <div className="balanced h-full w-9/12 md:w-8/12 absolute top-0 left-0 p-6 md:p-8 flex flex-col justify-start">
        <h1 className="text-xl md:text-2xl lg:text-5xl font-bold mb-2 md:mb-5 text-slate-600 dark:text-white">
          {t("title")}
        </h1>
        <p
          dangerouslySetInnerHTML={{ __html: t.raw("description") }}
          className="text-xs md:text-lg lg:text-2xl text-slate-600 dark:text-white"
        />
      </div>
    </div>
  );
}
