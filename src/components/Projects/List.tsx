"use client";

import { Project } from "@/lib/definitions";
import { projects } from "@/lib/projects";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { FaXmark } from "react-icons/fa6";

export default function List() {
  return (
    <>
      <ul className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
        {projects.map((project, idx) => {
          return <ProjectCard key={idx} project={project} />;
        })}
      </ul>
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [isHover, setIsHover] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const projectLang = project[locale as "es" | "en"];

  useEffect(() => {
    const projectURL = searchParams.get("project");
    if (projectURL === project.url) {
      document.body.style.overflow = "hidden";
      setShowModal(true);
    }
  }, [searchParams]);

  const handleShowModal = () => {
    if (!showModal) {
      router.push(`${pathname}?project=${project.url}`, { scroll: false });
      document.body.style.overflow = "hidden";
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    router.replace(pathname, { scroll: false });
    document.body.style.overflow = "auto";
    setShowModal(false);
  };

  return (
    <>
      <div
        className={`${
          showModal
            ? "cursor-pointer opacity-1 backdrop-blur-sm"
            : "opacity-0  pointer-events-none"
        } fixed top-0 left-0 w-screen h-screen z-10 bg-[#000000aa] transition duration-300 ease-in-out`}
        onClick={() => handleCloseModal()}
      ></div>
      {showModal ? (
        <li>
          <div className="fixed z-10 w-[90%] md:w-[60%] h-[90%] md:h-[60%] top-[5%] md:top-[20%] left-[5%] md:left-[20%] bg-[#f7f1f1] dark:bg-slate-900 rounded-3xl p-3 md:p-5">
            <div className="w-full h-full p-3 md:p-5 rounded-3xl bg-white dark:bg-slate-950 overflow-auto text-slate-600 dark:text-white">
              <div
                className="absolute right-5 top-6 md:right-8 md:top-10 cursor-pointer"
                onClick={() => handleCloseModal()}
              >
                <FaXmark className="text-3xl" />
              </div>
              <h2 className="font-bold text-4xl">{projectLang.title}</h2>
              <p className="pt-2 text-xl h-1/2 md:h-auto overflow-y-auto">
                {projectLang.description}
              </p>
              <div className="py-5 flex flex-wrap gap-2 overflow-auto">
                {project.tags.map((tag, idx) => {
                  return (
                    <span
                      key={idx}
                      className="bg-[#f7f1f1] dark:bg-slate-800 text-slate-800 dark:text-gray-100 py-1 px-2 rounded-3xl text-sm"
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
              {project.website && (
                <div className="pb-6 flex flex-col">
                  <span className="flex items-baseline gap-2 font-bold text-lg">
                    <TbWorld />
                    Website
                  </span>
                  <a className="w-fit underline" href={project.website}>
                    {project.website}
                  </a>
                </div>
              )}
              {project.github && (
                <div className="flex flex-col">
                  <span className="flex items-baseline gap-2 font-bold text-lg">
                    <BsGithub />
                    Github
                  </span>
                  <a className="w-fit underline" href={project.github}>
                    {project.github}
                  </a>
                </div>
              )}
            </div>
          </div>
        </li>
      ) : (
        <li
          className="flex flex-col cursor-pointer bg-white dark:bg-slate-900 rounded-3xl pt-6 w-full text-slate-600 dark:text-white border-2 border-slate-700"
          onClick={() => handleShowModal()}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <h4 className="px-5 font-bold text-3xl md:text-2xl">
            {projectLang.title}
          </h4>
          <p className="px-5 pt-2 text-lg md:text-base truncate">
            {projectLang.description}
          </p>
          <div className="px-5 py-5 flex flex-wrap gap-2 text-sm">
            {project.tags.map((tag, idx) => {
              return (
                <span
                  key={idx}
                  className="bg-[#f7f1f1] dark:bg-slate-800 text-slate-800 dark:text-gray-100 py-1 px-2 rounded-3xl"
                >
                  {tag}
                </span>
              );
            })}
          </div>
          <div
            className={`
                overflow-hidden transition-all duration-200 rounded-3xl ${
                  isHover && "rounded-t-xl"
                }`}
          >
            <Image
              src={project.images[0]}
              className="w-full h-full object-cover"
              alt={projectLang.title}
              draggable={false}
              width={1280}
              height={720}
              placeholder="blur"
            />
          </div>
        </li>
      )}
    </>
  );
}
