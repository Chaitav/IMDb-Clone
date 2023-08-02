"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";

export const DarkModeSwitch: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = "system" === theme ? systemTheme : theme;

  useEffect(() => setMounted(true), []); // Required for initial theme behavior on mounting

  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("light")}
          />
        ) : (
          <BsFillMoonFill
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("dark")}
          />
        ))}
    </>
  );
};
