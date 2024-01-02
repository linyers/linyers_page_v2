import Image from "next/image";
import { useTranslations } from "next-intl";

import github from "../assets/images/github.gif";
import { MdOpenInNew } from "react-icons/md";

export default function GithubCard() {
  const t = useTranslations("Github");

  return (
    <a
      href="https://github.com/linyers"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-3xl md:col-span-2 overflow-hidden cursor-pointer scale-[100%] hover:scale-[103%] transition duration-300 ease-in-out"
    >
      <div className="relative w-full h-full p-4 md:p-8 bg-[#00000077]">
        <Image
          className="absolute w-full h-full object-cover object-center top-0 left-0 -z-10"
          src={github}
          width={500}
          height={500}
          alt=""
          loading="lazy"
        />
        <MdOpenInNew className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white dark:text-[#ffffffaa]" />
        <div className="w-full h-full flex flex-col justify-between">
          <div className="">
            <h2 className="text-white text-sm md:text-xl lg:text-3xl font-bold">
              Github
            </h2>
            <p className="text-white text-sm md:text-md lg:text-2xl">
              {t("description")}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
