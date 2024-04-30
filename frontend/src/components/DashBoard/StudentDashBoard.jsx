import CoPresentSharpIcon from '@mui/icons-material/CoPresentSharp';
import { Bell, Book, House, Notebook, User } from "@phosphor-icons/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ChangeDashData } from "../../redux/menu/DashBoardData";
import { DashBoardOptchange } from "../../redux/menu/DashBoardOpt";
import DashBoardBodyLayout from "./Shared/Layout/DashBoardBodyLayout";
import ProfileContainer from "./Shared/Layout/ProfileContainer";
import SideBarLayout from "./Shared/Layout/SideBarLayout";
import Notification from './Shared/Pages/Notification';
import Chart from './StudentDashBoardPages/Components/Chart';
import HomeWork from './StudentDashBoardPages/pages/HomeWork';
import StudyMaterials from './StudentDashBoardPages/pages/StudyMaterials';

const themes = {
    bgColor: "bg-gray-200"
}
const StudentSideBarButtons = [
  {
      id:1,
      ButtonName:"Home",
      NavigateTo: "",
      Content: <></>,
      Logo: <House weight="bold" size={22} />,
  },
  {
      id:2,
      ButtonName:"Profile",
      NavigateTo: "/DasbBoard/Student/Profile",
      Content: <ProfileContainer Option={3} />,
      Logo: <User weight="bold" size={22} />,
  },
  {
    id:4,
    ButtonName:"Study Materials",
    NavigateTo: "Study Materials",
    Content:<StudyMaterials/>,
    Logo: <Book weight="bold" size={22} />,
},
  {
      id:5,
      ButtonName:"Homework",
      NavigateTo: "Home Work",
      Content:<HomeWork/>,
      Logo: <Notebook weight="bold" size={22} />,
  },
  {
      id:6,
      ButtonName:"Attendance",
      NavigateTo: "Attendance",
      Content: <Chart/>,
      Logo: <CoPresentSharpIcon fontSize="medium"/>
  },
  {
    id:7,
    ButtonName:"Notifications",
    NavigateTo: "Notifications",
    Content:<Notification option={3}/>,
    Logo: <Bell weight="bold" size={22} />,
},
]
export default function StudentDashBoard() {
  const updateStudentData = useDispatch(); 
  const initializeCurrentContent  = useDispatch();
  useEffect(()=>{
    updateStudentData(ChangeDashData({SideBarButtons:[... StudentSideBarButtons]}))
    initializeCurrentContent(DashBoardOptchange({CurrentContent: <></>}))
  },[])
  return (
   <>
    <SideBarLayout themes={themes}/>
    <DashBoardBodyLayout themes={themes}  />
   </>
  )
}
