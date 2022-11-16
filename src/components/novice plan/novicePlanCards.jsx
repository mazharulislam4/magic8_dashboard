import { motion, useWillChange } from 'framer-motion';
import React from "react";
import { Link } from "react-router-dom";


export default function NovicePlanCards() {
   const willChange = useWillChange();
   
  return (
    <section className="manaPlan">
      <motion.div
        className="text-center mb-[38px]"
        initial={{ y: 80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        style={{ willChange }}
      >
        <h3 className="extra-large-font text-secondary font-[700] mt-[23px]">
          Plans
        </h3>
        <p className="small-font text-dark mt-[9px]">
          Purchased Mana Will Create Additional Space in your mana bar
        </p>
        <p className="small-font text-dark mb-[13px]">
          If you are a daily user, please consider upgrading your plan
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row  gap-9 justify-center xl:gap-[26px] items-center flex-wrap  ">
        {/* card 1 ----------------------------> Novice plan------------------------ */}
        <motion.div
          className="w-[338px] min-h-[604px] bg-softDark rounded-md px-[30px] relative "
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4 }}
          style={{ willChange }}
        >
          <div>
            <h3 className="medium-font text-green pt-[32px] ">Novice Plan</h3>
            <p className="small-font text-secondary mt-[15px]">
              For beginner doing basic store & product research
            </p>
            <h4 className="mt-[39px] mb-[54px] medium-font">
              <span className="big-font text-green">$50</span>{" "}
              <span className="text-dark medium-font"> /month</span>
            </h4>
            <button
              type="button"
              className="medium-font text-light bg-green py-[14px] block w-[100%] hover:bg-light hover:text-secondary transition rounded-md shadow-md mb-[22px] "
            >
              <Link to="/dashboard">Choose plan</Link>
            </button>
          </div>
          <div className="box-footer">
            <h3 className="medium-font text-secondery mb-[12px] ">
              This plan Includes:
            </h3>
            <ul className="list-none text-secondary flex flex-col gap-[9px] ">
              <li>Reveal Unlimited stores</li>
              <li>500 Mana Per Day</li>
              <li>Track Up Unlimited Stores</li>
            </ul>
          </div>
        </motion.div>

        {/* card 1 ----------------------------> foreture plan------------------------ */}
        <motion.div
          className="w-[338px] min-h-[604px] scale-105  bg-primary rounded-md px-[30px] relative "
          initial={{ scale: 1 }}
          animate={{ scale: 1.05}}
          transition={{ duration: 0.4 }}
          style={{ willChange }}
        >
          <div>
            <div className="absolute top-[-16px] left-[50%] translate-x-[-50%] text-center py-[8px] px-[1.63rem] rounded-sm inisital-font whitespace-nowrap  bg-[#FFC93E] ">
              <h5>Most Popular</h5>
            </div>
            <h3 className="medium-font text-light mt-[39px]  ">
              Fortune Teller Plan
            </h3>
            <p className="small-font text-light mt-[14px]">
              For beginner doing basic store & product research
            </p>
            <h4 className="mt-[39px] mb-[50px] text-light medium-font">
              <span className="big-font text-light">$50</span> /month
            </h4>
            <button
              type="button"
              className="medium-font text-primary bg-light py-[14px] block w-[100%] hover:bg-bubble-gum hover:text-light transition rounded-md shadow-md mb-[22px] "
            >
              <Link to="/dashboard">Choose plan</Link>
            </button>
          </div>
          <div className="box-footer">
            <h3 className="medium-font text-light mb-[12px] ">
              This plan Includes:
            </h3>
            <ul className="list-none text-light flex flex-col gap-[9px] ">
              <li>Reveal Unlimited stores</li>
              <li>500 Mana Per Day</li>
              <li>Track Up Unlimited Stores</li>
              <li>Store Clocking</li>
              <li>Advanced Search Filter</li>
              <li>See Store Owner Date</li>
            </ul>
          </div>
        </motion.div>
        {/* card 1 ----------------------------> Oracle plan------------------------ */}
        <motion.div
          className="w-[338px] min-h-[604px] bg-softDark rounded-md px-[28px] relative "
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4 }}
          style={{ willChange }}
        >
          <div>
            <h3 className="medium-font text-cyan pt-[32px]">Oracle Plan</h3>
            <p className="small-font text-secondary mt-[15px]">
              For beginner doing basic store & product research
            </p>
            <h4 className="mt-[39px] mb-[54px] text-light medium-font">
              <span className="big-font text-cyan">$50</span>{" "}
              <span className="medium-font text-dark">/month</span>
            </h4>
            <button
              type="button"
              className="medium-font text-light bg-cyan py-[14px] block w-[100%] hover:bg-light hover:text-secondary transition rounded-md shadow-md mb-[22px]  "
            >
              <Link to="/dashboard">Choose plan</Link>
            </button>
          </div>
          <div className="box-footer">
            <h3 className="medium-font text-sacondary mb-[12px] ">
              This plan Includes:
            </h3>
            <ul className="list-none text-sacondary flex flex-col gap-[9px]  ">
              <li>Reveal Unlimited stores</li>
              <li>500 Mana Per Day</li>
              <li>Track Up Unlimited Stores</li>
              <li>Store Clocking</li>
              <li>Advanced Search Filter</li>
              <li>See Store Owner Date</li>
              <li>Export Data as CSV</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
