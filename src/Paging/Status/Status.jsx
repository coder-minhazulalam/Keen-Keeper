import { useContext } from "react";
import { DataContext } from "../../ContextApI/ContextApi";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Status = () => {
  const { Data } = useContext(DataContext);

  // Counts
  const callCount = Data.filter(
    (item) => item.type === "call"
  ).length;

  const textCount = Data.filter(
    (item) => item.type === "text"
  ).length;

  const videoCount = Data.filter(
    (item) => item.type === "video"
  ).length;

  // Chart Data
  const chartData = [
    {
      name: "Text",
      value: textCount,
    },
    {
      name: "Call",
      value: callCount,
    },
    {
      name: "Video",
      value: videoCount,
    },
  ];

  const COLORS = [
    "#7C3AED", 
    "#22C55E", 
    "#14532D", 
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-5">

     
      <div className="w-11/12 mx-auto">

        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Friendship Analytics
        </h1>

        {/*------------ card -------------- */}
        <div className="bg-white rounded-2xl shadow-md p-5">

          <p className="text-gray-500 mb-5 font-medium">
            By Interaction Type
          </p>

          {/* ----------- chart ----------- */}
          <div className="w-full h-[400px]">

            <ResponsiveContainer width="100%" height="100%">

              <PieChart>

                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />

                <Legend />

              </PieChart>

            </ResponsiveContainer>

          </div>

      

        </div>

      </div>
    </div>
  );
};

export default Status;