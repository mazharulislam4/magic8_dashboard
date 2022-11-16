import { useEffect, useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    function getWindowSize() {
      setSize({ width:window.innerWidth, height:window.innerHeight });
    }

    window.addEventListener("resize", getWindowSize);

    return () => window.removeEventListener("resize", getWindowSize);
  }, []);

  
  return size;
}

export default useWindowSize;
