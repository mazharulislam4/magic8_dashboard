import { useEffect, useState } from "react";
import useWindowSize from "./useWindowSize";

function useIsMobile() {
    const windowSize = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
if(windowSize.width < 768){
    setIsMobile(true);
}else{
    setIsMobile(false);
}

  }, [windowSize.width , isMobile]);

  return isMobile;
}

export default useIsMobile;
