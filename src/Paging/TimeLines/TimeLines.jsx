import { useContext } from "react";
import { DataContext } from "../../ContextApI/ContextApi";
import TimeLinesData from "./TimeLinesData";

const TimeLines = () => {
  const { Call_data, Text_data, Video_data } = useContext(DataContext);

  return (
    <>

         <div className="w-12/13 px-5 mx-auto bg-gray-200 shadow-2xlp-5 m-5 flex  items-start justify-center rounded-2xl">
          <p className="text-[30px] font-bold text-center md:text-start ">Timelines</p>
        </div>

       {
        (Call_data.length === 0 && Text_data.length === 0 && Video_data.length === 0) ? (

          <div className="min-h-screen flex justify-center items-center">
            <p className="text-gray-500 text-xl">No timelines available.</p>
          </div> 
        ) : (
<div className="mt-5">

              <div className="w-12/13  mx-auto mt-1  mb-1  ">
              {
                Call_data.map((item) => <TimeLinesData type="call" key={item.id} item={item} />)
              }
              </div>

              <div className="mt-1 w-12/13  mx-auto  mb-1  ">
              {
                Text_data.map((item) => <TimeLinesData type="text" key={item.id} item={item} />)
              }
              </div>

              <div className="mt-1 w-12/13  mx-auto  mb-3     ">
              {
                Video_data.map((item) => <TimeLinesData type="video" key={item.id} item={item} />)
              }      
              </div>

        </div>

        )

       }



        



    </>
  );
};

export default TimeLines;
