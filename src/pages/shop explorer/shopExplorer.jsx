import styled from "styled-components";
import { Autoplay, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import FilterComponent from "../../components/global/filterComponent//FilterComponent";
// product card data 
import { stores } from '../../components/global/productCardData';
import SwitchButton from "../../components/global/switchButton";
import ShopStoreCard from '../../components/shopExplorer/shopStoreCard';
import useIsMobile from "../../hooks/useIsMobile";
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
        <div className="overflow-y-auto relative overflow-x-hidden  rounded-t-xl  bg-light">
          <div className=" lg:px-[20px]">
            {/* filter section  */}

            <section className="my-[30px]">
              <FilterComponent />
            </section>
            {/* products  */}
            {isMobile ? (
              <Swiper
                slidesPerView={'auto'}
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
                {stores.map((data) => (
                  <SwiperSlide key={data.id}>
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
          <div className="absolute top-[1%] right-[5%] xl:block hidden">
            <SwitchButton />
          </div>
        </div>
      </div>
    );
}

export default ShopExplorer;