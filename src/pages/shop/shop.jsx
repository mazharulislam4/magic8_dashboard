import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/global/button";
import FilterComponent from "../../components/global/filterComponent/FilterComponent";
import ListView from "../../components/global/listView";
import { stores } from "../../components/global/productCardData";
import SwitchButton from "../../components/global/switchButton";
import ShopStoreCard from "../../components/shopExplorer/shopStoreCard";

// style
const ProductCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.18rem, 1fr));

  grid-column-gap: 35px;
  grid-row-gap: 30px;
  place-items: center stretch;
  @media (max-width: 1024px) {
    place-items: center;
  }
`;

function Shop() {
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
      className={`w-[100%] lg:h-screen md:pb-[120px] pb-[100px] bg-softDark  custom-container relative ${
        isList ? "overflow-y-hidden" : "overflow-y-auto"
      } `}
    >
      <div className=" bg-light rounded-t-x  lg:px-[20px] py-[10px]">
        <div className="my-[30px]">
          {/* filter section  */}
          <div className="flex sm:gap-x-[20px] gap-x-[10px] mb-[30px]">
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

          {!isList ? (
            <ProductCardGrid className="my-[20px]">
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
        {/* switch button  */}
        <div className="absolute top-[15px] sm:right-[10%]  right-[-10px]">
          <SwitchButton handler={listHandler} />
        </div>
      </div>
    </div>
  );
}

export default Shop;
