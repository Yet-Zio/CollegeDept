import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";

export default function DropDown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption,setSelectedOption] = useState();
  return (
    <>
      <div className="relative flex p-0.5 pt-2">
        <input
        onClick={()=>setIsOpen(!isOpen)}
        readOnly
          type="text"
          placeholder={selectedOption===2?"Oldest Uploads":" Latest Uploads"}
          className="py-[.19rem] px-2 w-full border-none active:border-none bg-[#1a1818] text-white"
        />
              {/* Dropdown toggle button */}
      <button onClick={() => setIsOpen(!isOpen)} className="relative z-10 block p-2 text-gray-700 bg-[#262626] focus:outline-none active:bg-[#595858] hover:bg-[#303030]">
      <CaretDown size={30} className={`${isOpen?"text-orange-600":"text-white"} duration-200`} />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute left-0.5 z-20 sm:w-52 w-36 py-2 mt-[3.1rem] origin-top-right bg-[#0B0B0B] rounded-md duration-300 shadow-xl">
          <span onClick={()=>{setSelectedOption(1);setIsOpen(!isOpen)}}  className="block px-4 py-3 rounded-sm cursor-pointer text-sm text-[white] capitalize transition-colors duration-300 hover:bg-[#474646]">Latest Uploads</span>
          <span onClick={()=>{setSelectedOption(2);setIsOpen(!isOpen)}}  className="block px-4 py-3 rounded-sm text-sm cursor-pointer text-[white] capitalize transition-colors duration-300 hover:bg-[#474646]">Oldest Uploads</span>
        </div>
      )}
      </div>
    </>
  );
}
