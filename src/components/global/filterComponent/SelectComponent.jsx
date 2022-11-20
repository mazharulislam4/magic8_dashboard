import React from 'react';
import downArrow from "../../../assets/icon/fi-rr-angle-small-down.svg";

// tailwind css  

 const pickerContainer = `px-[5px] flex  gap-2 items-center py-[4px] border-[#EAEAEA]  border-[1px] rounded-md select-none`;

 const pickerInput = `py-[8px] px-[5px] placeholder:text-center bg-transparent text-secondary placeholder:text-secondary initial-font focus:outline-none cursor-pointer   `;



function SelectComponent({
  selectHandler,
  filterData,
  name,
  placeholder,
  id,
}) {
  return (
    <>
        <div
          className={`${pickerContainer} ${name === "revenue" && "min-w-[130px] md:w-[135px]"} ${
            name === "average" && "min-w-[240px] md:w-[235px] "
          } ${name === "country" && "min-w-[140px] md:w-[130px] "} ${name === 'date' && 'min-w-[140px] md:w-[135px]'}  `}
        >
          <input
            type="text"
            placeholder={placeholder}
            id={id}
            onFocus={selectHandler}
            value={filterData[name]}
            name={name}
            readOnly
            className={`${pickerInput} w-[100%]`}
          ></input>
          <label htmlFor={id}>
            <img src={downArrow} alt="" />
          </label>
        </div>

    </>
  );
}

export default SelectComponent