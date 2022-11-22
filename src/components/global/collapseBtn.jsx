import React, { useState } from 'react';
import { MdArrowForwardIos } from "react-icons/md";
function CollapseBtn({handler}) {
 const [isRotate , setRotate] = useState(false)

 const rotateHandler = ()=>{
    if(isRotate){
        setRotate(false)
    }else{
        setRotate(true)
    }
 }

  return (
    <button
      type="button"
      className={`text-primary bg-[#F8F8F8] h-[130px] w-[18px] text-[1.5rem] hover:text-cyan rounded-tr-full flex justify-center items-center rounded-br-full ${
        isRotate ? "rotate-180" : "rotate-0"
      } `}
      onClick={() => {
        handler();
        rotateHandler();
      }}
    >
      <MdArrowForwardIos />
    </button>
  );
}

export default CollapseBtn