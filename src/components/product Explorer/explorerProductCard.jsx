/* eslint-disable no-mixed-operators */
import React, { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import bottol from "../../assets/icon/bottol.svg";
import leftArrow from "../../assets/icon/leftArrow.svg";
import productSaveHeart from "../../assets/icon/productSaveHeart.svg";
import rightArrow from "../../assets/icon/rightArrow.svg";
import sellerImg from "../../assets/image/seller.svg";
import RevenueChart from "../graph/revenuChart";
function ExplorerProductCard({ content, isExpired }) {
const prevBtn = useRef();
const nextBtn = useRef();

  return (
    <div>
      <h4 className="py-[10px] text-dark initial-font">{content?.status}</h4>
      {/* card  */}

      <div
        className={`card w-[289px] h-[380px] pt-[16px] pb-[8px] px-[18px] rounded-md product_card_shadow ShopExplorerProductCard ${
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
              <img src={productSaveHeart} alt="save product" />
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
              <p className="text-secondary flex gap-1 items-center mt-[10px]">
                <img src={productSaveHeart} alt="save prodcut" />

                <span> {content?.tracking} Other Tracking</span>
              </p>
            </div>
          </div>
        </div>

        {/* card graph  */}
        {content && content.status === "brand" ? (
          <div className="mb-[8px] h-[110px] mt-[-20px] overflow-hidden">
            <RevenueChart width="100%" height="auto" />
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
                <img src={leftArrow} alt="" width={8} height={7} />
              </button>
              {/* slides  */}
              <div className="  flex gap-x-2 overflow-hidden px-[12px]">
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
                  breakpoints={{
                    0: {
                      slidesPerView: 3,
                      spaceBetween: 5,
                    },
                    440: {
                      slidesPerView: 3,
                      spaceBetween: 5,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 5,
                    },
                  }}
                  className="produc_card_slider"
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
                <img src={rightArrow} alt="" width={8} height={7} />
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
            <Link to={"/product_details"}>
              <button
                type="button"
                className="bg-softDark border-2 rounded-md hover:bg-primary transition-colors duration-200 hover:text-light border-softDark text-center text-secondary block w-[100%] py-[14px]"
              >
                {isExpired ? "Expired (Reveal Again)" : "Reveal This Stores"}
              </button>
            </Link>

            {(content && content.status === "hidden") || isExpired ? (
              <h4 className="extra-small-font text-[#FF4545] my-[8px] text-center ">
                Lasts 7 days
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
