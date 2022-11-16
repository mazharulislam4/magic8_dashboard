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
`;


function FilterByDays({getDataHandler , willOpen, isDropdown, preData, data , placeholder ,id , styles}) {


  return (
    <CustomSelect>
      <div
        className=" px-[10px] py-[11px] flex  relative gap-2 items-center  border-[#EAEAEA] rounded-l-md bg-light  border-2  md:min-w-[120px] justify-center w-[120px] "
        style={styles}
      >
        <label htmlFor={id} className="flex items-center justify-center pr-2">
          <input
            type="text"
            value={data ? data : ""}
            readOnly
            id={id}
            placeholder={placeholder}
            className="py-[8px]  placeholder:text-center bg-transparent text-secondary placeholder:text-secondary medium-font focus:outline-none cursor-pointer w-[100%] "
            onFocus={willOpen}
          
          />
          <img src={arrowIcon} alt="selece" width={30} />
        </label>
      </div>
      {/* date list  */}
      <ul
        className={`w-[220px] modal initial-font px-[15px]  py-[16px] rounded-md z-50 shadow-xl bg-light ${
          isDropdown ? "open" : ""
        } `}
      >
        {preData
          ? preData.map((day) => (
              <li
                key={day.label}
                className="py-[10px] px-[15px]   cursor-pointer"
                onClick={getDataHandler}
              >
                {day.value}
              </li>
            ))
          : ""}
      </ul>
    </CustomSelect>
  );
}

export default FilterByDays;
