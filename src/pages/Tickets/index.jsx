import { useEffect } from "react";
import TicketDetails from "./TicketDetails";
const TicketPage = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <div className="bg-black min-h-screen">
      <TicketDetails/></div>
  );
};

export default TicketPage;
