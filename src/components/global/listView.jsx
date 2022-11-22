import React, { useRef } from "react";
import { Navigation } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import leftArrow from "../../assets/icon/leftArrow.svg";
import rightArrow from "../../assets/icon/rightArrow.svg";
import graph from "../../assets/image/Path 5.svg";
import sellerImg from "../../assets/image/seller.svg";

const column = [
  { name: " Product Name", id: 1 },
  { name: " Revenuee", id: 2 },
  { name: "First Created", id: 3 },
  { name: "# of people tracking", id: 4 },
  { name: "Revenue Trend graph", id: 5 },
  { name: "Product images", id: 6 },
];

const rowStyle = `text-[15px] py-[10px] font-[400] px-[30px]  `;

const rowRanderCounter = [1,2,3,4,5,6,7,8,9,10,11,12]

function ListView() {
  const prevButton = useRef(null);
  const nextButton = useRef(null);



  return (
    <div className="w-[80.08rem] h-[100%] xl:min-h-[200px] rounded-lg shadow-xl  bg-light overflow-y-auto ">
      <table className="w-[100%] h-[100%] overflow-y-auto ">
        <thead className="sticky top-[0px] bg-light h-[60px] shadow-sm z-10 ">
          <tr className="extra-small-font text-dark align-bottom ">
            {column.map((data) => (
              <th
                key={data.id}
                className="text-[15px] font-[400] text-left pb-[12px]   px-[30px]"
              >
                {data.name}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="my-[20px] overflow-y-auto ">
          {rowRanderCounter.map((row) => (
            <tr key={row}>
              {/* product name  */}
              <td className={rowStyle}>30 Day Lash Kit</td>
              {/* revenue  */}
              <td className={rowStyle}>$456,90</td>
              {/* first created  */}
              <td className={rowStyle}>Oct 22, 2022</td>
              {/* tracking people  */}
              <td className={rowStyle}>12</td>
              {/* graph  */}
              <td className={rowStyle}>
                <figure>
                  <img src={graph} alt="" />
                </figure>
              </td>
              <td className={rowStyle} key={row}>
                <div className="flex gap-1  items-center w-[15.5rem] pointer-events-auto ">
                  <button type="button" ref={prevButton}>
                    <img src={leftArrow} alt="" width={8} height={7} />
                  </button>
                  {/* slides  */}
                  <div className="  flex gap-x-2 overflow-hidden px-[12px]">
                    <Swiper
                      slidesPerView={3}
                      spaceBetween={5}
                      navigation={{
                        prevEl: prevButton.current,
                        nextEl: nextButton.current,
                      }}
                      onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevButton.current;
                        swiper.params.navigation.nextEl = nextButton.current;
                      }}
                      modules={[Navigation]}
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
                  <button type="button" ref={nextButton}>
                    <img src={rightArrow} alt="" width={8} height={7} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListView;
