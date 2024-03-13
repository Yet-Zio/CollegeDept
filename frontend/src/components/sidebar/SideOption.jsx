import React from "react";
import {ChartBar, ChalkboardTeacher, Student, Envelope, Scroll,
User, BookOpenText, ClockCountdown, MegaphoneSimple} from "@phosphor-icons/react/dist/ssr"

const AdminSideIcon = (sideopt) => {
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
    default:
      return <ChartBar size={32} className="text-gray-300" weight="thin" />;
  }
};

const StudentSideIcon = (sideopt) => {
  switch (sideopt) {
    case "dashboard":
      return <ChartBar size={32} className="text-gray-100" weight="thin" />;
    case "profile":
      return <User size={32} className="text-gray-100" weight="thin" />;
    case "homeworks":
      return <BookOpenText size={32} className="text-gray-100" weight="thin" />;
    case "schedules":
      return <ClockCountdown size={32} className="text-gray-100" weight="thin" />;
    case "announcements":
      return <MegaphoneSimple size={32} className="text-gray-100" weight="thin" />;
    default:
      return <ChartBar size={32} className="text-gray-100" weight="thin" />;
  }
}

export default function SideOption(props) {
  const activePage = props.activePage
  const pageFunc = props.pageFunc;
  const forwhich = props.forwhich

  const textcolor = () => {
    switch(forwhich){
      case "admin":
        return "text-gray-300"
      case "student":
        return "text-gray-100"
      default:
        return "text-gray-300"
    }
  }

  const bgcolor = () => {
    switch(forwhich){
      case "admin":
        return "bg-neutral-400/20"
      case "student":
        return "bg-neutral-200/20"
      default:
        return "bg-neutral-400/20"
    }
  }

  const hovercolor = () => {
    switch(forwhich){
      case "admin":
        return "hover:bg-neutral-400/20"
      case "student":
        return "hover:bg-neutral-200/20"
      default:
        return "hover:bg-neutral-400/20"
    }
  }

  const renderSideIcon = () => {
    switch(forwhich){
      case "admin":
        return AdminSideIcon(props.option)
      case "student":
        return StudentSideIcon(props.option)
    }
  }
  return (
    <div onClick={() => { pageFunc(props.option)}} className={`flex ms-2 mb-5 w-8 h-8 sm:w-16 sm:h-16 justify-center sm:justify-center ${hovercolor()} hover:border border-transparent rounded-full lg:justify-start lg:rounded-2xl lg:ps-2 lg:w-full lg:h-10 items-center select-none cursor-pointer ${activePage === props.option ? bgcolor() : ""}`}>
      {renderSideIcon()}
      <div className={`hidden useinter font-sans ${textcolor()} font-light ms-5 lg:flex`}>
        {props.name}
      </div>
    </div>
  );
}
