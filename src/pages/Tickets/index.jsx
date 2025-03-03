import { useEffect } from "react";
import TicketDetails from "./TicketDetails";


const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <TicketDetails/>
    </div>
  );
};

export default HomePage;
