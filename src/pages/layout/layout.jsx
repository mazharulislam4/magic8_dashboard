import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// fixed button entire website (Earn mana button)
import FixedButton from "../../components/global/fixedButton";
// for passing navbar cliked boll
import { NavbarTogllerContext } from "../../context/utilsContext";
// a hook for taking window width and height
import Overlay from "../../components/global/overlay";
import { IsModalOpen } from "../../context/utilsContext";
import useWindowSize from "../../hooks/useWindowSize";
import Navbar from "../_global/navbar";
import { Sidebar } from "../_global/sidebar";
// styled component
import styled from "styled-components";
import FreeManaModal from "../../components/global/freeManaModal";


const MainLayout = styled.div`
  overflow: hidden;

  @media (min-width: 1280px) {
    display: flex;
    height: 100vh;
    overflow: hidden;
  }
`;

const AsideContainer = styled.div`
  width: ${(props) => (props.autoCollapse ? "65px" : "295px")};
`;

const Container = styled.div`
  width: 100%;
  @media (min-width: 1280px) {
    flex-grow: 1;
    overflow: hidden;
  }
`;

function Layout() {
  const [open, setOpen] = useState(false);
  const [autoCollapse, setAutoCollapse] = useState(false);
  const windowSize = useWindowSize();
  const width = Math.round(windowSize.width);
  const [hambar, setHambar] = useState(false);
   const [ earnManaModal, setEarnManaModal ] = useState(false);
  useEffect(() => {
    
    if (width < 1450 && width > 1280) {
      setAutoCollapse(true);
    } else {
      setAutoCollapse(false);
    }

    if (width < 1280) {
      setHambar(true);
    } else {
      setHambar(false);
    }

    const body = document.querySelector("body");
    if (open && hambar) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflowY = "auto";
    }

    return () => {};
  }, [width, open, hambar]);

  // navigation toggler
  const toggleHandler = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const earnFreeManaHandler = ()=>{
    setEarnManaModal(true)
  }

  


  return (
    <NavbarTogllerContext.Provider value={{ open, toggleHandler }}>
      <IsModalOpen.Provider value={{ earnManaModal, setEarnManaModal }}>
        <MainLayout>
          <FixedButton handler={earnFreeManaHandler}>
            Earn Free Mana
          </FixedButton>
          {(open && hambar) ? (
            <Overlay toggleHandler={toggleHandler} />
          ) : (
            ""
          )}

          <FreeManaModal />

          {/* sidebar from page global  */}
          <AsideContainer autoCollapse={autoCollapse}>
            <Sidebar autoCollapse={autoCollapse} />
          </AsideContainer>
          {/* content container  */}
          <Container>
            <Navbar hambar={hambar} />
            <Outlet />
          </Container>
        </MainLayout>
      </IsModalOpen.Provider>
    </NavbarTogllerContext.Provider>
  );
}

export default Layout;
