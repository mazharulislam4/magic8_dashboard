import flatpickr from "flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import downArrow from "../../../assets/icon/fi-rr-angle-small-down.svg";
import useWindowSize from "../../../hooks/useWindowSize";
import FilterCheckBox from "./filterCheckBox";
import filterUsingData from "./filteringData";
import FilterModal from "./fliterModal";
import SelectComponent from "./SelectComponent";
// css styling

const DatePicker = styled.div`
  .datepicker_isOpened {
  }
`;

const FilterComponent = () => {
  const fp = useRef(null);
  const [isOpened, setOpened] = useState(false);
  const [filterData, setFilterData] = useState({
    revenue: "",
    average: "",
    date: "",
    country: "",
  });
  const [isOpenedSelect, setOpenedSelect] = useState({
    revenue: false,
    average: false,
    country: false,
  });

  const [searchData , setSearchData] = useState('')
  const [isMobile , setMobile] = useState(false)
  // for checkbox 
  const [sortByTrendingShop, setSortByTrendingShop] = useState(true);
  const [sortByFirstProduct, setSortByFirstProduct] = useState(false);


  const windowSize = useWindowSize();

  useEffect(() => {
    flatpickr(fp.current, {
      mode: "range",
      minDate: "today",
      onOpen: (dateObj, dateStr, ins) => {
        if (ins.isOpen) {
          setOpened(true);
        }
      },

      onChange: (dateObj, dateStr, ins) => {
        setFilterData({ ...filterData, data: dateStr });
      },

      dateFormat: "Y-m-d",
    });

    if (Math.round(windowSize.width) < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    return () => {};
  }, [filterData, isOpened, windowSize, isOpenedSelect]);


  // console.log(filterData);

  return (
    <>
      {/* ----------------------------------- Filter Section ---------------------------------- */}

      <div className="w-full flex flex-col justify-center items-center">
        {/*---------------------------------- Search Form------------------------------- */}

        <form className="md:w-[700px] sm:w-[629px] px-[15px] sm:px-[0] w-full flex justify-between items-center bg-softDark shadow-sm rounded-lg">
          <div className=" small-font sm:w-full pl-[16px] w-[80%] text-center flex  items-center gap-x-[13px] py-[19px] ">
            <label htmlFor="search">
              <FiSearch />
            </label>
            <input
              type="search"
              id="search"
              value={searchData}
              placeholder="Search any store by URL, name or Keyword"
              className="focus:outline-none placeholder:whitespace-nowrap w-full bg-transparent "
              onChange={(e) => {
                setSearchData(e.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            className=" bg-primary sm:py-[16px] sm:px-[32px] py-[12px] px-[13px]  sm:w-[116px]  flex justify-center w-auto rounded-lg text-light"
          >
            Submit
          </button>
        </form>

        {isMobile ? (
          <>
            <Swiper
              className="my-[18px] w-[100%] pr-[30px] mySwiper"
              slidesPerView={"auto"}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                440: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
            >
              {/* revenue filter  */}
              <SwiperSlide>
                <DatePicker
                  className={`px-[5px] flex  gap-2 items-center py-[4px] border-[#EAEAEA]  border-2 rounded-md w-[146px] relative`}
                >
                  <input
                    type="text"
                    placeholder="Date"
                    className={`py-[8px] px-[5px] placeholder:text-center bg-transparent text-secondary placeholder:text-secondary initial-font focus:outline-none cursor-pointer  w-[100%]`}
                    ref={fp}
                    id="datepicker"
                    readOnly
                  />
                  <label
                    htmlFor="datepicker"
                    className={`transform translate-x-[-10px] ${
                      isOpened ? "datepicker_isOpened" : ""
                    }`}
                  >
                    <img src={downArrow} alt="" />
                  </label>
                </DatePicker>
              </SwiperSlide>
              {/* -----------------slide 2 revenue field ------------------- */}
              <SwiperSlide>
                <SelectComponent
                  selectHandler={(e) => {
                    setOpenedSelect({
                      ...isOpenedSelect,
                      country: false,
                      revenue: true,
                      average: false,
                    });
                  }}
                  name={"revenue"}
                  id={"revenue"}
                  filterData={filterData}
                  placeholder="Revenue"
                />
              </SwiperSlide>
              {/* Average Product Price filter  , slide 3 */}
              <SwiperSlide className="slider_item ">
                <SelectComponent
                  selectHandler={(e) => {
                    setOpenedSelect({
                      ...isOpenedSelect,
                      country: false,
                      revenue: false,
                      average: true,
                    });
                  }}
                  filterData={filterData}
                  name={"average"}
                  id="average"
                  placeholder="Average Product Price filter "
                />
              </SwiperSlide>
              {/* ------------Country filter  slide 4 ------------ */}
              <SwiperSlide >
                <SelectComponent
                  selectHandler={(e) => {
                    setOpenedSelect({
                      ...isOpenedSelect,
                      country: true,
                      revenue: false,
                      average: false,
                    });
                  }}
                  name={"country"}
                  placeholder="Country"
                  id="country"
                  filterData={filterData}
                />
              </SwiperSlide>
              {/* open filter DropDown or Modal in mobile  */}
              <FilterModal
                data={filterUsingData}
                name={"revenue"}
                closeHandler={(value) => {
                  setFilterData({
                    ...filterData,
                    revenue: value,
                  });
                  setOpenedSelect({ ...isOpenedSelect, revenue: false });
                }}
                openModal={isOpenedSelect}
              />

              <FilterModal
                data={filterUsingData}
                name={"average"}
                closeHandler={(value) => {
                  setFilterData({
                    ...filterData,
                    average: value,
                  });
                  setOpenedSelect({ ...isOpenedSelect, average: false });
                }}
                openModal={isOpenedSelect}
              />
              <FilterModal
                data={filterUsingData}
                name={"country"}
                closeHandler={(value) => {
                  setFilterData({
                    ...filterData,
                    country: value,
                  });
                  setOpenedSelect({ ...isOpenedSelect, country: false });
                }}
                openModal={isOpenedSelect}
              />
            </Swiper>

            <FilterModal
              data={filterUsingData}
              name={"revenue"}
              closeHandler={(value) => {
                setFilterData({
                  ...filterData,
                  revenue: value,
                });
                setOpenedSelect({ ...isOpenedSelect, revenue: false });
              }}
              openModal={isOpenedSelect}
            />

            <FilterModal
              data={filterUsingData}
              name={"average"}
              closeHandler={(value) => {
                setFilterData({
                  ...filterData,
                  average: value,
                });
                setOpenedSelect({ ...isOpenedSelect, average: false });
              }}
              openModal={isOpenedSelect}
            />
            <FilterModal
              data={filterUsingData}
              name={"country"}
              closeHandler={(value) => {
                setFilterData({
                  ...filterData,
                  country: value,
                });
                setOpenedSelect({ ...isOpenedSelect, country: false });
              }}
              openModal={isOpenedSelect}
            />
          </>
        ) : (
          // : it's mean else of  ternary
          <div className="flex items-center gap-x-[15px] my-[18px]">
            <DatePicker
              className={`px-[5px] flex  gap-2 items-center py-[4px] border-[#EAEAEA]  border-2 rounded-md w-[146px] relative`}
            >
              <input
                type="text"
                placeholder="Date"
                className={`py-[8px] px-[5px] placeholder:text-center bg-transparent text-secondary placeholder:text-secondary initial-font focus:outline-none cursor-pointer  w-[100%]`}
                ref={fp}
                id="datepicker"
                readOnly
              />
              <label
                htmlFor="datepicker"
                className={`transform translate-x-[-10px]`}
              >
                <img src={downArrow} alt="" />
              </label>
            </DatePicker>

            <div className="relative">
              <SelectComponent
                selectHandler={(e) => {
                  setOpenedSelect({
                    ...isOpenedSelect,
                    country: false,
                    revenue: true,
                    average: false,
                  });
                }}
                name={"revenue"}
                id={"revenue"}
                filterData={filterData}
                placeholder="revenue"
              />

              <FilterModal
                data={filterUsingData}
                name={"revenue"}
                closeHandler={(value) => {
                  setFilterData({
                    ...filterData,
                    revenue: value,
                  });
                  setOpenedSelect({ ...isOpenedSelect, revenue: false });
                }}
                openModal={isOpenedSelect}
              />
            </div>
            {/* Average Product Price filter  */}

            <div className="relative">
              <SelectComponent
                selectHandler={(e) => {
                  setOpenedSelect({
                    ...isOpenedSelect,
                    country: false,
                    revenue: false,
                    average: true,
                  });
                }}
                name={"average"}
                id={"average"}
                filterData={filterData}
                placeholder="Average Product Price"
              />

              <FilterModal
                data={filterUsingData}
                name={"average"}
                closeHandler={(value) => {
                  setFilterData({
                    ...filterData,
                    average: value,
                  });
                  setOpenedSelect({ ...isOpenedSelect, average: false });
                }}
                openModal={isOpenedSelect}
              />
            </div>

            {/* Country filter  */}

            <div className="relative">
              <SelectComponent
                selectHandler={(e) => {
                  setOpenedSelect({
                    ...isOpenedSelect,
                    country: true,
                    revenue: false,
                    average: false,
                  });
                }}
                name={"country"}
                id={"country"}
                filterData={filterData}
                placeholder="Country"
              />

              <FilterModal
                data={filterUsingData}
                name={"country"}
                closeHandler={(value) => {
                  setFilterData({
                    ...filterData,
                    country: value,
                  });
                  setOpenedSelect({ ...isOpenedSelect, country: false });
                }}
                openModal={isOpenedSelect}
              />
            </div>
          </div>
        )}

        {/* -----------------------------------select section end --------------------------------------- */}
        <div className="w-full sm:flex justify-center justify-self-start">
          <FilterCheckBox
            placeholderText={"Show Trending Shops Only"}
            setStatus={setSortByTrendingShop}
            status={sortByTrendingShop}
          />
          <FilterCheckBox
            placeholderText={"First Product In Last 30days"}
            setStatus={setSortByFirstProduct}
            status={sortByFirstProduct}
          />
        </div>
      </div>
    </>
  );
};

export default FilterComponent;
