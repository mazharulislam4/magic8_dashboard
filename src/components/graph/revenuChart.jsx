import * as React from "react";
import { Line, LineChart } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 2500,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 2000,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 5000,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 4500,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 6000,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 4500,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 8000,
    amt: 2100,
  },
];

export default function RevenueChart({ cWidth }) {
  return (
    <LineChart width={cWidth} height={200} data={data}>
      <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
    </LineChart>
  );
}
