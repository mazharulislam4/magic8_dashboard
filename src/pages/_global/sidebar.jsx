
import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
// import from navData navbar data , link , page name etc 
import navData from "../../components/nav/navData";
// svg icon 
import { Tooltip } from '@mui/material';
import settingIcon from "../../assets/icon/setting.svg";
import collapsLogo from '../../assets/image/collapsLogo.png';
import logo from "../../assets/image/logo.png";
import { NavbarTogllerContext } from '../../context/utilsContext';
// styled component styling
const Aside = styled.aside`
width: ${(props) => props.autoCollapse ? '60px' : '295px'};
background-image: ${(props)=>props.autoCollapse ? 'none !important' : ''};
padding: ${(props)=>props.autoCollapse ? '0 8px' : '0 15px'};
`
// navbar link menu 
/**
 * 
 * @param {togglerHandler , autoCollapse} param2
 * these two param comes from Aside Compononent which is situeted below of the MenuItem Component . 
 * these two param are bool  (true , false)
 * @returns 
 */
export const MenuItem = ({ toggleHandler, autoCollapse }) => {

  return (
    <ul className="list-none sidebarNav ">
      {navData
        ? navData.map((data) => {
            return (
              <li key={data.id}>
                {!autoCollapse ? (
                  <NavLink
                    to={data.link}
                    key={data.id}
                    className={`text-light flex gap-x-[18px] pt-[21px] my-[17.5px] pb-[23px]  bg-no-repeat bg-cover bg-center pl-[18px] delay-500 duration-800 ease-in-out hover:bg-navbg initial-font rounded-[12px] `}
                    onClick={toggleHandler}
                  >
                    <img
                      src={data.icon}
                      alt="navlink-icon"
                      width={18}
                      height={18}
                    />
                    {data.title}
                  </NavLink>
                ) : (
                  <Tooltip title={data.title}>
                    <NavLink
                      key={data.id}
                      to={data.link}
                      className={`text-light px-[7px] py-[10px] my-[25px] autoCollapse flex justify-center  hover:bg-[#5A4DAD] rounded-md transition-opacity text-center  }`}
                      onClick={toggleHandler}
                    >
                      <img
                        src={data.icon}
                        alt="navlink-icon"
                        width={26}
                        height={26}
                        className="text-center"
                      />
                    </NavLink>
                  </Tooltip>
                )}
              </li>
            );
          })
        : null}
    </ul>
  );
};

// the sidebar component  
/**
 *autoCollapse props is bool if true sidebar autometic collaps  
 * @param {autoCollapse} param 
 * @returns 
 */

export function Sidebar({ autoCollapse }) {
  const { open, toggleHandler } = useContext(NavbarTogllerContext);


  return (
    <Aside
      className={` xl:block xl:static pl-[15px] pr-[24px]  bg-[#3C3574] w-[100] fixed  z-[1000]  bg-sidebarBg bg-cover bg-no-repeat bg-center  ${
        open ? "block" : "hidden"
      } `}
      autoCollapse={autoCollapse}
    >
      <div className="relative flex flex-col gap-[50px] h-[100vh] ">
        {/* close button  */}
        {!autoCollapse ? (
          <>
            <button
              type="button"
              className=" cursor-pointer xl:hidden absolute top-[8%] right-[-30px] "
              onClick={toggleHandler}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="20"
                  fill="#8646EE"
                  className="hover:fill-cyan duration-400"
                />
                <path
                  d="M25 15L15 25M15 15L25 25"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {/* navbar close button  */}
            <figure className="px-[25px] mt-[31px] flex justify-between gap-8 items-center ">
              <img src={logo} alt="Magic8 Logo" className="align-middle" />
            </figure>
          </>
        ) : (
          <figure className="mt-[31px]  ">
            <img
              src={collapsLogo}
              alt="Magic8 Logo"
              className="align-middle w-[3rem]"
            />
          </figure>
        )}
        {/* menu items  */}
        <div>
          <MenuItem toggleHandler={toggleHandler} autoCollapse={autoCollapse} />
        </div>
        {/* setting button  */}
        {!autoCollapse ? (
          <div className="pl-[15px] pr-[24px] justify-self-end py-8 absolute bottom-0">
            <NavLink
              to="/setting"
              className={`flex gap-2  text-light select-none `}
              style={({ isActive }) => (isActive ? { color: "cyan" } : {})}
              onClick={toggleHandler}
            >
              <img src={settingIcon} alt="setting" /> Setting
            </NavLink>
          </div>
        ) : (
          <div className=" justify-self-end py-8 absolute bottom-0 flex justify-center">
            <NavLink
              to="/setting"
              className={` text-light select-none flex justify-center px-3 py-2 rounded-sm`}
              style={({ isActive }) =>
                isActive ? { backgroundColor: "#5a4dad" } : {}
              }
            >
              <img src={settingIcon} alt="setting" width={24} height={24} />
            </NavLink>
          </div>
        )}
      </div>
    </Aside>
  );
}
