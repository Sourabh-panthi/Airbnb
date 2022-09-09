import React, { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { parseISO, format } from "date-fns";

const Saarch = ({ hotelList }) => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const [StartD, setStartD] = useState();
  const [EndD, setEndD] = useState();
  console.log("hotelList", hotelList);

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
      <main>
        <section className="px-6 pt-11 flex-grow">
          <p className="text-xs">
            300+ Stays {range} for {noOfGuests} guests
          </p>
          <h1 className="font-bold text-2xl mt-3 mb-5"> Stays in {location}</h1>
          <div className="hidden md:inline-flex flex whitespace-nowrap space-x-3 mb-5 ">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Saarch;

export const getServerSideProps = async () => {
  const hotelList = await fetch(
    "http://fake-hotel-api.herokuapp.com/api/hotels"
  ).then((res) => res.json());

  console.log("exploreData :>> ", hotelList);
  return {
    props: {
      hotelList,
    },
  };
};
