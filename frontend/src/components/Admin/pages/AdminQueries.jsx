import React from 'react'
import {Trash} from "@phosphor-icons/react"
import QueryAccordion from './QueryAccordion'

export default function AdminQueries() {

  return (
    <div className='flex flex-col w-screen min-h-screen bg-[#cdd4fa] ps-7 pe-7'>
      <span className='text-2xl useinter mt-5 mb-2'>Queries</span>
      <button 
        className="self-center mt-2 w-1/6 flex pt-3 pb-3 bg-[#474F7A] justify-center items-center rounded-lg font-sans text-white hover:bg-[#474F7A]/75 mb-3">
        <span className='hidden md:flex'>Clear All</span><Trash className='md:hidden'/>
      </button>
      <QueryAccordion number={2} name="Bijo Prasad" email="bijop007@gmail.com" message="I want to play skibidi, nothing else"/>
      <QueryAccordion number={1} name="Bijo Prasad" email="bijop007@gmail.com" message="Sir, can you come tonight. It's urgent. It's me gay ass bijo"/>
    </div>
  )
}
