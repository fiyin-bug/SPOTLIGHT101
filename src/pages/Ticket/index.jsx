import { useEffect } from "react";

const TicketPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div>TicketPage</div>;
};

export default TicketPage;
