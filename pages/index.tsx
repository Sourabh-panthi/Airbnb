import Head from "next/head";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import SmallCard from "../Components/SmallCard";
import CardData from "../Components/CardData";
import LargeCard from "../Components/LargeCard";
import Footer from "../Components/Footer";

function Home({ exploreData, LCardData }) {
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
      <main className="max-w-5xl mx-auto px-8 sm:px-16">
        <section>
          <h2 className="text-2xl font-semibold py-3 pl-3 ">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-5">
            {exploreData?.map(({ img, location, distance }) => (
              <SmallCard
                key={location}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold by-3 pl-3 mt-5">
            Live Anywhere
          </h2>
          <div className="flex items-center overflow-scroll scrollbar-hide space-x-3 my-5">
            {LCardData?.map(({ img, title }) => (
              <CardData key={title} img={img} title={title} />
            ))}
          </div>
        </section>
        <section>
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdorrs"
            description="Wishlists curated by Airbnb"
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;

export async function getStaticProps() {
  const exploreData = await fetch(
    "https://json.extendsclass.com/bin/ad06fe0303c4"
  ).then((res) => res.json());
  const LCardData = await fetch(
    "https://json.extendsclass.com/bin/4f46e2df5a67"
  ).then((res) => res.json());
  return {
    props: {
      exploreData,
      LCardData,
    },
  };
}
