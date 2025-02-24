import { useEffect } from "react";
import SectionOne from "./Section-one";
import SectionTwo from "./Section-two";
import SectionThree from "./Section-three";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
};

export default HomePage;
