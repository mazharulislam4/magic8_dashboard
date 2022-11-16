import React from 'react';

function OrderedCustomers({content}) {
    const {fullName , title , price , xs , avatar} = content;
  return (
    <div className="flex justify-between items-center gap-1 my-5">
      <div className="flex gap-3">
        <figure className="rounded-[10px] w-[50] h-[50] bg-[#5eafb5]">
          <img src={avatar} alt="" />
        </figure>
        <div className="flex flex-col gap-1">
          <h2 className="text-[#49446D] font-bold ">{fullName}</h2>
          <p className="my-1">{title.substring(0, 20)}</p>
        </div>
      </div>
      <div >
        <strong className="block text-[#51459F]  ">${price}</strong>
        <span className="block text-[#49446D] font-bold mt-1 ">{xs}</span>
      </div>
    </div>
  );
}

export default OrderedCustomers