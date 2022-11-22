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
      className={`text-primary bg-[#E3E3E3] h-[130px] text-[1.4rem] hover:text-cyan rounded-tr-full  rounded-br-full ${
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