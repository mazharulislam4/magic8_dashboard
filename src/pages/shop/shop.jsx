import styled from "styled-components";
import { Autoplay, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../components/global/button";
import FilterComponent from "../../components/global/filterComponent/FilterComponent";
import { stores } from "../../components/global/productCardData";
import ShopStoreCard from "../../components/shopExplorer/shopStoreCard";
import useIsMobile from "../../hooks/useIsMobile";
// style
const ProductCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.18rem, 1fr));
  grid-row-gap: 60px;
  grid-column: 30px;
  place-items: center;
  @media (max-width: 1024px) {
    place-items: center;
  }
`;

function Shop() {
  const isMobile = useIsMobile();
  return (
    <div className="w-[100%] lg:h-screen md:pb-20 pb-[20px] bg-softDark l overflow-x-hidden  overflow-y-auto custom-container ">
      <div className=" bg-light rounded-t-x  lg:px-[20px] py-[10px]">
        <div className="my-[30px]">
          {/* filter section  */}
          <div className="flex gap-x-[20px] mb-[30px]">
            <Button
              hoverbg={"#fff"}
              texthover={"#000"}
              bg={"#8646EE"}
              color="#fff"
            >
              Saved Shops
            </Button>

            <Button>Saved Product</Button>
          </div>
          <section className="my-[10px]">
            <FilterComponent />
          </section>
          {/* products  */}
          {isMobile ? (
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
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
              className="mySwiper w-full my-[30px]"
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
      </div>
    </div>
  );
}

export default Shop;
