import { Autoplay, FreeMode } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import FilterComponent from "../../components/global/filterComponent/FilterComponent";
import { products } from "../../components/global/productCardData";
import SwitchButton from "../../components/global/switchButton";
import ExplorerProductCard from '../../components/product Explorer/explorerProductCard';
import useIsMobile from "../../hooks/useIsMobile";

import styled from "styled-components";
// style
const ProductCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.18rem, 1fr));
  grid-row-gap: 60px;
  grid-column-gap: 30px;
  place-items: center;
  @media (max-width: 1024px) {
    place-items: center;
  }
`;

function ProductExplorer() {
  const isMobile = useIsMobile();
  return (
    <div className="w-[100%] lg:h-screen md:pb-20 bg-softDark rounded-t-xl overflow-x-hidden  overflow-y-auto custom-container ">
      <div className=" bg-light relative pb-[70px]">
        <div className=" lg:px-[20px] py-[20px]">
          {/* filter section  */}

          <section className="my-[20px]">
            <FilterComponent />
          </section>
          {/* products  */}
          {isMobile ? (
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
              {products.map((data) => (
                <SwiperSlide key={data.id}>
                  <ExplorerProductCard content={data} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <ProductCardGrid className="my-[40px]">
              {products.map((data) => (
                <ExplorerProductCard key={data.id} content={data} />
              ))}
            </ProductCardGrid>
          )}
        </div>
        <div className="absolute top-[15px] right-[10%] xl:block hidden">
          <SwitchButton />
        </div>
      </div>
    </div>
  );
}

export default ProductExplorer;
