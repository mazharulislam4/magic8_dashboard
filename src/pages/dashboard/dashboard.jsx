import { motion, useWillChange } from "framer-motion";
import React from "react";
import { AiFillFire } from 'react-icons/ai';
import styled from "styled-components";

import ProductCard from "../../components/dashboard/productCard";
import StoreCard from "../../components/dashboard/storeCard";
import FilterComponent from "../../components/global/filterComponent/FilterComponent";
import OrderedCustomers from "../../components/global/orderedCustomers";
import useIsMobile from "../../hooks/useIsMobile";
//------------------ product data------------------
import customersData from "./customersData";
import { productData, storeData } from "./productData";
// styled component

const ProductCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.18rem, 1fr));
  grid-gap: 15px;

  place-items: center stretch;
  @media (max-width: 1024px) {
    place-items: center;
  }
`;

function Dashboard() {
  const isMobile = useIsMobile();
  const opacityAni = useWillChange();
  return (
    <div className="custom-container ">
      {/* <FreeManaModal status={earnManaModal} /> */}

      <div className="xl:h-screen xl:flex  xl:overflow-hidden   pb-[90px] bg-light rounded-t-xl">
        <motion.div
          className="md:px-[20px] xl:h-screen overflow-y-auto overflow-x-hidden py-[20px] md:pb-[130px]  bg-light xl:grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ opacityAni }}
        >
          <div className="my-[20px] ">
            <FilterComponent />
          </div>

          {/*-------------------------------- Trending store --------------------------------*/}
          <div className="my-[50px] ">
            <h2 className="text-secondary large-font flex gap-1  w-[100%]  ">
              Trending Stores
              <span className="text-[#FF4545]">
                <AiFillFire />
              </span>
            </h2>
            {isMobile ? (
              <div className="overflow-hidden relative w-[100vw]  py-[10px] ">
                <div className="overflow-x-auto scrollbar-hide flex pr-[50px] gap-8 w-[100vw]  ">
                  {storeData &&
                    storeData.map((data) => (
                      <StoreCard
                        key={data.id}
                        content={{
                          ...data,
                        }}
                      />
                    ))}
                </div>
              </div>
            ) : (
              <ProductCardGrid>
                {storeData &&
                  storeData.map((data) => (
                    <StoreCard
                      key={data.id}
                      content={{
                        ...data,
                      }}
                    />
                  ))}
              </ProductCardGrid>
            )}
          </div>

          {/* -----------------------------Trending product------------------------------ */}
          <div className="my-[50px] ">
            <h2 className="text-secondary large-font my-[20px] flex gap-1  w-[100%]  ">
              Trending Products
              <span className="text-[#FF4545]">
                <AiFillFire />
              </span>
            </h2>
            {isMobile ? (
              <div className="overflow-hidden relative w-[100vw]  py-[10px] ">
                <div className="overflow-x-auto scrollbar-hide flex pr-[50px] gap-8 w-[100vw]  ">
                  {productData &&
                    productData.map((data) => (
                      <ProductCard
                        key={data.id}
                        content={{
                          ...data,
                        }}
                      />
                    ))}
                </div>
              </div>
            ) : (
              <ProductCardGrid>
                {productData &&
                  productData.map((data) => (
                    <ProductCard
                      key={data.id}
                      content={{
                        ...data,
                      }}
                    />
                  ))}
              </ProductCardGrid>
            )}
          </div>
        </motion.div>
        {/*--------------------- --------------right sidebar layout -------------------------------- */}
        <div className="xl:w-[455px] xl:h-screen overflow-y-auto overflow-x-hidden  border-l-2 border-[#E4E4E4]  bg-light  md:pb-[160px]">
          {/* container  */}
          <div className=" px-[12px]  ">
            <h2 className="large-font text-secondary pt-4 text-left ">
              Global Order Feed
            </h2>
            {customersData
              ? customersData.map((data) => {
                  return (
                    <OrderedCustomers
                      key={data.id}
                      content={{
                        title: data.title,
                        fullName: data.user_name,
                        price: data.price,
                        xs: data?.xs,
                        avatar: data.avatar,
                      }}
                    />
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
