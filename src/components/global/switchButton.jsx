import React, { useState } from "react";
import { BiListUl } from 'react-icons/bi';
import { BsFillGridFill } from 'react-icons/bs';
const SwitchButton = ({handler}) => {
  const [status, setStatus] = useState(false);

  const switchHandler = ()=>{
    if(status){
       setStatus(false)
    }else{
      setStatus(true)
    }
  }

  return (
    <div className="p-5 flex flex-col items-center gap-1">
      <div className="flex gap-1 items-center text-2xl text-dark">
       <span className="text-[2.3rem]"><BiListUl/></span>
        <span className="text-[1.5rem]"><BsFillGridFill/></span>
      </div>
      <button
        onClick={()=>{
          handler();
         switchHandler();
        }}
        className="w-12 p-[3px] rounded-full bg-green relative"
      >
        <div
          className={`h-4 w-4 rounded-full bg-light ${
            !status ? "float-left" : "float-right"
          }`}
        ></div>
      </button>
    </div>
  );
};

export default SwitchButton;