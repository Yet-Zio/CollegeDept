import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Article, Bell, User } from "@phosphor-icons/react";
import EventAvailableSharpIcon from '@mui/icons-material/EventAvailableSharp';
import { AssociateSideBarButtons } from "../../AssociationDashBoard";
import { DashBoardOptchange } from "../../../../redux/menu/DashBoardOpt";
import { useEffect, useState } from "react";
import axios from "axios";
export default function AssociateHome() {
  const ChangeCurrentContent  = useDispatch();
    const currentUser = useSelector((state) => state.user.currentUser);

    const [count , setCount] = useState({})
    console.log(count)

    useEffect(() => {

      const fetchDetails = async() => {

        await axios.get(`http://localhost:3000/api/associate/count/${currentUser._id}`)
        .then((res) => {
          setCount(res.data);
        })
        .catch((err) => {
          console.log(err)
        })

      }
      fetchDetails();

    } , [])

    console.log(currentUser);

    const changeCurrentItems = (e,index)=>{
      e.preventDefault()
      ChangeCurrentContent(DashBoardOptchange({CurrentContent:AssociateSideBarButtons[index].Content, SeletedOption:AssociateSideBarButtons[index].id,CurrentPath:AssociateSideBarButtons[index].NavigateTo}))
    }
  return (
    <>
      <div className="w-[100%] h-[100dvh] flex justify-center items-center overflow-auto  sm:mt-10 mt-32">
        <section id="testimonies" className="py-20 bg-gray-200 me-5">
          <div className=" mx-10 overflow-auto">
        <div className="transition duration-500 sm:flex hidden justify-center items-center ease-in-out transform  translate-x-0 translate-y-0 opacity-100">
          <div className="mb-5 sm:mb-10 space-y-5 md:mb-16 text-center">
            <div className="inline-block  w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] rounded-full bg-whitetext-sm font-semibold text-black  text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                <img src={currentUser.avatar} className="rounded-full" alt="" />
            </div>
            <h1 className=" text-xl font-semibold text-black text-center md:text-4xl">
                Welcome Back <span className="text-orange-600">{currentUser.firstname + " " + currentUser.lastname}</span> 
            </h1>
          </div>
        </div>

            <div className="grid grid-cols-1 h-[100dvh] sm:h-auto gap-2 sm:gap-6 sm:grid-cols-2  lg:gap-8  mb-36 mt-36 sm:mb-0 sm:mt-0">
              <ul className="sm:space-y-8 space-y-2 ">
                <li className="text-sm leading-6">
                  <div className="relative group">
                    <div className="relative transition rounded-lg opacity-25 duration-200 shadow shadow-white "></div>
                    <Link
                    onClick={(e)=>changeCurrentItems(e,1)}
                    >
                      <div className="relative py-3 px-20 lg  flex flex-col justify-center items-center leading-none rounded-lg bg-white shadow-sm hover:bg-gray-400 duration-200 hover:shadow-none shadow-black ">
                       <span className="text-2xl font-semibold">View</span>
                       <span className="text-3xl font-extralight italic">Profile</span>
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
                       <span className="text-2xl font-semibold">{count.eventCount}</span>
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
                       <span className="text-2xl font-semibold">{count.articleCount}</span>
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
                       <span className="text-2xl font-semibold">{count.notificationCount}</span>
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
  );
}
