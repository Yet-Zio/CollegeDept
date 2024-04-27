/* eslint-disable react/prop-types */
import {Power} from "@phosphor-icons/react"
import Buttons from "./Buttons"
import Logo from "./Logo"
import { useSelector } from "react-redux";


export default function SideBarContainer() {
  const studentData = useSelector((state) => state.DashBoardDatas);
console.log(studentData.StudentButtons)
  return (
   <>
    <div className="w-[90%] h-[96%] flex justify-between flex-col items-center rounded-lg">
        <Logo/>
        <div className=" h-[60%] w-[100%] flex flex-col justify-evenly items-center ">
           {studentData.StudentSideBarButtons.map((item)=>{
            return (
                <Buttons ButtonName={item.ButtonName} logo={item.Logo} NavigateTo={item.NavigateTo} key={item.id} currentItem={item.Content}/>
            )
           })}
        </div>
       <Buttons className=" mb-16" ButtonName={"LogOut"} logo={<Power className="font-extrabold" size={32} weight="bold" />} />
    </div>
   </>
  )
}
