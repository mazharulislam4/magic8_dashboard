import React, { useState } from 'react';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import prodcutImg from "../../assets/image/product.png";
import BackButton from '../../components/global/BackButton';
import FilterByDays from "../../components/global/filterByDays";
import { products } from "../../components/global/productCardData";
import BestSellingVariant from '../../components/product Explorer/bestSellingVariant';
import ExplorerProductCard from "../../components/product Explorer/explorerProductCard";
import ProductRevenueOverTime from "../../components/product Explorer/productRevenueOverTime";
import VendorDetails from '../../components/product Explorer/vendorDetails';
import useIsMobile from '../../hooks/useIsMobile';

import styled from 'styled-components';
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



const size = [
  { value: "Small / matcha", label: "1" },
  { value: "Small / matcha", label: "2" },
  { value: "Small / matcha", label: "3" },
  { value: "Small / matcha", label: "4" },
];



function ProductDetails() {

    const [isSelectOpen, setSelectOpen] = useState(false);
    const [selectData, setSelectData] = useState(null);
    const isMobile = useIsMobile();


  return (
    <div className="custom-container">
      <div className="xl:h-screen xl:flex xl:grow xl:overflow-hidden bg-light pb-[50px]">
        {/* main content  */}
        <div className="md:px-[20px] xl:h-screen hover:overflow-y-auto px-[10px] py-[20px] xl:pb-[150px]">
          <BackButton />
          <h2 className="large-font text-secondary my-[20px]">Men’s Hoodie</h2>
          <div className="flex  flex-wrap xl:justify-start  gap-y-[15px] ">
            {/* showcase product  */}
            <div className="xl:order-1 xl:w-[50%] w-full shrink my-[5px] ">
              <figure className="2xl:w-[452px] w-{100%} flex mb-[21px] justify-center items-end rounded-md bg-[#FFEEDD] min-[395px]: ">
                <img src={prodcutImg} alt="" />
              </figure>
              {/* ========---------filter by days --------------======== */}

              <div className="md:w-[200px] inline-block">
                <FilterByDays
                  placeholder="Small / matcha"
                  willOpen={() => {
                    setSelectOpen(true);
                  }}
                  isDropdown={isSelectOpen}
                  getDataHandler={(e) => {
                    setSelectData(e.target.innerText);
                  }}
                  closeHandler={() => {
                    setSelectOpen();
                  }}
                  preData={size}
                  data={selectData}
                  styles={{ width: "180px", padding: "5px 15px" }}
                />
              </div>
              {/* vendor and product from vendor.jsx details  */}
            </div>

            <div className="xl:order-3 xl:w-[50%] w-full shrink ">
              <VendorDetails isMobile={isMobile} />
            </div>

            {/* revenue graph  */}
            <div className="xl:order-2 xl:w-[50%] w-full shrink ">
              <ProductRevenueOverTime />
            </div>
            {/* best sell  */}
            <div className="xl:order-4 xl:w-[50%] w-full shrink ">
              <BestSellingVariant />
            </div>
          </div>
        </div>

        {/* aside  */}
        <div className="xl:w-[600px] xl:h-screen  overflow-y-auto overflow-x-hidden xl:pb-[150px] w-full  py-[10px]  px-2 md:my-[0] my-[20px] ">
          <div>
            <h2 className="initial-font text-secondary my-[10px]">
              Others Product people are tracking
            </h2>
          </div>
          <div className=" ">
            {isMobile ? (
              <Swiper
              slidesPerView={'auto'}
              spaceBetween = {30}
              className = "mySwiper"
              >
                {products &&
                  products.map((data) => (
                    <SwiperSlide key={data.id}>
                      <ExplorerProductCard
                        content={{
                          ...data,
                        }}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            ) : (
              <ProductCardGrid>
                {products.map((data) => (
                  <ExplorerProductCard key={data.id} content={data} />
                ))}
              </ProductCardGrid>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails