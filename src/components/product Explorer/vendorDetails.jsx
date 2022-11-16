import React from 'react';

// common css class 
const title = `small-font text-dark`;
const heading = `medium-font text-secondary`;
function VandorDetails() {
  return (
    <div className="w-auto  mb-[50px] xl:mb-[0] ">
      <div className="flex xl:gap-x-[70px] xl:flex-row flex-col gap-y-[50px] mb-[50px] xl:mb-[0]">
        {/* product detaisl list  */}
        <ul className="list-none flex flex-col gap-y-[21px]">
          <li>
            <p className={title}>Vendor</p>
            <h3 className={heading}>Private paradise co</h3>
          </li>
          <li>
            <p className={title}>First created</p>
            <h3 className={heading}>Nov 10, 2022</h3>
          </li>
          <li>
            <p className={title}>Vendor</p>
            <h3 className={heading}>Aparel</h3>
          </li>
          <li>
            <p className={title}>SKU NAME</p>
            <h3 className={heading}>Lgo_Sweat_small</h3>
          </li>
        </ul>
        {/* pricing and revenue list  */}
        <ul className="list-none flex flex-col gap-y-[21px]">
          <li>
            <p className={title}>Avg daily revenue</p>
            <h3 className={`${heading}`}>$500</h3>
          </li>
          <li>
            <p className={title}>Avg daily Oders</p>
            <h3 className={heading}>50</h3>
          </li>
          <li>
            <p className={title}>Revenue (last 7days)</p>
            <h3 className={heading}>$32,000</h3>
          </li>
          <li>
            <p className={title}>Fullfilment</p>
            <h3 className={heading}>paragon_fullfilment</h3>
          </li>
        </ul>
      </div>
      {/* all tags  */}
      <div className="mt-[20px]">
        <p className={`${title}`}>Tags</p>
        <h4 className={heading}>all, aparel, sweaters, new arrival, vip</h4>
      </div>
    </div>
  );
}

export default VandorDetails