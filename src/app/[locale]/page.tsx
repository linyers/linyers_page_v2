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
  TimeCardSkeleton,
} from "@/components/index";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto px-4 xl:px-20">
      <AboutCard />
      <div className="grid col-span-2 md:col-span-1 gap-2 grid-cols-2 md:gap-4">
        <LanguageCard />
        <ThemeModeCard />
      </div>
      <BirthdayCard />
      <LinkedinCard />
      <ExpCard />
      <GithubCard />
      <ProjectsCard />
      <EmailCard />
      <SkillsCard />
      <Suspense fallback={<DiscordCardSkeleton />}>
        <DiscordCard />
      </Suspense>
      <Suspense fallback={<SpotifyCardSkeleton />}>
        <SpotifyCard />
      </Suspense>
      <Suspense fallback={<TimeCardSkeleton />}>
        <TimeCard />
      </Suspense>
    </main>
  );
}
