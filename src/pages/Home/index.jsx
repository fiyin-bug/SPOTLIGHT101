import { useEffect } from "react";
import SectionOne from "./Section-one";
import SectionTwo from "./Section-two";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <SectionOne />
      <SectionTwo />
    </div>
  );
};

export default HomePage;
