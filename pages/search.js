import React, { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { parseISO, format } from "date-fns";
import InfoCard from "../Components/InfoCard";
import Maps from "../Components/Map";
const Saarch = ({ hotelList }) => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const [StartD, setStartD] = useState();
  const [EndD, setEndD] = useState();
  const hotelsData = hotelList.data.body.searchResults.results;
  useEffect(() => {
    if (startDate && endDate) {
      setStartD(format(parseISO(startDate), "dd-MMMM-yy"));
      setEndD(format(parseISO(endDate), "dd-MMMM-yy"));
    }
  }, [location]);
  const range = `${StartD} - ${EndD}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
      <main className="max-w-6xl mx-auto flex flex-col">
        <section className="px-6 pt-11 flex-grow">
          <p className="text-xs">
            300+ Stays {range} for {noOfGuests} guests
          </p>
          <h1 className="font-bold text-2xl mt-3 mb-5"> Stays in {location}</h1>
          <div className="hidden md:inline-flex whitespace-nowrap space-x-3 mb-5 ">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div>
            {hotelsData &&
              hotelsData.map(
                ({
                  address,
                  coordinate,
                  guestReviews,
                  landmarks,
                  name,
                  id,
                  optimizedThumbUrls,
                  ratePlan,
                }) => (
                  <InfoCard
                    key={id}
                    address={address}
                    coordinate={coordinate}
                    guestReviews={guestReviews}
                    landmarks={landmarks}
                    name={name}
                    id={id}
                    optimizedThumbUrls={optimizedThumbUrls}
                    ratePlan={ratePlan}
                  />
                )
              )}
          </div>
        </section>
        <section className="m-5 shadow-lg p-10 border rounded-xl">
          <Maps hotelsData={hotelsData} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Saarch;

export const getServerSideProps = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "844bb4d3f3mshe539ce0d9cdc19cp1db50cjsn5990ce11d0f1",
      "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
    },
  };

  const hotelList = await fetch(
    "https://hotels4.p.rapidapi.com/properties/list?destinationId=1506246&pageNumber=1&pageSize=25&checkIn=2022-10-12&checkOut=2022-10-14&adults1=1&sortOrder=PRICE&locale=en_US&currency=USD",
    options
  ).then((response) => response.json());

  return {
    props: {
      hotelList,
    },
  };
};
