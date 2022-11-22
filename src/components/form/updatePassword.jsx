import React, { useState } from 'react';

    const inputBox = `bg-[#f8f8f8f8] rounded-2xl w-full `;
    const input = `py-[20px] px-[10px] w-[100%] rounded-[10px] medium-font text-dark  focus:outline-primary focus:outline-[1px] transition-[shadow] duration-300 bg-[#f8f8f8f8] block  `;

    const label = `extra-small-font text-dark pb-[10px] block bg-light`;


function UpdatePassword() {

const [inputData , setInputData] = useState({newPassword:'', cPassword:'', oldPassword:'02124515'})

const inputHandler = (e)=>{
  setInputData({...inputData, [e.target.name]:e.target.value })
  console.log(inputData);
}

const submitHandler = (e)=>{
    e.prevenDefault();
    console.log(inputData);
}


  return (
    <form action="#" className="rounded-[8px]  md:w-[629px] w-full">
      <div>
        <h3 className="medium-font  text-secondary my-[25px]">
          Update Password
        </h3>
        <div className="flex md:flex-row flex-col w-full gap-4">
          <div className={`${inputBox} md:w-[50%]`}>
            <label htmlFor="newPassoword" className={label}>
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={inputData.newPassword}
              required
              className={input}
              onChange={inputHandler}
            />
          </div>
          <div className={`${inputBox} md:w-[50%]`}>
            <label htmlFor="cPassword" className={label}>
              Confirm Password
            </label>
            <input
              type="password"
              name="cPassword"
              id="cPassword"
              value={inputData.cPassword}
              required
              className={input}
              onChange={inputHandler}
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-4 my-[15px]">
          <div className={`${inputBox} md:w-[50%]`}>
            <label htmlFor="oldPassword" className={label}>
              Old Password
            </label>
            <input
              type="password"
              name="oldPassword"
              id="oldPassword"
              value={inputData.oldPassword}
              required
              className={input}
              onChange={inputHandler}
            />
          </div>
          <div className="md:w-[50%] flex flex-col items-center justify-end">
            <input
              type="submit"
              onSubmit={submitHandler}
              className={`${input} extra-small-font bg-primary text-light m-0 hover:bg-[#7827FC] hover:text-light transition-[background] duration-500  cursor-pointer block w-[100%] shadow-0 focus:shadow-0 `}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default UpdatePassword