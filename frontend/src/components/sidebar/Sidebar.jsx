import React, { useState } from 'react'
import SideLogo from './SideLogo'
import SideOption from './SideOption'

export default function Sidebar(props) {
  
  const pageFunc = props.pageFunc
  const activePage = props.activePage

  const sidebarBg = () => {
    switch(props.forwhich){
      case 'admin':
        return '#1F2544'
      case 'student':
        return '#dc8733'
      default:
        return '#1F2544'
    }
  }

  const borderBg = () => {
    switch(props.forwhich){
      case 'admin':
        return 'gray-800'
      case 'student':
        return 'gray-300'
      default:
        return 'gray-800'
    }
  }

  const renderSidebarNavs = () => {
    switch(props.forwhich){
      case "admin":
        return <>
          <SideOption forwhich={props.forwhich} activePage={activePage} name="Dashboard" option="dashboard" pageFunc={pageFunc}/>
          <SideOption forwhich={props.forwhich} activePage={activePage} name="Teachers" option="teachers" pageFunc={pageFunc}/>
          <SideOption forwhich={props.forwhich} activePage={activePage} name="Batches" option="batches" pageFunc={pageFunc}/>
          <SideOption forwhich={props.forwhich} activePage={activePage} name="Requests" option="requests" pageFunc={pageFunc}/>
          <SideOption forwhich={props.forwhich} activePage={activePage} name="Queries" option="queries" pageFunc={pageFunc}/>
        </>
      case "student":
        return <>
        <SideOption forwhich={props.forwhich} activePage={activePage} name="Dashboard" option="dashboard" pageFunc={pageFunc}/>
        <SideOption forwhich={props.forwhich} activePage={activePage} name="Profile" option="profile" pageFunc={pageFunc}/>
        <SideOption forwhich={props.forwhich} activePage={activePage} name="Homeworks" option="homeworks" pageFunc={pageFunc}/>
        <SideOption forwhich={props.forwhich} activePage={activePage} name="Schedules" option="schedules" pageFunc={pageFunc}/>
        <SideOption forwhich={props.forwhich} activePage={activePage} name="Announcements" option="announcements" pageFunc={pageFunc}/>
        </>
      default:
        return <>
        </>
    }
  }
  return (
    <>
    <div className='flex flex-col min-h-screen w-1/10 md:w-2/12 lg:w-[260px] border-e border-transparent bg-transparent p-5 me-10 sm:me-16 md:me-10'></div>
    <div className={`flex flex-col fixed min-h-screen w-1/10 md:w-2/12 lg:w-[260px] border-e border-${borderBg()} bg-[${sidebarBg()}] p-5 ps-2`}>
        <div className="mb-7 flex justify-center items-center ps-2">
            <SideLogo/>
        </div>
        {renderSidebarNavs()}
    </div>
    </>
  )
}
