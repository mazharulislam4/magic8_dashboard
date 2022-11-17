import React, { useState } from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import signalIcon from "../../assets/icon/fi-rr-signal-alt.svg";
import FilterByDays from '../global/filterByDays';
import RevenueChart from './revenuChart';

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

  return (
    <div className="lg:w-[500px] w-full min-h-[400px] px-[20px] bg-[#F8F4FF] ">
      {/* header  */}
      <div className="flex flex-wrap py-[20px]  justify-between items-center">
        <h2 className="text-[20px] font-[400] grow ">Revenue over time</h2>

        <div className=" flex justify-end pt-[10px] grow w-[200px] ">
          {/* select  */}
          <FilterByDays
            placeholder="7 days"
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
            id="grap-1"
            styles={{ border: "none", width: "200px" }}
          />
        </div>
      </div>
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

      {/* graph  */}
      <div>
        <RevenueChart cWidth={500} />
      </div>
    </div>
  );
}

export default RevenueOverTime