import Head from "next/head";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import SmallCard from "../Components/SmallCard";
import Image from "next/image";
function Home({ exploreData }) {
  console.log(exploreData);

  return (
    <div>
      <Head>
        <title>Holiday Homes & Apartment Rentals-Airbnb</title>
        <link
          rel="icon"
          href="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_airbnb-256.png"
        />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-6xl mx-auto px-8 sm:px-16">
        <section>
          <h2 className="text-2xl font-semibold py-3 pl-3 ">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-5">
            {exploreData?.map(({ img, location, distance }) => (
              <SmallCard img={img} location={location} distance={distance} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;

export async function getStaticProps() {
  const exploreData = await fetch(
    "https://json.extendsclass.com/bin/6eacd662a0f5"
  ).then((res) => res.json());
  console.log(exploreData);
  return {
    props: {
      exploreData,
    },
  };
}
