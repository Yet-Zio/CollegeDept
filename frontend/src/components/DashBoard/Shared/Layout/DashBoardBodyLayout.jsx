/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import DasbBoardNavBar from "../navigationTop/DasbBoardNavBar";
import DasbBoardContentLayout from "./DasbBoardContentLayout";

// eslint-disable-next-line react/prop-types
export default function DashBoardBodyLayout({themes}) {
  const primarySideBar = useSelector(state => state.DashBoardOpt.PrimarySideBarEnabled);
  return (
    <div className={`w-auto min-h-screen ${themes.bgColor} ${primarySideBar?"md:ms-[32dvh] ms-0": ""}  overflow-hidden`}>
      <DasbBoardNavBar/>
      <DasbBoardContentLayout/>
    </div>
  )
}
