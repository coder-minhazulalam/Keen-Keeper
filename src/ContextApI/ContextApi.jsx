import { createContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";


export const DataContext = createContext();



const ContextApi = ({ children }) => {


  const [Data, setData] = useState([])




    
const handleCardDetails = (details) => {

  const exists = Data.find(
    (item) => item.id === details.id && item.type === details.type
  );

  if (exists) {
    toast.error(
      <div className="w-[250px] m-5 md:m-0">
         <p className="text-[12px]"> {`You already have a ${details.type} with ${details.name} in the list`}</p>
      </div>
    );
    return;
  }

  toast.success(
    <div className="w-[250px] m-5 md:m-0">
        <p className="text-[12px]">{`Added ${details.type} with ${details.name}`}</p> 
    </div>);

  setData([...Data, details]);
};




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
