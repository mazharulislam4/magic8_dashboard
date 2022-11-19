import React, { useState } from 'react';

// common css class 
const title = `small-font text-dark`;
const heading = `initial-font text-secondary`;
function VandorDetails({isMobile}) {

  const [isShowMore , setShowMore] = useState(false);

const showMoreHandler =()=>{
  if(isShowMore){
  setShowMore(false)
  }else{
    setShowMore(true)
  }
}

  return isMobile ? (
    <>
      <div className="w-auto  mb-[20px] xl:mb-[0] ">
        <div className="flex xl:gap-x-[70px] xl:flex-row flex-col gap-y-[15px] mb-[20px] xl:mb-[0]">
          {/* product detaisl list  */}

          {!isShowMore ? (
            <ul className="list-none flex flex-col gap-y-[10px]">
              <li>
                <p className={title}>Avg daily revenue</p>
                <h3 className={`${heading}`}>$500</h3>
              </li>
              <li>
                <p className={title}>Avg daily Oders</p>
                <h3 className={heading}>50</h3>
              </li>
              <li>
                <p className={title}>
                  Revenue (<span className="text-primary">last 7days</span>)
                </p>
                <h3 className={heading}>$32,000</h3>
              </li>
            </ul>
          ) : (
            ""
          )}

          {isShowMore ? (
            <>
              <ul className="list-none flex flex-col gap-y-[10px]  ">
                <li>
                  <p className={title}>Avg daily revenue</p>
                  <h3 className={`${heading}`}>$500</h3>
                </li>
                <li>
                  <p className={title}>Avg daily Oders</p>
                  <h3 className={heading}>50</h3>
                </li>
                <li>
                  <p className={title}>
                    Revenue (<span className="text-primary">last 7days</span>)
                  </p>
                  <h3 className={heading}>$32,000</h3>
                </li>
              </ul>
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
              <div className="mt-[10px]">
                <p className={`${title}`}>Tags</p>
                <h4 className={heading}>
                  all, aparel, sweaters, new arrival, vip
                </h4>
              </div>
            </>
          ) : (
            ""
          )}

          <button
            type="button"
            className="extra-small-font text-primary no-underline decoration-0 inline-block text-left cursor-pointer "
            onClick={showMoreHandler}
          >
            {isShowMore ? "  Show Less" : "Show More"}
          </button>
        </div>
        {/* all tags  */}
      </div>
    </>
  ) : (
    <>
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
    </>
  );
}

export default VandorDetails