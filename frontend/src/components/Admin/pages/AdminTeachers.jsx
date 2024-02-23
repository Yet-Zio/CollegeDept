import React from 'react'
import {Trash, Pencil} from '@phosphor-icons/react'

export default function AdminTeachers() {
  const handleAddTeacher = (e) => {
    e.preventDefault()
  }

  return (
    <div className='flex w-screen h-screen bg-[#cdd4fa] ps-7'>
      <div className="flex flex-col w-full">
        <span className='text-2xl useinter underline mt-5 mb-5'>Lecturers</span>
        <div class="overflow-x-auto w-1/2">
          <table class="useinter divide-y-2 divide-gray-700 text-md">
            <thead class="ltr:text-left rtl:text-right">
              <tr>
                <th class="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">SL.NO</th>
                <th class="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">FIRST NAME</th>
                <th class="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">LAST NAME</th>
                <th class="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">Teacher ID</th>
                <th class="whitespace-nowrap px-4 py-2 font-semibold text-gray-900"></th>
              </tr>
            </thead>

            <tbody class="divide-y divide-gray-700">
              <tr>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">1</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">Benziger</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">Raj. J. J</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">TEACHERXXXXXX</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700 flex"><Trash size={24} className='text-red-500 cursor-pointer me-4'/> <Pencil size={24} className='text-[#1F2544] cursor-pointer'/></td>
              </tr>
              <tr>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">2</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">Leena</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">U</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">TEACHERXXXXXX</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700 flex"><Trash size={24} className='text-red-500 cursor-pointer me-4'/> <Pencil size={24} className='text-[#1F2544] cursor-pointer'/></td>
              </tr>
            </tbody>
          </table>
        </div>
        <form onSubmit={(e) => handleAddTeacher(e)} className='flex flex-col mt-10 useinter w-full'>
          <span className='text-2xl'>Add Lecturer</span>
          <div className="flex w-1/2">
            <div className="flex flex-col w-1/2 pr-4">
              <span className="mt-3 text-[#474F7A] font-sans font-medium">
                First Name
              </span>
              <input
                className="mt-2 w-full h-10 outline-0 bg-white border-2 border-transparent rounded-lg p-2 hover:border-[#474F7A] focus:border-[#474F7A] text-sm"
                name="firstname"
                id="firstname"
                placeholder="John"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <span className="mt-3 text-[#474F7A] font-sans font-medium">
                Last Name
              </span>
              <input
                className="mt-2 w-full h-10 outline-0 bg-white border-2 border-transparent rounded-lg p-2 hover:border-[#474F7A] focus:border-[#474F7A] text-sm"
                name="lastname"
                id="lastname"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className="flex flex-col w-1/2 pr-4">
              <span className="mt-3 text-[#474F7A] font-sans font-medium">
                Email
              </span>
              <input
                className="mt-2 w-full h-10 outline-0 bg-white border-2 border-transparent rounded-lg p-2 hover:border-[#474F7A] focus:border-[#474F7A] text-sm"
                name="email"
                id="email"
                placeholder="example@mail.com"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <span className="mt-3 text-[#474F7A] font-sans font-medium">
                Teacher ID
              </span>
              <input
                className="mt-2 w-full h-10 outline-0 bg-white border-2 border-transparent rounded-lg p-2 hover:border-[#474F7A] focus:border-[#474F7A] text-sm"
                name="teacherid"
                id="teacherid"
                placeholder="TEACHERXXXXXX"
              />
            </div>
          </div>
          <div className="flex flex-col w-1/2">
              <span className="mt-3 text-[#474F7A] font-sans font-medium">
                Faculty Advisor?
              </span>
              <select
                name="facultyadvisor"
                id="facultyadvisor"
                class="mt-1.5 w-1/3 h-8 rounded-lg border-2 border-transparent text-gray-700 sm:text-sm outline-0 focus:border-[#1F2544]"
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
          <div className="flex flex-col w-1/2 items-center">
            <button
              type="submit"
              className="mt-5 w-1/4 flex pt-3 pb-3 bg-[#474F7A] justify-center items-center rounded-lg font-sans text-white hover:bg-[#474F7A]/75"
            >
              Add Lecturer
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
