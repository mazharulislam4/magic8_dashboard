import React, { useContext, useEffect, useState } from "react";
import avatarImg from '../../assets/image/avatar.png';
import NavHeader from "../../components/nav/navHeader";
import ProfileAvatar from "../../components/nav/profileAvatar";
import { NavbarTogllerContext } from "../../context/utilsContext";
import useWindowSize from '../../hooks/useWindowSize';


const headerData = {
  title: "Novice (Upgrade Plan)",
  highLight: "(Upgrade Plan)",
  progPer: 70,
  counter1: 15,
  counter2: 35,
  dividar: "/",
  token: "Mana",
  highLightColor: "#51459F",
};


const userAvatar = {
  avatar: {
    title: "Abdullah Ruth",
    img: avatarImg,
    alt: "avatar image",
    link:'/profile',
  },
};

export default function Navbar({hambar}) {

   const [sticky , setSticky] = useState(false)
  const windowSize = useWindowSize();
  const getToggller = useContext(NavbarTogllerContext)

  useEffect(() => {

    const windowYscroll = window.addEventListener("scroll", function (e) {
      if (Math.round(window.scrollY) > 60) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });

   
    return () => {
      window.removeEventListener('sroll' , windowYscroll)
    };
  }, [windowSize]);

    return (
      <nav
        className={`custom-container  md:py-[18px] py-[10px]   w-[100%] top-0 static z-[100]  bg-[] ${sticky ? 'fixed  bg-light  transition-all duration-400 shadow-md ' : 'static'}  `}
      >
        <div className={`flex justify-between gap-2`}>
          <button
            type="button"
            className="hover:text-primary"
            onClick={getToggller.toggleHandler}
          >
            {hambar ? (
              <svg
                width="30"
                height="30"
                viewBox="0 0 26 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="26" height="2" rx="1" fill="#8646EE" />
                <rect y="8" width="26" height="2" rx="1" fill="#8646EE" />
                <rect y="16" width="26" height="2" rx="1" fill="#8646EE" />
              </svg>
            ) : null}
          </button>

          <div className="lg:w-[70%] w-[75%]">
            <NavHeader data={headerData} />
          </div>
          <div className="flex justify-end lg:w-[30%]">
            <ProfileAvatar userAvatar={userAvatar} hambar={hambar} />
          </div>
        </div>
      </nav>
    );
}
