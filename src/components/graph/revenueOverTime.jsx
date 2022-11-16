import React, { useState } from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import signalIcon from "../../assets/icon/fi-rr-signal-alt.svg";
import graph from '../../assets/image/revenueGraph.svg';
import FilterByDays from '../global/filterByDays';


const days = [
  { value: "This Mouth", label: "7days" },
  { value: "Past Mouth", label: "14days" },
  { value: "Last Three Mouth", label: "20days" },
  { value: "Last Six Mouth", label: "28days" },
  { value: "Past Year", label: "28days" },
];

function RevenueOverTime() {
    const [isSelectOpen, setSelectOpen] = useState(false);
    const [selectData, setSelectData] = useState(null);
console.log(selectData);
  return (
    <div className="lg:w-[500px] w-full min-h-[400px] px-[20px] bg-[#F8F4FF] ">
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
              <span>
                <img src={signalIcon} alt="mana icon" width={16} height={12} />
              </span>
              <span>4 Other Tracking</span>
            </p>
          </div>
        </div>

        <div className="item-self-baseline pt-[10px] w-[200px] ">
          {/* select  */}
          <FilterByDays
            placeholder="7 days"
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
            id = "grap-1"
            styles = {{border:"none" , width:'200px'}}
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

export default RevenueOverTime