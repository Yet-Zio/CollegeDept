import React from 'react'
import {Student, Users, PaperPlaneTilt} from "@phosphor-icons/react/dist/ssr";

export default function AdminHome(props) {
  const pageFunc = props.pageFunc

  const hr = (new Date()).getHours()
  const currentGreet = () => {
    if (hr < 12) {
      return "Morning!";
    } else if (hr === 12 || hr < 17) {
      return "Afternoon!";
    } else if (hr >= 17) {
      return "Evening!";
    }
  };

  // fetch them bro
  const numoftrs = 0
  const numofbatches = 0
  const numofqueries = 0

  return (
    <div className='flex w-screen h-screen bg-[#cdd4fa]'>
      <div className='flex flex-col w-full'>
        <p className='text-2xl useinter ps-5 pt-5 text-black font-bold'>Dashboard</p>
        <p className='text-sm useinter ps-4 pt-1 text-slate-500/75 font-semibold'>Hello Admin, Good {currentGreet()}</p>
        <div className="flex w-full pe-10">
          <div className='flex flex-col bg-[#1F2544] border border-transparent rounded-lg ms-5 mt-3 w-1/6 h-36 p-4 justify-center items-center cursor-pointer hover:bg-[#1F2544]/75' onClick={() => {pageFunc("teachers")}}>
            <span className='text-3xl useinter font-bold text-white'>{numoftrs}</span>
            <span className='text-sm useinter font-semibold text-white'>Teachers</span>
            <div>
              <Users size={72} className='text-white'/>
            </div>
          </div>
          <div className='flex flex-col bg-[#474F7A] border border-transparent rounded-lg ms-5 mt-3 w-1/6 h-36 p-4 justify-center items-center'>
            <span className='text-3xl useinter font-bold text-white'>{numofbatches}</span>
            <span className='text-sm useinter font-semibold text-white'>Batches</span>
            <div>
              <Student size={72} className='text-white'/>
            </div>
          </div>
          <div className='flex flex-col bg-[#81689D] border border-transparent rounded-lg ms-5 mt-3 w-1/6 h-36 p-4 justify-center items-center cursor-pointer hover:bg-[#81689D]/75' onClick={() => {pageFunc("queries")}}>
            <span className='text-3xl useinter font-bold text-white'>{numofqueries}</span>
            <span className='text-sm useinter font-semibold text-white'>Queries</span>
            <div>
              <PaperPlaneTilt size={64} className='text-white'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
