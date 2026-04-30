import { createContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";


export const DataContext = createContext();



const ContextApi = ({ children }) => {


  const [Call_data, setCallData] = useState([])
  const [Text_data, setTextData] = useState([])
  const [Video_data, setVideoData] = useState([])

    
   const handleCallDetails = (Call_Details) => {
    
     const exitCall =   Call_data.find((call) => call.id === Call_Details.id) 

     if(exitCall){
            toast.error(`You Already have a call with ${Call_Details.name} in the List`);
      return;
     }
     else{
         toast.success(`Call with ${Call_Details.name}`);
     }

          setCallData([...Call_data, Call_Details])

   }


      const handleTextDetails = (Text_Details) => {
    
     const exitText=   Text_data.find((text) => text.id === Text_Details.id) 

     if(exitText){
            toast.error(`You Already have a text message with ${Text_Details.name} in the List`);
      return;
     }
     else{
         toast.success(`Text message to ${Text_Details.name}`);
     }

          setTextData([...Text_data, Text_Details])

   }


         const handleVideoDetails = (Video_Details) => {
    
     const exitVideo=   Video_data.find((video) => video.id === Video_Details.id) 

     if(exitVideo){
            toast.error(`You Already have a video call with ${Video_Details.name} in the List`);
      return;
     }
     else{
         toast.success(`Video call with ${Video_Details.name}`);
     }

          setVideoData([...Video_data, Video_Details])

   }




  const value = {
    Call_data,
    Text_data,
    Video_data,
    setCallData,
    setTextData,
    setVideoData,
    handleCallDetails,
    handleTextDetails,
    handleVideoDetails
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
