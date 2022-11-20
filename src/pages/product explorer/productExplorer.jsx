import React, { useState } from "react";
import FilterComponent from "../../components/global/filterComponent/FilterComponent";
import ListView from "../../components/global/listView";
import { products } from "../../components/global/productCardData";
import SwitchButton from "../../components/global/switchButton";
import ExplorerProductCard from '../../components/product Explorer/explorerProductCard';
// import useIsMobile from "../../hooks/useIsMobile";

import styled from "styled-components";
// style
const ProductCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.18rem, 1fr));
  grid-row-gap: 30px;
  grid-column-gap: 35px;
  place-items: center;
  @media (max-width: 1024px) {
    place-items: center;
  }
`;

function ProductExplorer() {
  const [isList, setList] = useState(false);

  const listHandler = ()=>{
    if(isList){
      setList(false)
    }else{
      setList(true)
    }
  }

  // const isMobile = useIsMobile();
  return (
    <div className="custom-container">
      <div
        className={`w-[100%] lg:h-screen md:pb-[140px] pb-[10px]  bg-softDark rounded-t-xl overflow-x-hidden relative ${
          isList ? "overflow-y-hidden" : "overflow-y-auto"
        } `}
      >
        <div className=" bg-light relative  ">
          <div className=" lg:px-[20px] py-[20px]">
            {/* filter section  */}

            <section className="my-[20px]">
              <FilterComponent />
            </section>

            <div className="w-full flex justify-end mt-[-105px]  mr-[20px] lg:hidden  ">
              <SwitchButton handler={listHandler} />
            </div>

            {/* products  */}

            {isList ? (
              <div className="h-screen overflow-auto  ">
                <ListView />
              </div>
            ) : (
              <ProductCardGrid className="my-[40px]">
                {products.map((data) => (
                  <ExplorerProductCard key={data.id} content={data} />
                ))}
              </ProductCardGrid>
            )}
          </div>
        </div>
        <div className="absolute xl:top-[15px] xl:right-[10%] lg:top-[10px]  lg:right-[10px]  hidden lg:block">
          <SwitchButton handler={listHandler} />
        </div>
      </div>
    </div>
  );
}

export default ProductExplorer;
