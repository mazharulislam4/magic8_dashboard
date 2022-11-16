import React, { useState } from 'react';
import { Autoplay, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
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
      <div className="xl:h-screen xl:flex xl:grow xl:overflow-hidden bg-light ">
        {/* main content  */}
        <div className="md:px-[20px] xl:h-screen overflow-y-auto px-[10px] py-[20px] xl:pb-[120px]">
          <BackButton />
          <h2 className="large-font text-secondary my-[20px]">Men’s Hoodie</h2>
          <div className="flex  flex-wrap xl:justify-start  gap-y-[15px] ">
            {/* showcase product  */}
            <div className="xl:order-1 xl:w-[50%] w-full shrink my-[5px] ">
              <figure className="2xl:w-[452px] w-{100%} flex mb-[21px] justify-center items-end rounded-md bg-[#FFEEDD] min-[395px]: ">
                <img src={prodcutImg} alt="" />
              </figure>
              {/* ========---------filter by days --------------======== */}

              <div className="w-[250px] inline-block">
                <FilterByDays
                  placeholder="Small / matcha"
                  willOpen={() => {
                    setSelectOpen(true);
                  }}
                  isDropdown={isSelectOpen}
                  getDataHandler={(e) => {
                    setSelectData(e.target.innerText);
                    setSelectOpen(false);
                  }}
                  preData={size}
                  data={selectData}
                  styles={{ width: "250px" }}
                />
              </div>
              {/* vendor and product from vendor.jsx details  */}
            </div>

            <div className="xl:order-3 xl:w-[50%] w-full shrink ">
              <VendorDetails />
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
        <div className="xl:w-[600px] xl:h-screen  overflow-y-auto overflow-x-hidden xl:pb-[120px]  py-[20px] ">
          <div className=" ">
            {isMobile ? (
              <Swiper
                slidesPerView={3}
                spaceBetween={20}
                freeMode={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[FreeMode, Autoplay]}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  440: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                  },
                }}
                className="mySwiper w-full my-[30px]"
              >
                {products.map((data) => (
                  <SwiperSlide key={data.id}>
                    <ExplorerProductCard content={data} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="my-[40px] flex xl:flex-col xl:items-center justify-center flex-wrap gap-x-8">
                {products.map((data) => (
                  <ExplorerProductCard key={data.id} content={data} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails