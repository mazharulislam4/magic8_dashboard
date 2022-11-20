import React, { useState } from "react";
import styled from "styled-components";
import FilterComponent from "../../components/global/filterComponent//FilterComponent";
// product card data
import ListView from "../../components/global/listView";
import { stores } from "../../components/global/productCardData";
import SwitchButton from "../../components/global/switchButton";
import ShopStoreCard from "../../components/shopExplorer/shopStoreCard";
// style
const ProductCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.18rem, 1fr));
  grid-row-gap: 30px;
  grid-column-gap: 38px;
  place-items: center;
  @media (max-width: 1024px) {
    place-items: center;
  }
`;

function ShopExplorer() {
  const [isList, setList] = useState(false);

  const listHandler = () => {
    if (isList) {
      setList(false);
    } else {
      setList(true);
    }
  };


  return (
    <div
      className={`w-[100%] lg:h-screen md:pb-20 bg-softDark rounded-t-xl overflow-x-hidden  overflow-y-auto custom-container ${
        isList ? "overflow-y-hidden" : "overflow-y-auto"
      } `}
    >
      <div
        className={`overflow-y-auto relative overflow-x-hidden  rounded-t-xl pb-[96px]  bg-light `}
      >
        <div className=" lg:px-[20px]">
          {/* filter section  */}

          <section className="my-[10px]">
            <FilterComponent />
          </section>

          <div className="w-full flex justify-end mr-[20px] mt-[-98px] lg:hidden  ">
            <SwitchButton handler={listHandler} />
          </div>

          {!isList ? (
            <ProductCardGrid className="lg:my-[40px] my-[10px]">
              {stores.map((data) => (
                <ShopStoreCard key={data.id} content={data} />
              ))}
            </ProductCardGrid>
          ) : (
            <div className="h-screen overflow-auto  ">
              <ListView />
            </div>
          )}
        </div>
        <div className="absolute xl:top-[15px] xl:right-[10%] lg:top-[10px]  lg:right-[10px]  hidden lg:block">
          <SwitchButton handler={listHandler} />
        </div>
      </div>
    </div>
  );
}

export default ShopExplorer;
