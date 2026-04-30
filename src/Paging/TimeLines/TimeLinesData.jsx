
const TimeLinesData = ({ item } ) => {

  const formattedDate = new Date(item.next_due_date)
    .toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });



  return (
<>




          <div className="px-5 py-3 mt-5 bg-gray-200  rounded-2xl flex flex-col items-start justify-center  ">

          <div className="flex flex-row space-x-2 items-center">
              <div>
                {
                  (item.type === "call" && <img src="/assets/call.png" className="h-[25px] w-[25px]" />) ||
                  (item.type === "text" && <img src="/assets/text.png" className="h-[25px] w-[25px]" />) ||
                  (item.type === "video" && <img src="/assets/video.png" className="h-[25px] w-[25px]" />)
                }
              </div>

              <div>
              {
                    ( item.type === "call" && <h3><span className="text-[#244D3F] font-bold text-[20px]">Call with </span>{item.name}</h3>)  ||
                    (item.type === "text" && <h3><span className="text-[#244D3F] font-bold text-[20px]">Text message to </span>{item.name}</h3> ) ||
                    (item.type === "video" && <h3><span className="text-[#244D3F] font-bold text-[20px]">Video call with </span> {item.name}</h3> )
              }

              <p className="text-gray-400 text-[13px] font-bold">{formattedDate}</p>
              </div>
          </div>
              </div>
</>
            

          
  );
};

export default TimeLinesData;