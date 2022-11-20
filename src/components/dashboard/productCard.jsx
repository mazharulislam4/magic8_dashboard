import React from "react";
import { AiFillHeart } from 'react-icons/ai';
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import bottol from "../../assets/icon/bottol.svg";

 import ProductCardGraph from "../graph/productCardGraph";
// styled component 
import styled from 'styled-components';

const GraphBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #fff;
    background-size: cover;
    opacity: 0.6;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;



const Card = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 2;
`;








/**
 * content must be array of object
 * link for button click 
 * @param {content , link} param0 
 * @returns jsx / component
 */

function ProductCard({ content }) {
  return (
    <div>
      <h2 className="medium-font text-dark my-3 ml-2">{content?.status}</h2>
      {/* card  */}
      <div className="w-[289px] h-[320px] rounded-md  relative product_card_shadow  overflow-hidden  ">
        {/* content body */}
        <GraphBg>
          <ProductCardGraph  />
        </GraphBg>

        <Card className="px-[21px] py-[16px] bg-transparent ">
          <h2 className="text-dark initial-font mb-[14px] pt-[4px]">
            Created By {content?.date}
          </h2>
          <div>
            {/* -------------------revenue value -------------------------- */}
            <p className="small-font text-dark ">Revenue</p>
            {/* ----------------------revenue and avg -------------- */}
            <div className="flex items-center gap-2">
              <h3 className="medium-font text-secondary font-bold my-[7px]">
                ${content?.revenue}
              </h3>
              {/* ------------------revenue avg value ----------------- */}
              <p className="small-font text-green  flex gap-1 items-center my-[4px]">
                <span>
                  <FiArrowUpRight />
                </span>
                <span className="font-[400]">+{content?.revenueAvg}%</span>
              </p>
            </div>
          </div>
          {/* save product  */}
          <p className="flex items-center gap-2 small-font text-secondary">
            <span className=" text-[#FF4545] text-[1.2rem]">
              <AiFillHeart />
            </span>
            {content?.save} Other Saved This Product
          </p>
          <div className="flex items-center gap-2 justify-center mb-[20px] mt-[62px] ">
            <img src={bottol} alt="" width={21.5} height={25} />
            <span className="text-center initial-font  text-secondary font-bold ">
              {content?.mana} Mana
            </span>
          </div>
          {/*----------------------------- button --------------------- */}
          <Link to="/product_details">
            <button
              type="button"
              className="bg-light  rounded-md hover:bg-primary transition-colors duration-200 hover:text-light  text-center text-secondary block w-[100%]  py-[14px]"
            >
              Reveal This Product
            </button>
          </Link>
        </Card>
      </div>
    </div>
  );
}

export default ProductCard;
