import React from 'react';

import BackButton from '../../components/global/BackButton';
import NovicePlanTab from '../../components/novice plan/novicePlanTab';
export default function Account() {
  return (
    <div className="custom-container ">
      <div className=" xl:h-screen overflow-y-auto overflow-x-hidden pb-[130px] rounded-t-xl bg-light">
        <BackButton/>
        <NovicePlanTab />
      </div>
    </div>
  );
}
