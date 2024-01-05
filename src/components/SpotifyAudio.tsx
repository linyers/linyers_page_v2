"use client";

import React, { useEffect } from "react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import styles from "@/styles/SpotifyCard.module.css";

export default function SpotifyAudio({ data }: { data: any }) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlay = () => {
    setIsPlaying(true);

    const playAudio = (id: string) => {
      const audioElement = document.getElementById(id) as HTMLAudioElement;
      if (!audioElement) {
        return;
      }
      if (id === "music") {
        audioElement.play();
        return;
      }
      audioElement.style.animationPlayState = "running";
    };

    playAudio("music");
    playAudio("audio1");
    playAudio("audio2");
    playAudio("audio3");
    playAudio("audio4");
    playAudio("audio5");
    playAudio("audio6");
    playAudio("audio7");
    playAudio("audio8");
    playAudio("audio9");
  };

  const handlePause = () => {
    setIsPlaying(false);

    const pauseAudio = (id: string) => {
      const audioElement = document.getElementById(id) as HTMLAudioElement;
      if (!audioElement) {
        return;
      }
      if (id === "music") {
        audioElement.pause();
        return;
      }
      audioElement.style.animationPlayState = "paused";
    };

    pauseAudio("music");
    pauseAudio("audio1");
    pauseAudio("audio2");
    pauseAudio("audio3");
    pauseAudio("audio4");
    pauseAudio("audio5");
    pauseAudio("audio6");
    pauseAudio("audio7");
    pauseAudio("audio8");
    pauseAudio("audio9");
  };

  const handleState = () => {
    setIsPlaying((prev) => !prev);
  };

  const reset = () => {
    setIsPlaying(false);

    const resetAudio = (id: string) => {
      const audioElement = document.getElementById(id) as HTMLAudioElement;
      if (!audioElement) {
        return;
      }
      audioElement.style.animationPlayState = "none";
    };

    resetAudio("audio1");
    resetAudio("audio2");
    resetAudio("audio3");
    resetAudio("audio4");
    resetAudio("audio5");
    resetAudio("audio6");
    resetAudio("audio7");
    resetAudio("audio8");
    resetAudio("audio9");
  };

  useEffect(() => {
    if (isPlaying) {
      handlePlay();
    } else {
      handlePause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      handlePause();
      reset();
    }
  }, [data]);

  useEffect(() => {
    const musicElement = document.getElementById(
      "music",
    ) as HTMLAudioElement | null;

    if (musicElement) {
      musicElement.volume = 0.5;
    }
  }, []);

  return (
    <>
      <div
        id="audiovisual"
        className={styles.audiovisual}
        onClick={handleState}
      >
        <div className="text-slate-600 dark:text-white text-xl">
          {isPlaying ? <BsFillPauseFill /> : <BsFillPlayFill />}
        </div>
        <div
          className={`${styles.audiowire} bg-slate-600 dark:bg-white`}
          id="audio1"
        ></div>
        <div
          className={`${styles.audiowire} bg-slate-600 dark:bg-white`}
          id="audio2"
        ></div>
        <div
          className={`${styles.audiowire} bg-slate-600 dark:bg-white`}
          id="audio3"
        ></div>
        <div
          className={`${styles.audiowire} bg-slate-600 dark:bg-white`}
          id="audio4"
        ></div>
        <div
          className={`${styles.audiowire} bg-slate-600 dark:bg-white`}
          id="audio5"
        ></div>
        <div
          className={`${styles.audiowire} bg-slate-600 dark:bg-white`}
          id="audio6"
        ></div>
        <div
          className={`${styles.audiowire} bg-slate-600 dark:bg-white`}
          id="audio7"
        ></div>
        <div
          className={`${styles.audiowire} bg-slate-600 dark:bg-white`}
          id="audio8"
        ></div>
        <div
          className={`${styles.audiowire} bg-slate-600 dark:bg-white`}
          id="audio9"
        ></div>
      </div>
      <audio src={data?.preview_url} id="music" onEnded={reset}></audio>
    </>
  );
}
