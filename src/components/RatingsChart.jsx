import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const RatingsChart = ({ ratings }) => {
  const chartData = [...ratings]
    .sort((a, b) => parseInt(b.name) - parseInt(a.name))
    .map(r => ({
      name: r.name,
      count: r.count,
    }));

  return (
    <div className="w-full h-80 mt-10">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
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
