import { CaretRight } from "@phosphor-icons/react";
import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { change } from "../../redux/menu/MenuOptSlice";
import RecomendedTools from "./RecomendedTools";
export default function Menu(){
    const selectedMenu =useSelector(state=>state.menuOpt)
    const MenuDispach = useDispatch()
  useEffect(()=>{
    MenuDispach(change({isHover:"text-[#f5700a]"}))
  },[])
  const ResetAll = () => {
    MenuDispach(change({isLogin: false, isAssociation: false, isContactUs: false, isAbout: false}))
  };
  const triggerMouserOver = (value) => {
    console.log(selectedMenu)
    switch (value) {
      case 1:
        MenuDispach(change({isLogin: true, isAssociation: false, isContactUs: false, isAbout: false,isRecomendedTools:false}))
        break;
      case 2:
        MenuDispach(change({isLogin: false, isAssociation: true, isContactUs: false, isAbout: false,isRecomendedTools:false}))
        break;
      case 3:
        MenuDispach(change({isLogin: false, isAssociation: false, isContactUs: true, isAbout: false,isRecomendedTools:false}))
        break;
      case 4:
        MenuDispach(change({isLogin: false, isAssociation: false, isContactUs: false, isAbout: true,isRecomendedTools:false}))
        break;
      case 5:
        MenuDispach(change({isLogin: false, isAssociation: false, isContactUs: false, isAbout: false,isRecomendedTools:true}))
        break;
      default:
        break;
    }
  };
  const triggerMouserLeave = (value) => {
    switch (value) {
      case 1:
        MenuDispach(change({isAssociation: false, isContactUs: false, isAbout: false,isRecomendedTools:false}))
        break;
      case 2:
        MenuDispach(change({isLogin: false, isContactUs: false, isAbout: false,isRecomendedTools:false}))
        break;
      case 3:
        MenuDispach(change({isLogin: false, isAssociation: false, isAbout: false,isRecomendedTools:false}))
        break;
      case 4:
        MenuDispach(change({isLogin: false, isAssociation: false, isContactUs: false,isRecomendedTools:false}))
        break;
      case 5:
        MenuDispach(change({isLogin: false, isAssociation: false, isContactUs: false, isAbout: false}))
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="w-full h-full bg-[#151515] fixed z-10 flex justify-center items-center">
        <div
          onMouseLeave={() => {ResetAll();
            MenuDispach(change({isRecomendedTools: false}))
          }}
          className="h-[50%] w-[70%] mt-[10dvh] flex justify-evenly items-center"
        >
          <div className="w-[30%] h-[100%] text-[#dbdbdb] font-bold text-lg flex flex-col justify-center">
            <div
              onMouseEnter={() => triggerMouserOver(1)}
              onMouseLeave={() => triggerMouserLeave(1)}
              className={`${
                selectedMenu.isLogin ? selectedMenu.isHover : ""
              } h-[10%] w-full border-b-[1px] border-[#757474] flex justify-between items-center`}
            >
              <div>Login</div>
              <CaretRight size={28} />
            </div>
            <div
              onMouseEnter={() => triggerMouserOver(2)}
              onMouseLeave={() => triggerMouserLeave(2)}
              className={`${
                selectedMenu.isAssociation ? selectedMenu.isHover : ""
              } h-[10%] w-full border-b-[1px] border-[#757474] flex justify-between items-center`}
            >
              <div>Association</div>
              <CaretRight size={28} />
            </div>
            <div
              onMouseEnter={() => triggerMouserOver(3)}
              onMouseLeave={() => triggerMouserLeave(3)}
              className={`${
                selectedMenu.isContactUs ? selectedMenu.isHover : ""
              } h-[10%] w-full border-b-[1px] border-[#757474] flex justify-between items-center`}
            >
              <div>Contact us</div>
              <CaretRight size={28} />
            </div>
            <div
              onMouseEnter={() => triggerMouserOver(4)}
              onMouseLeave={() => triggerMouserLeave(4)}
              className={`${
                selectedMenu.isAbout ? selectedMenu.isHover : ""
              } h-[10%] w-full border-b-[1px] border-[#757474] flex justify-between items-center`}
            >
              <div>About</div>
              <CaretRight size={28} />
            </div>
            <div
              onMouseEnter={() => triggerMouserOver(5)}
              onMouseLeave={() => triggerMouserLeave(5)}
              className={`${
                selectedMenu.isRecomendedTools ? selectedMenu.isHover : ""
              } h-[10%] w-full border-b-[1px] border-[#757474] flex justify-between items-center`}
            >
              <div>Recomended Tools</div>
              <CaretRight size={28} />
            </div>
          </div>
          <div
            onMouseLeave={() => ResetAll()}
            className="w-[30%] h-[100%] text-[#dbdbdb] font-bold text-xl flex flex-col justify-center items-center"

          >
            {selectedMenu.isLogin && (
              <>
                <div className="h-[10%] w-full flex justify-start items-center hover:text-[#f5700a] ">
                  Login as Student
                </div>
                <div className="h-[10%] w-full flex justify-start items-center hover:text-[#f5700a] ">
                  Login as Teacher
                </div>
              </>
            )}
            {selectedMenu.isAssociation && (
              <>
                <div
                className="h-[10%] w-full flex justify-start items-center hover:text-[#f5700a] "
                >association</div>
              </>
            )}
            {selectedMenu.isContactUs && (
              <>
                <div
                className="h-[10%] w-full flex justify-start items-center hover:text-[#f5700a] "
                >Contact us</div>
              </>
            )}
            {selectedMenu.isAbout && (
              <>
                <div
                className="h-[10%] w-full flex justify-start items-center hover:text-[#f5700a]"
                > isabout</div>
              </>
            )}
            {selectedMenu.isRecomendedTools && (
              <>
               <RecomendedTools/>
              </>
            )}
          </div>
         {/* here is the about section */}
        </div>
      </div>
    </>
  );
}
