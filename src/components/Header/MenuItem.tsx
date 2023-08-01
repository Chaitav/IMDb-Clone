import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";

interface Props {
  title: string;
  address: string;
  MenuIcon: IconType;
}

export const MenuItem: React.FC<Props> = ({ title, address, MenuIcon }) => {
  return (
    <div>
      <Link className="mx-4 lg:mx-6 hover:text-amber-600" href={address}>
        <MenuIcon className="text-2xl sm:hidden mx-4" />
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
};
