import React from 'react'
import { UserCircle } from '@phosphor-icons/react'

export default function StudentProfile() {
  return (
    <div className="flex w-screen min-h-screen bg-transparent ps-7">
      <div className="flex flex-col w-full items-center mt-10 gap-1">
        <UserCircle size={150} weight='fill' color='#dc8733'/>
        <span className='text-2xl font-medium select-text text-[#dc8733]'>Bijo Prasad</span>
        <span className='text-base text-gray-700/80 font-bold select-text'>example@gmail.com</span>
        <span className='text-base font-bold select-text'>STUDENTID: BAKAXXXXXX</span>
        <span className='text-lg font-bold select-text'>Batch: 2021-2024</span>
      </div>
    </div>
  )
}
