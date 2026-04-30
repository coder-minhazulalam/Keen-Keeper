import { useContext, useState } from "react";
import { DataContext } from "../../ContextApI/ContextApi";
import TimeLinesData from "./TimeLinesData";

const TimeLines = () => {
  const { Data } = useContext(DataContext);

  const [sortType, setsortType] = useState("");

  
  const filteredData = sortType ? Data.filter((item) => item.type === sortType): Data;
    
  

  return (
    <>
      <div className="w-12/13 px-5 mx-auto bg-gray-200 shadow-2xl p-5 m-5 flex items-start justify-center rounded-2xl">
        <p className="text-[30px] font-bold text-center md:text-start">
          Timelines
        </p>
      </div>

      {/* dropdown part */}
      <div className="dropdown w-11/13 px-5 ml-0 md:ml-8">
        <div tabIndex={0} role="button" className="btn m-1">
          Filter Timelines : {sortType}
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >


          <li>
            <button onClick={() => setsortType("call")}>
              Call
            </button>
          </li>

          <li>
            <button onClick={() => setsortType("text")}>
              Text
            </button>
          </li>

          <li>
            <button onClick={() => setsortType("video")}>
              Video
            </button>
          </li>
        </ul>
      </div>

      {/* Data */}
      {filteredData.length === 0 ? (
        <div className="min-h-screen flex justify-center items-center">
          <p className="text-gray-500 text-xl">
            No timelines available.
          </p>
        </div>
      ) : (
        <div className="mt-5 mb-5">
          <div className="w-12/13 mx-auto mt-1 mb-1">
            {filteredData.map((item, index) => (
              <TimeLinesData
                    key={index}
                item={item}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TimeLines;