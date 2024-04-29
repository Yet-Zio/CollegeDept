/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SideBarContainer from "../SideBar/SideBarContainer";
import { useDispatch, useSelector } from "react-redux";
import { DashBoardOptchange } from "../../../../redux/menu/DashBoardOpt";
import { AnimatePresence, motion } from "framer-motion";

export default function SideBarLayout({ themes }) {
  const primarySideBar = useSelector(
    (state) => state.DashBoardOpt.PrimarySideBarEnabled
  );
  const onInit = useSelector(
    (state) => state.DashBoardOpt.onInit
  );
  const [width, setWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      dispatch(
        DashBoardOptchange({ PrimarySideBarEnabled: width > 768 })
      );
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);




  return (
    <>
      <AnimatePresence>
        {primarySideBar && (
          <motion.div
            initial={onInit?{ x: 0, opacity: 1 }:{x: -300, opacity: 1}}
            animate={{ x: 0, opacity: 1 }}
            exit={width <= 768 ? { x: -window.innerWidth, opacity: 1 } : { x:-300,  opacity: 1 }}
            transition={{ duration: 0.4 }}
            className={`fixed left-0 z-50 ${
              width > 768 ? themes.bgColor : "bg-transparent"
            }`}
            style={{
              position: "fixed",
              width: width > 768 ? "32vh" : "100%",
              top: 0,
              bottom: 0,
              overflowY: "auto",
              overflowX: width > 768 ? "hidden" : "auto", 
            }}
          >
            <div
              className={`h-[100vh] flex justify-center items-center ${
                width > 768 ? "" : "bg-[#111111]"
              }`}
            >
              <div
                className={`h-[96%] w-[90%] rounded-lg justify-center items-center flex bg-[#111111]`}
              >
                <SideBarContainer />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
