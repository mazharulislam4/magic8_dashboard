import React, { useState } from "react";
import { FiArrowUpRight, FiHeart } from "react-icons/fi";
import graph from '../../assets/image/revenueGraph.svg';
import FilterByDays from "../global/filterByDays";
const days = [
  { value: "This Mouth", label: "1" },
  { value: "Past Mouth", label: "2" },
  { value: "Last Three Mouth", label: "3" },
  { value: "Last Six Mouth", label: "4" },
  { value: "Past Year", label: "5" },
];

function RevenueOverTime() {
  const [isSelectOpen, setSelectOpen] = useState(false);
  const [selectData, setSelectData] = useState(null);
  console.log(selectData);
  return (
    <div className="w-auto min-h-[400px] px-[20px] bg-[#F8F4FF] ">
      {/* header  */}
      <div className="flex justify-between">
        <div>
          <h2 className="py-[20px]">Revenue over time</h2>
          <div>
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
        </div>

        <div className="item-self-baseline pt-[10px] w-[200px] ">
          {/* select  */}
          <FilterByDays
            placeholder="This Mouth"
            willOpen={() => {
              setSelectOpen(true);
            }}
            isDropdown={isSelectOpen}
            getDataHandler={(e) => {
              setSelectData(e.target.innerText);
              setSelectOpen(false);
            }}
            preData={days}
            data={selectData}
            styles={{ border: "none" , width:"200px" }}
          />
        </div>
      </div>

      {/* graph  */}
      <div>
        <img src={graph} alt="" />
      </div>
    </div>
  );
}

export default RevenueOverTime;
