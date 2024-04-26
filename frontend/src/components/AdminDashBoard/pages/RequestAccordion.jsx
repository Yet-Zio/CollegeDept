import { useState } from "react";
import { CaretDown, Check, X} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

export default function RequestAccordion(props) {
  const [AcOpen, SetAcOpen] = useState(false);

  return (
    <div className='flex flex-col useinter ps-3 bg-[#474F7A]/15 border border-gray-700/50 rounded-lg mb-3'>
      <div className='flex items-center mb-3 justify-between me-3 mt-2 select-none' onClick={() => {SetAcOpen(!AcOpen)}}>
        <span className='text-base font-semibold'>Request #{props.number}</span>
        <motion.div animate={{rotate: !AcOpen ? 0 : 180}} transition={{duration: 0.2}}><CaretDown size={20}/></motion.div>
      </div>
      <AnimatePresence>
        {AcOpen && (
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{duration: 0.5}}>
            <dl className="-my-3 divide-y divide-gray-700/10 text-sm">
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Name</dt>
                <dd className="text-gray-700 sm:col-span-2 select-text">{props.name}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Email</dt>
                <dd className="text-gray-700 sm:col-span-2 select-text">{props.email}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4 mb-5">
                <dt className="font-medium text-gray-900">Message</dt>
                <dd className="text-gray-700 sm:col-span-2 sm:max-w-full overflow-x-auto select-text">
                  {props.message}
                </dd>
              </div>
            </dl>
            <div className="flex justify-center items-center gap-7">
                <button 
                    className="self-center mt-2 w-1/6 flex pt-3 pb-3 bg-green-600 justify-center items-center rounded-lg font-sans text-white hover:bg-green-600/75 mb-3">
                    <span className='hidden md:flex justify-center items-center'><Check size={20} className='hidden md:flex'/>&nbsp;&nbsp;Approve</span><Check className='md:hidden'/>
                </button>
                <button 
                    className="self-center mt-2 w-1/6 flex pt-3 pb-3 bg-red-600 justify-center items-center rounded-lg font-sans text-white hover:bg-red-600/75 mb-3">
                    <span className='hidden md:flex justify-center items-center'><X size={20} className='hidden md:flex'/>&nbsp;&nbsp;Reject</span><X className='md:hidden'/>
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
