import Image from "next/image";
import React, { useState } from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const Header = ({ placeholder }) => {
  const [SearchInput, setSearchInput] = useState("");
  const [StartDate, setStartDate] = useState(new Date());
  const [EndtDate, setEndDate] = useState(new Date());
  const [NoOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: StartDate,
    endDate: EndtDate,
    key: "selection",
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: SearchInput,
        startDate: StartDate.toISOString(),
        endDate: EndtDate.toISOString(),
        noOfGuests: NoOfGuests,
      },
    });
  };
  return (
    <header className="sticky top-0 grid grid-cols-3 z-50 bg-white shadow-md p-5 md:px-10">
      <div
        onClick={() => {
          router.push("/");
        }}
        className="relative h-8 flex items-center cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex py-2 items-center md:border-2 md:shadow-sm rounded-full ">
        <input
          value={SearchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder={placeholder || " Start your search"}
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

      {SearchInput && (
        <div className="absolute top-16 left-1/4 bg-white px-auto shadow-lg p-5">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex text-center justify-between border-b-2 pb-2">
            <h2 className="mt-3 font-semibold">Number of Guests</h2>
            <div className="flex text-center border px-3 py-2 pt-3 rounded-full">
              <UsersIcon className="h-5" />
              <input
                type="number"
                min={1}
                value={NoOfGuests}
                onChange={(e) => setNoOfGuests(e.target.value)}
                className="w-12 text-lg outline-none text-red-400 ml-3 mt-[-3px]"
              />
            </div>
          </div>
          <div className="flex justify-around items-center pt-2">
            <button
              className="flex-grow text-gray-500"
              onClick={() => setSearchInput("")}
            >
              Cancel
            </button>
            <button
              onClick={() => {
                search();
              }}
              className="text-red-400 flex-grow"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
