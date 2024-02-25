import React from 'react'
import {Trash} from "@phosphor-icons/react"
import QueryAccordion from './QueryAccordion'

export default function AdminQueries() {

  return (
    <div className='flex w-full bg-[#cdd4fa] ps-7'>
      <div className="flex flex-col w-full">
        <span className='text-2xl useinter underline mt-5 mb-5'>Queries</span>
        <div className="overflow-x-auto w-1/2">
          <table className="useinter divide-y-2 divide-gray-700 text-md">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">SL.NO</th>
                <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">NAME</th>
                <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">EMAIL</th>
                <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-transparent">
              <tr>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">1</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">ABHIJITH </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">MURALI M</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex"><Trash size={24} className='text-red-500 cursor-pointer me-4'/></td>
              </tr>
              <QueryAccordion className='self-start'/>
              <tr>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">2</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">ABHIJITH </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">S RAJ</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex"><Trash size={24} className='text-red-500 cursor-pointer me-4'/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
