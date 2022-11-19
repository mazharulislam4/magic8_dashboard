import React, { useRef } from "react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import leftArrow from "../../assets/icon/leftArrow.svg";
import rightArrow from "../../assets/icon/rightArrow.svg";
import graph from "../../assets/image/Path 5.svg";
import sellerimg from "../../assets/image/seller.svg";

const column = [
  { name: " Product Name", id: 1 },
  { name: " Revenuee", id: 2 },
  { name: "First Created", id: 3 },
  { name: "# of people tracking", id: 4 },
  { name: "Revenue Trend graph", id: 5 },
  { name: "Product images", id: 6 },
];

const rowRanderCounter = [1,2,3,4,5,6,7,8,9,10,11,12]

function ListView() {
  const prevBtn = useRef();
  const nextBtn = useRef();

  return (
    <div className="w-[100%] py-[20px] h-[200px] xl:min-h-[200px] bg-light overerflow-hidden  ">
      <div className=" overflow-auto ">
        <div className="w-[1281px] mx-auto rounded-md overflow-hidden shadow-md  py-[20px] px-[30px]  bg-light ">
          <table className="w-[100%]">
            <thead>
              <tr className="extra-small-font text-dark  ">
                {column.map((data) => (
                  <th
                    key={data.id}
                    className="text-[15px] font-[400] text-left pb-[12px] "
                  >
                    {data.name}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="my-[20px] ">
              {rowRanderCounter.map((row) => (
                <tr key={row}>
                  {/* product name  */}
                  <td className="text-[15px] py-[10px] font-[400]">
                    30 Day Lash Kit
                  </td>
                  {/* revenue  */}
                  <td className="text-[15px]  py-[10px] font-[400]">$456,90</td>
                  {/* first created  */}
                  <td className="text-[15px]  py-[10px] font-[400]">
                    Oct 22, 2022
                  </td>
                  {/* tracking people  */}
                  <td className="text-[15px]  py-[10px] font-[400]">12</td>
                  {/* graph  */}
                  <td className="text-[15px]  py-[10px] font-[400]">
                    <figure>
                      <img src={graph} alt="" />
                    </figure>
                  </td>
                  <td className="text-[15px]  py-[10px] font-[400]">
                    <div className="flex gap-1 items-center w-[15.5rem] ">
                      <button ref={prevBtn} className="mb-[12px]">
                        <img src={leftArrow} alt="" width={8} height={7} />
                      </button>
                      {/* slides  */}
                      <div className="  flex gap-x-3 w-[180px] overflow-hidden  items-center ">
                        <Swiper
                          slidesPerView={3}
                          spaceBetween={0}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                          navigation={{
                            prevEl: prevBtn.current,
                            nextEl: nextBtn.current,
                          }}
                          onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevBtn.current;
                            swiper.params.navigation.nextEl = nextBtn.current;
                          }}
                          modules={[Navigation, Autoplay]}
                          breakpoints={{
                            0: {
                              slidesPerView: 3,
                              spaceBetween: 0,
                            },
                            440: {
                              slidesPerView: 3,
                              spaceBetween: 0,
                            },
                            768: {
                              slidesPerView: 3,
                              spaceBetween: 0,
                            },
                          }}
                          className="produc_card_slider"
                        >
                          <SwiperSlide>
                            <figure>
                              <img
                                src={sellerimg}
                                alt=""
                                width={40}
                                height={30}
                              />
                              <figcaption className="text-[12px] justify-center flex text-secondary">
                                Product 1
                              </figcaption>
                            </figure>
                          </SwiperSlide>
                          <SwiperSlide>
                            <figure>
                              <img
                                src={sellerimg}
                                alt=""
                                width={40}
                                height={30}
                              />
                              <figcaption className="text-[12px] justify-center  flex text-secondary">
                                Product 1
                              </figcaption>
                            </figure>
                          </SwiperSlide>
                          <SwiperSlide>
                            <figure>
                              <img
                                src={sellerimg}
                                alt=""
                                width={40}
                                height={30}
                              />
                              <figcaption className="text-[12px] justify-center flex text-secondary">
                                Product 1
                              </figcaption>
                            </figure>
                          </SwiperSlide>
                          <SwiperSlide>
                            <figure>
                              <img
                                src={sellerimg}
                                alt=""
                                width={40}
                                height={30}
                              />
                              <figcaption className="text-[12px] justify-center flex text-secondary">
                                Product 1
                              </figcaption>
                            </figure>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                      <button ref={nextBtn} className="mb-[12px]">
                        <img src={rightArrow} alt="" width={8} height={7} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListView;
