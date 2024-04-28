import CoPresentSharpIcon from '@mui/icons-material/CoPresentSharp';
import { Bell, Book, House, Notebook, User } from "@phosphor-icons/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ChangeDashData } from "../../redux/menu/DashBoardData";
import { DashBoardOptchange } from "../../redux/menu/DashBoardOpt";
import DashBoardBodyLayout from "./Shared/Layout/DashBoardBodyLayout";
import ProfileContainer from "./Shared/Layout/ProfileContainer";
import SideBarLayout from "./Shared/Layout/SideBarLayout";

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
      Content: <ProfileContainer/>,
      Logo: <User weight="bold" size={22} />,
  },
  {
    id:4,
    ButtonName:"Study Materials",
    NavigateTo: "",
    Content:<></>,
    Logo: <Book weight="bold" size={22} />,
},
  {
      id:5,
      ButtonName:"Homework",
      NavigateTo: "",
      Content:<></>,
      Logo: <Notebook weight="bold" size={22} />,
  },
  {
      id:6,
      ButtonName:"Attendance",
      NavigateTo: "",
      Content: <></>,
      Logo: <CoPresentSharpIcon fontSize="medium"/>
  },
  {
    id:7,
    ButtonName:"Notifications",
    NavigateTo: "",
    Content:<></>,
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
