"use client";

import { useTheme } from "next-themes";
import styles from "@/styles/ThemeModeCard.module.css";
import { useEffect, useState } from "react";

export default function ThemeCard() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (theme === "light" || resolvedTheme === "light") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [theme, resolvedTheme]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    if (checked) {
      setChecked(true);
      setTheme("light");
    } else {
      setChecked(false);
      setTheme("dark");
    }
  };

  return (
    <div className="flex justify-center items-center bg-white dark:bg-slate-900 rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm">
      <label className={`${styles.vm__checkbox} scale-75`}>
        <input
          type="checkbox"
          id="switch"
          value={checked ? "checked" : ""}
          checked={checked}
          onChange={handleChange}
          name="theme"
          aria-label="Theme"
        />
        <div className={styles.slider}></div>
      </label>
    </div>
  );
}
