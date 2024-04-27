import { House, User, Bell, Book, Notebook, Percent } from "@phosphor-icons/react";
import DashBoardBodyLayout from "./Shared/Layout/DashBoardBodyLayout";
import SideBarLayout from "./Shared/Layout/SideBarLayout";
import { useDispatch} from "react-redux";
import { useEffect} from "react";
import { ChangeDashData } from "../../redux/menu/DashBoardData";
import Profile from "./Shared/Pages/Profile";
import { DashBoardOptchange } from "../../redux/menu/DashBoardOpt";
import ProfileContainer from "./Shared/Layout/ProfileContainer";
import UpdateProfile from "./Shared/Pages/UpdateProfile";

const themes = {
    bgColor: "bg-[#111111]"
}
const StudentSideBarButtons = [
  {
      id:1,
      ButtonName:"Home",
      NavigateTo: "",
      Content: <UpdateProfile/>,
      Logo: <House weight="bold" size={32} />
  },
  {
      id:2,
      ButtonName:"Profile",
      NavigateTo: "/DasbBoard/Student/Profile",
      Content: <ProfileContainer/>,
      Logo: <User weight="bold" size={32} />
  },
  {
    id:4,
    ButtonName:"Study Materials",
    NavigateTo: "",
    Content: <Profile/>,
    Logo: <Book weight="bold" size={32} />
},
  {
      id:5,
      ButtonName:"HomeWork",
      NavigateTo: "",
      Content: <Profile/>,
      Logo: <Notebook weight="bold" size={32} />
  },
  {
      id:6,
      ButtonName:"Attendance",
      NavigateTo: "",
      Content: <Profile/>,
      Logo: <Percent weight="bold" size={32} />
  },
  {
    id:7,
    ButtonName:"Notifications",
    NavigateTo: "",
    Content: <Profile/>,
    Logo: <Bell weight="bold" size={32} />
},
]
export default function StudentDashBoard() {
  const updateStudentData = useDispatch(); 
  const initializeCurrentContent  = useDispatch();
  useEffect(()=>{
    updateStudentData(ChangeDashData({StudentSideBarButtons:[... StudentSideBarButtons]}))
    initializeCurrentContent(DashBoardOptchange({CurrentContent: <Profile/>}))
  },[])
  return (
   <>
    <SideBarLayout themes={themes}/>
    <DashBoardBodyLayout themes={themes}  />
   </>
  )
}
