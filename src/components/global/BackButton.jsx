import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const BackButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className="small-font font-[500] flex items-center text-secondary"
        onClick={() => navigate(-1)}
      >
        <span className="mr-2 text-primary " ><FiChevronLeft/></span> Back
      </button>
    </>
  );
};

export default BackButton;
