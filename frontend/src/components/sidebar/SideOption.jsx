import React from "react";
import {ChartBar, ChalkboardTeacher, Student, Envelope, Scroll} from "@phosphor-icons/react/dist/ssr"

const SideIcon = (sideopt) => {
  switch (sideopt) {
    case "dashboard":
      return <ChartBar size={32} className="text-gray-300" weight="thin" />;
    case "teachers":
      return <ChalkboardTeacher size={32} className="text-gray-300" weight="thin" />
    case "batches":
      return <Student size={32} className="text-gray-300" weight="thin" />
    case "requests":
      return <Scroll size={32} className="text-gray-300" weight="thin"/>
    case "queries":
      return <Envelope size={32} className="text-gray-300" weight="thin" />
  }
};

export default function SideOption(props) {
  const activePage = props.activePage
  const pageFunc = props.pageFunc;
  const forwhich = props.forwhich

  const textcolor = () => {
    switch(forwhich){
      case "admin":
        return "text-gray-300"
      case "student":
        return "text-gray-200"
      default:
        return "text-gray-300"
    }
  }

  const bgcolor = () => {
    switch(forwhich){
      case "admin":
        return "bg-neutral-400/20"
      case "student":
        return "bg-neutral-300/20"
      default:
        return "bg-neutral-400/20"
    }
  }
  return (
    <div onClick={() => { pageFunc(props.option)}} className={`flex ms-2 mb-5 w-8 h-8 sm:w-16 sm:h-16 justify-center sm:justify-center hover:${bgcolor()} hover:border border-transparent rounded-full lg:justify-start lg:rounded-2xl lg:ps-2 lg:w-full lg:h-10 items-center select-none cursor-pointer ${activePage === props.option ? bgcolor() : ""}`}>
      {SideIcon(props.option)}
      <div className={`hidden useinter font-sans ${textcolor()} font-light ms-5 lg:flex`}>
        {props.name}
      </div>
    </div>
  );
}
