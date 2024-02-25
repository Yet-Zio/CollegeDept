import React, { useEffect, useState } from 'react'
import {Student, Users, PaperPlaneTilt} from "@phosphor-icons/react/dist/ssr";
import axios from 'axios';

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
  const [teacher , setTeacher] = useState([]);

  const [batch , setBatch] = useState([]);
  
  useEffect(() =>{
    axios
    .get("http://localhost:3000/api/teacher/getTeacher")
    .then((res) =>{
      setTeacher(res.data);
    })
    .catch((error) =>{
      console.log(error)
    })

    
  },[])

    useEffect(() =>{
      axios
      .get("http://localhost:3000/api/student/getBatch")
      .then((res) =>{
        setBatch(res.data);
        console.log(res.data);
      })
      .catch((error) =>{
        console.log(error)
      })
    },[])



  return (
    <div className='flex w-screen min-h-screen bg-[#cdd4fa]'>
      <div className='flex flex-col w-full'>
        <p className='text-2xl useinter ps-5 pt-5 text-black font-bold'>Dashboard</p>
        <p className='text-sm useinter ps-4 pt-1 text-slate-500/75 font-semibold'>Hello Admin, Good {currentGreet()}</p>
        <div className="flex w-full pe-10">
<<<<<<< HEAD
          <div className='flex flex-col bg-[#1F2544] border border-transparent rounded-lg ms-5 mt-3 w-1/6 h-36 p-4 justify-center items-center cursor-pointer hover:bg-[#1F2544]/75 select-none' onClick={() => {pageFunc("teachers")}}>
            <span className='text-3xl useinter font-bold text-white'>{teacher.length}</span>
=======
          <div className='flex flex-col bg-[#1F2544] border border-transparent rounded-lg ms-5 mt-3 w-1/5 md:w-1/6 h-20 md:h-36 p-4 justify-center items-center cursor-pointer hover:bg-[#1F2544]/75 select-none' onClick={() => {pageFunc("teachers")}}>
            <span className='text-3xl useinter font-bold text-white'>{numoftrs}</span>
>>>>>>> e511fe22f6baf93eab108304196fb02f76213dfa
            <span className='text-sm useinter font-semibold text-white'>Teachers</span>
            <div className='hidden md:flex'>
              <Users size={72} className='text-white'/>
            </div>
          </div>
<<<<<<< HEAD
          <div className='flex flex-col bg-[#474F7A] border border-transparent rounded-lg ms-5 mt-3 w-1/6 h-36 p-4 justify-center items-center cursor-pointer hover:bg-[#474F7A]/75 select-none' onClick={() => {pageFunc("batches")}}>
            <span className='text-3xl useinter font-bold text-white'>{batch.length}</span>
=======
          <div className='flex flex-col bg-[#474F7A] border border-transparent rounded-lg ms-5 mt-3 w-1/5 md:w-1/6 h-20 md:h-36 p-4 justify-center items-center cursor-pointer hover:bg-[#474F7A]/75 select-none' onClick={() => {pageFunc("batches")}}>
            <span className='text-3xl useinter font-bold text-white'>{numofbatches}</span>
>>>>>>> e511fe22f6baf93eab108304196fb02f76213dfa
            <span className='text-sm useinter font-semibold text-white'>Batches</span>
            <div className='hidden md:flex'>
              <Student size={72} className='text-white'/>
            </div>
          </div>
<<<<<<< HEAD
          <div className='flex flex-col bg-[#81689D] border border-transparent rounded-lg ms-5 mt-3 w-1/6 h-36 p-4 justify-center items-center cursor-pointer hover:bg-[#81689D]/75 select-none' onClick={() => {pageFunc("queries")}}>
            <span className='text-3xl useinter font-bold text-white'>0</span>
=======
          <div className='flex flex-col bg-[#81689D] border border-transparent rounded-lg ms-5 mt-3 w-1/5 md:w-1/6 h-20 md:h-36 p-4 justify-center items-center cursor-pointer hover:bg-[#81689D]/75 select-none' onClick={() => {pageFunc("queries")}}>
            <span className='text-3xl useinter font-bold text-white'>{numofqueries}</span>
>>>>>>> e511fe22f6baf93eab108304196fb02f76213dfa
            <span className='text-sm useinter font-semibold text-white'>Queries</span>
            <div className='hidden md:flex'>
              <PaperPlaneTilt size={64} className='text-white'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
