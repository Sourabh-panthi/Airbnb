import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
const Header = () => {
  return (
    <header className="sticky top-0 grid grid-cols-3 z-50 bg-white shadow-md p-5 md:px-10">
      <div className="relative h-8 flex items-center cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex py-2 items-center md:border-2 md:shadow-sm rounded-full ">
        <input
          placeholder=" Start your search"
          className="mx-2 flex-grow outline-none pl-3 bg-transparent text-gray-500 placeholder-gray-400"
        />
        <SearchIcon className=" hidden  md:inline-flex h-6 bg-red-400 text-white rounded-full p-1 cursor-pointer md:mx-2" />
      </div>
      <div className=" flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline-flex">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 rounded-full p-1">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
