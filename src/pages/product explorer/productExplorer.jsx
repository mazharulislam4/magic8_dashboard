import FilterComponent from "../../components/global/filterComponent/FilterComponent";
import { products } from "../../components/global/productCardData";
import SwitchButton from "../../components/global/switchButton";
import ExplorerProductCard from '../../components/product Explorer/explorerProductCard';
import ListView from "../../components/global/listView";
// import useIsMobile from "../../hooks/useIsMobile";

import styled from "styled-components";
// style
const ProductCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.18rem, 1fr));
  grid-row-gap: 60px;
  grid-column-gap: 30px;
  place-items: center;
  @media (max-width: 1024px) {
    place-items: center;
  }
`;

function ProductExplorer() {
  // const isMobile = useIsMobile();
  return (
    <div className="custom-container">
      <div className="w-[100%] lg:h-screen md:pb-[120px] pb-[5px]  bg-softDark rounded-t-xl overflow-x-hidden  overflow-y-auto  ">
        <div className=" bg-light relative  ">
          <div className=" lg:px-[20px] py-[20px]">
            {/* filter section  */}

            <section className="my-[20px]">
              <FilterComponent />
            </section>
            {/* products  */}
          
              <ProductCardGrid className="my-[40px]">
                {products.map((data) => (
                  <ExplorerProductCard key={data.id} content={data} />
                ))}
              </ProductCardGrid>
          </div>
          <div>
            <ListView/>
          </div>
          <div className="absolute top-[15px] right-[10%] xl:block hidden">
            <SwitchButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductExplorer;
