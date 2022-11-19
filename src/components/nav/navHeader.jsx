
import ProgressBar from "react-animated-progress-bar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bottol from '../../assets/icon/bottol.svg';


const NavHead = styled.div`
  @media (max-width:640px){
    justify-content: center;
    margin: 0 auto;
  }

  .bottol{
    animation: bottol 2s infinite both linear ;
  }

  @keyframes bottol {
    to{
      transform: scale(1.1) ;
    }
  }
`

const Title = styled.div`
  @media (max-width: 640px) {
    h1 , p , strong , span{
      font-size: 0.87rem;
      text-align: left;
      white-space: nowrap;
      line-height: 25px;
    }

    strong{
      font-size: 0.75rem;
    }
  }
`;
const ProgressContainer = styled.div`
  width: 63%;
 .progress-bar-rect-wrap-container > div {
    background-color: #8646ee !important;
  }
  .progress-bar-rect-wrap-container .inner-rect-bar {
    background-color: #8646ee !important;
  }
  .progress-bar-rect-wrap-container .progress-bar-rect-wrapper > div {
    border-radius: 50px !important;
  }
  .progress-bar-rect-wrap-container h2 {
    display: none !important;
  }

  @media (min-width: 1920px) {
    .progress-bar-rect-wrap-container {
      width: 41.25rem;
    }
  }

  @media (max-width: 640px) {
    width: 80px;
    align-self: end;
    margin-bottom: 7px;
    margin-left: -10px;
  }
`;

/**
 * NabHeader Component accept these param 
 * @param {data} param0  As Object 
 * OBject have to these params  title, highLight, counter1, counter2, token, dividar, progPer, highLightColor
 * title should be full titile and highLight should be a highLight text that already included in title 
 * @returns 
 */

const NavHeader = ({data}) => {
  const { title, highLight, counter1, counter2, token, dividar, progPer, highLightColor , link} = data;
  


  return (
    <NavHead className="flex justify-between items-center  xl:gap-[70px] ">
      <Link to={link}>
        <Title className="lg:text-center leading-[30px] py-[10px]  2xl:extra-lagre-font xl:large-font lg:medium-font md:small-font ">
          {/* title  */}
          <h1 className="sm:text-left md:text-center">
            {title && title.includes(highLight)
              ? title.replace(highLight, "")
              : ""}
            {/* highlight text into the title  */}
            <strong
              style={{ color: highLightColor }}
              className="2xl:extra-lagre-font xl:large-font lg:medium-font "
            >
              {title && title.includes(highLight) ? highLight : ""}
            </strong>
          </h1>
          <div className="flex gap-2 items-center md:justify-center">
            <img
              src={bottol}
              alt="mana collect bottol"
              className=" bottol md:w-[21.65px] md:h-[25.8px] w-[16px] h-[18px] "
            />
            <p className="text-bold text-secondary">
              <span>{counter1}</span>
              {dividar}
              <span>{counter2}</span>
              &nbsp;
              {/* display name of token (mana) */}
              {token}
            </p>
          </div>
        </Title>
      </Link>
      <ProgressContainer>
        <ProgressBar
          width="100%"
          height="12px"
          rect
          percentage={`${progPer ? progPer : 0}`}
          rectPadding="1px"
          rectBorderRadius="50px"
          trackPathColor="#E3DFFF"
        />
      </ProgressContainer>
    </NavHead>
  );
};

export default NavHeader;
