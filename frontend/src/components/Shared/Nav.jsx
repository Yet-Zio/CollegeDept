import React, { Suspense, useEffect, useState } from "react";
import "./nav.css";
import search from "../../assets/search-icon-2044x2048-psdrpqwp.png";
import logo from "../../assets/collegedepticon.png";
import { X } from "@phosphor-icons/react";
import Spinner from "./Spinner";
import { useSelector } from "react-redux";
import SmMenu from "../homepage/SmMenu";
const Menu = React.lazy(()=>import("../homepage/Menu"))

// eslint-disable-next-line react/prop-types
export default function Nav({ sendDataToParent }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const selectedMenu = useSelector((state)=> state.menuOpt)
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 5;
      setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isColapseActive, setCollapseActive] = useState(false);
  const collapseButtonTrigger = () => {
    setCollapseActive(!isColapseActive);
    sendDataToParent(isColapseActive);
    
  };

  return (
    <>
      <div className={`c-nav ${isScrolled ? "scrolled" : "notscrolled"} z-20`}>
        <div className={`${isScrolled ? "dissapearonscroll" : "line"}`}></div>
        <div className="c-container">
          <button
            onClick={() => collapseButtonTrigger()}
            className="colapse-btn c-border"
          >
            {isColapseActive && <X size={32} className="text-white" />}
            {!isColapseActive && (
              <>
                <span></span>
                <span></span>
                <span></span>
              </>
            )}
          </button>
          <div className="c-logo">
            <img
              src={logo}
              alt=""
              className={` ${isScrolled ? "logo-scrolled" : "logo"}`}
            />
            <span
              className={`useHeading  ${isScrolled ? "title-scrolled" : ""}`}
            >
              DEPT OF CS
            </span>
          </div>
          <div className="search c-border">
            <img src={search} />
          </div>
        </div>
      </div>
      {/* check weather the screen is low or not if its low then dont show the <Menu /> show the small menu for small screen */}
      {(isColapseActive)&&(
         <Suspense fallback={<Spinner/>}>
             <Menu />
         </Suspense>
      )}
      {(selectedMenu.isWdithLow && isColapseActive) && 
        <div
        className={`${isScrolled ? "top-[5dvh] scrolled" : " notscrolled top-[10dvh] bg-[black]"} 
        fixed h-[80dvh] duration-200 left-0 w-[55%] z-10  flex justify-center items-center`}>
          <SmMenu />
        </div>
      }
    </>
  );
}
