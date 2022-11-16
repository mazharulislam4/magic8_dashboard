import React from 'react'
import UpdatePassword from '../../components/form/updatePassword'
import BackButton from '../../components/global/BackButton'
import ContactInfo from './contactInfo'
import ProfileInfo from './profileInfo'
const profileData = {
    id:1,
    novice: 'novice',
    status: 'active',
    renew:"11/12/2023"
}

function Profile() {
  return (
    <div className="custom-container">
      <div className="xl:h-screen overflow-y-auto overflow-x-hidden xl:pb-[130px] pb-[30px] bg-light rounded-t-xl ">
        <div className='my-[10px] mx-2'>
          <BackButton />
        </div>
        <div className="flex flex-col items-center">
          <div>
            <ContactInfo />
          </div>
          <div className="my-[20px]">
            <UpdatePassword />
          </div>
          <div>
            <ProfileInfo content={profileData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile