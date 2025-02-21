import { useEffect } from "react";
import SectionOne from "./Section-one";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <SectionOne />
    </div>
  );
};

export default HomePage;
