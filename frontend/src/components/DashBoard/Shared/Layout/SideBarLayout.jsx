/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState} from "react";
import SideBarContainer from "../SideBar/SideBarContainer";
import { useDispatch, useSelector } from "react-redux";
import { DashBoardOptchange } from "../../../../redux/menu/DashBoardOpt";

export default function SideBarLayout({ themes}) {
  const primarySideBar = useSelector(state => state.DashBoardOpt.PrimarySideBarEnabled);
  const [width, setWidth] = useState(window.innerWidth);
  const updatePrimarySideBar = useDispatch()
  // const DashOpt = useSelector((state) => state.DashBoardOpt);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      updatePrimarySideBar(DashBoardOptchange({PrimarySideBarEnabled:width > 768}));
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);
  return (
    <>
     {primarySideBar && 
      <div className={`fixed left-0 z-50 ${width>768 ?themes.bgColor:"bg-transparent"}`}>
      <div className={`h-[100dvh] w-[32dvh]  flex justify-center items-center ${width>768?"":"bg-[#111111]"} `}>
        <div className={`h-[96%] w-[90%] rounded-lg justify-center items-center flex bg-[#111111]`}>
          <SideBarContainer/>
        </div>
      </div>
    </div>


      }
    </>
  );
}