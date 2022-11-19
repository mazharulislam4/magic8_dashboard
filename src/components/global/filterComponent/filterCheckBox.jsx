import React from "react";
import { FiCheck } from "react-icons/fi";
const FilterCheckBox = ({ placeholderText, status, setStatus }) => {
  return (
    <>
      <button
        className={"flex items-center sm:mx-6 sm:my-3 my-2 "}
        onClick={() => setStatus(!status)}
      >
        <div
          className={`w-[22px] h-[22px] rounded-md ${
            status ? "border-none bg-primary" : "border border-metal bg-none"
          } flex justify-center items-center mr-2 `}
        >
          {status ? (
            <span className="text-light">
              <FiCheck />
            </span>
          ) : (
            ""
          )}
        </div>
        <p className="extra-small-font text-secondary">{placeholderText}</p>
      </button>
    </>
  );
};

export default FilterCheckBox;
