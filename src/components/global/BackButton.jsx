import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const BackButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className="text-lg font-mono flex items-center text-secondary"
        onClick={() => navigate(-1)}
      >
        <span className="fa-solid fa-angle-left mr-2 text-primary text-xl" ><FiChevronLeft/></span> Back
      </button>
    </>
  );
};

export default BackButton;
