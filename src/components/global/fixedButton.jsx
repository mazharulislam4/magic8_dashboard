import React from 'react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import bottolWhite from '../../assets/icon/bottolWhite.svg';
function FixedButton({children, handler}) {
  return (
    <button
      type="button"
      className="flex justify-between items-center lg:w-[281px] md:h-[61px] md:w-[250px] h-[40px] w-[200px] fixed right-0 bottom-0 bg-primary hover:bg-cyan text-light  px-5 z-30 "
      onClick={handler}
    >
      <span className="flex items-center">
        <img
          src={bottolWhite}
          alt=""
          className="md:w-[26px] md:h-[22px] w-[18px] h-[]"
        />
        <span className="ml-2 extra-small-font md:text-[16px] "> {children}</span>
      </span>
      <span className="md:text-[1.5rem] text-[1rem] ">
        <HiOutlineArrowNarrowRight />
      </span>
    </button>
  );
}

export default FixedButton