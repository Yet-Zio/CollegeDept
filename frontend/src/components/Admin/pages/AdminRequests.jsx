import React from 'react'
import {Trash} from "@phosphor-icons/react"
import RequestAccordion from './RequestAccordion'

export default function AdminRequests() {
  return (
    <div className='flex flex-col w-screen min-h-screen bg-[#cdd4fa] ps-7 pe-7'>
      <span className='text-2xl useinter mt-5 mb-2'>Requests</span>
      <button 
        className="self-center mt-2 w-1/6 flex pt-3 pb-3 bg-[#474F7A] justify-center items-center rounded-lg font-sans text-white hover:bg-[#474F7A]/75 mb-3">
        <span className='hidden md:flex'>Clear All</span><Trash className='md:hidden'/>
      </button>
      <RequestAccordion number="1" name="Leena U" email="leena.usha@gmail.com" message="I need a leave pls☠️"/>
      <RequestAccordion number="2" name="Anto" email="antotheprohacker@gmail.com" message="Bro I don't even work here but still I need leave."/>
      <RequestAccordion number="3" name="Anto" email="antotheprohacker@gmail.com" message="Bro I don't even work here but still I need leave."/>
      <RequestAccordion number="3" name="Anto" email="antotheprohacker@gmail.com" message="Bro I don't even work here but still I need leave."/>
      <RequestAccordion number="3" name="Anto" email="antotheprohacker@gmail.com" message="Bro I don't even work here but still I need leave."/>
      <RequestAccordion number="3" name="Anto" email="antotheprohacker@gmail.com" message="Bro I don't even work here but still I need leave."/>
      <RequestAccordion number="3" name="Anto" email="antotheprohacker@gmail.com" message="Bro I don't even work here but still I need leave."/>
      <RequestAccordion number="3" name="Anto" email="antotheprohacker@gmail.com" message="Bro I don't even work here but still I need leave."/>
      <RequestAccordion number="3" name="Anto" email="antotheprohacker@gmail.com" message="Bro I don't even work here but still I need leave."/>
      <RequestAccordion number="3" name="Anto" email="antotheprohacker@gmail.com" message="Bro I don't even work here but still I need leave."/>
      <RequestAccordion number="3" name="Anto" email="antotheprohacker@gmail.com" message="Bro I don't even work here but still I need leave."/>
      <RequestAccordion number="3" name="Anto" email="antotheprohacker@gmail.com" message="Bro I don't even work here but still I need leave."/>
    </div>
  )
}
