import React from 'react';
import graph from '../../assets/image/Path 5.svg';
import sellerimg from '../../assets/image/seller.svg';
function TopSellingProduct() {
  return (
    <div className="2xl:w-[452px] w-full min-h-[400px]  ovarflow-hidden bg-softDark rounded-lg lg:pl-[20px] shadow-sm ">
      <h2 className="py-[22px]  font-[20px] text-secondary ">
        Top selling Products
      </h2>
      <div className="w-full overflow-x-auto">
        <table className="w-full overflow-x-auto ">
          <thead>
            <tr className="extra-small-font text-dark ">
              <th></th>
              <th className="pb-[20px] text-left">Name</th>
              <th className="text-left  pb-[20px]">Revenue</th>
              <th className="text-left pb-[20px]">Graph</th>
            </tr>
          </thead>

          <tbody className="my-[20px]">
            <tr>
              <td className="pb-[25px] align-middle ">
                <figure>
                  <img src={sellerimg} alt="" width={50} height={52} />
                </figure>
              </td>
              <td className="pb-[25px] align-middle ">
                <div>
                  <h3 className="text-left initial-font text-secondary">
                    Small/matcha
                  </h3>
                </div>
              </td>
              <td className="pb-[25px] align-middle ">
                <div className=" initial-font text-secondary">
                  <p>$32,789</p>
                </div>
              </td>
              <td className="pb-[25px] align-middle ">
                <figure className="">
                  <img src={graph} alt="" />
                </figure>
              </td>
            </tr>

            <tr>
              <td className="pb-[25px] align-middle ">
                <figure>
                  <img src={sellerimg} alt="" width={50} height={52} />
                </figure>
              </td>
              <td className="pb-[25px] align-middle ">
                <div>
                  <h3 className="text-left initial-font text-secondary">
                    Small/matcha
                  </h3>
                </div>
              </td>
              <td className="pb-[25px] align-middle ">
                <div className=" initial-font text-secondary">
                  <p>$32,789</p>
                </div>
              </td>
              <td className="pb-[25px] align-middle ">
                <figure className="">
                  <img src={graph} alt="" />
                </figure>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopSellingProduct;