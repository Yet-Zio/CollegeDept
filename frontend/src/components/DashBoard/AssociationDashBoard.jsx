import { House, User, Article, Bell } from "@phosphor-icons/react";
import DashBoardBodyLayout from "./Shared/Layout/DashBoardBodyLayout";
import SideBarLayout from "./Shared/Layout/SideBarLayout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ChangeDashData } from "../../redux/menu/DashBoardData";

const themes = {
    bgColor: "bg-[#111111]"
}
const StudentSideBarButtons = [
  {
      id:1,
      ButtonName:"Home",
      NavigateTo: "",
      Logo: <House size={32} />
  },
  {
      id:2,
      ButtonName:"Profile",
      NavigateTo: "/DasbBoard/Student/Profile",
      Logo: <User size={32} />
  },
  {
      id:3,
      ButtonName:"Article",
      NavigateTo: "",
      Logo: <Article size={32}/>
  },
  {
      id:4,
      ButtonName:"Notifications",
      NavigateTo: "",
      Logo: <Bell size={32} />
  },
  {
      id:5,
      ButtonName:"",
      NavigateTo: "",
      Logo: <></>
  },
  {
      id:6,
      ButtonName:"",
      NavigateTo: "",
      Logo: <></>
  },
]
export default function AssociationDashBoard() {
  const studentData = useSelector((state) => state.DashBoardDatas);
  const updateStudentData = useDispatch(); 
  useEffect(()=>{
    updateStudentData(ChangeDashData({StudentSideBarButtons:[... StudentSideBarButtons]}))
  },[])
  return (
   <>
    <SideBarLayout themes={themes}/>
    <DashBoardBodyLayout themes={themes}  />
   </>
  )
}
