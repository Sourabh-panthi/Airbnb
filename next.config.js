/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
      "https://json.extendsclass.com",
      "links.papareact.com",
      "cdn3.iconfinder.com",
      "https://assets.hyatt.com",
      "https://exp.cdn-hotels.com/hotels",
      "https://hotels4.p.rapidapi.com",
    ],
  },
  env: {
    REACT_APP_MAP_KEY:
      "pk.eyJ1IjoiaWZha2UzNzEiLCJhIjoiY2w3dWliMDd4MDI0YzNzbzY0dXF6eGtpNSJ9.84iE75o-L6Qhj5vDiGkqWg",
  },
  reactStrictMode: true,
};
