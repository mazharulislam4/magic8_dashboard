import React from "react";
import {
  AiFillFacebook, AiFillLinkedin, AiFillMail, AiFillTwitterSquare
} from "react-icons/ai";
import { RiFileSearchFill } from "react-icons/ri";
import styled from "styled-components";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import StoreCard from "../../components/dashboard/storeCard";
import BackButton from "../../components/global/BackButton";
import OrderedCustomers from "../../components/global/orderedCustomers";
import RevenueOverTime from '../../components/graph/revenueOverTime';
import TrafficChart from "../../components/graph/trafficChart";
import StatistikCard from "../../components/shop/StatistikCard";
import TopSellingProduct from "../../components/shop/topSellingProduct";
import useIsMobile from "../../hooks/useIsMobile";
import customersData from '../dashboard/customersData';
import { storeData } from "../dashboard/productData";

const ProductCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.18rem, 1fr));
  grid-row-gap: 30px;
  grid-column-gap: 20px;
  place-items: center;
  @media (max-width: 1024px) {
    place-items: center;
  }
`;




function ShopDetails() {

  const isMobile = useIsMobile();

  return (
    <div className="custom-container">
      <div className=" xl:flex   bg-light rounded-t-xl  ">
        <div className="md:px-[8px] xl:h-screen overflow-y-auto overflow-x-hidden grow  py-[20px] xl:pb-[120px] ">
          {/*--------------------------------------- main content -------------------------- */}
          {/*----------- back button --------------- */}
          <section className="md:px-[25px]">
            <div className="my-[15px]">
              <BackButton />
            </div>

            <StatistikCard />

            {isMobile ? (
              <>
                <div className="flex justify-between items-center">
                  <h2 className="my-[20px]  large-font text-secondary">
                    Traffic source
                  </h2>
                  {/* social icons  */}
                  <div className="flex gap-2 items-center mr-2 text-primary ">
                    <span className="text-[1.2rem]">
                      <AiFillMail />
                    </span>
                    <span className="text-[1.2rem]">
                      <RiFileSearchFill />
                    </span>
                    <span className="text-[1.2rem]">
                      <AiFillLinkedin />
                    </span>
                    <span className="text-[1.2rem]">
                      <AiFillFacebook />
                    </span>
                    <span className="text-[1.3rem]">
                      <AiFillTwitterSquare />
                    </span>
                  </div>
                </div>
                <div>
                  <TrafficChart />
                </div>
              </>
            ) : (
              ""
            )}
            {/*----------------------- product graph------------------  ---------*/}
            <div className="flex gap-x-6 gap-y-5 2xl:flex-nowrap justify-between flex-wrap">
              <RevenueOverTime />
              <TopSellingProduct />
            </div>

            <div className="my-[20px] ">
              <h2 className="text-secondary md:text-[18px] text-[14px] md:my-[20px] my-[10px] px-[10px]  w-[100%]  ">
                Stores others have tracked
              </h2>
              {isMobile ? (
                <Swiper 
                slidesPerView={'auto'}
                spaceBetween = {30}
                className="mySwiper"
                >
                  {storeData &&
                    storeData.map((data) => (
                      <SwiperSlide key={data.id}>
                        <StoreCard
                          content={{
                            ...data,
                          }}
                        />
                      </SwiperSlide>
                    ))}
                </Swiper>
              ) : (
                <ProductCardGrid>
                  {storeData &&
                    storeData.map((data) => (
                      <StoreCard
                        key={data.id}
                        content={{
                          ...data,
                        }}
                      />
                    ))}
                </ProductCardGrid>
              )}
            </div>
          </section>
        </div>
        {/*-------------------------------- sidebar------------------------------  */}
        <aside className="2xl:w-[400px] px-4 xl:h-screen overflow-y-auto overflow-x-hidden ">
          <div className="overflow-y-auto ">
            {!isMobile ? (
              <>
                <div className="flex justify-between items-center">
                  <h2 className="my-[20px]  large-font text-secondary">
                    Traffic source
                  </h2>
                  {/* social icons  */}
                  <div className="flex gap-2 items-center mr-2 text-primary ">
                    <span className="text-[1.2rem]">
                      <AiFillMail />
                    </span>
                    <span className="text-[1.2rem]">
                      <RiFileSearchFill />
                    </span>
                    <span className="text-[1.2rem]">
                      <AiFillLinkedin />
                    </span>
                    <span className="text-[1.2rem]">
                      <AiFillFacebook />
                    </span>
                    <span className="text-[1.3rem]">
                      <AiFillTwitterSquare />
                    </span>
                  </div>
                </div>
                <div>
                  <TrafficChart />
                </div>
              </>
            ) : (
              ""
            )}

            <h2 className="large-font text-secondary pt-4 my-[10px] text-left  ">
              Store Order Feed
            </h2>
            {customersData
              ? customersData.map((data) => {
                  return (
                    <OrderedCustomers
                      key={data.id}
                      content={{
                        title: data.title,
                        fullName: data.user_name,
                        price: data.price,
                        xs: data?.xs,
                        avatar: data.avatar,
                      }}
                    />
                  );
                })
              : ""}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default ShopDetails;
