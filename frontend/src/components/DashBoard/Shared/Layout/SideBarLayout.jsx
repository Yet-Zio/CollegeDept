/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SideBarContainer from "../SideBar/SideBarContainer";

export default function SideBarLayout({ themes}) {
  // const [widthValue, SetWidthValue] = useState(0);
  const [HideSideBar, setHideSideBar] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setHideSideBar(window.innerWidth < 768); // Change the breakpoint as needed
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); 
  return (
    <>
      <div className={`fixed left-0 ${HideSideBar?"hidden":""} ${themes.bgColor}`}>
        <div className={`h-[100dvh] md:w-[32dvh] w-[22dvh] flex justify-center items-center`}>
          <div className={`h-[96%] w-[90%] rounded-lg justify-center items-center flex bg-[#111111]`}>
            <SideBarContainer/>
          </div>
        </div>
      </div>
    </>
  );
}