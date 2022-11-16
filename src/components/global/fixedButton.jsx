import React from 'react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
function FixedButton({children, handler}) {
  return (
    <button
      type="button"
      className="flex justify-between items-center lg:w-[281px] h-[61px] w-[250px]  fixed right-0 bottom-0 bg-primary hover:bg-cyan text-light  px-5 z-30 "
      onClick={handler}
    >
      <span className='flex items-center'>
        <svg
          width="22"
          height="26"
          viewBox="0 0 22 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_3_1254"
            maskUnits="userSpaceOnUse"
            x="0"
            y="10"
            width="21"
            height="15"
          >
            <path
              d="M1.10145 18.8046L4.80122 12.5734C5.4878 11.4171 6.70266 10.676 8.04502 10.5946L12.4717 10.3263C14.2503 10.2185 15.9376 11.2688 16.8355 12.8079C17.5314 14.0008 18.5056 15.5406 19.812 17.3914C22.215 20.7955 20.4678 23.1477 18.8263 24.224C18.3515 24.5354 17.782 24.6378 17.2142 24.6378H4.44962C2.35108 24.6378 1.21971 22.8793 0.707372 21.3516C0.420834 20.4972 0.641362 19.5795 1.10145 18.8046Z"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_3_1254)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.8009 13.7206C22.9326 14.51 23 15.3229 23 16.1416C23 16.8565 22.9417 17.5509 22.8281 18.2198C22.4098 20.6927 21.2577 22.9099 19.5656 24.5043C17.8957 26.0782 15.6889 27.0458 13.1393 27.0458C12.5824 27.0458 12.0173 27.0017 11.4453 26.9096L11.1738 26.9126C10.3947 27.0595 9.64468 27.13 8.92685 27.13C6.33904 27.13 4.20364 26.2015 2.6031 24.7031C0.979437 23.1842 -0.107364 21.0756 -0.571843 18.7457C-0.739739 17.9044 -0.825195 17.0299 -0.825195 16.1406C-0.825195 15.4228 -0.784981 14.7117 -0.701535 14.0174C2.91074 16.3571 7.09709 18.3079 11.8203 15.4854C15.8418 13.0831 19.7104 13.0214 22.8009 13.7206Z"
              fill="url(#paint0_linear_3_1254)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M-1.14859 13.7206C-1.2813 14.51 -1.34766 15.3229 -1.34766 16.1416C-1.34766 16.8565 -1.28935 17.5509 -1.17574 18.2198C-0.757506 20.6927 0.394643 22.9099 2.08667 24.5043C3.75659 26.0782 5.96337 27.0458 8.51297 27.0458C9.06995 27.0458 9.63496 27.0017 10.207 26.9096L10.4785 26.9126C11.2576 27.0595 12.0076 27.13 12.7255 27.13C15.3133 27.13 17.4487 26.2015 19.0492 24.7031C20.6729 23.1842 21.7597 21.0756 22.2242 18.7457C22.392 17.9044 22.4775 17.0299 22.4775 16.1406C22.4775 15.4228 22.4373 14.7117 22.3538 14.0174C18.7416 16.3571 14.5552 18.3079 9.83201 15.4854C5.81055 13.0831 1.9419 13.0214 -1.14859 13.7206Z"
              fill="url(#paint1_linear_3_1254)"
            />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.34781 7.09226V1.73926H9.08696V7.09226C9.08696 8.03904 8.8142 8.96577 8.30132 9.7616L2.25557 19.1426C0.88817 21.2644 2.41143 24.0582 4.93564 24.0582H16.7166C19.2408 24.0582 20.764 21.2644 19.3966 19.1426L13.3509 9.7616C12.838 8.96578 12.5652 8.03904 12.5652 7.09226V1.73926H14.3044V7.09226C14.3044 7.70488 14.4809 8.30454 14.8127 8.81948L20.8585 18.2005C22.9717 21.4796 20.6176 25.7974 16.7166 25.7974H4.93564C1.03459 25.7974 -1.31954 21.4796 0.793715 18.2005L6.83946 8.81948C7.17133 8.30453 7.34781 7.70489 7.34781 7.09226Z"
            fill="white"
          />
          <path
            d="M5.6084 0.869693C5.6084 0.389442 5.99772 0.00012207 6.47797 0.00012207H15.1737C15.6539 0.00012207 16.0432 0.389442 16.0432 0.869693C16.0432 1.34994 15.6539 1.73926 15.1737 1.73926H6.47797C5.99772 1.73926 5.6084 1.34994 5.6084 0.869693Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3_1254"
              x1="19.8115"
              y1="11.0145"
              x2="0.877779"
              y2="14.8035"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0829211" stopColor="#7F31FF" />
              <stop offset="0.585828" stopColor="white" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_3_1254"
              x1="18.9266"
              y1="22.2028"
              x2="0.554379"
              y2="14.8135"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8646EE" />
              <stop offset="1" stopColor="#B98DFF" />
            </linearGradient>
          </defs>
        </svg>

        <span className='ml-2'> {children}</span>
      </span>
      <span className="text-[1.5rem]">
        <HiOutlineArrowNarrowRight />
      </span>
    </button>
  );
}

export default FixedButton