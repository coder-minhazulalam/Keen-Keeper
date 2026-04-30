import { useLoaderData, useNavigation } from "react-router";

import HeroSection from "../../Componenets/HeroSection/HeroSection";
import CardData from "./CardData";

const Home = () => {

  const AllCardData = useLoaderData();

  const navigation = useNavigation();

  return (
    <div>

      <HeroSection />

      <div className="h-[1px] px-3 bg-gray-200 w-12/13 mx-auto sm:w-11/12">
      </div>

      <div className="bg-[#F7F8FA] w-full">

        <h1 className="text-[30px] font-bold text-center md:text-start md:pl-30">
          Your Friends
        </h1>

        {
          navigation.state === "loading" ? (

            <div className="min-h-screen flex justify-center items-center">
              <span className="loading loading-bars loading-xl"></span>
            </div>

          ) : (

            <div className="w-full min-h-screen md:px-30 py-20 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">

              {
                AllCardData.map((items) => (
                  <CardData
                    key={items.id}
                    items={items}
                  />
                ))
              }

            </div>

          )
        }

      </div>

    </div>
  );
};

export default Home;