import { useEffect } from "react";
import TicketDetails from "./TicketDetails";
<<<<<<< HEAD
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
=======


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
>>>>>>> 98fa7df4e6d2970f27f1b5715e067d72bbee1227
