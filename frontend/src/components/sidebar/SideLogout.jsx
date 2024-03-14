import { SignOut } from "@phosphor-icons/react";
import React from "react";

export default function SideLogout(props) {
  const forwhich = props.forwhich;
  const textcolor = () => {
    switch (forwhich) {
      case "admin":
        return "text-gray-300";
      case "student":
        return "text-gray-100";
      default:
        return "text-gray-300";
    }
  };

  const bgcolor = () => {
    switch (forwhich) {
      case "admin":
        return "bg-neutral-400/20";
      case "student":
        return "bg-neutral-200/20";
      default:
        return "bg-neutral-400/20";
    }
  };

  const hovercolor = () => {
    switch (forwhich) {
      case "admin":
        return "hover:bg-neutral-400/20";
      case "student":
        return "hover:bg-neutral-200/20";
      default:
        return "hover:bg-neutral-400/20";
    }
  };

  const renderLogOutIcon = () => {
    switch (forwhich) {
      case "admin":
        return <SignOut size={32} className="text-gray-300" weight="thin" />;
      case "student":
        return <SignOut size={32} className="text-gray-100" weight="thin" />;
      default:
        return <SignOut size={32} className="text-gray-300" weight="thin" />;
    }
  };
  return (
    <button
      className={`flex ms-2 mb-5 w-8 h-8 sm:w-16 sm:h-16 justify-center sm:justify-center ${hovercolor()} hover:border border-transparent rounded-full lg:justify-start lg:rounded-2xl lg:ps-2 lg:w-full lg:h-10 items-center select-none cursor-pointer`}
    >
      {renderLogOutIcon()}
      <div
        className={`hidden useinter font-sans ${textcolor()} font-light ms-5 lg:flex`}
      >
        Log out
      </div>
    </button>
  );
}
