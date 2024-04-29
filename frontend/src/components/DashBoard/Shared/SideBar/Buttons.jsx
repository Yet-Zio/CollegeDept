
import { Link, useNavigate } from "react-router-dom";
import { DashBoardOptchange } from "../../../../redux/menu/DashBoardOpt";
import { useDispatch} from "react-redux";

// eslint-disable-next-line react/prop-types
export default function Buttons({id,ButtonName ,Logo,navigateTo,Content,ActiveColor,logout}) {
  const ChangeCurrentContent  = useDispatch();
  const navigate = useNavigate();
  const changeCurrentItems = (val)=>{
    ChangeCurrentContent(DashBoardOptchange({CurrentContent:Content, SeletedOption:val,CurrentPath:navigateTo}))
    if(window.innerWidth<768)
      ChangeCurrentContent(DashBoardOptchange({PrimarySideBarEnabled:false}))
  }
  return (
   <>
     <Link onClick={()=>{
      changeCurrentItems(id);
      if(ButtonName === "Log out"){
        logout();
        navigate('/');
      };
     }} key={id} className={`flex justify-between items-center h-12 w-[80%] rounded-xl bg-[#111111] hover:bg-orange-600 duration-200 active:scale-95 active:translate-x-0.5 active:translate-y-1 ${ActiveColor}`} >
            <span className="ms-4 font-semibold text-[white] text-sm">{ButtonName}</span>
            <span className="me-4 text-white">{Logo}</span>
        </Link>
   </>
  )
}
