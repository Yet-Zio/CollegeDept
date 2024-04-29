/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import DasbBoardNavBar from "../navigationTop/DasbBoardNavBar";
import DasbBoardContentLayout from "./DasbBoardContentLayout";
import {  motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
export default function DashBoardBodyLayout({themes}) {
  const primarySideBar = useSelector(state => state.DashBoardOpt.PrimarySideBarEnabled);
  return (

<motion.div 

initial={{ marginLeft: primarySideBar ? "32vh" : "0" }}
animate={{ marginLeft: primarySideBar ? "32vh" : "0" }}
transition={{ duration: 0.4 }} 
className={`w-auto min-h-screen ${themes.bgColor} overflow-hidden ${(window.innerWidth<768 && primarySideBar )?"hidden": ""}`}>
  <DasbBoardNavBar/>
  <DasbBoardContentLayout/>
</motion.div>

  )
}