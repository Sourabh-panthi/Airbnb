import Image from "next/image";
import React from "react";

const CardData = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transsition transform duration-300 ease-out ">
      <div className="relative h-60 w-60 my-2">
        <Image
          src={img}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
          priority
        />
      </div>
      <p className="text-xl font-semibold mt-3 ml-3">{title}</p>
    </div>
  );
};

export default CardData;
