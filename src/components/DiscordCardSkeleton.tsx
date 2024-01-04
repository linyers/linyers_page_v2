import styles from "../styles/discordCardSkeleton.module.css";

export default function DiscordCardSkeleton() {
  return (
    <div
      className={`text-white rounded-3xl flex relative overflow-hidden aspect-square shadow-sm bg-white dark:bg-slate-900`}
    >
      <div className={styles.squares}></div>
    </div>
  );
}
