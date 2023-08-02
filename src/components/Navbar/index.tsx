import React from "react";
import { NavbarItem } from "./NavbarItem";

export const Navbar = () => {
  return (
    <div className="flex justify-center dark:bg-gray-700 bg-amber-100 lg:text-lg p-2">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};
