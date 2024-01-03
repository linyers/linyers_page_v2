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

  const handleChange = (e) => {
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
    <div className="flex justify-center items-center bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm">
      <div className={styles["checkbox-wrapper-5"]}>
        <div className={styles.check}>
          <input
            type="checkbox"
            id="check-5"
            value={checked}
            checked={checked}
            onChange={handleChange}
            name="theme"
            aria-label="Theme"
          />
          <label htmlFor="check-5"></label>
        </div>
      </div>
    </div>
  );
}
