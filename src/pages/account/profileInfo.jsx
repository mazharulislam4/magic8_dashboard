import React from 'react';
import { Link } from 'react-router-dom';


function ProfileInfo({content}) {
  return (
    <div className="py-[30px] px-[20px] md:w-[629px] w-full  rounded-[8px] bg-[#F8F4FF] ">
      <div className="flex sm:justify-between flex-wrap gap-7 sm:gap-2  ">
        <div className="medium-font text-secondary">
          <h4>Your current plan</h4>
        </div>
        <div className="sub-btn">
          <Link
            to="/buy_more_mana"
            className="py-[15px] my-2 px-[20px] initial-font text-primary bg-light rounded-[8px] "
          >
            Manage Subscriptions
          </Link>
        </div>
      </div>
      <div className="mt-[17px]">
        <h5 className="initial-font mb-[7px] text-secondary font-bold ">
          {content?.novice}
        </h5>
        <p className="initial-font text-secondary font-bold">
          Billing address: <span className="text-green">{content?.status}</span>
        </p>
        <p className="initial-font mt-[7px] text-secondary font-bold">
          Renews: {content?.renew}
        </p>
      </div>

      <div className="mt-[32px]">
        <p className="small-font text-secondary">
          to view/update payment details, download invoices, or cancel your
          subscription, click the manage subscription button
        </p>
      </div>
    </div>
  );
}

export default ProfileInfo