
import RevenueChart from "./revenuChart";
function PrductCardGraph({gWidht , gHeight}) {


  return (
    <div
      className={`overflow-hidden  bg-[#F8F4FF]  ${
        gWidht ? `w-[${gWidht}]` : "289"
      } ${gHeight ? `w-[${gHeight}]` : "289"}`}
    >
      {/* <div className="px-[10px]  flex">
     
        <div>
          <p className="text-dark small-font ">Search Volume</p>
          <h3 className="medium-font text-secondary font-bold ">300000</h3>
          <p className="small-font text-green  flex gap-1 items-center my-[4px]">
            <span>
              <FiArrowUpRight />
            </span>
          
            <span className="font-[400]">+40.5%</span>
          </p>
        </div>
        <p className="text-secondary flex gap-3 items-center mt-[2px]">
          <span>
            <img src={signalIcon} alt="mana icon" width={16} height={12} />
          </span>
          <span>4 Other Tracking</span>
        </p>
      </div> */}

      {/* graph  */}
      <div className=" w-full transform translate-y-[-80px]">
        <RevenueChart
          cWidth={gWidht ? gWidht : "350"}
          height={gHeight ? gHeight : "350"}
          isAnimation={false}
        />
      </div>
    </div>
  );
}

export default PrductCardGraph;
