import React, { useState } from "react";
import Button from "../global/button";
import ManCards from "./manaCards";
import NovicePlanCards from "./novicePlanCards";

// plan Tab component 
function NovicePlanTab() {
  const [index , setIndex ] = useState(0)

  const indexHandler = (eachIndex)=>{
    setIndex(eachIndex)
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="  mt-[7px] gap-3 flex justify-center">
        <Button
          bg={!index ? "#8646EE" : "#fff"}
          color={!index ? "#fff" : "#000"}
          handler={() => indexHandler(0)}
        >
          Plans
        </Button>
        <Button
          handler={() => indexHandler(1)}
          bg={index ? "#8646EE" : "#fff"}
          color={index ? "#fff" : "#000"}
        >
          Buy Mana
        </Button>
      </div>

      <div>{!index ? <NovicePlanCards /> : <ManCards />}</div>
    </div>
  );
}

export default NovicePlanTab;
