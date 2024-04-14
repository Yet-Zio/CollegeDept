import { CaretRight, Student, GraduationCap } from "@phosphor-icons/react";
import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../redux/menu/MenuOptSlice";
const RecomendedTools = React.lazy(() => import("./RecomendedTools"));
const DisplayRecomentation = React.lazy(() => import("./DisplayRecomentation"));
import { Link } from "react-router-dom";
import Spinner from "../Shared/Spinner";
import AboutCs from "./Recomendedtools/AboutCs";
export default function Menu() {
  const selectedMenu = useSelector((state) => state.menuOpt);
  const MenuDispach = useDispatch();
  useEffect(() => {
    MenuDispach(change({ isHover: "text-[#f5700a]" }));
  }, []);
  const ResetAll = () => {
    MenuDispach(
      change({
        isAboutCs: true,
        isLogin: false,
        isAssociation: false,
        isContactUs: false,
        isAbout: false,
        isLinux: false,
        isSpring: false,
        isReact: false,
        isAngular: false,
        isVscode: false,
        isTailwind: false,
      })
    );
  };
  const triggerMouserOver = (value) => {
    switch (value) {
      case 1:
        MenuDispach(
          change({
            isAboutCs:true,
            isLogin: true,
            isAssociation: false,
            isContactUs: false,
            isAbout: false,
            isRecomendedTools: false,
            isLinux: false,
            isSpring: false,
            isReact: false,
            isAngular: false,
            isVscode: false,
            isTailwind: false,
          })
        );
        break;
      case 2:
        MenuDispach(
          change({
            isAboutCs: true,
            isLogin: false,
            isAssociation: true,
            isContactUs: false,
            isAbout: false,
            isRecomendedTools: false,
            isLinux: false,
            isSpring: false,
            isReact: false,
            isAngular: false,
            isVscode: false,
            isTailwind: false,
          })
        );
        break;
      case 3:
        MenuDispach(
          change({
            isAboutCs: true,
            isLogin: false,
            isAssociation: false,
            isContactUs: true,
            isAbout: false,
            isRecomendedTools: false,
            isLinux: false,
            isSpring: false,
            isReact: false,
            isAngular: false,
            isVscode: false,
            isTailwind: false,
          })
        );
        break;
      case 4:
        MenuDispach(
          change({
            isAboutCs: true,
            isLogin: false,
            isAssociation: false,
            isContactUs: false,
            isAbout: true,
            isRecomendedTools: false,
            isLinux: false,
            isSpring: false,
            isReact: false,
            isAngular: false,
            isVscode: false,
            isTailwind: false,
          })
        );
        break;
      case 5:
        MenuDispach(
          change({
            isLogin: false,
            isAssociation: false,
            isContactUs: false,
            isAbout: false,
            isRecomendedTools: true,
          })
        );
        break;
      default:
        break;
    }
  };
  const triggerMouserLeave = (value) => {
    switch (value) {
      case 1:
        MenuDispach(
          change({
            isAssociation: false,
            isContactUs: false,
            isAbout: false,
            isRecomendedTools: false,
          })
        );
        break;
      case 2:
        MenuDispach(
          change({
            isLogin: false,
            isContactUs: false,
            isAbout: false,
            isRecomendedTools: false,
          })
        );
        break;
      case 3:
        MenuDispach(
          change({
            isLogin: false,
            isAssociation: false,
            isAbout: false,
            isRecomendedTools: false,
          })
        );
        break;
      case 4:
        MenuDispach(
          change({
            isLogin: false,
            isAssociation: false,
            isContactUs: false,
            isRecomendedTools: false,
          })
        );
        break;
      case 5:
        MenuDispach(
          change({
            isLogin: false,
            isAssociation: false,
            isContactUs: false,
            isAbout: false,
          })
        );
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="w-full h-full bg-[#151515] fixed z-10 flex justify-center items-center useinter">
        <div
          onMouseLeave={() => {
            ResetAll();
            MenuDispach(change({ isRecomendedTools: false }));
          }}
          className="h-[55%] w-[90%] flex justify-evenly items-center"
        >
          <div className="w-[20%] h-[100%] text-[#dbdbdb] font-bold text-lg flex flex-col justify-center">
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
          <div className="w-[14%] h-[100%] text-[#dbdbdb] font-bold text-xl flex flex-col justify-center items-center">
            {selectedMenu.isLogin && (
              <>
                <Link
                  to={"studentlogin"}
                  className="h-[10%] w-full flex justify-between items-center hover:text-[#f5700a] "
                >
                  Login as Student
                  <Student size={32} />
                </Link>
                <Link
                  to={"teacherlogin"}
                  className="h-[10%] w-full flex justify-between items-center hover:text-[#f5700a] "
                >
                  Login as Teacher
                  <GraduationCap size={32} />
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
          </div>
          <div className="w-[30%] hidden xl:flex flex-col justify-center items-center ">
          {selectedMenu.isAboutCs && <AboutCs/>}
            <Suspense fallback={<Spinner />}>
              <DisplayRecomentation />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
