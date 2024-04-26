import React, { useState } from 'react'
import { BookOpenText, ClockCountdown, MegaphoneSimple } from '@phosphor-icons/react'

export default function StudentHome(props) {
  const pageFunc = props.pageFunc

  const [studentDetails, setStudentDetails] = useState({name: "Bijo Prasad", studentID: "BAKAXXXXXX"})

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

  return (
    <div className='flex w-screen min-h-screen bg-transparent'>
      <div className='flex flex-col w-full'>
        <p className='text-2xl useinter ps-5 pt-5 text-black font-bold'>Dashboard</p>
        <p className='text-sm useinter ps-4 pt-1 text-slate-500/75 font-semibold'>Hello {studentDetails.name}, Good {currentGreet()}</p>
        <div className="flex w-full pe-10">
          <div className='flex flex-col bg-[#3c2107] border border-transparent rounded-lg ms-5 mt-3 w-1/5 md:w-1/6 h-20 md:h-36 p-4 justify-center items-center cursor-pointer hover:bg-[#3c2107]/75 select-none' onClick={() => {pageFunc("homeworks")}}>
            <span className='text-3xl useinter font-bold text-white'>5</span>
            <span className='text-[10px] md:text-sm useinter font-semibold text-white'>Homeworks</span>
            <div className='hidden md:flex'>
              <BookOpenText size={72} className='text-white'/>
            </div>
          </div>
          <div className='flex flex-col bg-[#a36323] border border-transparent rounded-lg ms-5 mt-3 w-1/5 md:w-1/6 h-20 md:h-36 p-4 justify-center items-center cursor-pointer hover:bg-[#a36323]/75 select-none' onClick={() => {pageFunc("schedules")}}>
            <span className='text-3xl useinter font-bold text-white'>95%</span>
            <span className='text-[10px] md:text-sm useinter font-semibold text-white'>Attendance</span>
            <div className='hidden md:flex'>
              <ClockCountdown size={72} className='text-white'/>
            </div>
          </div>
          <div className='flex flex-col bg-[#dc8733] border border-transparent rounded-lg ms-5 mt-3 w-1/5 md:w-1/6 h-20 md:h-36 p-4 justify-center items-center cursor-pointer hover:bg-[#dc8733]/75 select-none' onClick={() => {pageFunc("announcements")}}>
            <span className='text-3xl useinter font-bold text-white'>3</span>
            <span className='text-[10px] md:text-sm useinter font-semibold text-white'>Announcements</span>
            <div className='hidden md:flex'>
              <MegaphoneSimple size={64} className='text-white'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
