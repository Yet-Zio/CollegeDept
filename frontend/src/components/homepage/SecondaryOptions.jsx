import { GraduationCap, Student } from "@phosphor-icons/react";
import React, { Suspense, useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../Shared/Spinner";
const RecomendedTools = React.lazy(() => import("./RecomendedTools"));


export default function SecondaryOptions() {
    const [secondaryStyle,setSecondaryStyle] = useState();
    useEffect(()=>{
        setSecondaryStyle();
    },[])
    const selectedMenu = useSelector((state) => state.menuOpt);
  return (
    <>
        {(selectedMenu.isLogin && selectedMenu.isWdithLow || selectedMenu.primaryOptions===1) && (
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
                  className="h-[10%] w-full flex justify-evenly items-center hover:text-[#f5700a] "
                >
                  <GraduationCap size={32} />
                  Login as Teacher
                </Link>
                
              </>
            )}
            {selectedMenu.isAssociation && (
              <>
                <div className="h-[10%] w-full flex justify-start items-center hover:text-[#f5700a] ">
                  association
                </div>
              </>
            )}
            {selectedMenu.isContactUs && (
              <>
                <div className="h-[10%] w-full flex justify-start items-center hover:text-[#f5700a] ">
                  Contact us
                </div>
              </>
            )}
            {selectedMenu.isAbout && (
              <>
                <div className="h-[10%] w-full flex justify-start items-center hover:text-[#f5700a]">
                  {" "}
                  isabout
                </div>
              </>
            )}
            {selectedMenu.isRecomendedTools && (
              <>
                <Suspense fallback={<Spinner />}>
                  <RecomendedTools />
                </Suspense>
              </>
            )}
    </>
  )
}
