import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../redux/menu/MenuOptSlice";
const DisplayRecomentation = React.lazy(() => import("./DisplayRecomentation"));
import Spinner from "../Shared/Spinner";
import AboutCs from "./Recomendedtools/AboutCs";
import SecondaryOptions from "./SecondaryOptions";
import PrimaryOptions from "./PrimaryOptions";

export default function Menu() {
  const selectedMenu = useSelector((state) => state.menuOpt);
  const MenuDispach = useDispatch();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (screenWidth < 860) MenuDispach(change({ isWdithLow: true,isSmallMenu: true }));
      else MenuDispach(change({ isWdithLow: false ,primaryOptions: 0, isSmallMenu: false}));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [MenuDispach, screenWidth, selectedMenu, selectedMenu.isWdithLow]);

  useEffect(() => {
    MenuDispach(change({ isHover: "text-[#f5700a]" }));
    if (screenWidth < 860) {
      MenuDispach(change({ isWdithLow: true, isSmallMenu: true }));
    } else MenuDispach(change({ isWdithLow: false, primaryOptions: 0 , isSmallMenu: false}));
  }, [MenuDispach, screenWidth]);

  const ResetAll = () => {
    MenuDispach(
      change({
        isAboutCs: true,
        primaryOptions: 0,
        RecomendedToolsOptions: 0,

      })
    );
  };
  
  return (
    <>
      <div 
      className={`${selectedMenu.isWdithLow?"hidden":"fixed z-10 flex justify-center items-center useinter"} w-full h-full bg-[#151515]`}>
        <div
          onMouseLeave={() => {
            ResetAll();
          }}
          className={`h-[55%] w-[90%] flex justify-evenly items-center text-white `}
        >
         <div
         className={`w-[20%] h-[100%] text-[#dbdbdb] font-bold text-sm  lg:text-lg flex flex-col justify-center`}
       >
         <PrimaryOptions />
       </div>
          
            <div
              className={`w-[20%] h-[100%] text-[#dbdbdb] font-bold text-sm lg:text-lg xl:text-xl flex flex-col justify-center items-center`}
            >
              <SecondaryOptions />
            </div>
            <div
            className={`w-[30%] flex flex-col justify-center items-center`} >
              {selectedMenu.isAboutCs && <AboutCs />}
              <Suspense fallback={<Spinner />}>
                <DisplayRecomentation />
              </Suspense>
            </div>
        </div>
      </div>
    </>
  );
}
