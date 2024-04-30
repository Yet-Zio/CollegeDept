import { Link } from "react-router-dom"
import { DashBoardOptchange } from "../../../../redux/menu/DashBoardOpt";
import { AssociateSideBarButtons } from "../../AssociationDashBoard";
import { AdminSideBarButtons } from "../../AdminDashBoard";
import { useDispatch, useSelector } from "react-redux";
import { Article, Bell, User } from "@phosphor-icons/react";
import EventAvailableSharpIcon from '@mui/icons-material/EventAvailableSharp';

export default function AdminHomePage() {
  const ChangeCurrentContent  = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  console.log(currentUser);

  const changeCurrentItems = (e,index)=>{
    e.preventDefault()
    ChangeCurrentContent(DashBoardOptchange({CurrentContent:[index].Content, SeletedOption:AdminSideBarButtons[index].id,CurrentPath:AssociateSideBarButtons[index].NavigateTo}))
  }
  return (
    <>
      <div className="w-[100%] h-[100dvh] flex justify-center items-center overflow-auto  sm:mt-10 mt-32">
        <section id="testimonies" className="py-20 bg-gray-200 me-5">
          <div className=" mx-10 overflow-auto">
            <div className="grid grid-cols-1 h-[100dvh] sm:h-auto gap-2 sm:gap-6 sm:grid-cols-2  lg:gap-8  mb-36 mt-36 sm:mb-0 sm:mt-0">
              <ul className="sm:space-y-8 space-y-2 ">
                <li className="text-sm leading-6">
                  <div className="relative group">
                    <div className="relative transition rounded-lg opacity-25 duration-200 shadow shadow-white "></div>
                    <Link
                    onClick={(e)=>changeCurrentItems(e,1)}
                    >
                      <div className="relative py-3 px-20 lg  flex flex-col justify-center items-center leading-none rounded-lg bg-white shadow-sm hover:bg-gray-400 duration-200 hover:shadow-none shadow-black ">
                       <span className="text-2xl font-semibold">Staff</span>
                       <span className="text-3xl font-extralight italic">Management</span>
                       <span><User size={150} weight="duotone" /></span>
                      </div>
                    </Link>
                  </div>
                </li>
                <li className="text-sm leading-6">
                  <div className="relative group">
                    <div className="absolute transition rounded-lg opacity-25 duration-200"></div>
                    <Link
                       onClick={(e)=>{changeCurrentItems(e,4)}}
                    >
                    <div className="relative py-3 px-20 lg  flex flex-col justify-center items-center leading-none rounded-lg bg-white hover:bg-gray-400 duration-200 hover:shadow-none shadow-sm shadow-black ">
                       <span className="text-2xl font-semibold">{2}</span>
                       <span  className="text-3xl font-extralight italic">Event</span>
                       <span className="text-[8.732rem]"><EventAvailableSharpIcon fontSize="inherit"/></span>
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
              <ul className="sm:space-y-8 space-y-2">
              <li className="text-sm leading-6">
                  <div className="relative group">
                    <div className="absolute transition rounded-lg opacity-25 duration-200"></div>
                    <Link
                       onClick={(e)=>{changeCurrentItems(e,4)}}
                    >
                    <div className="relative py-3 px-20 lg  flex flex-col justify-center items-center leading-none rounded-lg bg-white hover:bg-gray-400 duration-200 hover:shadow-none shadow-sm shadow-black ">
                       <span className="text-2xl font-semibold">{4}</span>
                       <span className="text-3xl font-extralight italic">Article</span>
                       <span><Article size={150} weight="duotone" /></span>
                      </div>
                    </Link>
                  </div>
                </li>           <li className="text-sm leading-6">
                  <div className="relative group">
                    <div className="absolute transition rounded-lg opacity-25 duration-200"></div>
                    <Link
                      onClick={(e)=>{changeCurrentItems(e,5)}}
                    >
                    <div className="relative py-3 px-20 lg  flex flex-col justify-center items-center leading-none rounded-lg bg-white hover:bg-gray-400 duration-200 hover:shadow-none shadow-sm shadow-black ">
                       <span className="text-2xl font-semibold">{8}</span>
                       <span className="text-3xl font-extralight italic">Notification</span>
                       <span><Bell size={150} weight="duotone" /></span>
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
