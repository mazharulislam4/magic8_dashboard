import React, { useRef } from "react";
import TrafficChart from "../../components/graph/trafficChart";

const TrafficSource = () => {
  const chartBox = useRef();

  return (
    <div className="w-full sm:w-[48%] p-5 rounded-lg bg-light" ref={chartBox}>
      <h4 className="text-lg text-metal">Traffic Source</h4>
      <TrafficChart chartBox={chartBox} />
    </div>
  );
};

export default TrafficSource;
