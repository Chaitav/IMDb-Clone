import React from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

import { MenuItem } from "./MenuItem";
import { DarkModeSwitch } from "./DarkModeSwitch";

export const Header = () => {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="Home" address="/" MenuIcon={AiFillHome} />
        <MenuItem
          title="About"
          address="/about"
          MenuIcon={BsFillInfoCircleFill}
        />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link className="" href="/">
          <h2 className="text-2xl">
            <span className="text-2xl font-bold bg-amber-500 py-1 px-2 mr-1 rounded-lg">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};
