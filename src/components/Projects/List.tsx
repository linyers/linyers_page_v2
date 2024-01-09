import { projects } from "@/lib/projects";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function List() {
  const locale = useLocale();

  return (
    <ul className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
      {projects.map((project, idx) => {
        const projectLang = project[locale as "es" | "en"];
        return (
          <li
            className="flex items-center bg-white dark:bg-slate-900 rounded-3xl"
            key={idx}
          >
            <Link className="pt-6 w-full rounded-3xl" href={"/es/projects"}>
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
                      className="dark:bg-slate-800 py-1 px-2 rounded-3xl"
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
              <Image
                src={project.images[0]}
                className="w-full h-full object-cover"
                alt={projectLang.title}
                draggable={false}
                width={1280}
                height={720}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
