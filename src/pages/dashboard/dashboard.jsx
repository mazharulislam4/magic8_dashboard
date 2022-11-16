import { motion, useWillChange } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Autoplay, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
// import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../../components/dashboard/productCard";
import StoreCard from "../../components/dashboard/storeCard";
import FilterComponent from "../../components/global/filterComponent/FilterComponent";
import OrderedCustomers from "../../components/global/orderedCustomers";
import useIsMobile from "../../hooks/useIsMobile";
//------------------ product data------------------
import customersData from "./customersData";
import { productData, storeData } from "./productData";
// styled component

const ProductCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.18rem, 1fr));
  grid-gap: 15px;

  place-items: center stretch;
  @media (max-width: 1024px) {
    place-items: center;
  }
`;

function Dashboard() {
  const isMobile = useIsMobile();
  const opacityAni = useWillChange();
  return (
    <div className="custom-container ">
      {/* <FreeManaModal status={earnManaModal} /> */}

      <div className="xl:h-screen xl:flex  xl:overflow-hidden  bg-[#f4f4f4] rounded-t-xl">
        <motion.div
          className="md:px-[20px] xl:h-screen overflow-y-auto overflow-x-hidden px-[10px] py-[20px] xl:pb-[120px] bg-[#f1f1f1]  xl:grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ opacityAni }}
        >
          <div className="my-[20px] ">
            <FilterComponent />
          </div>

          {/*-------------------------------- Trending store --------------------------------*/}
          <div className="my-[50px] ">
            <h2 className="text-secondary large-font  w-[100%]  ">
              Trending Stores
            </h2>
            {isMobile ? (
              <div className="overflow-x-hidden relative">
                <Swiper
                  slidesPerView={3}
                 
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
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
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

          {/* -----------------------------Trending product------------------------------ */}
          <div className="my-[50px] ">
            <h2 className="text-secondary large-font my-[20px]  w-[100%]  ">
              Trending Products
            </h2>
            {isMobile ? (
              <div className="overflow-x-hidden relative">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={15}
                  freeMode={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[FreeMode, Autoplay]}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 15,
                    },
                    440: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                  }}
                  className="mySwiper w-full"
                >
                  {productData &&
                    productData.map((data) => (
                      <SwiperSlide key={data.id}>
                        <ProductCard
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
                {productData &&
                  productData.map((data) => (
                    <ProductCard
                      key={data.id}
                      content={{
                        ...data,
                      }}
                    />
                  ))}
              </ProductCardGrid>
            )}
          </div>
        </motion.div>
        {/*--------------------- --------------right sidebar layout -------------------------------- */}
        <div className="xl:w-[455px] xl:h-screen overflow-y-auto overflow-x-hidden  border-l-2 border-[#E4E4E4]  ">
          {/* container  */}
          <div className=" px-[12px]  ">
            <h2 className="medium-font text-secondary pt-4 text-left ">
              Global Order Feed
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
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
