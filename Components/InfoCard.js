import Image from "next/image";
import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const InfoCard = ({
  address,
  coordinate,
  guestReviews,
  landmarks,
  name,
  id,
  optimizedThumbUrls,
  ratePlan,
}) => {
  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition  duration-200 ease-out first:border-t ">
      <div className="relative h-36 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          className="rounded-lg"
          src="https://links.papareact.com/q7j"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <h4 className="text-xl font-semibold">{name}</h4>
          <HeartIcon className="h-6 cursor-pointer" />
        </div>
        <p>{address.locality}</p>
        <p>{address.streetAddress}</p>
        <div className="flex justify-between items-end md:pt-16 pt-3">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" /> {guestReviews.rating}
          </p>
          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">
              {ratePlan.price.current}/night
            </p>
            <p className="text-right font-extralight">
              Old Price - {ratePlan.price.old}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
