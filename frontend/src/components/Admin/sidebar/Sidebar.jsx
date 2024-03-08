import React, { useState } from 'react'
import SideLogo from '../SideLogo'
import SideOption from './SideOption'

export default function Sidebar(props) {
  
  const pageFunc = props.pageFunc
  const activePage = props.activePage
  return (
    <>
    <div className='flex flex-col min-h-screen w-1/10 md:w-2/12 lg:w-64 border-e border-transparent bg-transparent p-5 me-10 sm:me-16 md:me-10'></div>
    <div className='flex flex-col fixed min-h-screen w-1/10 md:w-2/12 lg:w-64 border-e border-gray-800 bg-[#1F2544] p-5'>
        <div className="mb-7 self-center">
            <SideLogo/>
        </div>
        <SideOption activePage={activePage} name="Dashboard" option="dashboard" pageFunc={pageFunc}/>
        <SideOption activePage={activePage} name="Teachers" option="teachers" pageFunc={pageFunc}/>
        <SideOption activePage={activePage} name="Batches" option="batches" pageFunc={pageFunc}/>
        <SideOption activePage={activePage} name="Requests" option="requests" pageFunc={pageFunc}/>
        <SideOption activePage={activePage} name="Queries" option="queries" pageFunc={pageFunc}/>
    </div>
    </>
  )
}
