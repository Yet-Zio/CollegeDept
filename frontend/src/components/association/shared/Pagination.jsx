/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";

export default function Pagination({ PageCount, top }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isExtraLargeScreen, setIsExtraLargeScreen] = useState(false);
  const [i, setI] = useState(0);
  const [j, setJ] = useState();

  const GetValue = () => {
    if (isSmallScreen) {
      return 1;
    } else if (isMediumScreen) {
      return 3;
    } else if (isLargeScreen) {
      return 6;
    } else {
      return 10;
    }
  };

  useEffect(
    () => setJ(GetValue()),
    [isSmallScreen, isLargeScreen, isMediumScreen, isExtraLargeScreen]
  );
  const [buttonPosition, setButtonPosition] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [Pages, SetPages] = useState(
    Array.from({ length: PageCount }, (_, index) => index + 1)
  );
  const [displayPages, setDisplayPages] = useState([]);

  const handleResize = () => {
    const width = window.innerWidth;

    if (width <= 640) {
      setIsSmallScreen(true);
      setIsMediumScreen(false);
      setIsLargeScreen(false);
      setIsExtraLargeScreen(false);
    } else if (width <= 1024) {
      setIsSmallScreen(false);
      setIsMediumScreen(true);
      setIsLargeScreen(false);
      setIsExtraLargeScreen(false);
    } else if (width <= 1280) {
      setIsSmallScreen(false);
      setIsMediumScreen(false);
      setIsLargeScreen(true);
      setIsExtraLargeScreen(false);
    } else {
      setIsSmallScreen(false);
      setIsMediumScreen(false);
      setIsLargeScreen(false);
      setIsExtraLargeScreen(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const butonTrigger = (val) => {
    if (val == 1) {
      if (j < PageCount) {
        setButtonPosition(buttonPosition + 1);
        setI(i + 1);
        setJ(j + 1);
      }
    } else {
      if (i > -1) {
        setButtonPosition(buttonPosition - 1);
        setI(i - 1);
        setJ(j - 1);
      }
    }
  };

  useEffect(() => {
    setDisplayPages(Pages.slice(i, j));
  }, [i, j]);

  const HandlePageTrigger = (val) => {
    console.log(val);
    //use calcuatltion which is the using this formatula Math.ceil(ContentItem.length / 20 ) if send the page number which you will get from this formula and the server should keep the total page which can possible be made the total number of articles and use that to idenity which 20 articles should be send to the front end according to the api call
  };
  return (
    <>
      <div
        className={`${
          top === 1 ? "flex justify-evenly items-center" : ""
        } bg-[#0b0b0b]`}
      >
        {top === 1 && <DropDown />}
        <div className="flex justify-center sm:p-7 p-0.5 pt-2 ">
          <button
            disabled={buttonPosition === 0}
            onClick={() => butonTrigger(0)}
            className={` flex items-center justify-center px-4 py-2 mx-1  rounded-md  rtl:-scale-x-100 bg-orange-900 hover:bg-orange-950 transition-colors`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
            </svg>
          </button>
          {displayPages.map((pageNumber) => (
            <Link
              key={pageNumber}
              onClick={() => HandlePageTrigger(pageNumber)}
              className={`bg-orange-700 hover:bg-orange-900 px-4 py-2  mx-1 transition-colors duration-300 transform rounded-md inline-block  text-black font-bold  hover:text-gray-200`}
            >
              {pageNumber}
            </Link>
          ))}
          <button
            // disabled={buttonPosition === displayPages.length}
            onClick={() => {
              butonTrigger(1);
            }}
            className="bg-orange-700 hover:bg-orange-900 px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md inline-block  text-black font-bold  hover:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
