/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SideBarContainer from "../SideBar/SideBarContainer";

export default function SideBarLayout({themes }) {
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
      <div className={`fixed left-0 ${HideSideBar?"hidden":""}`}>
        <div className={`h-[100dvh] md:w-[32dvh] w-[25dvh]  flex justify-center items-center ${themes.bgColor}`}>
          <div className="h-[96%] w-[88%] bg-[#151515]  bg-gradient-to-r  from-[#bbb7b7]  via-[#000000]  to-[#c19447]  dark:from-[#272727]  dark:via-[#4b4b4b]  dark:to-[#6d6761] rounded-lg justify-center items-center flex">
            <SideBarContainer/>
          </div>
        </div>
      </div>
    </>
  );
}
