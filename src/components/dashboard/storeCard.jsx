import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import bottol from '../../assets/icon/bottol.svg';
import signalIcon from '../../assets/icon/fi-rr-signal-alt.svg';
import ProductCardGraph from "../graph/productCardGraph";
// import RevenueChart from "../graph/revenuChart";
// styled component
import styled from "styled-components";

const GraphBg = styled.div`
  position: absolute;
  top: 0;
  left: -12px;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  filter: blur(3px);
  -webkit-filter: blur(3px);
`;

const Card = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
`;






function StoreCard({content}) {
  return (
    <div>
      <h2 className="medium-font text-dark my-3 ml-2">Brand Name</h2>
      {/* card  */}
      <div className="w-[18.5rem] h-[320px] px-[21px] py-[16px]  product_card_shadow  relative overflow-hidden">
        {/* content body */}

        <GraphBg>
          <ProductCardGraph width={320} height={330} />
        </GraphBg>

        <Card className="w-[18.5rem] h-[320px] px-[21px] py-[16px]">
          <div className="flex justify-between  ">
            <div>
              {/*------------ search value --------------- */}
              <p className="text-dark small-font ">Search Volume</p>
              <h3 className="medium-font text-secondary font-bold my-[7px]">
                {content?.search}
              </h3>
              <p className="small-font text-green  flex gap-1 items-center my-[4px]">
                <span>
                  <FiArrowUpRight />
                </span>
                {/*-------------- searcht avg value ---------- */}
                <span className="font-[400]">+{content?.searchAvg}%</span>
              </p>
              <p className="text-secondary flex gap-3 items-center mt-[13px]">
                <span>
                  <img
                    src={signalIcon}
                    alt="mana icon"
                    width={16}
                    height={12}
                  />
                </span>
                <span>{content?.tracking} Other Tracking</span>
              </p>
            </div>
            <div>
              {/* -------------------revenue value -------------------------- */}
              <p className="small-font text-dark text-right ">Revenue</p>
              <h3 className="medium-font text-secondary text-right font-bold my-[7px]">
                ${content?.revenue}
              </h3>
              {/* ------------------revenue avg value ----------------- */}
              <p className="small-font text-green text-right flex gap-1 items-center my-[4px]">
                <span>
                  <FiArrowUpRight />
                </span>
                <span className="font-[400]">+{content?.revenueAvg}%</span>
              </p>
            </div>
          </div>
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
              className="bg-softDark border-2 rounded-md hover:bg-primary transition-colors duration-200 hover:text-light border-softDark text-center text-secondary block w-[100%] py-[14px]"
            >
              Reveal This Stores
            </button>
          </Link>
        </Card>
      </div>
    </div>
  );
}

export default StoreCard;
