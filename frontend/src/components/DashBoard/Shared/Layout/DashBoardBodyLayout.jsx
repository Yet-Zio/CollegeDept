/* eslint-disable react/prop-types */

import DasbBoardNavBar from "../navigationTop/DasbBoardNavBar";
import DasbBoardContentLayout from "./DasbBoardContentLayout";

// eslint-disable-next-line react/prop-types
export default function DashBoardBodyLayout({themes}) {
  return (
    <div className={`w-auto min-h-screen ${themes.bgColor} md:ms-[32dvh] ms-0 duration-200`}>
      <DasbBoardNavBar/>
      <DasbBoardContentLayout/>
    </div>
  )
}
