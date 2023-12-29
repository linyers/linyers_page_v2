"use client";

import React, { useEffect } from "react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import styles from "@/styles/SpotifyCard.module.css";

export default function SpotifyAudio({ data }) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    document.getElementById("music").play();
    document.getElementById("audio1").style.animationPlayState = "running";
    document.getElementById("audio2").style.animationPlayState = "running";
    document.getElementById("audio3").style.animationPlayState = "running";
    document.getElementById("audio4").style.animationPlayState = "running";
    document.getElementById("audio5").style.animationPlayState = "running";
    document.getElementById("audio6").style.animationPlayState = "running";
    document.getElementById("audio7").style.animationPlayState = "running";
    document.getElementById("audio8").style.animationPlayState = "running";
    document.getElementById("audio9").style.animationPlayState = "running";
  };

  const handlePause = () => {
    setIsPlaying(false);
    document.getElementById("music").pause();
    document.getElementById("audio1").style.animationPlayState = "paused";
    document.getElementById("audio2").style.animationPlayState = "paused";
    document.getElementById("audio3").style.animationPlayState = "paused";
    document.getElementById("audio4").style.animationPlayState = "paused";
    document.getElementById("audio5").style.animationPlayState = "paused";
    document.getElementById("audio6").style.animationPlayState = "paused";
    document.getElementById("audio7").style.animationPlayState = "paused";
    document.getElementById("audio8").style.animationPlayState = "paused";
    document.getElementById("audio9").style.animationPlayState = "paused";
  };

  const handleState = () => {
    setIsPlaying((prev) => !prev);
  };

  const reset = () => {
    setIsPlaying(false);
    document.getElementById("audio1").style.animation = "none";
    document.getElementById("audio2").style.animation = "none";
    document.getElementById("audio3").style.animation = "none";
    document.getElementById("audio4").style.animation = "none";
    document.getElementById("audio5").style.animation = "none";
    document.getElementById("audio6").style.animation = "none";
    document.getElementById("audio7").style.animation = "none";
    document.getElementById("audio8").style.animation = "none";
    document.getElementById("audio9").style.animation = "none";
    document.getElementById("audio1").offsetHeight;
    document.getElementById("audio2").offsetHeight;
    document.getElementById("audio3").offsetHeight;
    document.getElementById("audio4").offsetHeight;
    document.getElementById("audio5").offsetHeight;
    document.getElementById("audio6").offsetHeight;
    document.getElementById("audio7").offsetHeight;
    document.getElementById("audio8").offsetHeight;
    document.getElementById("audio9").offsetHeight;
    document.getElementById("audio1").style.animation = null;
    document.getElementById("audio2").style.animation = null;
    document.getElementById("audio3").style.animation = null;
    document.getElementById("audio4").style.animation = null;
    document.getElementById("audio5").style.animation = null;
    document.getElementById("audio6").style.animation = null;
    document.getElementById("audio7").style.animation = null;
    document.getElementById("audio8").style.animation = null;
    document.getElementById("audio9").style.animation = null;
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
    document.getElementById("music").volume = 0.5;
  }, []);
  return (
    <>
      <div
        id="audiovisual"
        className={styles.audiovisual}
        onClick={handleState}
      >
        <div className=" text-white text-xl">
          {isPlaying ? <BsFillPauseFill /> : <BsFillPlayFill />}
        </div>
        <div className={styles.audiowire} id="audio1"></div>
        <div className={styles.audiowire} id="audio2"></div>
        <div className={styles.audiowire} id="audio3"></div>
        <div className={styles.audiowire} id="audio4"></div>
        <div className={styles.audiowire} id="audio5"></div>
        <div className={styles.audiowire} id="audio6"></div>
        <div className={styles.audiowire} id="audio7"></div>
        <div className={styles.audiowire} id="audio8"></div>
        <div className={styles.audiowire} id="audio9"></div>
      </div>
      <audio src={data?.preview_url} id="music" onEnded={reset}></audio>
    </>
  );
}
