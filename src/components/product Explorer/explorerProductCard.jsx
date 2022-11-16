/* eslint-disable no-mixed-operators */
import React, { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { HiOutlineHeart } from 'react-icons/hi';
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import bottol from "../../assets/icon/bottol.svg";
import heart from "../../assets/icon/heart.svg";
import leftArrow from "../../assets/icon/leftArrow.svg";
import rightArrow from "../../assets/icon/rightArrow.svg";
import graph from "../../assets/image/graph.svg";
import sellerImg from "../../assets/image/seller.svg";

function ExplorerProductCard({ content, isExpired }) {
const prevBtn = useRef();
const nextBtn = useRef();

  return (
    <div>
      <h4 className="py-[10px] text-dark initial-font">{content?.status}</h4>
      {/* card  */}

      <div
        className={`card w-[18.06rem] min-h-[380px] pt-[16px] pb-[8px] px-[18px] rounded-md shadow-md ShopExplorerProductCard ${
          content && content.status === "brand"
            ? "bg-light"
            : "bg-cardBg bg-center bg-no-repeat object-cover"
        } `}
      >
        {/* card header  */}
        <div className="card-head">
          {/* ----------------heart button product save --------------------------------------- */}
          <div className="flex justify-between items-center">
            <h2 className="text-dark initial-font mb-[14px] pt-[4px]">
              Created By {content?.date}
            </h2>
            <button type="button">
              <img src={heart} alt="save product" />
            </button>
          </div>
          <div className="flex justify-between  ">
            <div>
              {/*------------ search value --------------- */}
              <p className="text-dark small-font ">Revenue</p>
              <h3 className="medium-font text-secondary font-bold my-[7px]">
                {content?.revenue}
              </h3>
              <p className="small-font text-green  flex gap-1 items-center my-[4px]">
                <span>
                  <FiArrowUpRight />
                </span>
                {/*-------------- searcht avg value ---------- */}
                <span className="font-[400]">+{content?.avgRevenue}%</span>
              </p>
              <p className="text-secondary flex gap-1 items-center mt-[13px]">
                <span className="text-[#FF4545]">
                  <HiOutlineHeart />
                </span>
                <span> {content?.tracking} Other Tracking</span>
              </p>
            </div>
          </div>
        </div>

        {/* card graph  */}
        {content && content.status === "brand" ? (
          <div className="mt-[15px] mb-[8px]">
            <img src={graph} alt="" />
          </div>
        ) : (
          ""
        )}
        {/* card carusel  */}
        {content && content.status === "brand" ? (
          <div>
            <h4 className="text-[12px] text-secondary pb-[6px]">Top Seller</h4>
            {/* slider  */}
            <div className="flex gap-1 items-center w-[15.5rem] ">
              <button ref={prevBtn}>
                <img src={leftArrow} alt="" width={13} height={12} />
              </button>
              {/* slides  */}
              <div className="mySwiper  flex gap-x-2 overflow-hidden px-[12px]">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={5}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    prevEl: prevBtn.current,
                    nextEl: nextBtn.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevBtn.current;
                    swiper.params.navigation.nextEl = nextBtn.current;
                  }}
                  modules={[Navigation, Autoplay]}
                >
                  <SwiperSlide>
                    <figure>
                      <img src={sellerImg} alt="" width={65} height={55} />
                      <figcaption className="text-[12px] justify-center flex text-secondary">
                        Product 1
                      </figcaption>
                    </figure>
                  </SwiperSlide>
                  <SwiperSlide>
                    <figure>
                      <img src={sellerImg} alt="" width={65} height={55} />
                      <figcaption className="text-[12px] justify-center  flex text-secondary">
                        Product 1
                      </figcaption>
                    </figure>
                  </SwiperSlide>
                  <SwiperSlide>
                    <figure>
                      <img src={sellerImg} alt="" width={65} height={55} />
                      <figcaption className="text-[12px] justify-center flex text-secondary">
                        Product 1
                      </figcaption>
                    </figure>
                  </SwiperSlide>
                  <SwiperSlide>
                    <figure>
                      <img src={sellerImg} alt="" width={65} height={55} />
                      <figcaption className="text-[12px] justify-center flex text-secondary">
                        Product 1
                      </figcaption>
                    </figure>
                  </SwiperSlide>
                </Swiper>
              </div>
              <button ref={nextBtn}>
                <img src={rightArrow} alt="" width={13} height={12} />
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 justify-center mb-[20px] mt-[62px] ">
              <img src={bottol} alt="" width={21.5} height={25} />
              <span className="text-center initial-font  text-secondary font-bold ">
                {content?.mana} {content?.mana} Mana
              </span>
            </div>
            {/*----------------------------- button --------------------- */}
            <button
              type="button"
              className="bg-softDark border-2 rounded-md hover:bg-primary transition-colors duration-200 hover:text-light border-softDark text-center text-secondary block w-[100%] py-[14px]"
            >
              <Link path={"/product_details"}>
                {isExpired ? "Expired (Reveal Again)" : "Reveal This Stores"}
              </Link>
            </button>

            {(content && content.status === "hidden") || isExpired ? (
              <h4 className="extra-small-font text-[#FF4545] my-[20px] text-center ">
                Lasts 7days
              </h4>
            ) : (
              ""
            )}
          </>
        )}
        {/* card carusel end   */}
      </div>
    </div>
  );
}

export default ExplorerProductCard;
