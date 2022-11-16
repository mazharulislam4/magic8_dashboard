import React, { useState } from 'react';
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import useIsMobile from '../../hooks/useIsMobile';
import FilterByDays from '../global/filterByDays';

const days = [
  { value: "7 days", label: "7days" },
  { value: "14 days", label: "14days" },
  { value: "21 days", label: "20days" },
  { value: "30 days", label: "30days" },
];


const ForLarge = ()=>{
    const [isSelectOpen, setSelectOpen] = useState(false);
    const [selectData, setSelectData] = useState(null);

const card = ` border-r-2 pl-[20px] border-[#E4E4E4] h-[100%] flex  flex-col justify-center md:w-1/5 w-full`;

  return (
    <div className="flex 2xl:w-[977px] w-full my-[20px] px-[5px]  lg:h-[107px] items-center border-2 border-[#E4E4E4] rounded-lg  flex-wrap ">
      <div className={`${card} pl-[0] `}>
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
          id = "statistik-1"
          preData={days}
          data={selectData}
          styles={{ border: "none", padding: "0" ,  }}
        />
      </div>

      {/* order card  */}
      <div className={card}>
        <p className="mb-[6px] font-small text-dark">Orders</p>
        <div className="flex items-center  gap-x-[5px]">
          <h2 className="medium-font text-secondary">304</h2>
          <p className="flex items-center extra-small-font text-green">
            <span>
              <FiArrowUpRight />
            </span>
            +5.60%
          </p>
        </div>
      </div>

      {/* revenue card  */}
      <div className={card}>
        <p className="mb-[6px] font-small text-dark">Revenue</p>
        <div className="flex items-center  gap-x-[5px]">
          <h2 className="mediumfont text-secondary">3049</h2>
          <p className="flex items-center extra-small-font text-green">
            <span>
              <FiArrowUpRight />
            </span>
            +5.60%
          </p>
        </div>
      </div>

      {/* shopping card  */}
      <div className={card}>
        <p className="mb-[6px] font-small text-dark">Shopping charged</p>
        <div className="flex items-center  gap-x-[10px]">
          <h2 className="medium-font text-secondary">3049</h2>
          <p className="flex text-[#FF4545] items-center">
            <span>
              <FiArrowDownRight />
            </span>
            +5.60%
          </p>
        </div>
      </div>

      {/* shopping card  */}
      <div className={`${card} pl-[20px] border-r-0`}>
        <p className="mb-[6px] font-small text-dark">Avg order value</p>
        <div className="flex items-center gap-x-[10px]">
          <h2 className="medium-font text-secondary">3049</h2>
          <p className="flex text-[#FF4545] items-center">
            <span>
              <FiArrowDownRight />
            </span>
            +5.60%
          </p>
        </div>
      </div>
    </div>
  );
}




const ForMobile = ()=>{
    const [isSelectOpen, setSelectOpen] = useState(false);
    const [selectData, setSelectData] = useState(null);

const card = ` flex  flex-col justify-center  w-full`;

  return (
    <div className="border-2 border-[#E4E4E4] py-[10px] rounded-md px-[10px]">
      {/* part 1 */}
      <div className="flex items-center ">
        <div className={`${card} pl-[0] w-[50%]`}>
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
            id="statistik-2"
            preData={days}
            data={selectData}
            styles={{ border: "none", padding: "0" }}
          />
        </div>

        {/* order card  */}
        <div className={`${card} w-[50%]`}>
          <p className="mb-[6px] font-small text-dark">Orders</p>
          <div className="flex items-center gap-x-[5px] ">
            <h2 className="medium-font text-secondary">304</h2>
            <p className="flex items-center text-green  extra-small-font">
              <span>
                <FiArrowUpRight />
              </span>
              +5.60%
            </p>
          </div>
        </div>
      </div>
      {/* part 2   */}

      <div className="flex items-center my-3">
        {/* revenue card  */}
        <div className={card}>
          <p className="mb-[6px] font-small text-dark">Revenue</p>
          <div className="flex items-center  gap-x-[5px]">
            <h2 className="medium-font text-secondary">3049</h2>
            <p className="flex items-center text-green extra-small-font">
              <span>
                <FiArrowUpRight />
              </span>
              +5.60%
            </p>
          </div>
        </div>

        {/* shopping card  */}
        <div className={card}>
          <p className="mb-[6px] font-small text-dark">Shopping charged</p>
          <div className="flex items-center gap-x-[5px]">
            <h2 className="medium-font text-secondary">3049</h2>
            <p className="flex text-[#FF4545]  extra-small-font">
              <span>
                <FiArrowDownRight />
              </span>
              +5.60%
            </p>
          </div>
        </div>
      </div>
      <div className={`${card}  `}>
        <p className="mb-[6px] font-small text-dark">Avg order value</p>
        <div className="flex items-center gap-x-[5px]">
          <h2 className="medium-font text-secondary">3049</h2>
          <p className="flex text-[#FF4545] extra-small-font ">
            <span>
              <FiArrowDownRight />
            </span>
            +5.60%
          </p>
        </div>
      </div>
    </div>
  );
}






function StatistikCard() {

  const isMobile = useIsMobile();


  return (

 <>
 {isMobile ? <ForMobile/> : <ForLarge/>}
 </>

  );
}

export default StatistikCard