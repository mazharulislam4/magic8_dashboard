import React from "react";
import styled from "styled-components";
import { Autoplay, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import StoreCard from "../../components/dashboard/storeCard";
import BackButton from "../../components/global/BackButton";
import OrderedCustomers from "../../components/global/orderedCustomers";
import RevenueOverTime from '../../components/graph/revenueOverTime';
import StatistikCard from "../../components/shop/StatistikCard";
import TopSellingProduct from "../../components/shop/topSellingProduct";
import useIsMobile from "../../hooks/useIsMobile";
import customersData from '../dashboard/customersData';
import { storeData } from "../dashboard/productData";


const ProductCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.18rem, 1fr));
  grid-row-gap: 30px;
  grid-column: 20px;
  place-items: center;
  @media (max-width: 1024px) {
    place-items: center;
  }
`;




function ShopDetails() {

  const isMobile = useIsMobile();

  return (
    <div className="custom-container xl:flex  px-[8px] bg-light rounded-t-xl  ">
      <div className="md:px-[8px] xl:h-screen overflow-y-auto  py-[20px] xl:pb-[120px] ">
        {/*--------------------------------------- main content -------------------------- */}
        {/*----------- back button --------------- */}
        <section className="md:px-[25px]">
          <div>
            <BackButton />
          </div>

          <StatistikCard />
          {/*----------------------- product graph------------------  ---------*/}
          <div className="flex gap-x-6 gap-y-5 lg:flex-nowrap flex-wrap">
            <RevenueOverTime />
            <TopSellingProduct />
          </div>

          <div className="my-[50px] ">
            <h2 className="text-secondary large-font my-[20px] px-[10px]  w-[100%]  ">
              Stores others have tracked
            </h2>
            {isMobile ? (
              <div className="overflow-x-hidden relative">
                <Swiper
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={20}
                  freeMode={true}
                  modules={[FreeMode, Autoplay]}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 15,
                    },
                    440: {
                      slidesPerView: 2,
                      spaceBetween: 15,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 15,
                    },
                  }}
                  className="mySwiper w-full"
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
              </div>
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
          <h2 className="medium-font text-secondary pt-4 text-left  ">
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
  );
}

export default ShopDetails;
