import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useSnapchatTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.snaptr) {
      window.snaptr("track", "PAGE_VIEW");
    }
  }, [location.pathname]);
};

export default useSnapchatTracking;
