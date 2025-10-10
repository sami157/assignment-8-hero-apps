import React from "react";



import {
  BarChart,
  Tooltip,
  Bar,
   YAxis,
  XAxis,
 
  
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const RatingsChart = ({ ratings }) => {
  
  const chartData = ratings.map(rtings => ({
    name: rtings.name,   

    count: rtings.count, 
  }));

  return (
    <div className="w-full h-80 mt-10">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}

          layout="vertical"
          margin={{ top: 22, right: 31, left: 41, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey="count" fill="#FF8811" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingsChart;
