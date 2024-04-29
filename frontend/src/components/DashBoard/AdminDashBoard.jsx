/* eslint-disable react-refresh/only-export-components */
import EventAvailableSharpIcon from '@mui/icons-material/EventAvailableSharp';
import SettingsBackupRestoreSharpIcon from '@mui/icons-material/SettingsBackupRestoreSharp';
import { Article, Bell, House } from "@phosphor-icons/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ChangeDashData } from "../../redux/menu/DashBoardData";
import { DashBoardOptchange } from "../../redux/menu/DashBoardOpt";
import StaffMangerLayout from './AdminDashBoardPages/layout/StaffMangerLayout';
import HistoryContainer from './AssocationDashBoardPages/pages/HistoryContainer';
import DashBoardBodyLayout from "./Shared/Layout/DashBoardBodyLayout";
import SideBarLayout from "./Shared/Layout/SideBarLayout";
import EventUpload from './Shared/Pages/EventUpload';
import Notification from './Shared/Pages/Notification';

const themes = {
    bgColor: "bg-gray-200"
}
 const AdminSideBarButtons = [
  {
      id:1,
      ButtonName:"Home",
      NavigateTo: "Home",
      Content:<></>,
      Logo: <House weight="bold" size={22} />,
  },
  {
    id:2,
    ButtonName:"Articles",
    NavigateTo: "Article",
    Content:<StaffMangerLayout/>,
    Logo: <Article size={22} weight="duotone" />
},
  {
      id:3,
      ButtonName:"Events",
      NavigateTo: "Events",
      Content:<EventUpload/>,
      Logo: <EventAvailableSharpIcon fontSize="medium"/>
  },
  {
      id:4,
      ButtonName:"History",
      NavigateTo: "History",
      Content: <HistoryContainer/>,
      Logo: <SettingsBackupRestoreSharpIcon fontSize="medium"/>
  },
  {
    id:5,
    ButtonName:"Notification",
    NavigateTo: "Notification",
    Content:<Notification/>,
    Logo: <Bell weight="bold" size={22} />,
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
