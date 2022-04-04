import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = () => {
  const data = [
    {
      month: "March",
      investment: 100000,
      sell: 241,
      revenue: 10401,
      fill: "#8884d8",
    },
    {
      month: "April",
      investment: 200000,
      sell: 423,
      revenue: 24500,
      fill: "#83a6ed",
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
      fill: "#8dd1e1",
    },
    {
      month: "June",
      investment: 500000,
      sell: 529,
      revenue: 40405,
      fill: "#82ca9d",
    },
    {
      month: "July",
      investment: 600000,
      sell: 601,
      revenue: 50900,
      fill: "#a4de6c",
    },
    {
      month: "August",
      investment: 700000,
      sell: 670,
      revenue: 61000,
      fill: "#d0ed57",
    },
  ];
  return (
    <div className="container mx-auto flex flex-col justify-between items-center mt-20">
      <div className="mb-10">
        <h1 className="text-blue-700 text-2xl text-center font-bold mb-8">
          Investment vs Revenue
        </h1>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </div>
      <div className="mb-10 pt-40 ">
        <h1 className="text-blue-700 text-2xl text-center font-bold mb-8">
          Investment vs Revenue
        </h1>
        <RadialBarChart
          width={730}
          height={450}
          innerRadius="20%"
          outerRadius="120%"
          data={data}
          startAngle={180}
          endAngle={0}
        >
          <RadialBar
            minAngle={50}
            label={{
              fill: "blue",
              position: "insideStart",
              fontWeight: "bold",
            }}
            background
            clockWise={true}
            dataKey="investment"
            nameKey="month"
          />

          <RadialBar
            minAngle={15}
            label={{
              fill: "blue",
              position: "insideStart",
              fontWeight: "bold",
            }}
            background
            clockWise={true}
            dataKey="revenue"
          />
          <Tooltip />
        </RadialBarChart>
      </div>
      <div className="mb-10 ">
        <h1 className="text-blue-700 text-2xl text-center font-bold mb-8">
          Investment vs Revenue
        </h1>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="revenue"
            nameKey="month"
            cx="50%"
            cy="50%"
            innerRadius={60}
            fill="blue"
            label={{ fill: "blue" }}
          />

          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Chart;
