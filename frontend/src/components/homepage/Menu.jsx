import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../redux/menu/MenuOptSlice";
const DisplayRecomentation = React.lazy(() => import("./DisplayRecomentation"));
import Spinner from "../Shared/Spinner";
import AboutCs from "./Recomendedtools/AboutCs";
import SecondaryOptions from "./SecondaryOptions";
import PrimaryOptions from "./PrimaryOptions";
import { CaretLeft } from "@phosphor-icons/react";

export default function Menu() {
  const selectedMenu = useSelector((state) => state.menuOpt);
  const MenuDispach = useDispatch();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [optionsStyle, setOptionsStyle] = useState();
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (screenWidth < 860) MenuDispach(change({ isWdithLow: true }));
      else MenuDispach(change({ isWdithLow: false }));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [MenuDispach, screenWidth, selectedMenu.isWdithLow]);

  useEffect(() => {
    MenuDispach(change({ isHover: "text-[#f5700a]" }));
    if (screenWidth < 860) {
      MenuDispach(change({ isWdithLow: true }));
      setOptionsStyle(
        "flex flex-col justify-between items-center mb-[10dvh] w-[70%] h-[60%] text-[#dbdbdb] font-bold text-lg"
      );
    } else MenuDispach(change({ isWdithLow: false }));
  }, [MenuDispach, screenWidth]);

  const ResetAll = () => {
    MenuDispach(
      change({
        isAboutCs: true,
        isLogin: false,
        isAssociation: false,
        isContactUs: false,
        isAbout: false,
        isLinux: false,
        isSpring: false,
        isReact: false,
        isAngular: false,
        isVscode: false,
        isTailwind: false,
      })
    );
  };

  return (
    <>
      <div className="w-full h-full bg-[#151515] fixed z-10 flex justify-center items-center useinter">
        <div
          onMouseLeave={() => {
            ResetAll();
            MenuDispach(change({ isRecomendedTools: false }));
          }}
          className={`${selectedMenu.isWdithLow?"flex-col":""} h-[55%] w-[90%] flex justify-evenly items-center text-white `}
        >
         {( selectedMenu.isWdithLow && (selectedMenu.primaryOptions>0 || selectedMenu.SecondaryOptions>0)) &&
          <CaretLeft size={32} className="me-[80%]"/>
         }
         <div
         className={`${
           !selectedMenu.isWdithLow
             ? "w-[20%] h-[100%] text-[#dbdbdb] font-bold text-sm  lg:text-lg flex flex-col justify-center"
             : optionsStyle
         }
         ${selectedMenu.primaryOptions>0?"hidden":""}
         `}
       >
         <PrimaryOptions />
       </div>
          
            <div
              className={`${
                !selectedMenu.isWdithLow
                  ? "w-[20%] h-[100%] text-[#dbdbdb] font-bold text-sm lg:text-lg xl:text-xl flex flex-col justify-center items-center"
                  : "w-[70%] flex flex-col justify-evenly items-center h-[50%]"
              }`}
            >
              <SecondaryOptions />
            </div>
            <div className="w-[30%] flex flex-col justify-center items-center ">
              {selectedMenu.isAboutCs && !selectedMenu.isWdithLow && <AboutCs />}
              <Suspense fallback={<Spinner />}>
                <DisplayRecomentation />
              </Suspense>
            </div>
        </div>
      </div>
    </>
  );
}
