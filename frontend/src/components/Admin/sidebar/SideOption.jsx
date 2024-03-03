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
  return (
    <div onClick={() => { pageFunc(props.option)}} className={`flex ms-2 mb-5 w-8 h-8 sm:w-16 sm:h-16 justify-center sm:justify-center hover:bg-neutral-400/20 hover:border border-transparent rounded-full lg:justify-start lg:rounded-full lg:ps-2 lg:w-full lg:h-10 items-center select-none cursor-pointer ${activePage === props.option ? "bg-neutral-400/20" : ""}`}>
      {SideIcon(props.option)}
      <div className="hidden useinter font-sans text-gray-300 font-light ms-5 lg:flex">
        {props.name}
      </div>
    </div>
  );
}
