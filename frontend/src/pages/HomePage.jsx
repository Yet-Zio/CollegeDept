import { useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Shared/Footer";
import Nav from "../components/Shared/Nav";
import Creators from "../components/homepage/Creators";
import Div1 from "../components/homepage/Div1";
import News from "../components/homepage/News";
import OutComes from "../components/homepage/OutComes";

export default function HomePage() {
  const [valueFromChild, setValueFromChild] = useState(true);
  const selectedMenu = useSelector((state)=>state.menuOpt);
  const handleValueFromChild = (value) => {
    setValueFromChild(value);
  };
  return (
    <>
    <Nav sendDataToParent={handleValueFromChild}/>
    
   {(valueFromChild || selectedMenu.isWdithLow) &&
    <div>
    <Div1 />
    <News />
    <OutComes />
    <Creators />
    <Footer />
    </div>}
    </>
  )
}
