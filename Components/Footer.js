import React from "react";

const Footer = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-4 bg-gray-100 text-gray-600 pl-56 py-14  gap-y-10">
      <div className="space-y-3 text-xs mt-10  text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>News room </p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-3 text-xs mt-10 text-gray-800">
        <h5 className="font-bold">COMMUNITY </h5>
        <p>Accessibility</p>
        <p>This is not a real site </p>
        <p> Its a pretty awesome clone </p>
        <p>Referrals accepted </p>
        <p>Papafarm</p>
      </div>
      <div className="space-y-3 text-xs mt-10 text-gray-800">
        <h5 className="font-bold">Host</h5>
        <p>Sourabh Panthi</p>
        <p> Front End</p>
        <p>Developer</p>
        <p> React js</p>
        <p>Tailwind Css</p>
      </div>
      <div className="space-y-3 text-xs mt-10 text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Say Hi YouTube </p>
        <p>Easter Eggs</p>
        <p> For The Win</p>
      </div>
    </div>
  );
};

export default Footer;
