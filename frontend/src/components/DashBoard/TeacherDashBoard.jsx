import CoPresentSharpIcon from '@mui/icons-material/CoPresentSharp';
import { Bell, House, Notebook, User } from "@phosphor-icons/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ChangeDashData } from "../../redux/menu/DashBoardData";
import { DashBoardOptchange } from "../../redux/menu/DashBoardOpt";
import DashBoardBodyLayout from "./Shared/Layout/DashBoardBodyLayout";
import SideBarLayout from "./Shared/Layout/SideBarLayout";
import TeacherProfile from './TeacherDashBoardPages/Pages/TeacherProfile';
import TeacherNotification from './TeacherDashBoardPages/Pages/TeacherNotification';
import TeacherHome from './TeacherDashBoardPages/Pages/TeacherHome';
import TimeTableUPload from './TeacherDashBoardPages/Pages/TimTableUPload';
import BackupTableIcon from '@mui/icons-material/BackupTable';


const themes = {
    bgColor: "bg-gray-200"
}
const TeacherSideBarButtons = [
  {
      id:1,
      ButtonName:"Home",
      NavigateTo: "",
      Content: <TeacherHome/>,
      Logo: <House weight="bold" size={22} />,
  },
  {
      id:2,
      ButtonName:"Profile",
      NavigateTo: "/DasbBoard/Student/Profile",
      Content: <TeacherProfile/>,
      Logo: <User weight="bold" size={22} />,
  },
  {
    id:3,
    ButtonName:"Upload Time Table",
    NavigateTo: "Upload Time Table",
    Content:<TimeTableUPload/>,
    Logo: <BackupTableIcon weight="bold" size={22} />,
},
{
  id:4,
  ButtonName:"UploadStudy Material",
  NavigateTo: "Upload Study Material",
  Content:<></>,
  Logo: <Notebook weight="bold" size={22} />,
},
  {
      id:5,
      ButtonName:"Upload Homework",
      NavigateTo: "Upload Homework",
      Content:<></>,
      Logo: <Notebook weight="bold" size={22} />,
  },
  {
      id:6,
      ButtonName:"Upload Attendance",
      NavigateTo: "Upload Attendance",
      Content: <></>,
      Logo: <CoPresentSharpIcon fontSize="medium"/>
  },
{
    id:7,
    ButtonName:"Request Leave",
    NavigateTo: "Request Leave",
    Content: <></>,
    Logo: <CoPresentSharpIcon fontSize="medium"/>
},
  {
    id:8,
    ButtonName:"Notifications",
    NavigateTo: "Notification",
    Content:<TeacherNotification/>,
    Logo: <Bell weight="bold" size={22} />,
},
]
export default function StudentDashBoard() {
  const updateStudentData = useDispatch(); 
  const initializeCurrentContent  = useDispatch();
  useEffect(()=>{
    updateStudentData(ChangeDashData({SideBarButtons:[... TeacherSideBarButtons]}))
    initializeCurrentContent(DashBoardOptchange({CurrentContent: TeacherSideBarButtons[0].Content,CurrentPath: TeacherSideBarButtons[0].NavigateTo}))
  },[])
  return (
   <>
    <SideBarLayout themes={themes}/>
    <DashBoardBodyLayout themes={themes}  />
   </>
  )
}
