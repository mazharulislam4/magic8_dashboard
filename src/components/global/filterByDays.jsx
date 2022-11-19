import React, { useEffect } from "react";
import styled from "styled-components";
import arrowIcon from "../../assets/icon/fi-rr-angle-small-down.svg";
const CustomSelect = styled.div`
  position: relative;

  .modal {
    transform: translateY(80px);
    opacity: 1;
    position: absolute;
    display: none;
    top: calc(100% -50%);
    left: 0;
  }

  .modal.open {
    opacity: 0;
    display: block;
    animation: slideUp 0.3s forwards linear;
  }

  @keyframes slideUp {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .modal_item_label input[type="radio"] {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  .modal_item_label input[type="radio"]:checked ~ span {
    background-color: #8646EE;
    color: #ffffff;
  }
`;


function FilterByDays({getDataHandler , willOpen, isDropdown, preData, data , placeholder ,id , closeHandler , styles}) {


  useEffect(() => {
    document.querySelector("body").addEventListener("click", function (e) {
      e.stopPropagation();
       closeHandler();
    });
    return () => {};
  }, [closeHandler]);



  return (
    <CustomSelect>
      <div
        className=" px-[10px] py-[11px] flex  relative gap-2 items-center  border-[#EAEAEA] rounded-l-md bg-light  border-2   md:min-w-[120px] justify-center w-[120px] "
        style={styles}
      >
        <label
          htmlFor={id}
          className="flex items-center extra-small-font justify-center pr-2 "
        >
          <input
            type="text"
            value={data ? data : ""}
            readOnly
            id={id}
            placeholder={placeholder}
            className="py-[8px]  placeholder:text-center bg-transparent text-secondary placeholder:text-secondary medium-font placeholder:extra-small-font focus:outline-none cursor-pointer w-[100%] block "
            onClick={(e) => {
              e.stopPropagation();
              willOpen();
            }}
          />
          <img src={arrowIcon} alt="selece" width={30} />
        </label>
      </div>
      {/* date list  */}
      <div
        className={`md:w-[220px] w-[195px] flex modal initial-font md:px-[15px]  py-[16px] rounded-md z-50 shadow-xl bg-light ${
          isDropdown ? "open" : ""
        } `}
      >
        {preData
          ? preData.map((day) => (
              <label
                className="flex modal_item_label w-full  "
                htmlFor={day.label}
                key={day.label}
              >
                <input
                  type="radio"
                  name="checkbox"
                  id={day.label}
                  className="block"
                />
                <span
                  className={`cursor-pointer  block 
                py-[10px] px-[15px]  w-full hover:bg-primary hover:text-light rounded-md`}
                  onClick={(e) => {
                    e.stopPropagation();
                    getDataHandler(e);
                    closeHandler();
                  }}
                >
                  {day.value}
                </span>
              </label>
            ))
          : ""}
      </div>
    </CustomSelect>
  );
}

export default FilterByDays;
