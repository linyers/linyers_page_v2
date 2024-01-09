import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
import guts from "../../../assets/images/guts.png";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Ignacio Jimenez | Projects",
  description: "By Linyers",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("Projects");
  return (
    <>
      <div className="mx-2">
        <nav className="relative flex items-center rounded-3xl bg-white dark:bg-slate-900 my-5 container mx-auto px-4 py-5 md:py-8 xl:px-20 overflow-hidden text-center gap-2 md:gap-10">
          <Link href="/">
            <BsArrowLeftShort className="text-slate-600 dark:text-white text-4xl md:text-5xl" />
          </Link>
          <h2 className="cursor-default font-bold text-slate-600 dark:text-white text-2xl md:text-5xl">
            {t("title")}
          </h2>
          <Image
            className="absolute right-0 w-1/4 md:w-1/3 bottom-0 top-0 md:-top-20 object-cover -z-0"
            src={guts}
            alt="guts"
            width="488"
            height="1100"
            draggable="false"
            placeholder="blur"
            loading="eager"
            priority
          />
        </nav>
        {children}
      </div>
    </>
  );
}
