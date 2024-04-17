import { GraduationCap, Student } from "@phosphor-icons/react";
import React, { Suspense } from "react";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../Shared/Spinner";

const RecomendedTools = React.lazy(() => import("./RecomendedTools"));


export default function SecondaryOptions() {
    const selectedMenu = useSelector((state) => state.menuOpt);
  return (
    <>
        {(selectedMenu.primaryOptions===1) && (
                <>
                <Link
                  to={"studentlogin"}
                  className="h-[10%] w-full flex justify-evenly items-center hover:text-[#f5700a]"
                >
                  <Student size={32} />
                  Login as Student
                </Link>
                <Link
                  to={"teacherlogin"}
                  className="h-[10%] w-full flex justify-evenly items-center hover:text-[#f5700a]"
                >
                  <GraduationCap size={32} />
                  Login as Teacher
                </Link>
                
              </>
            )}
            {(selectedMenu.primaryOptions==2) && (
              <>
                <div className="h-[10%] w-full flex justify-start items-center hover:text-[#f5700a] ">
                  association
                </div>
              </>
            )}
            {(selectedMenu.primaryOptions==3) && (
              <>
                <div className="h-[10%] w-full flex justify-start items-center hover:text-[#f5700a] ">
                  Contact us
                </div>
              </>
            )}
            {(selectedMenu.primaryOptions==4) && (
              <>
                <div className="h-[10%] w-full flex justify-start items-center hover:text-[#f5700a]">
                  isabout
                </div>
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
