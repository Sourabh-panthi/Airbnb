import Image from "next/image";
import React from "react";

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <div className="relative py-16 cursor-pointer ">
      <div className="relative h-64 min-w-[300px] ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
          priority
        />
        <div className="absolute top-10 left-12  ">
          <h3 className=" text-3xl w-60 mb-2">{title}</h3>
          <p className="text-sm mb-2">{description}</p>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LargeCard;
