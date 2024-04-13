import { useState } from "react";
import Creators from "../components/homepage/Creators";
import Div1 from "../components/homepage/Div1";
import News from "../components/homepage/News";
import OutComes from "../components/homepage/OutComes";
import Footer from "../components/Shared/Footer";
import Nav from "../components/Shared/Nav";

export default function HomePage() {
  const [valueFromChild, setValueFromChild] = useState(true);
  const handleValueFromChild = (value) => {
    setValueFromChild(value);
  };
  return (
    <>
    <Nav sendDataToParent={handleValueFromChild}/>
   {valueFromChild && <div>
    <Div1 />
    <News />
    <OutComes />
    <Creators />
    <Footer />
    </div>}
    </>
  )
}
