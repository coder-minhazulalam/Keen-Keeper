import { useContext } from "react";
import { DataContext } from "../../ContextApI/ContextApi";

const TimeLines = () => {
  const { Call_data, Text_data, Video_data } = useContext(DataContext);

  console.log(Call_data);

  return (
    <div>
      <div>
        <h1>Call Time Lines</h1>
        {Call_data.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>

        <div>
        <h1>Text Time Lines</h1>
        {Text_data.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>

        <div>
        <h1>Video Time Lines</h1>
        {Video_data.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    </div>
  );
};

export default TimeLines;
