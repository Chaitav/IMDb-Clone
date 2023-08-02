"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

interface Props {
  children: any;
}

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider enableSystem attribute="class">
      <div className="dark:bg-gray-900 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
