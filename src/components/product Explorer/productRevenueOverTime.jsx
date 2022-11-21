import React, { useState } from "react";
import { FiArrowUpRight, FiHeart } from "react-icons/fi";
import FilterByDays from "../global/filterByDays";
import RevenueChart from "../graph/revenuChart";

const days = [
  { value: "This Month", label: "1" },
  { value: "Past Month", label: "2" },
  { value: "Last Three Month", label: "3" },
  { value: "Last Six Month", label: "4" },
  { value: "Past Year", label: "5" },
];

function RevenueOverTime() {
  const [isSelectOpen, setSelectOpen] = useState(false);
  const [selectData, setSelectData] = useState(null);

  return (
    <div className=" w-full min-h-[400px] overflow-hidden bg-[#F8F4FF] ">
      {/* header  */}
      <div className="flex justify-between md:px-[20px] gap-x-2 px-[10px] ">
        <div>
          <h2 className="py-[15px] text-[20px] font-[400] text-secondary ">
            Revenue over time
          </h2>
        </div>
        <div className="item-self-baseline pt-[10px] md:w-[180px]  w-[45%]  rounded-md shrink ">
          {/* select  */}
          <FilterByDays
            placeholder="This Month"
            willOpen={() => {
              setSelectOpen(true);
            }}
            isDropdown={isSelectOpen}
            getDataHandler={(e) => {
              setSelectData(e.target.innerText);
            }}
            closeHandler={() => {
              setSelectOpen();
            }}
            preData={days}
            data={selectData}
            styles={{ border: "none", width: "auto", padding: "5px 6px" }}
          />
        </div>
      </div>
      <div className="md:px-[20px] px-[10px]">
        {/*------------ search value --------------- */}
        <p className="text-dark small-font ">Search Volume</p>
        <h3 className="medium-font text-secondary font-bold my-[7px]">
          300000
        </h3>
        <p className="small-font text-green  flex gap-1 items-center my-[4px]">
          <span>
            <FiArrowUpRight />
          </span>
          {/*-------------- searcht avg value ---------- */}
          <span className="font-[400]">+40.5%</span>
        </p>
        <p className="text-secondary flex gap-3 items-center mt-[13px]">
          <span className="text-[#FF4545]">
            <FiHeart />
          </span>
          <span>4 Other Saved This Product</span>
        </p>
      </div>
      {/* graph  */}
      <div className="w-full">
        <RevenueChart cWidth={600} height={290} />
      </div>
    </div>
  );
}

export default RevenueOverTime;
