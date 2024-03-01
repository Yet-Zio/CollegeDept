import { useState } from 'react'
import {CaretDown} from '@phosphor-icons/react'
import {motion, AnimatePresence} from "framer-motion"

export default function QueryAccordion(props) {
  const [AcOpen, SetAcOpen] = useState(false)

  return (
    <div className='flex flex-col useinter ps-3 bg-[#fcf0f7] border border-gray-700/50 rounded-lg mb-3'>
      <div className='flex items-center mb-3 justify-between me-3 mt-2 select-none' onClick={() => {SetAcOpen(!AcOpen)}}>
        <span className='text-base font-semibold'>Query #{props.number}</span>
        <motion.div animate={{rotate: !AcOpen ? 0 : 180}} transition={{duration: 0.2}}><CaretDown size={20}/></motion.div>
      </div>
      <AnimatePresence>
        {AcOpen && (
          <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{duration: 0.5}}>
            <dl className="-my-3 divide-y divide-gray-700/10 text-sm">
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Name</dt>
                <dd className="text-gray-700 sm:col-span-2">{props.name}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Email</dt>
                <dd className="text-gray-700 sm:col-span-2">{props.email}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4 mb-5">
                <dt className="font-medium text-gray-900">Message</dt>
                <dd className="text-gray-700 sm:col-span-2 sm:max-w-full overflow-x-auto">
                  {props.message}
                </dd>
              </div>
            </dl>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
