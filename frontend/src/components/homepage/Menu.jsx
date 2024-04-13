import { CaretRight } from "@phosphor-icons/react";
import tuxImage from "../../assets/TuxLinux.png";
import { useState } from "react";
export default function Menu() {
  const [isLogin, setLogin] = useState(false);
  const [isAssociation, setAssociation] = useState(false);
  const [isContactUs, setContactUs] = useState(false);
  const [isAbout, setAbout] = useState(false);
  const [isRecomendedTools, setRecomendedTools] = useState(false);
  const [isHover, setHover] = useState("text-[#f5700a]");

  const ResetAll = () => {
    setLogin(false);
    setAssociation(false);
    setContactUs(false);
    setRecomendedTools(false);
    setAbout(false);
  };
  const triggerMouserOver = (value) => {
    switch (value) {
      case 1:
        setLogin(true);
        setAssociation(false);
        setContactUs(false);
        setAbout(false);
        setRecomendedTools(false);
        break;
      case 2:
        setAssociation(true);
        setLogin(false);
        setContactUs(false);
        setAbout(false);
        setRecomendedTools(false);
        break;
      case 3:
        setContactUs(true);
        setLogin(false);
        setAssociation(false);
        setAbout(false);
        setRecomendedTools(false);
        break;
      case 4:
        setAbout(true);
        setLogin(false);
        setAssociation(false);
        setContactUs(false);
        setRecomendedTools(false);
        break;
      case 5:
        setRecomendedTools(true);
        setLogin(false);
        setAssociation(false);
        setContactUs(false);
        setAbout(false);
        break;
      default:
        break;
    }
  };
  const triggerMouserLeave = (value) => {
    switch (value) {
      case 1:
        setAssociation(false);
        setContactUs(false);
        setAbout(false);
        setRecomendedTools(false);
        break;
      case 2:
        setLogin(false);
        setContactUs(false);
        setAbout(false);
        setRecomendedTools(false);
        break;
      case 3:
        setLogin(false);
        setAssociation(false);
        setAbout(false);
        setRecomendedTools(false);
        break;
      case 4:
        setLogin(false);
        setAssociation(false);
        setContactUs(false);
        setRecomendedTools(false);
        break;
      case 5:
        setLogin(false);
        setAssociation(false);
        setContactUs(false);
        setAbout(false);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="w-full h-full bg-[#151515] fixed left-0 duration-300 z-10 flex justify-center items-center">
        <div
          onMouseLeave={() => ResetAll()}
          className="h-[80%] w-[70%] mt-[10dvh] flex justify-evenly items-center"
        >
          <div className="w-[30%] h-[60%] mb-[30dvh] text-[#dbdbdb] font-bold text-lg flex flex-col justify-center">
            <div
              onMouseEnter={() => triggerMouserOver(1)}
              onMouseLeave={() => triggerMouserLeave(1)}
              className={`${
                isLogin ? isHover : ""
              } h-[10%] w-full border-b-[1px] border-[#757474] flex justify-between items-center`}
            >
              <div>Login</div>
              <CaretRight size={28} />
            </div>
            <div
              onMouseEnter={() => triggerMouserOver(2)}
              onMouseLeave={() => triggerMouserLeave(2)}
              className={`${
                isAssociation ? isHover : ""
              } h-[10%] w-full border-b-[1px] border-[#757474] flex justify-between items-center`}
            >
              <div>Association</div>
              <CaretRight size={28} />
            </div>
            <div
              onMouseEnter={() => triggerMouserOver(3)}
              onMouseLeave={() => triggerMouserLeave(3)}
              className={`${
                isContactUs ? isHover : ""
              } h-[10%] w-full border-b-[1px] border-[#757474] flex justify-between items-center`}
            >
              <div>Contact us</div>
              <CaretRight size={28} />
            </div>
            <div
              onMouseEnter={() => triggerMouserOver(4)}
              onMouseLeave={() => triggerMouserLeave(4)}
              className={`${
                isAbout ? isHover : ""
              } h-[10%] w-full border-b-[1px] border-[#757474] flex justify-between items-center`}
            >
              <div>About</div>
              <CaretRight size={28} />
            </div>
            <div
              onMouseEnter={() => triggerMouserOver(5)}
              onMouseLeave={() => triggerMouserLeave(5)}
              className={`${
                isRecomendedTools ? isHover : ""
              } h-[10%] w-full border-b-[1px] border-[#757474] flex justify-between items-center`}
            >
              <div>Recomended Tools</div>
              <CaretRight size={28} />
            </div>
          </div>
          <div
            onMouseLeave={() => ResetAll()}
            className="w-[30%] h-[60%] mb-[30dvh] text-[#dbdbdb] font-bold text-xl flex flex-col justify-center"
          >
            {isLogin && (
              <>
                <div className="h-[10%] w-full flex justify-center items-center hover:text-[#f5700a] ">
                  Login as Student
                </div>
                <div className="h-[10%] w-full flex justify-center items-center hover:text-[#f5700a] ">
                  Login as Teacher
                </div>
              </>
            )}
            {isAssociation && (
              <>
                <div>association</div>
              </>
            )}
            {isContactUs && (
              <>
                <div>Contact us</div>
              </>
            )}
            {isAbout && (
              <>
                <div> isabout</div>
              </>
            )}
            {isRecomendedTools && (
              <>
                <div>recomened tools</div>
              </>
            )}
          </div>
          <div className="w-[30%] h-[70%] mb-[10dvh] flex flex-col justify-center items-center">
            <img src={tuxImage} className="h-[25dvh] w-[20dvh]" alt="" />
            <span className="h-[80%] text-[#d6943e] mt-6 text-justify">
              if you're serious about leveling up your coding game or mastering
              any technical field, getting cozy with Linux is pretty much a
              must-do. Think of it as a secret sauce to becoming a ninja coder.
              Why? Well, for starters, Linux is like this super customizable
              playground for developers. You can tweak it, bend it, and make it
              work just the way you want. Plus, it's open-source, meaning
              there's this whole community of brainiacs constantly making it
              better. And get this – Android, yeah, the operating system running
              on most smartphones, is built on Linux. Oh, and ever wondered what
              powers a ton of the servers behind the scenes of the internet? You
              guessed it – Linux again. So, by diving into Linux, you're not
              just learning a new OS; you're tapping into the backbone of tech.
              It's like getting a backstage pass to the coolest show in town.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
