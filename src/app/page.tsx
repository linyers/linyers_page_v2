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
  ThemeModeCard,
  WeatherCard,
} from "@/components/index";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20 bg-white">
      <AboutCard />
      <div className="md:grid flex gap-2 md:grid-cols-2 md:gap-4 container bg-white ">
        <LanguageCard />
        <ThemeModeCard />
      </div>
      <BirthdayCard />
      <LinkedinCard />
      <ExpCard />
      <GithubCard />
      <ProjectsCard />
      <SkillsCard />
      <Suspense fallback={<DiscordCardSkeleton />}>
        <DiscordCard />
      </Suspense>
      <SpotifyCard />
    </main>
  );
}
