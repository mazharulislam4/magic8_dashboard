import React from 'react'

const Targets = () => {
  return (
    <div className="w-full flex items-center">
      <div className="flex-1 pr-[30px]">
        <h6 className="text-metal text-base sm:text-lg -mb-1">Friendly 0/1</h6>
        <span className="text-xs text-metal">
          Invite a friend to join Shop Genie
        </span>
        <div className="w-full rounded-full h-[6px] bg-[#DFCBFF] mt-1">
          <div className="w-[85%] rounded-full h-[6px] bg-primary"></div>
        </div>
      </div>

      <button className="rounded-lg bg-[#F6F1FF] text-primary px-3 sm:px-5 py-3 text-xs sm:text-base float-right">
        Claim 5 Mana
      </button>
    </div>
  );
}

export default Targets