import React, { useState } from 'react';

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

              <div className="w-[180px] inline-block">
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
                  styles={{ width: "180px", padding:'5px 15px' }}
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
        <div className="xl:w-[600px] lg:w-[550px] xl:h-screen  overflow-y-auto overflow-x-hidden xl:pb-[150px]  py-[10px]  px-2 md:my-[0] my-[20px] ">
          <div>
            <h2 className='extra-small-font text-secondary my-[10px]'>Others Product people are tracking</h2>
          </div>
          <div className=" ">
            {isMobile ? (
              <div className="overflow-hidden relative w-[100vw]  py-[10px] ">
                <div className="overflow-x-auto scrollbar-hide flex pr-[50px] gap-8 w-[100vw]  ">
                  {products &&
                    products.map((data) => (
                      <ExplorerProductCard
                        key={data.id}
                        content={{
                          ...data,
                        }}
                      />
                    ))}
                </div>
              </div>
            ) : (
              <div className=" flex xl:flex-col xl:items-center justify-center flex-wrap gap-x-8">
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