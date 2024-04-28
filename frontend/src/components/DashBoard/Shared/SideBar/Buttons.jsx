
import { Link } from "react-router-dom";
import { DashBoardOptchange } from "../../../../redux/menu/DashBoardOpt";
import { useDispatch} from "react-redux";

// eslint-disable-next-line react/prop-types
export default function Buttons({id,ButtonName ,Logo,navigateTo,Content,ActiveColor}) {
  const ChangeCurrentContent  = useDispatch();
  const changeCurrentItems = (val)=>{
    console.log(navigateTo)
    ChangeCurrentContent(DashBoardOptchange({CurrentContent:Content, SeletedOption:val,CurrentPath:navigateTo}))
  }
  return (
   <>
     <Link onClick={()=>{
      changeCurrentItems(id)
     }} key={id} className={`flex justify-between items-center h-12 w-[80%] rounded-xl bg-[#111111] hover:bg-orange-600 duration-200 active:scale-95 active:translate-x-0.5 active:translate-y-1 ${ActiveColor}`} >
            <span className="ms-4 font-semibold text-[white] text-sm">{ButtonName}</span>
            <span className="me-4 text-white">{Logo}</span>
        </Link>
   </>
  )
}
