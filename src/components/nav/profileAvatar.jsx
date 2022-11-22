import Avatar from "@mui/material/Avatar";
import React, { useState } from "react";
import { HiUser } from 'react-icons/hi';
import { NavLink } from "react-router-dom";
import arrow from "../../assets/icon/fi-rr-angle-small-down.svg";
import useIsMobile from "../../hooks/useIsMobile";
export default function ProfileAvatar({ userAvatar, hambar }) {
  const [isOpen, setOpen] = useState(false);

  const manuOpenHandler = () => {
    if (isOpen) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const isMobile = useIsMobile();

  return (
    <div className="relative">
      <div
        className="flex items-center sm:gap-x-3 gap-x-1 cursor-pointer  "
        onClick={manuOpenHandler}
      >
        {isMobile ? (
          <>
            <figure>
              <Avatar
                alt={userAvatar.avatar.alt}
                src={userAvatar.avatar.img}
                sx={{ width: "30px", height: "30px" }}
              />
            </figure>
            <div className="flex lagre-font text-secondary items-center gap-x-1">
              {!hambar ? userAvatar.avatar.title : null}{" "}
              <img src={arrow} alt="arrow icon" width={20} height={20} />
            </div>
          </>
        ) : (
          <>
            <figure>
              <Avatar alt={userAvatar.avatar.alt} src={userAvatar.avatar.img} />
            </figure>
            <div
              to={userAvatar.avatar.link}
              className="flex lagre-font text-secondary items-center gap-x-1"
            >
              {!hambar ? userAvatar.avatar.title : null}{" "}
              <img src={arrow} alt="arrow icon" />
            </div>
          </>
        )}
      </div>

      {isOpen ? (
        <ul
          className="list-none absolute w-[200px]  shadow-lg xl:left-[-5%] right-[10%] bg-light py-2 px-3  z-50 profile_avatar_nav "
          style={{ top: "calc(100% + 10px)" }}
        >
          <li className="my-[10px] ">
            <NavLink
              to={"/profile"}
              className="py-[8px] px-[5px] text-secondary rounded-md hover:bg-softDark  flex items-center text-[13px] md:text-initial  gap-x-[8px]"
              onClick={manuOpenHandler}
            >
              <span className="text-primary text-[1rem] md:text-[1.3rem]   align-middle pb-1 ">
                <HiUser />
              </span>
              <span className="align-middle"> Account</span>
            </NavLink>
          </li>
          <li className="my-[10px]   ">
            <NavLink
              to={"/buy_more_mana"}
              className="py-[8px] text-secondary  px-[5px] rounded-md hover:bg-softDark  flex items-center gap-x-[8px] text-[13px] md:text-initial  "
              onClick={manuOpenHandler}
            >
              <svg
                className="md:w-[16px] w-[12px] md:h-[20px] h-[14px]"
                viewBox="0 0 86 102"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_3_1327"
                  maskUnits="userSpaceOnUse"
                  x="2"
                  y="40"
                  width="81"
                  height="58"
                >
                  <path
                    d="M4.34439 74.2036L18.9437 49.6152C21.653 45.0523 26.4468 42.1279 31.7438 41.8069L49.2116 40.7482C56.23 40.3229 62.8878 44.4673 66.431 50.5406C69.1772 55.2478 73.0214 61.3239 78.1765 68.627C87.6584 82.0598 80.7642 91.3416 74.2869 95.5887C72.4133 96.8173 70.166 97.2214 67.9255 97.2214H17.5563C9.27545 97.2214 4.81103 90.2825 2.78936 84.2542C1.65868 80.8826 2.52888 77.2613 4.34439 74.2036Z"
                    fill="#d9d9d9"
                  />
                </mask>
                <g mask="url(#mask0_3_1327)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M89.9729 54.1421C90.4926 57.257 90.7584 60.4645 90.7584 63.6953C90.7584 66.5164 90.5283 69.2564 90.08 71.8959C88.4297 81.6538 83.8833 90.4032 77.2065 96.6947C70.617 102.905 61.9091 106.723 51.8483 106.723C49.6505 106.723 47.4209 106.549 45.1636 106.186L44.0924 106.198C41.0179 106.777 38.0584 107.056 35.2258 107.056C25.0143 107.056 16.588 103.392 10.2722 97.4792C3.86523 91.4852 -0.423292 83.1649 -2.25613 73.9711C-2.91865 70.6515 -3.25586 67.2004 -3.25586 63.6914C-3.25586 60.8587 -3.09717 58.0531 -2.7679 55.3131C11.4862 64.5455 28.0055 72.2437 46.6433 61.106C62.5121 51.6263 77.7778 51.3828 89.9729 54.1421Z"
                    fill="url(#paint0_linear_3_1327)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M-4.53286 54.1421C-5.05653 57.257 -5.31836 60.4645 -5.31836 63.6953C-5.31836 66.5164 -5.08826 69.2564 -4.63997 71.8959C-2.98962 81.6538 1.55677 90.4032 8.23353 96.6947C14.823 102.905 23.531 106.723 33.5918 106.723C35.7896 106.723 38.0191 106.549 40.2765 106.186L41.3476 106.198C44.4222 106.777 47.3817 107.056 50.2142 107.056C60.4258 107.056 68.8521 103.392 75.1678 97.4792C81.5748 91.4852 85.8633 83.1649 87.6962 73.9711C88.3587 70.6515 88.6959 67.2004 88.6959 63.6914C88.6959 60.8587 88.5372 58.0531 88.2079 55.3131C73.9539 64.5455 57.4345 72.2437 38.7967 61.106C22.928 51.6263 7.66226 51.3828 -4.53286 54.1421Z"
                    fill="url(#paint1_linear_3_1327)"
                  />
                </g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M28.9945 27.986V6.86304H35.8572V27.986C35.8572 31.722 34.7809 35.3789 32.757 38.5193L8.9005 75.5367C3.50472 83.9092 9.51553 94.9339 19.4761 94.9339H65.9636C75.9242 94.9339 81.935 83.9092 76.5392 75.5367L52.6827 38.5193C50.6588 35.3789 49.5825 31.722 49.5825 27.986V6.86304H56.4452V27.986C56.4452 30.4034 57.1416 32.7697 58.4511 34.8017L82.3077 71.8191C90.6466 84.7584 81.3572 101.797 65.9636 101.797H19.4761C4.0825 101.797 -5.20692 84.7584 3.13201 71.8191L26.9886 34.8016C28.2981 32.7697 28.9945 30.4034 28.9945 27.986Z"
                  fill="#8646EE"
                />
                <path
                  d="M22.1318 3.43133C22.1318 1.53626 23.6681 0 25.5632 0H59.8765C61.7716 0 63.3078 1.53626 63.3078 3.43133C63.3078 5.3264 61.7716 6.86266 59.8765 6.86266H25.5632C23.6681 6.86266 22.1318 5.3264 22.1318 3.43133Z"
                  fill="#8646EE"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3_1327"
                    x1="78.1768"
                    y1="43.4638"
                    x2="3.46409"
                    y2="58.4152"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0829211" stopColor="#7F31FF" />
                    <stop offset="0.585828" stopColor="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_3_1327"
                    x1="74.6838"
                    y1="87.613"
                    x2="2.18709"
                    y2="58.4547"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8646EE" />
                    <stop offset="1" stopColor="#B98DFF" />
                  </linearGradient>
                </defs>
              </svg>

              <span>Buy More Mana</span>
            </NavLink>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
