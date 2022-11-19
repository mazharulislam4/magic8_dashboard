import Avatar from "@mui/material/Avatar";
import React from 'react';
import { Link } from "react-router-dom";
import arrow from '../../assets/icon/fi-rr-angle-small-down.svg';
import useIsMobile from "../../hooks/useIsMobile";
export default function ProfileAvatar({ userAvatar, hambar }) {
const isMobile = useIsMobile()
  return (
    <div>
      <div className="flex items-center sm:gap-x-3 gap-x-1  ">
        {isMobile ? (
          <>
            <figure>
              <Avatar
                alt={userAvatar.avatar.alt}
                src={userAvatar.avatar.img}
                sx={{ width: "30px", height: "30px" }}
              />
            </figure>
            <Link
              to={userAvatar.avatar.link}
              className="flex lagre-font items-center gap-x-1"
            >
              {!hambar ? userAvatar.avatar.title : null}{" "}
              <img src={arrow} alt="arrow icon" width={20} height={20} />
            </Link>
          </>
        ) : (
          <>
            <figure>
              <Avatar
                alt={userAvatar.avatar.alt}
                src={userAvatar.avatar.img}
              />
            </figure>
            <Link
              to={userAvatar.avatar.link}
              className="flex lagre-font items-center gap-x-1"
            >
              {!hambar ? userAvatar.avatar.title : null}{" "}
              <img src={arrow} alt="arrow icon"/>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
