
import { Link } from "react-router-dom";
import { DashBoardOptchange } from "../../../../redux/menu/DashBoardOpt";
import { useDispatch } from "react-redux";

// eslint-disable-next-line react/prop-types
export default function Buttons({ButtonName, logo,id,currentItem}) {
  const ChangeCurrentContent  = useDispatch();
  const changeCurrentItems = ()=>{
    ChangeCurrentContent(DashBoardOptchange({CurrentContent:currentItem}))
  }
  return (
   <>
     <Link onClick={()=>{
      changeCurrentItems()
     }} key={id} className=" flex justify-between items-center h-14 w-[90%] rounded-xl bg-orange-500  hover:bg-gradient-to-r hover:from-[#f0608b] hover:via-[#bf09f7] hover:to-[#1a42f5] duration-200 active:scale-95 active:translate-x-0.5 active:translate-y-1" >
            <span className="ms-6 font-semibold text-[#110925] text-lg">{ButtonName}</span>
            <span className="me-6">{logo}</span>
        </Link>
   </>
  )
}
