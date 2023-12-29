import {
  AboutCard,
  BirthdayCard,
  DiscordCard,
  DiscordCardSkeleton,
  EmailCard,
  ExpCard,
  GithubCard,
  LanguageCard,
  LinkedinCard,
  ProjectsCard,
  SkillsCard,
  SpotifyCard,
  SpotifyCardSkeleton,
  ThemeModeCard,
  TimeCard,
} from "@/components/index";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20 bg-white">
      <AboutCard />
      <div className="grid col-span-2 md:col-span-1 gap-2 grid-cols-2 md:gap-4 bg-white ">
        <LanguageCard />
        <ThemeModeCard />
      </div>
      <BirthdayCard />
      <LinkedinCard />
      <ExpCard />
      <GithubCard />
      <ProjectsCard />
      <SkillsCard />
      <EmailCard />
      <Suspense fallback={<DiscordCardSkeleton />}>
        <DiscordCard />
      </Suspense>
      <Suspense fallback={<SpotifyCardSkeleton />}>
        <SpotifyCard />
      </Suspense>
      <Suspense fallback={<DiscordCard />}>
        <TimeCard />
      </Suspense>
    </main>
  );
}
