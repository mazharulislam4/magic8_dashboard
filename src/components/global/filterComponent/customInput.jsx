import React from 'react';
import downArrow from "../../../assets/icon/fi-rr-angle-small-down.svg";

// css 
 const pickerContainer = `px-[5px] flex   items-center py-[4px] border-[#EAEAEA]  border-[1px] rounded-md select-none min-w-[140px] md:w-[140px]`;

 const pickerInput = `py-[8px] px-[5px] placeholder:text-center bg-transparent text-secondary placeholder:text-secondary initial-font focus:outline-none cursor-pointer  w-[100%] `;


const  CustomInput = React.forwardRef((props , ref)=>{
  return (
    <div className={pickerContainer}>
      <input
        type="text"
        id="datepicker"
        value={props.value}
        ref={ref}
        placeholder="Date"
        readOnly
        className={pickerInput}
        onClick={props.onClick}
      />
      <label htmlFor="datapicker" onClick={props.onClick}>
        <img src={downArrow} alt="" />
      </label>
    </div>
  );
})

export default CustomInput