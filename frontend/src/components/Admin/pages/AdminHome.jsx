import React from 'react'

export default function AdminHome() {
  const hr = (new Date()).getHours()
  const currentGreet = () => {
    if (hr < 12) {
      return "Morning!";
    } else if (hr === 12 && hr < 17) {
      return "Afternoon!";
    } else if (hr >= 17) {
      return "Evening!";
    }
  };
  return (
    <div className='flex w-full bg-[#cdd4fa]'>
      <div className='flex flex-col'>
        <p className='text-2xl useinter ps-5 pt-5 text-black font-bold'>Dashboard</p>
        <p className='text-sm useinter ps-4 pt-1 text-slate-500/75 font-semibold'>Hello Admin, Good {currentGreet()}</p>
      </div>
      <div className="flex">
      </div>
    </div>
  )
}
