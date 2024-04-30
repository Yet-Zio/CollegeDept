/* eslint-disable react-refresh/only-export-components */
import AnnouncementIcon from '@mui/icons-material/Announcement';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import MessageIcon from '@mui/icons-material/Message';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { House } from "@phosphor-icons/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ChangeDashData } from "../../redux/menu/DashBoardData";
import { DashBoardOptchange } from "../../redux/menu/DashBoardOpt";
import BatchMangement from '../AdminDashBoard/pages/BatchMangement';
import StaffMangerLayout from './AdminDashBoardPages/layout/StaffMangerLayout';
import AdminHomePage from './AdminDashBoardPages/pages/AdminHomePage';
import Announcemnt from './AdminDashBoardPages/pages/Announcemnt';
import Query from './AdminDashBoardPages/pages/Query';
import Requests from './AdminDashBoardPages/pages/Requests';
import DashBoardBodyLayout from "./Shared/Layout/DashBoardBodyLayout";
import SideBarLayout from "./Shared/Layout/SideBarLayout";
const themes = {
    bgColor: "bg-gray-200"
}
 export const AdminSideBarButtons = [
  {
      id:1,
      ButtonName:"Home",
      NavigateTo: "Home",
      Content:<AdminHomePage />
      ,Logo: <House weight="bold" size={22} />,
  },
  {
    id:2,
    ButtonName:"Staff Management",
    NavigateTo: "Staff Mangement",
    Content:<StaffMangerLayout/>,
    Logo: <PersonAddAlt1Icon/>
},
  {
      id:3,
      ButtonName:"Batch Mangement",
      NavigateTo: "Batch Management",
      Content:<BatchMangement/>,
      Logo: <GroupAddIcon/>
  },
  {
      id:4,
      ButtonName:"Announcement",
      NavigateTo: "Announcement",
      Content: <Announcemnt/>,
      Logo: <AnnouncementIcon/>
  },
  {
    id:5,
    ButtonName:"Leave Requests",
    NavigateTo: "Leave Requests",
    Content: <Requests/>,
    Logo: <LocalPostOfficeIcon/>
},
  {
    id:6,
    ButtonName:"Query",
    NavigateTo: "Query",
    Content:<Query/>,
    Logo: <MessageIcon/>
},
]
export default function AdminDashBoard() {
  const updateStudentData = useDispatch(); 
  const initializeCurrentContent  = useDispatch();
  useEffect(()=>{
    updateStudentData(ChangeDashData({SideBarButtons:[... AdminSideBarButtons]}))
    initializeCurrentContent(DashBoardOptchange({CurrentContent: AdminSideBarButtons[0].Content ,CurrentPath: AdminSideBarButtons[0].NavigateTo}))
  },[])
  return (
   <>
    <SideBarLayout themes={themes}/>
    <DashBoardBodyLayout themes={themes}  />
   </>
  )
}
