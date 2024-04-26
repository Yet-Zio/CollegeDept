import { Alien, Article, Buildings, ChalkboardTeacher, FloppyDiskBack, GraduationCap, Student, UsersThree, } from "@phosphor-icons/react";
import React, { Suspense } from "react";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../../Common/Spinner";

const RecomendedTools = React.lazy(() => import("./RecomendedToolsOptions"));


export default function SecondaryOptions() {
    const selectedMenu = useSelector((state) => state.menuOpt);
  return (
    <>
        {(selectedMenu.primaryOptions===1) && (
                <>
                <Link
                  to={"/studentlogin"}
                  className="h-[10%] w-full flex justify-evenly items-center hover:text-[#f5700a]"
                >
                  <Student size={32} />
                  Login as Student
                </Link>
                <Link
                  to={"/teacherlogin"}
                  className="h-[10%] w-full flex justify-evenly items-center hover:text-[#f5700a]"
                >
                  <GraduationCap size={32} />
                  Login as Teacher
                </Link>
                
              </>
            )}
            {(selectedMenu.primaryOptions==2) && (
              <>
                <Link to={"/home-assoc"} className="h-[10%] w-full flex justify-evenly items-center hover:text-[#f5700a] ">
                <Article size={32} />
                  Association Home
                </Link>
                <Link to={"/assoclogin"} className="h-[10%] w-full flex justify-evenly items-center hover:text-[#f5700a] ">
                <UsersThree size={32} />
                  Association Login
                </Link>
              </>
            )}
            {(selectedMenu.primaryOptions==3) && (
              <>
                <Link to={"/contact-us"} className="h-[10%] w-full flex justify-evenly items-center hover:text-[#f5700a] ">
                <FloppyDiskBack size={32} weight="duotone" />
                  Contact Us
                </Link>
              </>
            )}
            {(selectedMenu.primaryOptions==4) && (
              <>
                <Link to={"/about-creators"} className="h-[10%] w-full flex justify-evenly items-center hover:text-[#f5700a]">
                <Alien size={32} weight="duotone" />
                  About Creators
                </Link>
                <Link to={"/about-staff"} className="h-[10%] w-full flex justify-evenly items-center hover:text-[#f5700a]">
                <ChalkboardTeacher size={32} weight="duotone" />
                  About Teachers
                </Link>
                <Link to={"/about-deapartment"} className="h-[10%] w-full flex justify-evenly items-center hover:text-[#f5700a]">
                <Buildings size={32} weight="duotone" />
                  About Department
                </Link>
              </>
            )}
            {(selectedMenu.primaryOptions==5) && (
                  <Suspense fallback={<Spinner />}>
                  <RecomendedTools />
                </Suspense>
            )}
    </>
  )
}
