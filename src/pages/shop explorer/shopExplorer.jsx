import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import FilterComponent from "../../components/global/filterComponent//FilterComponent";
import { stores } from '../../components/global/productCardData';
import ShopStoreCard from '../../components/shopExplorer/shopStoreCard';
import useIsMobile from "../../hooks/useIsMobile";

import styled from "styled-components";
// style 
const ProductCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.18rem, 1fr));
  grid-row-gap: 60px;
  grid-column:30px;
  place-items: center;
  @media (max-width: 1024px) {
    place-items: center;
  }
`;



function ShopExplorer() {
    const isMobile = useIsMobile();
    return (
      <div className="w-[100%] lg:h-screen md:pb-20 bg-softDark rounded-t-xl overflow-x-hidden  overflow-y-auto custom-container ">
        <div className="overflow-y-auto  overflow-x-hidden bg-light">
          <div className=" lg:px-[20px]">
            {/* filter section  */}

            <section className="my-[30px]">
              <FilterComponent />
            </section>
            {/* products  */}
            {isMobile ? (
              <Swiper
                slidesPerView={2}
                spaceBetween={5}
                freeMode={true}
                modules={[FreeMode]}
                breakpoints={{
                  0: {
                    slidesPerView:1,
                    spaceBetween: 10,
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
                className="mySwiper w-[100%] my-[30px]"
              >
                {stores.map((data) => (
                  <SwiperSlide key={data.id} className = "shop_slider" >
                    <ShopStoreCard content={data} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <ProductCardGrid className="my-[40px]">
                {stores.map((data) => (
                  <ShopStoreCard key={data.id} content={data} />
                ))}
              </ProductCardGrid>
            )}
          </div>
        </div>
      </div>
    );
}

export default ShopExplorer;