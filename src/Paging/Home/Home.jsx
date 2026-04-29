import { useLoaderData } from "react-router";
import HeroSection from "../../Componenets/HeroSection/HeroSection";
import CardData from "./CardData";

const Home = () => {
   
    const AllCardData = useLoaderData();

  return (
    <div>
      <HeroSection />
      <div className="h-[1px]  px-3 bg-gray-200  w-12/13 mx-auto sm:w-11/12"> </div>
      <div className="w-12/13 mb-5 p-5 mx-auto sm:w-11/12 grid grid-cols-1 sm:grid-cols-2 bg-[#F7F8FA]  md:grid-cols-3 lg:grid-cols-4 gap-5 ">
      {
             AllCardData.map((items) => <CardData key={items.id} items={items} />)
      }
      </div>
    

    </div>
  );
};

export default Home;
