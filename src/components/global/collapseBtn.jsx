import React, { useState } from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
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
      className={`text-primary bg-light rounded-[50%] text-[2rem] hover:text-cyan ${
        isRotate ? "rotate-180" : "rotate-0"
      } `}
      onClick={() => {
         handler()
       rotateHandler();
      }}
    >
      <FaArrowAltCircleRight />
    </button>
  );
}

export default CollapseBtn