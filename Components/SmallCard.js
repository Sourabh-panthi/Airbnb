import Image from "next/image";
import React from "react";

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex items-center hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out cursor-pointer rounded-xl my-2">
      <div className="relative h-16 w-16 mx-5 my-2">
        <Image
          src={img}
          layout="fill"
          objectFit="contain"
          className="rounded-lg "
        />
      </div>
      <div>
        <h2 className="font-semibold ">{location}</h2>
        <p className="text-sm text-gray-500">{distance}</p>
      </div>
    </div>
  );
};

export default SmallCard;
