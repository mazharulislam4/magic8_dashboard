import React, { useState } from "react";
import styled from "styled-components";

const FilterModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #dcdcdc4d;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  display: none;
  opacity: 0;
  animation: fadeIn 0.5s linear forwards;

  @media (min-width: 768px) {
    width: auto;
    height: auto;
    position: absolute;
    top: calc(100% + 10%);
    overflow: hidden;
    background-color: transparent;

    .modal {
      max-width: 230px;
      min-height: 200px;
    }
  }

  &.modal_active {
    display: flex;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  .modal {
    width: 100vw;
    min-height: 300px;
    padding: 12px 10px;
    background-color: #fff;
    border-radius: 10px;
    display: none;
    transform: translateY(100px);
    animation: fadeInModal 0.3s forwards linear;
  }

  .modal.active {
    display: block;
  }

  @keyframes fadeInModal {
    to {
      transform: translateY(0);
    }
  }

  .radio_label {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    cursor: pointer;
  }

  .radio_label input[type="radio"] {
    position: absolute;
    right: 0;
    opacity: 0;
  }

  .radio_label .checkmark {
    width: 18px;
    height: 18px;
    background-color: #efefef;
    border-radius: 100%;
    border: 1px solid #efe4ff;
    outline: 3px solid #efe4ff;
  }

  .radio_label input[type="radio"]:checked ~ .checkmark {
    background-color: #7942d1;
  }
`;

function FilterModal({ data, closeHandler, openModal, name }) {
  
const [userCustomSelectData , setUserCustomSelectData] = useState({min:'' , max:''})

function userSelectDataHandler (e){
e.preventDefault();
setUserCustomSelectData({...userCustomSelectData, [e.target.name]:e.target.value})
}
const [userData, setUserData] = useState()

function userSubmitHandler(e){
  e.preventDefault();

// window.localStorage.setItem("userSelectedData", JSON.stringify(userCustomSelectData));
}



  return (
    <FilterModalContainer
      className={`${openModal[name] ? "modal_active" : ""} shadow-xl `}
      onClick = {(e)=>{e.stopPropagation();  closeHandler(userData ? userData : '')}}
    >
      <div
        className={`modal ${openModal[name] ? "active" : "modal"} shadow-xl `}
      >
        <div className="px-[14px] mt-[10px]">
          {/* user Data and input radio  */}

          {data[name].map((data) => {
            return (
              <div
                key={data.id}
                className="flex justify-between items-center my-[8px] relative  "
              >
                <label
                  htmlFor={data[name]}
                  className="radio_label"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeHandler(data.value);
                    setUserData(data.value)
                  }}
                >
                  <span > {data.value}</span>
                  <input
                    type="radio"
                    name="revenue "
                    className="initial-font text-secondary"
                    id={data[name]}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            );
          })}

          {/* -----------------------user input--------------------  */}
          <h3 className="mb-[7px] small-font text-dark mt-[10px] ">Custom</h3>
          <form
            action="#"
            className="flex flex-col items-center gap-y-[10px] w-[100%]"
          >
            <input
              type="text"
              name="min"
              value={userCustomSelectData.min}
              onChange={(e) => {
                userSelectDataHandler(e);
              }}
              placeholder="min"
              className="block w-full  px-2  py-[6px] border-[1px] border-[#EAEAEA] shadow-sm rounded-md focus:outline-[#7942D1] focus:outline-1 extra-small-font "
            />
            <input
              type="text"
              name="max"
              value={userCustomSelectData.max}
              onChange={(e) => {
                userSelectDataHandler(e);
              }}
              placeholder="max"
              className="block w-full px-2 py-[6px]  border-[1px] border-[#EAEAEA] shadow-sm rounded-md focus:outline-[#7942D1] focus:outline-1 extra-small-font "
            />
            <button
              type="submit"
              onSubmit={(e) => {
                userSubmitHandler(e);
              }}
              className="block w-full placeholder:text-center px-[5px] py-[6px]  border-[1px] border-[#EAEAEA] shadow-sm rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </FilterModalContainer>
  );
}

export default FilterModal;
