import EventAvailableSharpIcon from '@mui/icons-material/EventAvailableSharp';
import SettingsBackupRestoreSharpIcon from '@mui/icons-material/SettingsBackupRestoreSharp';
import { Article, Bell, House, User } from "@phosphor-icons/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ChangeDashData } from "../../redux/menu/DashBoardData";
import { DashBoardOptchange } from "../../redux/menu/DashBoardOpt";
import DashBoardBodyLayout from "./Shared/Layout/DashBoardBodyLayout";
import ProfileContainer from "./Shared/Layout/ProfileContainer";
import SideBarLayout from "./Shared/Layout/SideBarLayout";
import TextEditor from './TextEditor/TextEditor';

const themes = {
    bgColor: "bg-gray-200"
}
const AssociateSideBarButtons = [
  {
      id:1,
      ButtonName:"Home",
      NavigateTo: "Home",
      Content: <></>,
      Logo: <House weight="bold" size={22} />,
  },
  {
      id:2,
      ButtonName:"Profile",
      NavigateTo: "Profile",
      Content: <ProfileContainer/>,
      Logo: <User weight="bold" size={22} />,
  },
  {
    id:3,
    ButtonName:"Articles",
    NavigateTo: "Article",
    Content:<TextEditor/>,
    Logo: <Article size={22} weight="duotone" />
},
  {
      id:4,
      ButtonName:"Events",
      NavigateTo: "Events",
      Content:<></>,
      Logo: <EventAvailableSharpIcon fontSize="medium"/>
  },
  {
      id:5,
      ButtonName:"History",
      NavigateTo: "History",
      Content: <></>,
      Logo: <SettingsBackupRestoreSharpIcon fontSize="medium"/>
  },
  {
    id:6,
    ButtonName:"Notification",
    NavigateTo: "Notification",
    Content:<></>,
    Logo: <Bell weight="bold" size={22} />,
},
]
export default function StudentDashBoard() {
  const updateStudentData = useDispatch(); 
  const initializeCurrentContent  = useDispatch();
  useEffect(()=>{
    updateStudentData(ChangeDashData({SideBarButtons:[... AssociateSideBarButtons]}))
    initializeCurrentContent(DashBoardOptchange({CurrentContent: <></>,CurrentPath: AssociateSideBarButtons[0].NavigateTo}))
  },[])
  return (
   <>
    <SideBarLayout themes={themes}/>
    <DashBoardBodyLayout themes={themes}  />
   </>
  )
}
