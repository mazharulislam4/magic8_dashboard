import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import closeicon from '../../assets/icon/close.svg';
import { IsModalOpen } from '../../context/utilsContext';
import Targets from './Targets';

const Modal = styled.div`
  .modal {
   opacity: 0;

    animation: fadeIn 0.5s forwards linear;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

const FreeManaModal = ({status}) => {

const { earnManaModal, setEarnManaModal } = useContext(IsModalOpen);

useEffect(()=>{
    const body = document.querySelector("body");
    if (earnManaModal) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflowY = "auto";
    }

    return ()=>{}
})


  return (
    <Modal
      className={`fixed w-full h-screen top-0 left-0 z-[9999] ${
        earnManaModal ? "block" : "hidden"
      }`}
    
    >
      <div
        className={`bg-light fixed w-full sm:w-[520px] h-[60%] modal sm:h-[650px] rounded-b-none rounded-t-2xl sm:rounded-2xl z-[99999] shadow-md shadow-dark left-1/2 -translate-x-1/2 sm:-translate-y-1/2 sm:top-1/2 p-6 sm:p-8 bottom-0 
        `}
      >
        <button
          type="button"
          className="fixed right-[15px] top-[15px]"
          onClick={() => setEarnManaModal(false)}
        >
          <img src={closeicon} alt="close" />
        </button>
        <h4 className="text-xl mb-5 sm:mb-8">Earn Free Mana</h4>

        <div className="w-full flex flex-col gap-8 h-[90%] overflow-x-auto overflow-y-auto ">
          <Targets />
          <Targets />
          <Targets />
          <Targets />
          <Targets />
          <Targets />
          <Targets />
          <Targets />
        </div>
      </div>
      <div
        className="fixed w-full h-screen bg-midnight opacity-[.3] top-0 left-0 z-[9999]"
        onClick={() => setEarnManaModal(false)}
      ></div>
    </Modal>
  );
}

export default FreeManaModal;