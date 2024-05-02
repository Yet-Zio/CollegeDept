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
import LeaveLetter from './TeacherDashBoardPages/Pages/LeaveLetter';
import UploadAttendence from './TeacherDashBoardPages/Pages/UploadAttendence';
import UploadHomeWork from './TeacherDashBoardPages/Pages/UploadHomeWork';
import UploadStudyMaterials from './TeacherDashBoardPages/Pages/UploadStudyMaterials';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import AddStudents from './TeacherDashBoardPages/Pages/AddStudents';
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
      NavigateTo: "/Profile",
      Content: <TeacherProfile Option={3}/>,
      Logo: <User weight="bold" size={22} />,
  },
  {
    id:3,
    ButtonName:"Add Student",
    NavigateTo: "/Add Studetn",
    Content: <AddStudents/>,
    Logo: <User weight="bold" size={22} />,
},
  {
    id:4,
    ButtonName:"Upload Time Table",
    NavigateTo: "Upload Time Table",
    Content:<TimeTableUPload/>,
    Logo: <BackupTableIcon weight="bold" size={22} />,
},
{
  id:5,
  ButtonName:"UploadStudy Material",
  NavigateTo: "Upload Study Material",
  Content:<UploadStudyMaterials/>,
  Logo: <LibraryBooksIcon weight="bold" size={22} />,
},
  {
      id:6,
      ButtonName:"Upload Homework",
      NavigateTo: "Upload Homework",
      Content:<UploadHomeWork/>,
      Logo: <Notebook weight="bold" size={22} />,
  },
  {
      id:7,
      ButtonName:"Upload Attendance",
      NavigateTo: "Upload Attendance",
      Content:  <UploadAttendence/> ,
      Logo: <CoPresentSharpIcon fontSize="medium"/>
  },
{
    id:8,
    ButtonName:"Request Leave",
    NavigateTo: "Request Leave",
    Content: <LeaveLetter/>,
    Logo: <LocalPostOfficeIcon fontSize="medium"/>
},
  {
    id:9,
    ButtonName:"Notifications",
    NavigateTo: "Notification",
    Content:<TeacherNotification id={'teacher'}/>,
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
