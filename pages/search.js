import React, { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { parseISO, format } from "date-fns";

const Saarch = () => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const [StartD, setStartD] = useState();
  const [EndD, setEndD] = useState();

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

const axios = require("axios");

const options = {
  method: "GET",
  url: "https://booking-com.p.rapidapi.com/v1/hotels/search",
  params: {
    checkout_date: "2022-10-01",
    units: "metric",
    dest_id: "-553173",
    dest_type: "city",
    locale: "en-gb",
    adults_number: "2",
    order_by: "popularity",
    filter_by_currency: "AED",
    checkin_date: "2022-09-30",
    room_number: "1",
    children_number: "2",
    page_number: "0",
    children_ages: "5,0",
    categories_filter_ids: "class::2,class::4,free_cancellation::1",
    include_adjacency: "true",
  },
  headers: {
    "X-RapidAPI-Key": "844bb4d3f3mshe539ce0d9cdc19cp1db50cjsn5990ce11d0f1",
    "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
