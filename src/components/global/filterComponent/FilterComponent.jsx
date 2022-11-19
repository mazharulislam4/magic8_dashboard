import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import useIsMobile from "../../../hooks/useIsMobile";
// filter 
import CustomInput from "./customInput";
import FilterCheckBox from "./filterCheckBox";
import filterUsingData from "./filteringData";
import FilterModal from "./fliterModal";
import SelectComponent from "./SelectComponent";
// Datepicker 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FilterComponent = () => {

  // const [isOpened, setOpened] = useState(false);
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
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [searchData, setSearchData] = useState("");
  // for checkbox
  const [sortByTrendingShop, setSortByTrendingShop] = useState(true);
  const [sortByFirstProduct, setSortByFirstProduct] = useState(false);


  const isMobile = useIsMobile();



  //------------------------ all filter data here --------------------------------
  // console.log(filterData);

  return (
    <>
      {/* ----------------------------------- Filter Section ---------------------------------- */}

      <div className="w-full flex flex-col justify-center items-center px-1">
        {/*---------------------------------- Search Form------------------------------- */}
        <form className="md:w-[700px] sm:w-[629px] px-[5px] sm:px-[0] w-full flex justify-between items-center bg-softDark shadow-sm rounded-xl  ">
          <div className=" small-font sm:w-full pl-[16px] w-[80%] text-center flex  items-center gap-x-[13px]  ">
            <label htmlFor="search">
              <FiSearch />
            </label>
            <input
              type="search"
              id="search"
              value={searchData}
              placeholder="Search any store by URL, name or Keyword"
              className="focus:outline-none placeholder:whitespace-nowrap w-full bg-transparent  py-[19px] "
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
          <div className="overflow-hidden w-[100vw] my-[20px] mobile_filter">
            <div className="overflow-x-auto flex flex-nowrap gap-[10px] scrollbar-hide pl-[10px]">
              <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                  setDateRange(update);
                }}
                customInput={<CustomInput />}
              />

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

              {/* Average Product Price filter  , slide 3 */}
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
                placeholder="Average Product Price "
              />

              {/* ------------Country filter  slide 4 ------------ */}
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
            </div>
          </div>
        ) : (
          // : it's mean else of  ternary
          <div className="flex items-center gap-x-[15px] my-[18px]">
            <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => {
                setDateRange(update);
              }}
              customInput={<CustomInput />}
            />

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
