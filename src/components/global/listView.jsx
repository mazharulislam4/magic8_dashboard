import React from 'react';
import graph from "../../assets/image/Path 5.svg";
import sellerimg from "../../assets/image/seller.svg";
function ListView() {
  return (
    <div>
        <div className="w-auto bg-softDark rounded-lg pl-[20px]  overflow-hidden">
          <h2 className="py-[22px] font-[20px] text-secondary ">
            Best selling Products
          </h2>
          <div className=" min-h-[300px] lg:overflow-hidden overflow-x-auto shadow-sm  best_selling_variant">
            <table className="min-w-[550px] ">
              <thead>
                <tr className="extra-small-font text-dark ">
                  <th></th>
                  <th className="pb-[20px] extra-small-font text-left">
                    Variant
                  </th>
                  <th className="pb-[20px] extra-small-font text-left">
                    Price
                  </th>
                  <th className="text-left extra-small-font  pb-[20px]">
                    Revenue
                  </th>
                  <th className="text-left extra-small-font pb-[20px]">
                    Graph
                  </th>
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
                    <div>
                      <h3 className="text-left initial-font text-secondary">
                        $43
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
                    <div>
                      <h3 className="text-left initial-font text-secondary">
                        $43
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
    </div>
  );
}

export default ListView