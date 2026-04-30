import { createContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";


export const DataContext = createContext();



const ContextApi = ({ children }) => {


  const [Data, setData] = useState([])


    
const handleCardDetails = (details) => {
  // check duplicate (same id + same type)
  const exists = Data.find(
    (item) => item.id === details.id && item.type === details.type
  );

  if (exists) {
    toast.error(
      `You already have a ${details.type} with ${details.name} in the list`
    );
    return;
  }

  toast.success(`Added ${details.type} with ${details.name}`);

  setData([...Data, details]);
};


  //     const handleTextDetails = (Text_Details) => {
    
  //    const exitText=   Text_data.find((text) => text.id === Text_Details.id) 

  //    if(exitText){
  //           toast.error(`You Already have a text message with ${Text_Details.name} in the List`);
  //     return;
  //    }
  //    else{
  //        toast.success(`Text message to ${Text_Details.name}`);
  //    }

  //         setTextData([...Text_data, Text_Details])

  //  }


  //        const handleVideoDetails = (Video_Details) => {
    
  //    const exitVideo=   Video_data.find((video) => video.id === Video_Details.id) 

  //    if(exitVideo){
  //           toast.error(`You Already have a video call with ${Video_Details.name} in the List`);
  //     return;
  //    }
  //    else{
  //        toast.success(`Video call with ${Video_Details.name}`);
  //    }

  //         setVideoData([...Video_data, Video_Details])

  //  }




  const value = {
    Data,
    handleCardDetails,
  }

  return (
    <div>
      <DataContext.Provider value={value}>
        {children}
      </DataContext.Provider>
    </div>
  );
};

export default ContextApi;
