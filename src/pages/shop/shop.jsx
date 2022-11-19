import styled from "styled-components";
import Button from "../../components/global/button";
import FilterComponent from "../../components/global/filterComponent/FilterComponent";
import { stores } from "../../components/global/productCardData";
import SwitchButton from "../../components/global/switchButton";
import ShopStoreCard from "../../components/shopExplorer/shopStoreCard";
// import useIsMobile from "../../hooks/useIsMobile";
// style
const ProductCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.18rem, 1fr));

  grid-column-gap: 30px;
  grid-row-gap: 50px;
  place-items: center stretch;
  @media (max-width: 1024px) {
    place-items: center;
  }
`;

function Shop() {
  // const isMobile = useIsMobile();
  return (
    <div className="w-[100%] lg:h-screen md:pb-[120px] pb-[100px] bg-softDark l overflow-x-hidden  overflow-y-auto custom-container relative">
      <div className=" bg-light rounded-t-x  lg:px-[20px] py-[10px]">
        <div className="my-[30px]">
          {/* filter section  */}
          <div className="flex gap-x-[20px] mb-[30px]">
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
        
            <ProductCardGrid className="my-[40px]">
              {stores.map((data) => (
                <ShopStoreCard key={data.id} content={data} />
              ))}
            </ProductCardGrid>
      
        </div>
        {/* switch button  */}
        <div className="absolute top-[105px] right-[7%] xl:block hidden">
          <SwitchButton />
        </div>
      </div>
    </div>
  );
}

export default Shop;
