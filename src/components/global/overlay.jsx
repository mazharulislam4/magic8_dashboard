import React from 'react';
import styled from 'styled-components';

const OverlayDiv = styled.div`
position: fixed;
width: 100%;
height: 100vh;
z-index: 1000;
background-color: #4646467e;
`;

function Overlay({toggleHandler}) {
  return <OverlayDiv onClick={toggleHandler}></OverlayDiv>;
}

export default Overlay