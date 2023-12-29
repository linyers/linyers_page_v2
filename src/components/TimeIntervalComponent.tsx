"use client";

import { useEffect, useState } from "react";

export default function TimeInterval() {
  const [time, setTime] = useState("");

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Buenos_Aires",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatter.format(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <p className="text-md lg:text-xl">{time}</p>;
}
