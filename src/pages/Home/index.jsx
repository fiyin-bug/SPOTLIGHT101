import { useEffect } from "react";
import SectionOne from "./Section-one";
import SectionTwo from "./Section-two";
import SectionThree from "./Section-three";
import SectionFour from "./Section-four";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
};

export default HomePage;
